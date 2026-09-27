import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  retainSearchParams,
  useLocation,
} from "@tanstack/react-router";
import { MapPin, Pencil } from "lucide-react";
import { ArcadeFrame } from "@/components/arcade/ArcadeFrame";
import { LoadingQuest } from "@/components/arcade/LoadingQuest";
import { StageNav } from "@/components/journey/StageNav";
import { StageProgress } from "@/components/journey/StageProgress";
import { loadRegion } from "@/data/regions";
import {
  journeySearchSchema,
  MIN_SUBJECTS,
  parseRegion,
  parseSubjects,
  serialiseSubjects,
  stageIndex,
  useJourney,
} from "@/lib/journey";

export const Route = createFileRoute("/journey")({
  validateSearch: journeySearchSchema,
  search: { middlewares: [retainSearchParams(["region", "subjects", "quest"])] },
  beforeLoad: ({ search }) => {
    const regionId = parseRegion(search.region);
    if (!regionId) throw redirect({ to: "/where" });
    const subjects = parseSubjects(search.subjects);
    if (subjects.length < MIN_SUBJECTS) {
      throw redirect({
        to: "/subjects",
        search: { region: regionId, subjects: serialiseSubjects(subjects) || undefined },
      });
    }
    return { regionId, subjects };
  },
  loaderDeps: ({ search }) => ({ region: search.region }),
  loader: ({ context }) => loadRegion(context.regionId),
  staleTime: Infinity,
  pendingComponent: () => (
    <ArcadeFrame>
      <LoadingQuest messages={["Loading your area's skills plan..."]} />
    </ArcadeFrame>
  ),
  component: JourneyLayout,
});

function JourneyLayout() {
  const { pathname } = useLocation();
  const current = stageIndex(pathname);
  return (
    <ArcadeFrame>
      <PartyBar />
      <StageProgress current={current} />
      <Outlet />
      <StageNav current={current} />
    </ArcadeFrame>
  );
}

/** Where the student is and what they are studying, with quick ways to change. */
function PartyBar() {
  const { region, subjects } = useJourney();
  const search = { region: region.id, subjects: serialiseSubjects(subjects) };
  return (
    <div className="mb-5 flex flex-wrap items-center gap-2 text-xs">
      <Link
        to="/where"
        search={search}
        className="border-border bg-surface hover:border-accent inline-flex items-center gap-1.5 rounded border-2 px-2.5 py-1.5"
        aria-label={`Area: ${region.name}. Change area`}
      >
        <MapPin className="text-accent h-3.5 w-3.5" aria-hidden />
        {region.name}
      </Link>
      {subjects.map((subject) => (
        <span key={subject} className="border-border bg-surface-2 rounded border px-2.5 py-1.5">
          {subject}
        </span>
      ))}
      <Link
        to="/subjects"
        search={search}
        className="text-muted-foreground hover:text-accent inline-flex items-center gap-1 px-1 py-1.5 uppercase"
      >
        <Pencil className="h-3.5 w-3.5" aria-hidden />
        Change subjects
      </Link>
    </div>
  );
}
