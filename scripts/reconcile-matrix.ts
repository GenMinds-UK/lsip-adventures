/**
 * Merge the two blind M scorings (research/scoring/M-A-*.csv and M-B-*.csv)
 * following research/methodology.md §6, and report agreement.
 *
 *   node --experimental-strip-types scripts/reconcile-matrix.ts
 *
 * Writes:
 * - research/scoring/M-merged.csv: one row per cell with both scores, the
 *   protocol status and a provisional score. `adjudicate` rows (|A − B| ≥ 2)
 *   and a 10% audit sample of `lower` rows are left for the adjudicator.
 * - research/m-agreement.md: exact and within-1 agreement, quadratic-weighted
 *   Cohen's kappa, and breakdowns by skill and subject group.
 */
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SUBJECTS, SUBJECT_NAMES } from "../src/data/subjects.ts";
import { Problems, readCsv } from "./lib/csv.ts";

const dirFlag = process.argv.indexOf("--dir");
const SCORING = dirFlag > -1 ? process.argv[dirFlag + 1]! : join("research", "scoring");
const REPORT = join(dirFlag > -1 ? SCORING : "research", "m-agreement.md");
const problems = new Problems();

type Cell = { score: number; evidence: string; source: string };

function load(scorer: "A" | "B"): Map<string, Cell> {
  const cells = new Map<string, Cell>();
  for (const set of [1, 2]) {
    const path = join(SCORING, `M-${scorer}-set${set}.csv`);
    if (!existsSync(path)) {
      problems.error(path, "missing");
      continue;
    }
    for (const row of readCsv(
      path,
      ["subject", "skill", "score", "evidence", "source"],
      problems,
    )) {
      const key = `${row.values["subject"]}|${row.values["skill"]}`;
      if (cells.has(key)) problems.error(path, `duplicate ${key}`);
      cells.set(key, {
        score: Number(row.values["score"]),
        evidence: row.values["evidence"] ?? "",
        source: row.values["source"] ?? "",
      });
    }
  }
  return cells;
}

const skillRows = readCsv(join("research", "data", "skills.csv"), ["id"], problems);
const skills = skillRows.map((row) => row.values["id"]!);
const a = load("A");
const b = load("B");
const groupOf = new Map(SUBJECTS.map((s) => [s.name as string, s.group as string]));

const keys = SUBJECT_NAMES.flatMap((subject) => skills.map((skill) => `${subject}|${skill}`));
for (const key of keys) {
  if (!a.has(key)) problems.error("scorer A", `missing ${key}`);
  if (!b.has(key)) problems.error("scorer B", `missing ${key}`);
}
if (problems.errors.length) {
  for (const error of problems.errors.slice(0, 40)) console.error(`error ${error}`);
  console.error(`${problems.errors.length} errors; nothing written.`);
  process.exit(1);
}

/** Quadratic-weighted Cohen's kappa for ordinal 0–3 ratings. */
function weightedKappa(pairs: [number, number][]): number {
  const k = 4;
  const observed = Array.from({ length: k }, () => new Array<number>(k).fill(0));
  for (const [x, y] of pairs) observed[x]![y]! += 1;
  const n = pairs.length;
  const rowTotals = observed.map((row) => row.reduce((s, v) => s + v, 0));
  const colTotals = observed[0]!.map((_, j) => observed.reduce((s, row) => s + row[j]!, 0));
  let num = 0;
  let den = 0;
  for (let i = 0; i < k; i += 1) {
    for (let j = 0; j < k; j += 1) {
      const weight = ((i - j) * (i - j)) / ((k - 1) * (k - 1));
      num += weight * observed[i]![j]!;
      den += (weight * rowTotals[i]! * colTotals[j]!) / n;
    }
  }
  return den === 0 ? 1 : 1 - num / den;
}

type Stats = { n: number; exact: number; within1: number; pairs: [number, number][] };
const blank = (): Stats => ({ n: 0, exact: 0, within1: 0, pairs: [] });
const overall = blank();
const bySkill = new Map<string, Stats>();
const byGroup = new Map<string, Stats>();

