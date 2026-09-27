import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { TierBadge, TierMeter } from "@/components/journey/FitMeter";
import { StageIntro } from "@/components/journey/StageIntro";
import { SectorFlower } from "@/components/sectors/SectorFlower";
import { REGION_META } from "@/data/regions";
import { useJourney } from "@/lib/journey";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/journey/local")({
  head: () => ({ meta: [{ title: "Opportunities near you | LSIP Adventures" }] }),
  component: LocalStage,
});

function LocalStage() {
  const { region, results } = useJourney();
  const { local, areas, priorities } = results;
  const closable = priorities.flatMap((p) => p.gaps.filter((gap) => gap.matched));

  return (
    <>
      <StageIntro title={`Your A levels and the ${region.name} skills plan`}>
        <p>{region.summary}</p>
        <p>
          We've compared the skills your subjects build with the skills {region.name}'s employers
          say they need most. Your subjects could help close{" "}
          <strong className="text-foreground">{closable.length}</strong> of the gaps named in the
          plan.
        </p>
      </StageIntro>

      <div className="mb-6 grid gap-5 lg:grid-cols-2">
        <section className="arcade-panel p-5 sm:p-6" aria-labelledby="local-fit">
          <h2
            id="local-fit"
            className="font-display text-accent mb-4 text-[0.65rem] tracking-widest uppercase"
          >
            Your match with {region.short}
          </h2>
          <TierMeter fit={local.fit} tier={local.tier} />
          <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
            Compared with every possible combination of {results.count} A levels. Strong puts you in
            the top 30% for this area's skills needs.
          </p>
        </section>

        <section className="arcade-panel p-5 sm:p-6" aria-labelledby="nw-rank">
          <h2
            id="nw-rank"
            className="font-display text-accent mb-4 text-[0.65rem] tracking-widest uppercase"
          >
            How your subjects rank across the North West
          </h2>
          <ol className="flex flex-col gap-2">
            {areas.map((area, index) => (
              <li
                key={area.id}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-md border-2 px-3 py-2 text-sm",
                  area.id === region.id ? "border-highlight bg-surface-2" : "border-border",
                )}
                aria-current={area.id === region.id ? "true" : undefined}
              >
                <span>
                  <span className="text-muted-foreground mr-2 text-xs">{index + 1}.</span>
                  {REGION_META[area.id].name}
                  {area.id === region.id ? (
                    <span className="text-highlight ml-2 text-xs">(you)</span>
                  ) : null}
                </span>
                <TierBadge tier={area.tier} />
              </li>
            ))}
          </ol>
        </section>
      </div>

      <SectorFlower priorities={priorities} regionName={region.name} />

      {region.crossCutting.length ? (
        <section className="arcade-panel mt-6 p-5 sm:p-6" aria-labelledby="cross-cutting">
          <h2
            id="cross-cutting"
            className="font-display text-accent mb-4 text-[0.65rem] tracking-widest uppercase"
          >
            Themes across every sector
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {region.crossCutting.map((theme) => (
              <li key={theme.title} className="arcade-inset p-4">
                <h3 className="text-foreground font-semibold">{theme.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{theme.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="text-muted-foreground mt-6 text-xs leading-relaxed">
        Source:{" "}
        <a
          href={region.lsip.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent inline-flex items-center gap-1 underline"
        >
          {region.lsip.title} ({region.lsip.published})
          <ExternalLink className="h-3 w-3" aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        , led by {region.erb.name}.
      </p>
    </>
  );
}
