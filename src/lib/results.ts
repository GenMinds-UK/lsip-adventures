/**
 * Everything the journey screens and the PDF summary show, calculated from the
 * research matrices for one area and one set of subjects. Pure and cheap, so
 * screens can call it freely; see src/lib/scoring.ts for the maths.
 */
import { NATIONAL_DEMAND, REGION_DEMAND, TIER_CUTOFFS } from "@/data/generated/demand";
import { SUBJECT_SKILLS } from "@/data/generated/matrix";
import { REGION_IDS, type RegionId } from "@/data/generated/regions-meta";
import { SKILL_IDS, type SkillId } from "@/data/generated/taxonomy";
import type { ContactKind, LsipPriority, Quest, Region, SectorRole } from "@/data/regions/types";
import { SUBJECT_NAMES, subjectGroup, type SubjectName } from "@/data/subjects";
import { fillSeed, findSynergy, type Synergy } from "@/data/synergies";
import {
  combinedProfile,
  DEVELOPED,
  matchGaps,
  matchRoles,
  pairOverlaps,
  pickQuests,
  rankAreas,
  rankPriorities,
  rankSkills,
  rankSubjects,
  skillsWorthAdding,
  tierFor,
  weightedFit,
  type PairOverlap,
  type Tier,
} from "@/lib/scoring";

export type SubjectCount = "3" | "4";

export function subjectCount(subjects: readonly SubjectName[]): SubjectCount {
  return subjects.length <= 3 ? "3" : "4";
}

/** 1-based rank of every skill by local demand (ties broken nationally). */
export function skillRanks(regionId: RegionId): Record<SkillId, number> {
  const ranks = {} as Record<SkillId, number>;
  rankSkills(SKILL_IDS, REGION_DEMAND[regionId], NATIONAL_DEMAND).forEach((skill, index) => {
    ranks[skill] = index + 1;
  });
  return ranks;
}

export type SubjectInsight = {
  /** 1-based rank of the subject among all 45 for this area's demand. */
  rank: number;
  inDemand: boolean;
  /** The subject's strongest skills, most in demand locally first. */
  topSkills: SkillId[];
  /** Priorities this subject feeds best. */
  priorities: LsipPriority[];
};

/** Stage 3: how each A level shows up in the chosen area. */
export function subjectInsights(region: Region): Record<SubjectName, SubjectInsight> {
  const ranks = skillRanks(region.id);
  const ranking = rankSubjects(SUBJECT_NAMES, SUBJECT_SKILLS, REGION_DEMAND[region.id]);
  const inDemandCutoff = Math.ceil(SUBJECT_NAMES.length / 3);
  const insights = {} as Record<SubjectName, SubjectInsight>;
  ranking.forEach(({ item: subject }, index) => {
    const scores = SUBJECT_SKILLS[subject];
    const topSkills = SKILL_IDS.filter((skill) => scores[skill] >= DEVELOPED)
      .sort((a, b) => scores[b] - scores[a] || ranks[a] - ranks[b])
      .slice(0, 3);
    const priorities = rankPriorities(scores, region.priorities)
      .filter(({ fit }) => fit > 0)
      .slice(0, 2)
      .map(({ item }) => item);
    insights[subject] = {
      rank: index + 1,
      inDemand: index < inDemandCutoff,
      topSkills,
      priorities,
    };
  });
  return insights;
}

export type AreaFit = { id: RegionId; fit: number; tier: Tier };

export type PriorityResult = {
  priority: LsipPriority;
  fit: number;
  roles: ReturnType<typeof matchRoles<SectorRole, SubjectName, SkillId>>;
  gaps: ReturnType<typeof matchGaps<LsipPriority["gaps"][number], SubjectName, SkillId>>;
};

export type PairResult = PairOverlap<SubjectName, SkillId> & {
  synergy: Synergy | undefined;
  bestPriority: LsipPriority | undefined;
  seeds: string[];
};

export type QuestResult = {
  quest: Quest;
  priority: LsipPriority | undefined;
  subjectLinks: { subject: SubjectName; contribution: string }[];
};

export type JourneyResults = ReturnType<typeof buildResults>;

