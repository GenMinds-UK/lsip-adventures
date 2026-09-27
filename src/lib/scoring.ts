/**
 * Pure scoring functions behind every calculated screen in LSIP Adventures.
 *
 * They take the research matrices as arguments rather than importing them, so
 * `scripts/analyse-matrix.ts` can run exactly the same maths over the research
 * data. Keep this file free of value imports: Node runs it directly with
 * `--experimental-strip-types`, which cannot resolve the `@/` alias.
 *
 * Notation follows `research/methodology.md`:
 * - M[s][k]  subject → skill, 0–3
 * - D[r][k]  LSIP area → skill demand, 0–5
 * - W[p][k]  LSIP priority → skill weight, 0–3
 * - N[k]     national skill demand, 0–5
 * - Q[q][k]  quest → skill, 0–3
 */

/** Highest level a subject can develop a skill to. */
export const MAX_LEVEL = 3;
/** A skill counts as "developed" by a subject at this level or above. */
export const DEVELOPED = 2;
/** Bonus when two or more chosen subjects develop the same skill. */
export const REINFORCED_BONUS = 0.5;
/** Share of a role's skills that must be developed for the role to match. */
export const ROLE_MATCH_SHARE = 0.6;
/** Share of a gap's skills that must be developed to help close it. */
export const GAP_MATCH_SHARE = 0.5;
/** Weight of priority fit when ranking quests. */
export const QUEST_PRIORITY_WEIGHT = 0.25;
/** Penalty per already-picked quest that shares a lead skill (quest variety). */
export const QUEST_VARIETY_PENALTY = 0.15;

export type SkillScores<K extends string> = Readonly<Record<K, number>>;
export type PartialSkillScores<K extends string> = Readonly<Partial<Record<K, number>>>;
export type SubjectMatrix<S extends string, K extends string> = Readonly<Record<S, SkillScores<K>>>;

export type Profile<S extends string, K extends string> = {
  /** C[k]: the best level any chosen subject reaches. */
  level: Record<K, number>;
  /** E[k]: C[k] plus the reinforcement bonus, capped at MAX_LEVEL. */
  effective: Record<K, number>;
  /** True when at least two chosen subjects develop the skill. */
  reinforced: Record<K, boolean>;
  /** Chosen subjects that develop the skill (M ≥ DEVELOPED). */
  contributors: Record<K, S[]>;
};

export function combinedProfile<S extends string, K extends string>(
  chosen: readonly S[],
  matrix: SubjectMatrix<S, K>,
  skillIds: readonly K[],
): Profile<S, K> {
  const level = {} as Record<K, number>;
  const effective = {} as Record<K, number>;
  const reinforced = {} as Record<K, boolean>;
  const contributors = {} as Record<K, S[]>;

  for (const skill of skillIds) {
    const best = Math.max(0, ...chosen.map((subject) => matrix[subject][skill]));
    const developers = chosen.filter((subject) => matrix[subject][skill] >= DEVELOPED);
    const isReinforced = developers.length >= 2;
    level[skill] = best;
    reinforced[skill] = isReinforced;
    effective[skill] = Math.min(MAX_LEVEL, best + (isReinforced ? REINFORCED_BONUS : 0));
    contributors[skill] = developers;
  }

  return { level, effective, reinforced, contributors };
}

/**
 * How well a skill profile meets a set of weights, from 0 to 100:
 * 100 × Σ E[k]·w[k] / Σ MAX_LEVEL·w[k]. Used for area fit (w = D), priority
 * fit (w = W), national fit (w = N) and quest fit (w = Q).
 */
export function weightedFit<K extends string>(
  effective: SkillScores<K>,
  weights: PartialSkillScores<K>,
): number {
  let achieved = 0;
  let possible = 0;
  for (const [skill, weight] of Object.entries(weights) as [K, number | undefined][]) {
    if (!weight) continue;
    achieved += Math.min(MAX_LEVEL, effective[skill] ?? 0) * weight;
    possible += MAX_LEVEL * weight;
  }
  return possible === 0 ? 0 : (100 * achieved) / possible;
}

export type Ranked<T> = { item: T; fit: number };

