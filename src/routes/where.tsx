import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ExternalLink, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { ArcadeButton } from "@/components/arcade/ArcadeButton";
import { ArcadeFrame } from "@/components/arcade/ArcadeFrame";
import { StageIntro } from "@/components/journey/StageIntro";
import { StageProgress } from "@/components/journey/StageProgress";
import { PlacePicker } from "@/components/where/PlacePicker";
import { LSIP_AREAS } from "@/data/generated/lsip-areas";
import { REGION_IDS, REGION_META, type RegionId } from "@/data/regions";
import { journeySearchSchema, parseRegion } from "@/lib/journey";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/where")({
  validateSearch: journeySearchSchema,
  head: () => ({
    meta: [
      { title: "Where are you based? | LSIP Adventures" },
      {
        name: "description",
        content:
          "Tell LSIP Adventures your town or city to see the Local Skills Improvement Plan for your area.",
      },
    ],
  }),
  component: WhereScreen,
});

function WhereScreen() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [regionId, setRegionId] = useState<RegionId | null>(() => parseRegion(search.region));
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [elsewhere, setElsewhere] = useState(false);
  const region = regionId ? REGION_META[regionId] : null;

  const choose = (id: RegionId, place: string | null) => {
    setRegionId(id);
    setPlaceName(place);
    setElsewhere(false);
  };

  return (
    <ArcadeFrame>
      <StageProgress current={1} />
      <StageIntro title="Where are you based?">
        <p>
          Every part of England has a Local Skills Improvement Plan (LSIP). Employers use it to say
          which skills they need most. Tell us where you live and we'll use your area's plan.
        </p>
      </StageIntro>

      <div className="arcade-panel mb-6 p-5 sm:p-6">
        <PlacePicker onPick={(place) => choose(place.region, place.name)} />

        {region ? (
          <div
            className="border-highlight/60 bg-surface-2 mt-5 flex flex-col gap-3 rounded-md border-2 p-4"
            aria-live="polite"
          >
            <p className="text-accent flex items-center gap-1.5 text-[0.65rem] tracking-[0.2em] uppercase">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {placeName ? `${placeName} is in` : "Your area"}
            </p>
            <h2 className="font-display text-highlight text-[0.8rem] leading-relaxed">
              The {region.name} LSIP area
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {region.tagline} The plan is led by {region.erb.name}.
            </p>
            <ArcadeButton
              className="self-start"
              onClick={() =>
                navigate({
                  to: "/subjects",
                  search: { region: region.id, subjects: search.subjects },
                })
              }
            >
              Continue to A levels
            </ArcadeButton>
          </div>
        ) : null}
      </div>

      <section className="arcade-panel mb-6 p-5 sm:p-6" aria-labelledby="areas-heading">
        <h2
          id="areas-heading"
          className="font-display text-accent mb-3 text-[0.6rem] tracking-widest uppercase"
        >
          Or pick your area
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_IDS.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={regionId === id}
              onClick={() => choose(id, null)}
              className={cn(
                "rounded-md border-2 px-3 py-2.5 text-left text-sm transition-colors",
                "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                regionId === id
                  ? "border-highlight bg-primary text-primary-foreground"
                  : "border-border bg-surface hover:border-accent hover:bg-surface-2",
              )}
            >
              <span className="block">{REGION_META[id].name}</span>
              <span
                className={cn(
                  "block text-xs",
                  regionId === id ? "text-primary-foreground/80" : "text-muted-foreground",
                )}
              >
                {REGION_META[id].councils.slice(0, 3).join(", ")}
                {REGION_META[id].councils.length > 3 ? "…" : ""}
              </span>
            </button>
          ))}
          <button
            type="button"
            aria-expanded={elsewhere}
            onClick={() => setElsewhere((open) => !open)}
            className="border-border bg-surface hover:border-accent hover:bg-surface-2 focus-visible:ring-ring rounded-md border-2 border-dashed px-3 py-2.5 text-left text-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            <span className="block">Somewhere else in England</span>
            <span className="text-muted-foreground block text-xs">More areas coming soon</span>
          </button>
        </div>
      </section>

      {elsewhere ? <ElsewherePanel /> : null}
    </ArcadeFrame>
  );
}

function ElsewherePanel() {
  const byRegion = useMemo(() => {
    const map = new Map<string, typeof LSIP_AREAS>();
    for (const area of LSIP_AREAS) {
      if (area.region) continue;
      map.set(area.englandRegion, [...(map.get(area.englandRegion) ?? []), area]);
    }
    return [...map.entries()];
  }, []);

  return (
    <section className="arcade-panel mb-12 p-5 sm:p-6" aria-labelledby="elsewhere-heading">
      <h2
        id="elsewhere-heading"
        className="font-display text-highlight text-[0.75rem] leading-relaxed"
      >
        Coming soon to the rest of England
      </h2>
      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
        LSIP Adventures covers the North West for now. Here's who leads the skills plan in each
        other area, so you can read yours in the meantime.
      </p>
      <div className="mt-5 flex flex-col gap-5">
        {byRegion.map(([englandRegion, areas]) => (
          <div key={englandRegion}>
            <h3 className="font-display text-accent mb-2 text-[0.55rem] tracking-widest uppercase">
              {englandRegion}
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {areas.map((area) => (
                <li key={area.name} className="arcade-inset p-3 text-sm">
                  <span className="text-foreground block">{area.name}</span>
                  {area.erbUrl ? (
                    <a
                      href={area.erbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent mt-1 inline-flex items-center gap-1 text-xs underline"
                    >
                      {area.erbName}
                      <ExternalLink className="h-3 w-3" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="text-muted-foreground mt-1 block text-xs">{area.erbName}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