export function buildResults(region: Region, subjects: readonly SubjectName[]) {
  const count = subjectCount(subjects);
  const profile = combinedProfile(subjects, SUBJECT_SKILLS, SKILL_IDS);
  const { effective } = profile;
  const ranks = skillRanks(region.id);
  const demand = REGION_DEMAND[region.id];

  const areas: AreaFit[] = rankAreas(effective, REGION_DEMAND, REGION_IDS).map(({ item, fit }) => ({
    id: item,
    fit,
    tier: tierFor(fit, TIER_CUTOFFS[item][count]),
  }));
  const local = areas.find((area) => area.id === region.id)!;
  const nationalFit = weightedFit(effective, NATIONAL_DEMAND);
  const national = { fit: nationalFit, tier: tierFor(nationalFit, TIER_CUTOFFS.national[count]) };

  /** Skills the subjects develop at all, strongest first, then by local demand. */
  const skills = SKILL_IDS.filter((skill) => profile.level[skill] > 0).sort(
    (a, b) => effective[b] - effective[a] || ranks[a] - ranks[b],
  );

  const priorities: PriorityResult[] = rankPriorities(effective, region.priorities).map(
    ({ item, fit }) => ({
      priority: item,
      fit,
      roles: matchRoles(item.roles, profile),
      gaps: matchGaps(item.gaps, profile),
    }),
  );

  const multiSubjectRoles = priorities.flatMap(({ priority, roles }) =>
    roles
      .filter((match) => match.matched && match.subjects.length >= 3)
      .map((match) => ({ ...match, priority })),
  );

  const pairs: PairResult[] = pairOverlaps(subjects, SUBJECT_SKILLS, SKILL_IDS, demand).map(
    (pair) => {
      const pairSkills = [...pair.shared, ...pair.complementary.map((c) => c.skill)];
      const bestPriority = [...region.priorities].sort(
        (a, b) =>
          pairSkills.reduce((sum, skill) => sum + (b.weights[skill] ?? 0), 0) -
            pairSkills.reduce((sum, skill) => sum + (a.weights[skill] ?? 0), 0) ||
          a.order - b.order,
      )[0];
      const synergy = findSynergy(subjectGroup(pair.subjects[0]), subjectGroup(pair.subjects[1]));
      const seeds = (synergy?.projectSeeds ?? []).map((seed) =>
        fillSeed(seed, { region: region.name, priority: bestPriority?.name ?? "local employers" }),
      );
      return { ...pair, synergy, bestPriority, seeds };
    },
  );

  const priorityFit = Object.fromEntries(priorities.map(({ priority, fit }) => [priority.id, fit]));
  const quests: QuestResult[] = pickQuests(region.quests, effective, priorityFit).map((quest) => ({
    quest,
    priority: region.priorities.find((p) => p.id === quest.priorityId),
    subjectLinks: subjects.map((subject) => ({
      subject,
      contribution:
        quest.subjectOverrides?.[subject] ?? quest.groupContributions[subjectGroup(subject)],
    })),
  }));

  return {
    count,
    profile,
    skills,
    skillRanks: ranks,
    worthAdding: skillsWorthAdding(SKILL_IDS, effective, demand, NATIONAL_DEMAND),
    areas,
    local,
    national,
    priorities,
    multiSubjectRoles,
    pairs,
    quests,
  };
}

export const TIER_LABELS: Record<Tier, string> = {
  strong: "Strong match",
  good: "Good match",
  emerging: "Emerging match",
};

/** Display order and headings for contacts on stage 9 and in the PDF. */
export const CONTACT_GROUPS: { kind: ContactKind; title: string }[] = [
  { kind: "erb", title: "Who wrote the skills plan" },
  { kind: "authority", title: "Combined authority" },
  { kind: "council", title: "Councils" },
  { kind: "growth-hub", title: "Business support" },
  { kind: "careers-hub", title: "Careers support" },
  { kind: "university", title: "Universities" },
  { kind: "college", title: "Colleges" },
  { kind: "sector-body", title: "Industry and sector bodies" },
  { kind: "other", title: "Other useful organisations" },
];
