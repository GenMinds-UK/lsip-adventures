/**
 * Validate the research CSVs and compile them into typed data modules.
 *
 *   npm run data:compile                  # research/data → src/data/generated
 *   npm run data:compile -- --data <dir>  # validate another data folder
 *
 * See research/data-schema.md for the file formats. Nothing is written unless
 * every file validates, so the generated modules are always complete.
 */
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { SUBJECT_NAMES } from "../src/data/subjects.ts";
import { list, Problems, readCsv, type Row } from "./lib/csv.ts";

const ARGS = parseArgs(process.argv.slice(2));
const DATA = resolve(ARGS["data"] ?? "research/data");
const OUT = resolve(ARGS["out"] ?? "src/data/generated");

const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const OUTLOOKS = ["very-high", "high", "growing", "steady"];
const NATIONAL_SECTORS = [
  "advanced-manufacturing",
  "clean-energy",
  "creative",
  "defence",
  "digital-technologies",
  "financial-services",
  "life-sciences",
  "professional-business",
  "foundational",
];
const CONTACT_KINDS = [
  "erb",
  "authority",
  "council",
  "growth-hub",
  "careers-hub",
  "university",
  "college",
  "sector-body",
  "other",
];
const DEFAULT_TIERS = { strong: 60, good: 40 };

const problems = new Problems();
let verifyFlags = 0;

function parseArgs(argv: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    const value = argv[i + 1];
    if (flag?.startsWith("--") && value !== undefined) {
      out[flag.slice(2)] = value;
      i += 1;
    }
  }
  return out;
}

function file(...parts: string[]) {
  return join(DATA, ...parts);
}

function where(path: string, row: Row) {
  return `${relative(process.cwd(), path)}:${row.line}`;
}

/** Read a text cell, counting VERIFY flags and enforcing presence/length. */
function text(
  path: string,
  row: Row,
  column: string,
  { required = true, max }: { required?: boolean; max?: number } = {},
): string {
  const value = row.values[column] ?? "";
  if (value.startsWith("VERIFY:")) {
    verifyFlags += 1;
    problems.warn(where(path, row), `${column} is flagged: ${value.slice(0, 80)}`);
  }
  if (required && value === "") problems.error(where(path, row), `${column} is empty`);
  if (max !== undefined && value.length > max) {
    problems.warn(where(path, row), `${column} is ${value.length} chars (limit ${max})`);
  }
  return value;
}

function int(path: string, row: Row, column: string, min: number, max: number): number {
  const raw = row.values[column] ?? "";
  const value = Number(raw);
  if (!/^-?\d+$/.test(raw) || value < min || value > max) {
    problems.error(
      where(path, row),
      `${column} must be a whole number ${min}–${max}, got "${raw}"`,
    );
    return min;
  }
  return value;
}

function num(path: string, row: Row, column: string): number {
  const raw = row.values[column] ?? "";
  const value = Number(raw);
  if (raw === "" || Number.isNaN(value)) {
    problems.error(where(path, row), `${column} must be a number, got "${raw}"`);
    return 0;
  }
  return value;
}

function oneOf(path: string, row: Row, column: string, allowed: readonly string[]): string {
  const value = row.values[column] ?? "";
  if (!allowed.includes(value)) {
    problems.error(where(path, row), `${column} "${value}" is not one of: ${allowed.join(", ")}`);
  }
  return value;
}

function url(path: string, row: Row, column: string, { required = true } = {}): string {
  const value = text(path, row, column, { required });
  if (value && !/^https?:\/\//.test(value.replace(/^VERIFY:\s*/, ""))) {
    problems.error(where(path, row), `${column} is not a URL: "${value}"`);
  }
  return value.replace(/^VERIFY:\s*/, "");
}

function skillList(
  path: string,
  row: Row,
  column: string,
  skillIds: ReadonlySet<string>,
  min: number,
  max: number,
): string[] {
  const values = list(row.values[column] ?? "");
  for (const value of values) {
    if (!skillIds.has(value)) problems.error(where(path, row), `unknown skill "${value}"`);
  }
  if (values.length < min || values.length > max) {
    problems.error(where(path, row), `${column} needs ${min}–${max} skills, has ${values.length}`);
  }
  return [...new Set(values)];
}