/** Sort by fit, highest first, keeping the original order for ties. */
function rankByFit<T>(items: readonly T[], fitOf: (item: T) => number): Ranked<T>[] {
  return items
    .map((item, index) => ({ item, fit: fitOf(item), index }))
    .sort((a, b) => b.fit - a.fit || a.index - b.index)
    .map(({ item, fit }) => ({ item, fit }));
}

/** Rank LSIP areas (or any keyed weight sets) for one skill profile. */
export function rankAreas<R extends string, K extends string>(
  effective: SkillScores<K>,
  demandByArea: Readonly<Record<R, PartialSkillScores<K>>>,
  areaIds: readonly R[],
): Ranked<R>[] {
  return rankByFit(areaIds, (area) => weightedFit(effective, demandByArea[area]));
}

/** Rank LSIP priorities for one skill profile. */
export function rankPriorities<P extends { weights: PartialSkillScores<K> }, K extends string>(
  effective: SkillScores<K>,
  priorities: readonly P[],
): Ranked<P>[] {
  return rankByFit(priorities, (priority) => weightedFit(effective, priority.weights));
}

/** Rank single subjects (E = M[s], no reinforcement) against a set of weights. */
export function rankSubjects<S extends string, K extends string>(
  subjects: readonly S[],
  matrix: SubjectMatrix<S, K>,
  weights: PartialSkillScores<K>,
): Ranked<S>[] {
  return rankByFit(subjects, (subject) => weightedFit(matrix[subject], weights));
}

/**
 * Order skills by local demand, breaking ties by national demand and then by
 * taxonomy order. The result drives "Demand here: #n of 24".
 */
export function rankSkills<K extends string>(
  skillIds: readonly K[],
  demand: SkillScores<K>,
  national: SkillScores<K>,
): K[] {
  return skillIds
    .map((skill, index) => ({ skill, index }))
    .sort(
      (a, b) =>
        demand[b.skill] - demand[a.skill] ||
        national[b.skill] - national[a.skill] ||
        a.index - b.index,
    )
    .map(({ skill }) => skill);
}

export type Tier = "strong" | "good" | "emerging";
export type TierCutoffs = { strong: number; good: number };

export function tierFor(fit: number, cutoffs: TierCutoffs): Tier {
  if (fit >= cutoffs.strong) return "strong";
  if (fit >= cutoffs.good) return "good";
  return "emerging";
}

export type SkillMatch<T, S extends string, K extends string> = {
  item: T;
  /** The item's skills that the student develops (E ≥ DEVELOPED). */
  developed: K[];
  share: number;
  matched: boolean;
  /** Chosen subjects that develop at least one of the developed skills. */
  subjects: S[];
};

function matchSkills<T extends { skills: readonly K[] }, S extends string, K extends string>(
  items: readonly T[],
  profile: Profile<S, K>,
  threshold: number,
): SkillMatch<T, S, K>[] {
  return items.map((item) => {
    const developed = item.skills.filter((skill) => profile.effective[skill] >= DEVELOPED);
    const share = item.skills.length === 0 ? 0 : developed.length / item.skills.length;
    const subjects = [...new Set(developed.flatMap((skill) => profile.contributors[skill]))];
    return { item, developed, share, matched: share >= threshold, subjects };
  });
}

/** A role matches when at least ROLE_MATCH_SHARE of its skills are developed. */
export function matchRoles<T extends { skills: readonly K[] }, S extends string, K extends string>(
  roles: readonly T[],
  profile: Profile<S, K>,
) {
  return matchSkills(roles, profile, ROLE_MATCH_SHARE);
}

/** A gap is one "you could help close" when at least half its skills are developed. */
export function matchGaps<T extends { skills: readonly K[] }, S extends string, K extends string>(
  gaps: readonly T[],
  profile: Profile<S, K>,
) {
  return matchSkills(gaps, profile, GAP_MATCH_SHARE);
}

/** Skills in high local demand that the chosen subjects barely touch. */
export function skillsWorthAdding<K extends string>(
  skillIds: readonly K[],
  effective: SkillScores<K>,
  demand: SkillScores<K>,
  national: SkillScores<K>,
  { minDemand = 4, limit = 4 }: { minDemand?: number; limit?: number } = {},
): K[] {
  return rankSkills(skillIds, demand, national)
    .filter((skill) => demand[skill] >= minDemand && effective[skill] < DEVELOPED)
    .slice(0, limit);
}

