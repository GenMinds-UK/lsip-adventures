import { getRouteApi } from "@tanstack/react-router";
import { useMemo } from "react";
import { z } from "zod";
import { isRegionId, type RegionId } from "@/data/regions";
import { isSubjectName, type SubjectName } from "@/data/subjects";
import { buildResults } from "@/lib/results";

export const MIN_SUBJECTS = 3;
export const MAX_SUBJECTS = 4;

/** The ten stages of the journey, in order. */
export const STAGES = [
  { path: "/", title: "Title screen", short: "Start" },
  { path: "/where", title: "Where are you based?", short: "Where" },
  { path: "/subjects", title: "Choose your A levels", short: "A levels" },
  { path: "/journey/skills", title: "Skills you will develop", short: "Skills" },
  { path: "/journey/local", title: "Opportunities near you", short: "Local" },
  { path: "/journey/national", title: "National demand", short: "National" },
  { path: "/journey/overlaps", title: "Where your subjects overlap", short: "Overlaps" },
  { path: "/journey/quests", title: "Research quests", short: "Quests" },
  { path: "/journey/contacts", title: "Who to talk to", short: "Contacts" },
  { path: "/journey/summary", title: "Your summary", short: "Summary" },
] as const;

export type StagePath = (typeof STAGES)[number]["path"];

export function stageIndex(path: string): number {
  return STAGES.findIndex((stage) => stage.path === path.replace(/\/$/, "") || stage.path === path);
}

/**
 * Journey state lives in the URL. Every field is optional and falls back to
 * undefined, so a malformed link redirects rather than throwing.
 */
export const journeySearchSchema = z.object({
  region: z.string().optional().catch(undefined),
  subjects: z.string().optional().catch(undefined),
  quest: z.string().optional().catch(undefined),
});

export type JourneySearch = z.infer<typeof journeySearchSchema>;

export function parseRegion(value: string | undefined): RegionId | null {
  return isRegionId(value) ? value : null;
}

/** Known subjects only, deduplicated, at most four. */
export function parseSubjects(value: string | undefined): SubjectName[] {
  if (!value) return [];
  return [...new Set(value.split(",").map((s) => s.trim()))]
    .filter(isSubjectName)
    .slice(0, MAX_SUBJECTS);
}

export function serialiseSubjects(subjects: readonly string[]): string {
  return subjects.join(",");
}

const journeyApi = getRouteApi("/journey");

/** Region, subjects and calculated results for any screen under /journey. */
export function useJourney() {
  const { regionId, subjects } = journeyApi.useRouteContext();
  const region = journeyApi.useLoaderData();
  const { quest } = journeyApi.useSearch();
  const key = subjects.join(",");
  // eslint-disable-next-line react-hooks/exhaustive-deps -- keyed on the joined names
  const results = useMemo(() => buildResults(region, subjects), [region, key]);
  return { regionId, region, subjects, results, pinnedQuestId: quest };
}