/** Check a long-format table covers every key exactly once. */
function coverage(path: string, seen: Map<string, number>, expected: string[], label: string) {
  for (const key of expected) {
    const count = seen.get(key) ?? 0;
    if (count === 0) problems.error(relative(process.cwd(), path), `missing ${label} ${key}`);
    if (count > 1) problems.error(relative(process.cwd(), path), `duplicate ${label} ${key}`);
  }
}

// ── Taxonomy ────────────────────────────────────────────────────────────────

const clustersPath = file("clusters.csv");
const clusters = readCsv(clustersPath, ["id", "name", "order"], problems)
  .map((row) => ({
    id: text(clustersPath, row, "id"),
    name: text(clustersPath, row, "name", { max: 28 }),
    order: int(clustersPath, row, "order", 0, 99),
    row,
  }))
  .sort((a, b) => a.order - b.order);
const clusterIds = clusters.map((c) => c.id);
for (const cluster of clusters) {
  if (!ID.test(cluster.id))
    problems.error(where(clustersPath, cluster.row), `bad id "${cluster.id}"`);
}

const skillsPath = file("skills.csv");
const skillRows = readCsv(
  skillsPath,
  ["id", "cluster", "name", "short", "definition", "lsip_terms", "crosswalk"],
  problems,
).map((row, index) => ({
  id: text(skillsPath, row, "id", { max: 24 }),
  cluster: oneOf(skillsPath, row, "cluster", clusterIds),
  name: text(skillsPath, row, "name", { max: 34 }),
  short: text(skillsPath, row, "short", { max: 14 }),
  definition: text(skillsPath, row, "definition"),
  index,
  row,
}));
const skills = [...skillRows].sort(
  (a, b) => clusterIds.indexOf(a.cluster) - clusterIds.indexOf(b.cluster) || a.index - b.index,
);
const skillIds = skills.map((s) => s.id);
const skillSet = new Set(skillIds);
for (const skill of skills) {
  if (!ID.test(skill.id)) problems.error(where(skillsPath, skill.row), `bad id "${skill.id}"`);
}
if (skillSet.size !== skillIds.length) problems.error(skillsPath, "duplicate skill ids");

// ── Subject × skill matrix (M) ──────────────────────────────────────────────

const matrixPath = file("subject_skills.csv");
const matrix: Record<string, Record<string, number>> = {};
const matrixSeen = new Map<string, number>();
for (const row of readCsv(
  matrixPath,
  ["subject", "skill", "score", "evidence", "source"],
  problems,
)) {
  const subject = oneOf(matrixPath, row, "subject", SUBJECT_NAMES);
  const skill = oneOf(matrixPath, row, "skill", skillIds);
  const score = int(matrixPath, row, "score", 0, 3);
  const evidence = text(matrixPath, row, "evidence", { required: false });
  if (score >= 2 && !evidence) problems.warn(where(matrixPath, row), "score ≥ 2 has no evidence");
  const key = `${subject} × ${skill}`;
  matrixSeen.set(key, (matrixSeen.get(key) ?? 0) + 1);
  (matrix[subject] ??= {})[skill] = score;
}
coverage(
  matrixPath,
  matrixSeen,
  SUBJECT_NAMES.flatMap((subject) => skillIds.map((skill) => `${subject} × ${skill}`)),
  "cell",
);

// ── National demand (N) ─────────────────────────────────────────────────────

const nationalPath = file("national_demand.csv");
const national: Record<string, number> = {};
const nationalSeen = new Map<string, number>();
for (const row of readCsv(nationalPath, ["skill", "score", "evidence", "source"], problems)) {
  const skill = oneOf(nationalPath, row, "skill", skillIds);
  national[skill] = int(nationalPath, row, "score", 0, 5);
  text(nationalPath, row, "evidence");
  nationalSeen.set(skill, (nationalSeen.get(skill) ?? 0) + 1);
}
coverage(nationalPath, nationalSeen, skillIds, "skill");

// ── Regions ─────────────────────────────────────────────────────────────────

const regionsDir = file("regions");
const regionIds = existsSync(regionsDir)
  ? readdirSync(regionsDir)
      .filter((name) => statSync(join(regionsDir, name)).isDirectory())
      .sort()
  : [];
if (regionIds.length === 0) problems.error(regionsDir, "no region folders");

type RegionOut = {
  meta: Record<string, unknown>;
  demand: Record<string, number>;
  data: Record<string, unknown>;
};
const regions: Record<string, RegionOut> = {};

