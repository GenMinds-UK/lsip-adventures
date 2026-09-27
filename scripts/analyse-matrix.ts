/**
 * Run the app's scoring over every possible 3–4 subject combination to
 * calibrate the Strong / Good / Emerging tiers, rank subjects and skills per
 * LSIP area, and check fairness.
 *
 *   npm run data:compile && npm run data:analyse && npm run data:compile
 *   npm run data:analyse -- --research <dir>   # write outputs elsewhere
 *
 * Writes research/data/tiers.csv (then recompile to pick it up) and review
 * tables in research/analysis/. Uses the same functions as the app
 * (src/lib/scoring.ts), so the review workbook matches what students see.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { REGION_DEMAND, NATIONAL_DEMAND } from "../src/data/generated/demand.ts";
import { SUBJECT_SKILLS } from "../src/data/generated/matrix.ts";
import { REGION_IDS, REGION_META } from "../src/data/generated/regions-meta.ts";
import { SKILL_IDS, SKILLS } from "../src/data/generated/taxonomy.ts";
import { SUBJECTS, SUBJECT_GROUPS, SUBJECT_NAMES } from "../src/data/subjects.ts";
import {
  combinedProfile,
  matchGaps,
  matchRoles,
  pairOverlaps,
  pickQuests,
  rankAreas,
  rankPriorities,
  rankSkills,
  rankSubjects,
  tierFor,
  weightedFit,
} from "../src/lib/scoring.ts";

type Weights = Readonly<Partial<Record<string, number>>>;
type RegionData = {
  priorities: {
    id: string;
    name: string;
    weights: Weights;
    roles: { title: string; skills: string[] }[];
    gaps: { text: string; skills: string[] }[];
  }[];
};

const flag = process.argv.indexOf("--research");
const RESEARCH = flag > -1 ? process.argv[flag + 1]! : "research";
const ANALYSIS = join(RESEARCH, "analysis");
const STRONG_PERCENTILE = 0.7;
const GOOD_PERCENTILE = 0.3;
/** Worked examples checked by hand in research/analysis.md. */
const EXAMPLES: string[][] = [
  ["Mathematics", "Physics", "Chemistry"],
  ["Art & Design (Fine Art)", "Drama & Theatre", "English Literature"],
  ["Biology", "Psychology", "Sociology"],
  ["Business Studies", "Economics", "Geography", "Spanish"],
  ["Computer Science", "Mathematics", "Further Mathematics", "Physics"],
  ["Health & Social Care", "Physical Education", "Food Science & Nutrition"],
];

const subjects = [...SUBJECT_NAMES];
const skills = [...SKILL_IDS];
const areas = [...REGION_IDS];
const groupOf = new Map(SUBJECTS.map((s) => [s.name as string, s.group as string]));

const regionData: Record<string, RegionData> = {};
for (const id of areas) {
  const module = (await import(`../src/data/generated/regions/${id}.ts`)) as {
    REGION_DATA: RegionData;
  };
  regionData[id] = module.REGION_DATA;
}

type QuestLite = { id: string; priorityId: string; title: string; skills: Weights };
const regionQuests: Record<string, QuestLite[]> = {};
for (const id of areas) {
  const module = (await import(`../src/data/regions/${id}.content.ts`)) as {
    CONTENT: { quests: QuestLite[] };
  };
  regionQuests[id] = module.CONTENT.quests;
}

// Weight sets to calibrate: every area plus national.
const targets: { id: string; weights: Weights }[] = [
  ...areas.map((id) => ({ id, weights: REGION_DEMAND[id] as Weights })),
  { id: "national", weights: NATIONAL_DEMAND as Weights },
];

function* combinations(size: number): Generator<number[]> {
  const n = subjects.length;
  const index = Array.from({ length: size }, (_, i) => i);
  while (true) {
    yield [...index];
    let i = size - 1;
    while (i >= 0 && index[i] === n - size + i) i -= 1;
    if (i < 0) return;
    index[i] += 1;
    for (let j = i + 1; j < size; j += 1) index[j] = index[j - 1] + 1;
  }
}

function percentile(sorted: Float64Array, p: number) {
  if (sorted.length === 0) return 0;
  const position = (sorted.length - 1) * p;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower);
}

