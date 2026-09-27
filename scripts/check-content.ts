/**
 * Check the hand-written content against the compiled research data: things
 * TypeScript cannot see, such as quest priority ids, skill ids inside score
 * maps, the full set of synergy pairs, and leftover PLACEHOLDER text.
 *
 *   npm run data:check
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { REGION_IDS } from "../src/data/generated/regions-meta.ts";
import { SKILL_IDS } from "../src/data/generated/taxonomy.ts";
import { SUBJECT_GROUPS, SUBJECT_NAMES } from "../src/data/subjects.ts";
import { SYNERGIES } from "../src/data/synergies.ts";
import { SKILL_CONTENT } from "../src/data/skills-content.ts";

type Quest = {
  id: string;
  priorityId: string;
  title: string;
  skills: Record<string, number>;
  groupContributions: Record<string, string>;
  subjectOverrides?: Record<string, string>;
  researchQuestions: string[];
  whereThisCouldLead: Record<string, string[]>;
};

const MIN_QUESTS_PER_PRIORITY = 2;
const errors: string[] = [];
const warnings: string[] = [];
const skills = new Set<string>(SKILL_IDS);
const subjects = new Set<string>(SUBJECT_NAMES);
const questIds = new Set<string>();

// Any PLACEHOLDER marker left in content files fails the check.
const dataDir = join("src", "data");
const contentFiles = [
  ...readdirSync(join(dataDir, "regions"))
    .filter((f) => f.endsWith(".content.ts"))
    .map((f) => join(dataDir, "regions", f)),
  join(dataDir, "synergies.ts"),
  join(dataDir, "skills-content.ts"),
];
for (const file of contentFiles) {
  const count = (readFileSync(file, "utf8").match(/PLACEHOLDER/g) ?? []).length;
  if (count > 0) errors.push(`${file}: ${count} PLACEHOLDER markers remain`);
}

for (const regionId of REGION_IDS) {
  const { REGION_DATA } = (await import(`../src/data/generated/regions/${regionId}.ts`)) as {
    REGION_DATA: { priorities: { id: string; name: string }[] };
  };
  const { CONTENT } = (await import(`../src/data/regions/${regionId}.content.ts`)) as {
    CONTENT: { subjectLinks: Record<string, string>; quests: Quest[] };
  };
  const where = `${regionId}.content.ts`;
  const priorityIds = new Set(REGION_DATA.priorities.map((p) => p.id));

  for (const subject of SUBJECT_NAMES) {
    const link = CONTENT.subjectLinks[subject] ?? "";
    if (link.length < 80) warnings.push(`${where}: subjectLinks["${subject}"] is very short`);
  }

  const perPriority = new Map<string, number>();
  for (const quest of CONTENT.quests) {
    const at = `${where} quest ${quest.id}`;
    if (questIds.has(quest.id)) errors.push(`${at}: duplicate quest id`);
    questIds.add(quest.id);
    if (!priorityIds.has(quest.priorityId))
      errors.push(`${at}: unknown priority "${quest.priorityId}"`);
    perPriority.set(quest.priorityId, (perPriority.get(quest.priorityId) ?? 0) + 1);

    const scored = Object.entries(quest.skills);
    if (scored.length < 3) errors.push(`${at}: needs at least 3 scored skills`);
    for (const [skill, score] of scored) {
      if (!skills.has(skill)) errors.push(`${at}: unknown skill "${skill}"`);
      if (![1, 2, 3].includes(score)) errors.push(`${at}: skill ${skill} score ${score} not 1–3`);
    }
    for (const group of SUBJECT_GROUPS) {
      if (!quest.groupContributions[group]?.trim()) {
        errors.push(`${at}: no contribution for group "${group}"`);
      }
    }
    for (const subject of Object.keys(quest.subjectOverrides ?? {})) {
      if (!subjects.has(subject)) errors.push(`${at}: override for unknown subject "${subject}"`);
    }
    if (quest.researchQuestions.length !== 3)
      errors.push(`${at}: needs exactly 3 research questions`);
    for (const [route, items] of Object.entries(quest.whereThisCouldLead)) {
      if (items.length < 2)
        warnings.push(`${at}: whereThisCouldLead.${route} has ${items.length} items`);
    }
  }
  for (const priority of REGION_DATA.priorities) {
    const count = perPriority.get(priority.id) ?? 0;
    if (count < MIN_QUESTS_PER_PRIORITY) {
      errors.push(
        `${where}: priority "${priority.id}" has ${count} quests (need ${MIN_QUESTS_PER_PRIORITY}+)`,
      );
    }
  }
}

// Every pair of subject groups, including a group with itself, needs a synergy.
const pairs = new Map<string, number>();
for (const synergy of SYNERGIES) {
  const key = [...synergy.groups].sort().join(" + ");
  pairs.set(key, (pairs.get(key) ?? 0) + 1);
  if (synergy.projectSeeds.some((seed) => !seed.includes("{region}"))) {
    warnings.push(`synergies.ts ${key}: a project seed has no {region} slot`);
  }
}
SUBJECT_GROUPS.forEach((a, i) => {
  for (const b of SUBJECT_GROUPS.slice(i)) {
    const key = [a, b].sort().join(" + ");
    const count = pairs.get(key) ?? 0;
    if (count !== 1) errors.push(`synergies.ts: ${key} appears ${count} times (need exactly 1)`);
  }
});

for (const skill of SKILL_IDS) {
  const content = SKILL_CONTENT[skill];
  if (!content?.youCan || !content.buildItBy)
    errors.push(`skills-content.ts: ${skill} is incomplete`);
}

for (const warning of warnings) console.warn(`warn  ${warning}`);
for (const error of errors) console.error(`error ${error}`);
console.log(
  `\n${errors.length} errors, ${warnings.length} warnings, ${questIds.size} quests checked.`,
);
if (errors.length > 0) process.exit(1);