// Deterministic 10% audit sample of diff-1 cells (every 10th in key order).
let diffOneSeen = 0;
const merged: (string | number)[][] = [
  [
    "subject",
    "skill",
    "score_a",
    "score_b",
    "diff",
    "status",
    "provisional",
    "evidence_a",
    "evidence_b",
    "source_a",
    "source_b",
  ],
];
const counts = { final: 0, lower: 0, audit: 0, adjudicate: 0 };

for (const key of keys) {
  const [subject, skill] = key.split("|") as [string, string];
  const ca = a.get(key)!;
  const cb = b.get(key)!;
  const diff = Math.abs(ca.score - cb.score);
  for (const stats of [
    overall,
    bySkill.get(skill) ?? bySkill.set(skill, blank()).get(skill)!,
    byGroup.get(groupOf.get(subject)!) ??
      byGroup.set(groupOf.get(subject)!, blank()).get(groupOf.get(subject)!)!,
  ]) {
    stats.n += 1;
    if (diff === 0) stats.exact += 1;
    if (diff <= 1) stats.within1 += 1;
    stats.pairs.push([ca.score, cb.score]);
  }

  let status: string;
  let provisional: number | string;
  if (diff === 0) {
    status = "final";
    provisional = ca.score;
    counts.final += 1;
  } else if (diff === 1) {
    diffOneSeen += 1;
    const audit = diffOneSeen % 10 === 0;
    status = audit ? "audit" : "lower";
    provisional = Math.min(ca.score, cb.score);
    counts[audit ? "audit" : "lower"] += 1;
  } else {
    status = "adjudicate";
    provisional = "";
    counts.adjudicate += 1;
  }
  merged.push([
    subject,
    skill,
    ca.score,
    cb.score,
    diff,
    status,
    provisional,
    ca.evidence,
    cb.evidence,
    ca.source,
    cb.source,
  ]);
}

const csvCell = (cell: string | number) => {
  const text = String(cell);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};
writeFileSync(
  join(SCORING, "M-merged.csv"),
  merged.map((row) => row.map(csvCell).join(",")).join("\n") + "\n",
  "utf8",
);

const pct = (part: number, whole: number) => `${((100 * part) / whole).toFixed(1)}%`;
const line = (label: string, s: Stats) =>
  `| ${label} | ${s.n} | ${pct(s.exact, s.n)} | ${pct(s.within1, s.n)} | ${weightedKappa(s.pairs).toFixed(2)} |`;
const header = "| | cells | exact | within 1 | κ (quadratic) |\n|---|---|---|---|---|";
const flagged = [...bySkill.entries()].filter(([, s]) => s.within1 / s.n < 0.85).map(([k]) => k);

const report = [
  "# M matrix: inter-rater agreement (generated by `scripts/reconcile-matrix.ts`)",
  "",
  "Two scorers, A and B, scored all cells blind against `research/methodology.md` §4.1. Targets (§6): exact ≥ 60%, within-1 ≥ 90%. Any skill with within-1 < 85% has its rubric row revised and is re-scored.",
  "",
  "## Overall",
  "",
  header,
  line("All cells", overall),
  "",
  `Merge outcome: ${counts.final} exact (final), ${counts.lower} differ by 1 (lower score taken), ${counts.audit} differ by 1 and sampled for audit, ${counts.adjudicate} differ by 2+ (adjudicated).`,
  "",
  flagged.length
    ? `**Skills below the 85% within-1 threshold:** ${flagged.join(", ")}.`
    : "No skill falls below the 85% within-1 threshold.",
  "",
  "## By skill",
  "",
  header,
  ...skills.map((skill) => line(skill, bySkill.get(skill)!)),
  "",
  "## By subject group",
  "",
  header,
  ...[...byGroup.entries()].map(([group, s]) => line(group, s)),
  "",
].join("\n");
writeFileSync(REPORT, report, "utf8");

console.log(report.split("\n").slice(4, 11).join("\n"));
console.log(`\nWrote ${join(SCORING, "M-merged.csv")} and ${REPORT}.`);