const round = (value: number, places = 1) => Number(value.toFixed(places));
/**
 * Cut-offs are written rounded DOWN at 6 decimal places. Possible fits are
 * at least 0.1 apart, so no fit falls between the written and exact values,
 * and combinations tied exactly at a percentile stay in the higher tier (§7:
 * "ties go up"). Rounding to 1 dp would push some tied combinations down.
 */
const cutoff = (value: number) => Math.floor(value * 1e6 + 1e-9) / 1e6;

function csv(rows: (string | number)[][]) {
  return (
    rows
      .map((row) =>
        row
          .map((cell) => {
            const text = String(cell);
            return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
          })
          .join(","),
      )
      .join("\n") + "\n"
  );
}

function write(path: string, rows: (string | number)[][]) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, csv(rows), "utf8");
}

// ── Fit distribution over every combination (§7) and group fairness (§8 F2) ─

type Stats = { fits: Float64Array; count: number };
const stats: Record<string, Record<3 | 4, Stats>> = {};
const combos: Record<3 | 4, number[][]> = { 3: [], 4: [] };
for (const size of [3, 4] as const) combos[size] = [...combinations(size)];

const cutoffsOf = (sorted: Float64Array) => ({
  strong: percentile(sorted, STRONG_PERCENTILE),
  good: percentile(sorted, GOOD_PERCENTILE),
});

/** Combinations most sixth forms wouldn't allow (§7 step 5 sensitivity check). */
const ENGLISH = ["English Language", "English Literature", "English Language & Literature"];
const ART = ["Art & Design (Fine Art)", "Graphic Communication", "Photography", "Textile Design"];
function unrealistic(chosen: string[]) {
  return (
    (chosen.includes("Further Mathematics") && !chosen.includes("Mathematics")) ||
    chosen.filter((s) => ENGLISH.includes(s)).length > 1 ||
    chosen.filter((s) => ART.includes(s)).length > 1
  );
}

// F2 tallies per group: (a) the best tier any single-group combination reaches
// in any area; (b) how many combinations with 2+ from the group are Emerging
// in every area.
const TIER_ORDER = { none: -1, emerging: 0, good: 1, strong: 2 } as const;
type BestTier = keyof typeof TIER_ORDER;
const f2 = new Map<
  string,
  { onlyGroupBest: BestTier; twoPlus: number; emergingEverywhere: number }
>();
for (const group of SUBJECT_GROUPS) {
  f2.set(group, { onlyGroupBest: "none", twoPlus: 0, emergingEverywhere: 0 });
}
const sensitivity: (string | number)[][] = [
  [
    "target",
    "subjects",
    "strong (all)",
    "strong (realistic)",
    "good (all)",
    "good (realistic)",
    "max shift",
  ],
];

for (const size of [3, 4] as const) {
  const list = combos[size];
  const fitsByTarget = targets.map(() => new Float64Array(list.length));
  const realistic: number[] = [];
  list.forEach((combo, c) => {
    const chosen = combo.map((i) => subjects[i]!);
    if (!unrealistic(chosen)) realistic.push(c);
    const { effective } = combinedProfile(chosen, SUBJECT_SKILLS, skills);
    targets.forEach((target, t) => {
      fitsByTarget[t]![c] = weightedFit(effective, target.weights);
    });
  });

  const cutoffsByTarget = targets.map((target, t) => {
    const sorted = Float64Array.from(fitsByTarget[t]!).sort();
    (stats[target.id] ??= {} as Record<3 | 4, Stats>)[size] = {
      fits: sorted,
      count: sorted.length,
    };
    const all = cutoffsOf(sorted);
    const real = cutoffsOf(Float64Array.from(realistic.map((c) => fitsByTarget[t]![c]!)).sort());
    const shift = Math.max(Math.abs(all.strong - real.strong), Math.abs(all.good - real.good));
    sensitivity.push([
      target.id,
      size,
      round(all.strong),
      round(real.strong),
      round(all.good),
      round(real.good),
      round(shift),
    ]);
    return all;
  });

  const areaIndexes = areas.map((area) => targets.findIndex((t) => t.id === area));
  list.forEach((combo, c) => {
    const groups = combo.map((i) => groupOf.get(subjects[i]!)!);
    const tiers = areaIndexes.map((t) => tierFor(fitsByTarget[t]![c]!, cutoffsByTarget[t]!));
    const emergingEverywhere = tiers.every((tier) => tier === "emerging");
    const bestTier: BestTier = tiers.includes("strong")
      ? "strong"
      : tiers.includes("good")
        ? "good"
        : "emerging";
    for (const group of SUBJECT_GROUPS) {
      const entry = f2.get(group)!;
      const count = groups.filter((g) => g === group).length;
      if (count === combo.length && TIER_ORDER[bestTier] > TIER_ORDER[entry.onlyGroupBest]) {
        entry.onlyGroupBest = bestTier;
      }
      if (count >= 2) {
        entry.twoPlus += 1;
        if (emergingEverywhere) entry.emergingEverywhere += 1;
      }
    }
  });
}

