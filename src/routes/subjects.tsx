import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { ArcadeFrame } from "@/components/arcade/ArcadeFrame";
import { LoadingQuest } from "@/components/arcade/LoadingQuest";
import { StageIntro } from "@/components/journey/StageIntro";
import { StageNav } from "@/components/journey/StageNav";
import { StageProgress } from "@/components/journey/StageProgress";
import { SubjectPicker } from "@/components/subjects/SubjectPicker";
import { loadRegion } from "@/data/regions";
import { journeySearchSchema, parseRegion, parseSubjects, serialiseSubjects } from "@/lib/journey";
import { skillRanks, subjectInsights } from "@/lib/results";

export const Route = createFileRoute("/subjects")({
  validateSearch: journeySearchSchema,
  beforeLoad: ({ search }) => {
    const regionId = parseRegion(search.region);
    if (!regionId) throw redirect({ to: "/where" });
    return { regionId };
  },
  loaderDeps: ({ search }) => ({ region: search.region }),
  loader: ({ context }) => loadRegion(context.regionId),
  staleTime: Infinity,
  head: () => ({
    meta: [
      { title: "Choose your A levels | LSIP Adventures" },
      {
        name: "description",
        content:
          "Pick the 3 or 4 A levels you're studying or considering, and see how each connects to your area's skills plan.",
      },
    ],
  }),
  pendingComponent: () => (
    <ArcadeFrame>
      <LoadingQuest messages={["Loading your area's skills plan..."]} />
    </ArcadeFrame>
  ),
  component: SubjectsScreen,
});

function SubjectsScreen() {
  const region = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate();
  const insights = useMemo(() => subjectInsights(region), [region]);
  const ranks = useMemo(() => skillRanks(region.id), [region.id]);

  return (
    <ArcadeFrame>
      <StageProgress current={2} />
      <StageIntro title="Which A levels are you studying or interested in?" />
      <SubjectPicker
        key={region.id}
        region={region}
        insights={insights}
        skillRanks={ranks}
        initialChosen={parseSubjects(search.subjects)}
        onSubmit={(subjects) => {
          window.scrollTo({ top: 0 });
          void navigate({
            to: "/journey/skills",
            search: { region: region.id, subjects: serialiseSubjects(subjects) },
          });
        }}
      />
      <StageNav current={2} />
    </ArcadeFrame>
  );
}
