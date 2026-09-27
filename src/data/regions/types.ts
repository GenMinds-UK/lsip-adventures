/**
 * Shapes for LSIP area data. Numbers and short facts are compiled from
 * `research/data/` into `src/data/generated/`; longer written content (subject
 * connections and quests) lives beside this file in `<region-id>.content.ts`.
 *
 * Keep these as `type` aliases: generated files import them type-only, which
 * Node's type stripping erases when the data scripts load them.
 */
import type { RegionId } from "@/data/generated/regions-meta";
import type { SkillId } from "@/data/generated/taxonomy";
import type { SubjectGroup, SubjectName } from "@/data/subjects";

export type { RegionId, SkillId };

/** Priority → skill weights (W), 1–3; skills that do not matter are left out. */
export type SkillWeights = Partial<Record<SkillId, number>>;

export type SectorRole = {
  title: string;
  level: string;
  what: string;
  skills: SkillId[];
};

export type LsipGap = {
  text: string;
  skills: SkillId[];
  source: string;
};

export type LsipPriority = {
  id: string;
  order: number;
  name: string;
  short: string;
  blurb: string;
  source: string;
  weights: SkillWeights;
  roles: SectorRole[];
  gaps: LsipGap[];
};

export type CrossCutting = { title: string; detail: string };

export type ContactKind =
  | "erb"
  | "authority"
  | "council"
  | "growth-hub"
  | "careers-hub"
  | "university"
  | "college"
  | "sector-body"
  | "other";

export type Contact = {
  name: string;
  kind: ContactKind;
  what: string;
  whyContact: string;
  url: string;
  checked: string;
};

export type RegionMeta = {
  id: RegionId;
  name: string;
  short: string;
  tagline: string;
  erb: { name: string; url: string };
  lsip: { title: string; published: string; url: string };
  authority: { name: string; url: string } | null;
  councils: string[];
  summary: string;
};

/** Everything compiled from a region's research folder. */
export type GeneratedRegionData = {
  priorities: LsipPriority[];
  crossCutting: CrossCutting[];
  contacts: Contact[];
};

export type Quest = {
  id: string;
  priorityId: string;
  title: string;
  strapline: string;
  summary: string;
  whyItMatters: string;
  /** Quest → skill scores (Q), 1–3. */
  skills: SkillWeights;
  /** What each subject group brings, so any 3–4 subject combination fits. */
  groupContributions: Record<SubjectGroup, string>;
  /** Sharper wording for particular subjects, used ahead of the group text. */
  subjectOverrides?: Partial<Record<SubjectName, string>>;
  researchQuestions: string[];
  whereThisCouldLead: {
    degrees: string[];
    apprenticeships: string[];
    careers: string[];
    localOrganisations: string[];
  };
};

/** Hand-written content for one region. */
export type RegionContent = {
  /** How each A level shows up in this area's history, economy and LSIP. */
  subjectLinks: Record<SubjectName, string>;
  quests: Quest[];
};

export type Region = RegionMeta & GeneratedRegionData & RegionContent;