const tierRows: (string | number)[][] = [["region", "subjects", "strong", "good"]];
const distributionRows: (string | number)[][] = [
  ["target", "subjects", "combinations", "min", "p10", "p30", "p50", "p70", "p90", "max"],
];
for (const target of targets) {
  for (const size of [3, 4] as const) {
    const { fits, count } = stats[target.id]![size];
    tierRows.push([
      target.id,
      size,
      cutoff(percentile(fits, STRONG_PERCENTILE)),
      cutoff(percentile(fits, GOOD_PERCENTILE)),
    ]);
    distributionRows.push([
      target.id,
      size,
      count,
      ...[0, 0.1, 0.3, 0.5, 0.7, 0.9, 1].map((p) => round(percentile(fits, p))),
    ]);
  }
}
write(join(RESEARCH, "data", "tiers.csv"), tierRows);
write(join(ANALYSIS, "fit-distribution.csv"), distributionRows);
write(join(ANALYSIS, "tier-sensitivity.csv"), sensitivity);

const groupRows: (string | number)[][] = [
  [
    "group",
    "best tier of a single-group combination (F2a)",
    "combinations with 2+ from group",
    "Emerging in all five areas % (F2b)",
    "F2 pass",
  ],
];
for (const group of SUBJECT_GROUPS) {
  const entry = f2.get(group)!;
  const share = entry.twoPlus ? (100 * entry.emergingEverywhere) / entry.twoPlus : 0;
  // A group with fewer than 3 subjects has no single-group combination, so (a) cannot fail.
  const aPass = entry.onlyGroupBest !== "emerging";
  groupRows.push([
    group,
    entry.onlyGroupBest,
    entry.twoPlus,
    round(share),
    aPass && share < 50 ? "yes" : "NO",
  ]);
}
write(join(ANALYSIS, "group-fairness.csv"), groupRows);

// ── Rankings per area ───────────────────────────────────────────────────────

const subjectRows: (string | number)[][] = [["target", "rank", "subject", "group", "fit"]];
for (const target of targets) {
  rankSubjects(subjects, SUBJECT_SKILLS, target.weights).forEach(({ item, fit }, index) => {
    subjectRows.push([target.id, index + 1, item, groupOf.get(item)!, round(fit)]);
  });
}
write(join(ANALYSIS, "subject-rankings.csv"), subjectRows);

const skillRows: (string | number)[][] = [["area", "rank", "skill", "name", "demand", "national"]];
const skillName = new Map(SKILLS.map((s) => [s.id as string, s.name]));
for (const area of areas) {
  rankSkills(skills, REGION_DEMAND[area], NATIONAL_DEMAND).forEach((skill, index) => {
    skillRows.push([
      area,
      index + 1,
      skill,
      skillName.get(skill)!,
      REGION_DEMAND[area][skill],
      NATIONAL_DEMAND[skill],
    ]);
  });
}
write(join(ANALYSIS, "skill-rankings.csv"), skillRows);

// Wide heatmap: skill × area demand, for the review workbook.
write(join(ANALYSIS, "skill-demand-heatmap.csv"), [
  ["skill", "name", ...areas, "national"],
  ...skills.map((skill) => [
    skill,
    skillName.get(skill)!,
    ...areas.map((area) => REGION_DEMAND[area][skill]),
    NATIONAL_DEMAND[skill],
  ]),
]);

// ── Priority leaders and subject fairness (§8 F1, F3) ──────────────────────