for (const regionId of regionIds) {
  if (!ID.test(regionId)) problems.error(regionsDir, `bad region folder name "${regionId}"`);
  const regionFile = (name: string) => file("regions", regionId, name);

  const metaPath = regionFile("region.csv");
  const metaRows = readCsv(
    metaPath,
    [
      "id",
      "name",
      "short",
      "tagline",
      "erb_name",
      "erb_url",
      "lsip_title",
      "lsip_published",
      "lsip_url",
      "authority_name",
      "authority_url",
      "councils",
      "summary",
    ],
    problems,
  );
  if (metaRows.length !== 1)
    problems.error(metaPath, `needs exactly 1 row, has ${metaRows.length}`);
  const metaRow = metaRows[0];
  let meta: Record<string, unknown> = {};
  if (metaRow) {
    if (metaRow.values["id"] !== regionId) {
      problems.error(where(metaPath, metaRow), `id must match folder "${regionId}"`);
    }
    const authorityName = text(metaPath, metaRow, "authority_name", { required: false });
    meta = {
      id: regionId,
      name: text(metaPath, metaRow, "name"),
      short: text(metaPath, metaRow, "short", { max: 16 }),
      tagline: text(metaPath, metaRow, "tagline", { max: 90 }),
      erb: { name: text(metaPath, metaRow, "erb_name"), url: url(metaPath, metaRow, "erb_url") },
      lsip: {
        title: text(metaPath, metaRow, "lsip_title"),
        published: text(metaPath, metaRow, "lsip_published"),
        url: url(metaPath, metaRow, "lsip_url"),
      },
      authority: authorityName
        ? { name: authorityName, url: url(metaPath, metaRow, "authority_url") }
        : null,
      councils: list(text(metaPath, metaRow, "councils")),
      summary: text(metaPath, metaRow, "summary"),
    };
  }

  const demandPath = regionFile("demand.csv");
  const demand: Record<string, number> = {};
  const demandSeen = new Map<string, number>();
  for (const row of readCsv(demandPath, ["skill", "score", "evidence", "source"], problems)) {
    const skill = oneOf(demandPath, row, "skill", skillIds);
    demand[skill] = int(demandPath, row, "score", 0, 5);
    text(demandPath, row, "evidence");
    text(demandPath, row, "source");
    demandSeen.set(skill, (demandSeen.get(skill) ?? 0) + 1);
  }
  coverage(demandPath, demandSeen, skillIds, "skill");

  const prioritiesPath = regionFile("priorities.csv");
  const priorities = readCsv(
    prioritiesPath,
    ["id", "order", "name", "short", "blurb", "source"],
    problems,
  )
    .map((row) => ({
      id: text(prioritiesPath, row, "id"),
      order: int(prioritiesPath, row, "order", 0, 99),
      name: text(prioritiesPath, row, "name", { max: 48 }),
      short: text(prioritiesPath, row, "short", { max: 18 }),
      blurb: text(prioritiesPath, row, "blurb"),
      source: text(prioritiesPath, row, "source"),
      weights: {} as Record<string, number>,
      roles: [] as unknown[],
      gaps: [] as unknown[],
      row,
    }))
    .sort((a, b) => a.order - b.order);
  const priorityIds = priorities.map((p) => p.id);
  if (new Set(priorityIds).size !== priorityIds.length) {
    problems.error(prioritiesPath, "duplicate priority ids");
  }
  const byPriority = new Map(priorities.map((p) => [p.id, p]));

  const weightsPath = regionFile("priority_weights.csv");
  for (const row of readCsv(weightsPath, ["priority", "skill", "weight", "evidence"], problems)) {
    const priority = byPriority.get(oneOf(weightsPath, row, "priority", priorityIds));
    const skill = oneOf(weightsPath, row, "skill", skillIds);
    const weight = int(weightsPath, row, "weight", 1, 3);
    if (priority) {
      if (priority.weights[skill] !== undefined) {
        problems.error(where(weightsPath, row), `duplicate weight for ${skill}`);
      }
      priority.weights[skill] = weight;
    }
  }

  const rolesPath = regionFile("roles.csv");
  for (const row of readCsv(
    rolesPath,
    ["priority", "title", "level", "what", "skills"],
    problems,
  )) {
    byPriority.get(oneOf(rolesPath, row, "priority", priorityIds))?.roles.push({
      title: text(rolesPath, row, "title"),
      level: text(rolesPath, row, "level"),
      what: text(rolesPath, row, "what"),
      skills: skillList(rolesPath, row, "skills", skillSet, 2, 5),
    });
  }

  const gapsPath = regionFile("gaps.csv");
  for (const row of readCsv(gapsPath, ["priority", "text", "skills", "source"], problems)) {
    byPriority.get(oneOf(gapsPath, row, "priority", priorityIds))?.gaps.push({
      text: text(gapsPath, row, "text", { max: 140 }),
      skills: skillList(gapsPath, row, "skills", skillSet, 1, 4),
      source: text(gapsPath, row, "source"),
    });
  }

  for (const priority of priorities) {
    const at = where(prioritiesPath, priority.row);
    if (Object.keys(priority.weights).length === 0) problems.error(at, "has no skill weights");
    if (priority.roles.length === 0) problems.error(at, "has no roles");
    if (priority.gaps.length === 0) problems.error(at, "has no gaps");
  }

  const crossPath = regionFile("cross_cutting.csv");
  const crossCutting = readCsv(crossPath, ["title", "detail"], problems).map((row) => ({
    title: text(crossPath, row, "title"),
    detail: text(crossPath, row, "detail"),
  }));

  const contactsPath = regionFile("contacts.csv");
  const contacts = readCsv(
    contactsPath,
    ["name", "kind", "what", "why_contact", "url", "checked"],
    problems,
  ).map((row) => {
    const checked = text(contactsPath, row, "checked");
    if (checked && !DATE.test(checked)) {
      problems.error(where(contactsPath, row), `checked must be YYYY-MM-DD, got "${checked}"`);
    }
    return {
      name: text(contactsPath, row, "name"),
      kind: oneOf(contactsPath, row, "kind", CONTACT_KINDS),
      what: text(contactsPath, row, "what"),
      whyContact: text(contactsPath, row, "why_contact"),
      url: url(contactsPath, row, "url"),
      checked,
    };
  });
  if (!contacts.some((c) => c.kind === "erb")) problems.error(contactsPath, "needs an erb contact");

  regions[regionId] = {
    meta,
    demand,
    data: {
      priorities: priorities.map(({ row, ...priority }) => priority),
      crossCutting,
      contacts,
    },
  };
}