export type PairOverlap<S extends string, K extends string> = {
  subjects: [S, S];
  /** Skills both subjects develop. */
  shared: K[];
  /** Skills one subject leads on (3) where the other barely features (≤ 1). */
  complementary: { skill: K; from: S }[];
  /** Local demand carried by the shared and complementary skills. */
  score: number;
};

export function pairOverlaps<S extends string, K extends string>(
  chosen: readonly S[],
  matrix: SubjectMatrix<S, K>,
  skillIds: readonly K[],
  demand: SkillScores<K>,
): PairOverlap<S, K>[] {
  const pairs: PairOverlap<S, K>[] = [];
  chosen.forEach((a, i) => {
    for (const b of chosen.slice(i + 1)) {
      const shared: K[] = [];
      const complementary: { skill: K; from: S }[] = [];
      for (const skill of skillIds) {
        const sa = matrix[a][skill];
        const sb = matrix[b][skill];
        if (sa >= DEVELOPED && sb >= DEVELOPED) shared.push(skill);
        else if (sa === MAX_LEVEL && sb <= 1) complementary.push({ skill, from: a });
        else if (sb === MAX_LEVEL && sa <= 1) complementary.push({ skill, from: b });
      }
      const score = [...shared, ...complementary.map((c) => c.skill)].reduce(
        (total, skill) => total + demand[skill],
        0,
      );
      pairs.push({ subjects: [a, b], shared, complementary, score });
    }
  });
  return pairs.sort((x, y) => y.score - x.score);
}

/** The skills a quest leans on most (its highest Q scores). */
function leadSkills<K extends string>(skills: PartialSkillScores<K>): K[] {
  const entries = Object.entries(skills) as [K, number | undefined][];
  const top = Math.max(0, ...entries.map(([, q]) => q ?? 0));
  return entries.filter(([, q]) => q === top && top > 0).map(([skill]) => skill);
}

/**
 * Pick quests. Each quest scores fit(E, Q)/100 + QUEST_PRIORITY_WEIGHT · pf/100.
 * Quests are chosen one at a time, highest adjusted score first (ties by id):
 * at most one per priority (topping up if there are too few priorities), and
 * each candidate loses QUEST_VARIETY_PENALTY for every quest already picked
 * that shares one of its lead skills, so a student isn't shown four
 * near-identical quests (checkpoint 2 decision).
 */
export function pickQuests<
  Q extends { id: string; priorityId: string; skills: PartialSkillScores<K> },
  K extends string,
>(
  quests: readonly Q[],
  effective: SkillScores<K>,
  priorityFit: Readonly<Record<string, number>>,
  count = 4,
): Q[] {
  const candidates = quests.map((quest) => ({
    quest,
    lead: leadSkills(quest.skills),
    score:
      weightedFit(effective, quest.skills) / 100 +
      (QUEST_PRIORITY_WEIGHT * (priorityFit[quest.priorityId] ?? 0)) / 100,
  }));

  const picked: typeof candidates = [];
  const pick = (allowRepeatPriority: boolean) => {
    let best: (typeof candidates)[number] | undefined;
    let bestScore = -Infinity;
    for (const candidate of candidates) {
      if (picked.includes(candidate)) continue;
      if (
        !allowRepeatPriority &&
        picked.some((p) => p.quest.priorityId === candidate.quest.priorityId)
      ) {
        continue;
      }
      const overlaps = picked.filter((p) => p.lead.some((skill) => candidate.lead.includes(skill)));
      const adjusted = candidate.score - QUEST_VARIETY_PENALTY * overlaps.length;
      if (
        adjusted > bestScore ||
        (adjusted === bestScore && best && candidate.quest.id.localeCompare(best.quest.id) < 0)
      ) {
        best = candidate;
        bestScore = adjusted;
      }
    }
    if (best) picked.push(best);
    return best;
  };

  while (picked.length < count && pick(false)) {
    // one quest per priority first
  }
  while (picked.length < count && pick(true)) {
    // then top up if there are fewer priorities than quests to show
  }
  return picked.map(({ quest }) => quest);
}