/** Ranks with ties averaged, as §8 F1 specifies. */
function averageRanks(fits: { item: string; fit: number }[]) {
  const sorted = [...fits].sort((x, y) => y.fit - x.fit);
  const ranks = new Map<string, number>();
  let i = 0;
  while (i < sorted.length) {
    let j = i;
    while (j + 1 < sorted.length && Math.abs(sorted[j + 1]!.fit - sorted[i]!.fit) < 1e-9) j += 1;
    const rank = (i + 1 + (j + 1)) / 2;
    for (let k = i; k <= j; k += 1) ranks.set(sorted[k]!.item, rank);
    i = j + 1;
  }
  return ranks;
}

const priorityRows: (string | number)[][] = [["area", "priority", "rank", "subject", "fit"]];
const bestPlacing = new Map<string, { rank: number; area: string; priority: string }>();
for (const area of areas) {
  for (const priority of regionData[area]!.priorities) {
    const ranked = rankSubjects(subjects, SUBJECT_SKILLS, priority.weights);
    const ranks = averageRanks(ranked.map(({ item, fit }) => ({ item, fit })));
    for (const { item, fit } of ranked.slice(0, 10)) {
      priorityRows.push([area, priority.name, ranks.get(item)!, item, round(fit)]);
    }
    for (const { item } of ranked) {
      const rank = ranks.get(item)!;
      const best = bestPlacing.get(item);
      if (!best || rank < best.rank) bestPlacing.set(item, { rank, area, priority: priority.name });
    }
  }
}
write(join(ANALYSIS, "priority-leaders.csv"), priorityRows);

const half = subjects.length / 2;
const fairnessRows: (string | number)[][] = [
  ["subject", "group", "best rank in any priority", "area", "priority", "F1 pass (top half)"],
];
for (const subject of subjects) {
  const best = bestPlacing.get(subject)!;
  fairnessRows.push([
    subject,
    groupOf.get(subject)!,
    best.rank,
    best.area,
    best.priority,
    best.rank <= half ? "yes" : "NO",
  ]);
}
write(join(ANALYSIS, "subject-fairness.csv"), fairnessRows);

// F3: every skill is reachable through at least one A level.
const reachRows: (string | number)[][] = [
  ["skill", "subjects scoring 2+", "subjects scoring 3", "note"],
];
for (const skill of skills) {
  const two = subjects.filter((s) => SUBJECT_SKILLS[s][skill] >= 2).length;
  const three = subjects.filter((s) => SUBJECT_SKILLS[s][skill] === 3);
  reachRows.push([
    skill,
    two,
    three.length,
    two === 0 ? "UNREACHABLE via A levels" : three.length === 1 ? `only ${three[0]} scores 3` : "",
  ]);
}
write(join(ANALYSIS, "skill-reach.csv"), reachRows);

// ── Quest coverage (stage 8) ────────────────────────────────────────────────
// How often each quest is picked across every combination, per area. A quest
// that is never picked is dead content; one picked for most students crowds
// out the rest.

const questCounts = new Map<string, number>();
let questCombos = 0;
for (const size of [3, 4] as const) {
  for (const combo of combos[size]) {
    const chosen = combo.map((i) => subjects[i]!);
    const { effective } = combinedProfile(chosen, SUBJECT_SKILLS, skills);
    questCombos += 1;
    for (const area of areas) {
      const priorityFit = Object.fromEntries(
        rankPriorities(effective, regionData[area]!.priorities).map(({ item, fit }) => [
          item.id,
          fit,
        ]),
      );
      for (const quest of pickQuests(regionQuests[area]!, effective, priorityFit)) {
        const key = `${area}|${quest.id}`;
        questCounts.set(key, (questCounts.get(key) ?? 0) + 1);
      }
    }
  }
}
const questRows: (string | number)[][] = [
  ["area", "quest", "priority", "title", "picked for % of combinations"],
];
const neverPicked: string[] = [];
for (const area of areas) {
  for (const quest of regionQuests[area]!) {
    const count = questCounts.get(`${area}|${quest.id}`) ?? 0;
    if (count === 0) neverPicked.push(`${area}: ${quest.title}`);
    questRows.push([
      area,
      quest.id,
      quest.priorityId,
      quest.title,
      round((100 * count) / questCombos),
    ]);
  }
}
write(join(ANALYSIS, "quest-coverage.csv"), questRows);

// ── Worked examples ─────────────────────────────────────────────────────────