// ── National subject facts ──────────────────────────────────────────────────

const nsPath = file("national_subjects.csv");
const nationalSubjects: Record<string, Record<string, unknown>> = {};
const nsSeen = new Map<string, number>();
for (const row of readCsv(nsPath, ["subject", "outlook", "headline", "sectors"], problems)) {
  const subject = oneOf(nsPath, row, "subject", SUBJECT_NAMES);
  const sectors = list(row.values["sectors"] ?? "");
  for (const sector of sectors) {
    if (!NATIONAL_SECTORS.includes(sector)) {
      problems.error(where(nsPath, row), `unknown sector "${sector}"`);
    }
  }
  nationalSubjects[subject] = {
    outlook: oneOf(nsPath, row, "outlook", OUTLOOKS),
    headline: text(nsPath, row, "headline", { max: 160 }),
    sectors,
    occupations: [],
    sources: [],
  };
  nsSeen.set(subject, (nsSeen.get(subject) ?? 0) + 1);
}
coverage(nsPath, nsSeen, [...SUBJECT_NAMES], "subject");

const occupationsPath = file("national_occupations.csv");
for (const row of readCsv(occupationsPath, ["subject", "title", "note"], problems)) {
  const subject = oneOf(occupationsPath, row, "subject", SUBJECT_NAMES);
  (nationalSubjects[subject]?.["occupations"] as unknown[] | undefined)?.push({
    title: text(occupationsPath, row, "title"),
    note: text(occupationsPath, row, "note", { max: 120 }),
  });
}

const sourcesPath = file("national_sources.csv");
for (const row of readCsv(sourcesPath, ["subject", "label", "url"], problems)) {
  const subject = oneOf(sourcesPath, row, "subject", SUBJECT_NAMES);
  (nationalSubjects[subject]?.["sources"] as unknown[] | undefined)?.push({
    label: text(sourcesPath, row, "label"),
    url: url(sourcesPath, row, "url"),
  });
}
for (const [subject, facts] of Object.entries(nationalSubjects)) {
  const occupations = facts["occupations"] as unknown[];
  const sources = facts["sources"] as unknown[];
  if (occupations.length < 3)
    problems.warn(occupationsPath, `${subject} has ${occupations.length} occupations`);
  if (sources.length === 0) problems.error(sourcesPath, `${subject} has no sources`);
}

// ── Places and national LSIP areas ──────────────────────────────────────────

const placesPath = file("places.csv");
const placeNames = new Set<string>();
const places = readCsv(placesPath, ["name", "aliases", "council", "region"], problems).map(
  (row) => {
    const name = text(placesPath, row, "name");
    const key = name.toLowerCase();
    if (placeNames.has(key)) problems.error(where(placesPath, row), `duplicate place "${name}"`);
    placeNames.add(key);
    return {
      name,
      aliases: list(row.values["aliases"] ?? ""),
      council: text(placesPath, row, "council"),
      region: oneOf(placesPath, row, "region", regionIds),
    };
  },
);

const areasPath = file("lsip_areas.csv");
const areaRegions = new Map<string, number>();
const areas = readCsv(
  areasPath,
  ["name", "erb_name", "erb_url", "england_region", "region"],
  problems,
).map((row) => {
  const region = row.values["region"] ?? "";
  if (region) {
    oneOf(areasPath, row, "region", regionIds);
    areaRegions.set(region, (areaRegions.get(region) ?? 0) + 1);
  }
  return {
    name: text(areasPath, row, "name"),
    erbName: text(areasPath, row, "erb_name"),
    erbUrl: url(areasPath, row, "erb_url", { required: false }),
    englandRegion: text(areasPath, row, "england_region"),
    region: region || null,
  };
});
coverage(areasPath, areaRegions, regionIds, "supported region");

// ── Tier cut-offs (written by data:analyse; defaults until then) ────────────
// Calibrated separately for 3- and 4-subject combinations, because a fourth
// subject can only raise a combined profile.

const tiersPath = file("tiers.csv");
type Cutoffs = { strong: number; good: number };
const tiers: Record<string, Record<"3" | "4", Cutoffs>> = {};
for (const row of readCsv(tiersPath, ["region", "subjects", "strong", "good"], problems, {
  optional: true,
})) {
  const region = oneOf(tiersPath, row, "region", [...regionIds, "national"]);
  const count = oneOf(tiersPath, row, "subjects", ["3", "4"]) as "3" | "4";
  const cutoffs = { strong: num(tiersPath, row, "strong"), good: num(tiersPath, row, "good") };
  if (cutoffs.good > cutoffs.strong) problems.error(where(tiersPath, row), "good is above strong");
  (tiers[region] ??= {} as Record<"3" | "4", Cutoffs>)[count] = cutoffs;
}
let defaultedTiers = 0;
for (const region of [...regionIds, "national"]) {
  const entry = (tiers[region] ??= {} as Record<"3" | "4", Cutoffs>);
  for (const count of ["3", "4"] as const) {
    if (!entry[count]) {
      entry[count] = DEFAULT_TIERS;
      defaultedTiers += 1;
    }
  }
}
if (defaultedTiers > 0) {
  problems.warn(tiersPath, `${defaultedTiers} tier cut-offs defaulted; run data:analyse`);
}

// ── Report ──────────────────────────────────────────────────────────────────

for (const warning of problems.warnings) console.warn(`warn  ${warning}`);
for (const error of problems.errors) console.error(`error ${error}`);
console.log(
  `\n${problems.errors.length} errors, ${problems.warnings.length} warnings (${verifyFlags} VERIFY flags)`,
);
if (problems.errors.length > 0) {
  console.error("Nothing was written. Fix the errors above and run again.");
  process.exit(1);
}

// ── Emit ────────────────────────────────────────────────────────────────────

const HEADER = "// Generated by scripts/compile-data.ts from research/data. Do not edit by hand.\n";
const json = (value: unknown) => JSON.stringify(value, null, 2);

function emit(path: string, body: string) {
  const target = join(OUT, path);
  mkdirSync(join(target, ".."), { recursive: true });
  writeFileSync(target, `${HEADER}${body.trim()}\n`, "utf8");
}

rmSync(OUT, { recursive: true, force: true });