const lines: string[] = [
  "# Worked examples (generated by `npm run data:analyse`)",
  "",
  "These combinations are recomputed from the compiled data every time the script runs. Check them by hand against the rubric, then against stages 4, 5, 7 and 8 in the app.",
  "",
];
const cutoffFor = (target: string, size: number) => {
  const { fits } = stats[target]![size === 3 ? 3 : 4];
  return { strong: percentile(fits, STRONG_PERCENTILE), good: percentile(fits, GOOD_PERCENTILE) };
};
for (const chosen of EXAMPLES) {
  if (!chosen.every((s) => subjects.includes(s as (typeof subjects)[number]))) continue;
  const picked = chosen as (typeof subjects)[number][];
  const profile = combinedProfile(picked, SUBJECT_SKILLS, skills);
  lines.push(`## ${chosen.join(" + ")}`, "");
  lines.push(
    "| Skill | C | E | reinforced | contributors |",
    "|---|---|---|---|---|",
    ...skills
      .filter((skill) => profile.level[skill] > 0)
      .map(
        (skill) =>
          `| ${skillName.get(skill)} | ${profile.level[skill]} | ${profile.effective[skill]} | ${
            profile.reinforced[skill] ? "yes" : ""
          } | ${profile.contributors[skill].join(", ")} |`,
      ),
    "",
  );
  lines.push("| Area | fit | tier |", "|---|---|---|");
  for (const { item, fit } of rankAreas(profile.effective, REGION_DEMAND, areas)) {
    lines.push(
      `| ${REGION_META[item].name} | ${round(fit)} | ${tierFor(fit, cutoffFor(item, chosen.length))} |`,
    );
  }
  const nationalFit = weightedFit(profile.effective, NATIONAL_DEMAND);
  lines.push(
    `| National | ${round(nationalFit)} | ${tierFor(nationalFit, cutoffFor("national", chosen.length))} |`,
    "",
  );

  for (const area of areas) {
    const data = regionData[area]!;
    const top = rankPriorities(profile.effective, data.priorities).slice(0, 3);
    const roles = matchRoles(
      data.priorities.flatMap((p) => p.roles),
      profile,
    ).filter((m) => m.matched);
    const gaps = matchGaps(
      data.priorities.flatMap((p) => p.gaps),
      profile,
    ).filter((m) => m.matched);
    const pairs = pairOverlaps(picked, SUBJECT_SKILLS, skills, REGION_DEMAND[area]);
    lines.push(
      `**${REGION_META[area].name}:** top priorities ${top
        .map(({ item, fit }) => `${item.name} (${round(fit)})`)
        .join(", ")}; ${roles.length} matched roles; ${gaps.length} gaps helped; best pair ${
        pairs[0] ? `${pairs[0].subjects.join(" + ")} (${pairs[0].score})` : "n/a"
      }.`,
      "",
    );
  }
}
mkdirSync(ANALYSIS, { recursive: true });
writeFileSync(join(ANALYSIS, "worked-examples.md"), lines.join("\n"), "utf8");

console.log(
  `Analysed ${combos[3].length + combos[4].length} combinations across ${targets.length} targets.`,
);
console.log(
  `Wrote research/data/tiers.csv and ${ANALYSIS}/. Run data:compile again to apply tiers.`,
);
const unfair = fairnessRows.filter((row) => row[5] === "NO");
console.log(
  `F1 (every subject shines somewhere): ${unfair.length ? `${unfair.length} FAIL` : "pass"}`,
);
for (const row of unfair) console.warn(`  ${row[0]} (best rank ${row[2]})`);
const groupFails = groupRows.filter((row) => row[4] === "NO");
console.log(
  `F2 (no group always Emerging): ${groupFails.length ? `${groupFails.length} FAIL` : "pass"}`,
);
for (const row of groupFails)
  console.warn(`  ${row[0]} (best ${row[1]}, ${row[3]}% Emerging everywhere)`);
const unreachable = reachRows.filter((row) => row[1] === 0).map((row) => row[0]);
console.log(
  `F3 (skills reachable): ${unreachable.length ? `unreachable: ${unreachable.join(", ")}` : "all reachable"}`,
);
console.log(
  `Quests: ${neverPicked.length ? `${neverPicked.length} never picked: ${neverPicked.join("; ")}` : "every quest is picked for some combination"}`,
);
const bigShifts = sensitivity.slice(1).filter((row) => Number(row[6]) > 2);
console.log(
  `Sensitivity: ${bigShifts.length ? `${bigShifts.length} cut-offs move by more than 2 points` : "no cut-off moves by more than 2 points"}`,
);