emit(
  "taxonomy.ts",
  `
export const CLUSTER_IDS = ${json(clusterIds)} as const;
export type ClusterId = (typeof CLUSTER_IDS)[number];

export const SKILL_IDS = ${json(skillIds)} as const;
export type SkillId = (typeof SKILL_IDS)[number];

export type Cluster = { id: ClusterId; name: string };
export type Skill = { id: SkillId; cluster: ClusterId; name: string; short: string; definition: string };

export const CLUSTERS: readonly Cluster[] = ${json(clusters.map(({ id, name }) => ({ id, name })))};

export const SKILLS: readonly Skill[] = ${json(
    skills.map(({ id, cluster, name, short, definition }) => ({
      id,
      cluster,
      name,
      short,
      definition,
    })),
  )};
`,
);

const orderedMatrix = Object.fromEntries(
  SUBJECT_NAMES.map((subject) => [
    subject,
    Object.fromEntries(skillIds.map((skill) => [skill, matrix[subject]?.[skill] ?? 0])),
  ]),
);
emit(
  "matrix.ts",
  `
import type { SubjectName } from "../subjects.ts";
import type { SkillId } from "./taxonomy.ts";

export type Score = 0 | 1 | 2 | 3;

/** M: how strongly each A level develops each skill (0–3). */
export const SUBJECT_SKILLS: Readonly<Record<SubjectName, Readonly<Record<SkillId, Score>>>> = ${json(orderedMatrix)};
`,
);

const orderedDemand = (scores: Record<string, number>) =>
  Object.fromEntries(skillIds.map((skill) => [skill, scores[skill] ?? 0]));
emit(
  "demand.ts",
  `
import type { TierCutoffs } from "../../lib/scoring.ts";
import type { RegionId } from "./regions-meta.ts";
import type { SkillId } from "./taxonomy.ts";

/** D: how strongly each LSIP area needs each skill (0–5). */
export const REGION_DEMAND: Readonly<Record<RegionId, Readonly<Record<SkillId, number>>>> = ${json(
    Object.fromEntries(regionIds.map((id) => [id, orderedDemand(regions[id]!.demand)])),
  )};

/** N: national demand for each skill (0–5). */
export const NATIONAL_DEMAND: Readonly<Record<SkillId, number>> = ${json(orderedDemand(national))};

/** Strong / Good / Emerging fit cut-offs by number of subjects, calibrated by data:analyse. */
export const TIER_CUTOFFS: Readonly<
  Record<RegionId | "national", Readonly<Record<"3" | "4", TierCutoffs>>>
> = ${json(tiers)};
`,
);

emit(
  "regions-meta.ts",
  `
import type { RegionMeta } from "../regions/types.ts";

export const REGION_IDS = ${json(regionIds)} as const;
export type RegionId = (typeof REGION_IDS)[number];

export const REGION_META: Readonly<Record<RegionId, RegionMeta>> = ${json(
    Object.fromEntries(regionIds.map((id) => [id, regions[id]!.meta])),
  )};
`,
);

for (const regionId of regionIds) {
  emit(
    `regions/${regionId}.ts`,
    `
import type { GeneratedRegionData } from "../../regions/types.ts";

export const REGION_DATA: GeneratedRegionData = ${json(regions[regionId]!.data)};
`,
  );
}

emit(
  "national.ts",
  `
import type { SubjectName } from "../subjects.ts";

export type Outlook = ${OUTLOOKS.map((o) => JSON.stringify(o)).join(" | ")};
export type NationalSector = ${NATIONAL_SECTORS.map((s) => JSON.stringify(s)).join(" | ")};
export type NationalSubject = {
  outlook: Outlook;
  headline: string;
  sectors: NationalSector[];
  occupations: { title: string; note: string }[];
  sources: { label: string; url: string }[];
};

export const NATIONAL_SUBJECTS: Readonly<Record<SubjectName, NationalSubject>> = ${json(
    Object.fromEntries(SUBJECT_NAMES.map((subject) => [subject, nationalSubjects[subject]])),
  )};
`,
);

emit(
  "places.ts",
  `
import type { RegionId } from "./regions-meta.ts";

export type Place = { name: string; aliases: string[]; council: string; region: RegionId };

export const PLACES: readonly Place[] = ${json(places)};
`,
);

emit(
  "lsip-areas.ts",
  `
import type { RegionId } from "./regions-meta.ts";

export type LsipArea = {
  name: string;
  erbName: string;
  erbUrl: string;
  englandRegion: string;
  region: RegionId | null;
};

export const LSIP_AREAS: readonly LsipArea[] = ${json(areas)};
`,
);

console.log(
  `Wrote ${relative(process.cwd(), OUT)} (${regionIds.length} regions, ${skillIds.length} skills).`,
);
