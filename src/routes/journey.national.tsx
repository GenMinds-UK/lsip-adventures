import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { TierMeter } from "@/components/journey/FitMeter";
import { StageIntro } from "@/components/journey/StageIntro";
import { NATIONAL_DEMAND, REGION_DEMAND } from "@/data/generated/demand";
import { NATIONAL_SUBJECTS, type NationalSector, type Outlook } from "@/data/generated/national";
import { SKILLS } from "@/data/generated/taxonomy";
import { useJourney } from "@/lib/journey";
import { DEVELOPED } from "@/lib/scoring";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/journey/national")({
  head: () => ({ meta: [{ title: "National demand for your subjects | LSIP Adventures" }] }),
  component: NationalStage,
});

const OUTLOOK: Record<Outlook, { label: string; blocks: number }> = {
  "very-high": { label: "Very high demand", blocks: 4 },
  high: { label: "High demand", blocks: 3 },
  growing: { label: "Growing demand", blocks: 2 },
  steady: { label: "Steady demand, many routes", blocks: 1 },
};

const SECTOR_LABELS: Record<NationalSector, string> = {
  "advanced-manufacturing": "Advanced manufacturing",
  "clean-energy": "Clean energy",
  creative: "Creative industries",
  defence: "Defence",
  "digital-technologies": "Digital and technologies",
  "financial-services": "Financial services",
  "life-sciences": "Life sciences",
  "professional-business": "Professional and business services",
  foundational: "Foundational sectors (health, care, education, construction)",
};

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));

function DemandBar({ value, tone }: { value: number; tone: "local" | "national" }) {
  return (
    <span className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-2.5 flex-1 rounded-[1px] border",
            i < value
              ? tone === "local"
                ? "border-highlight bg-highlight"
                : "border-accent bg-accent"
              : "border-border bg-surface",
          )}
        />
      ))}
    </span>
  );
}

function NationalStage() {
  const { region, subjects, results } = useJourney();
  const { national, skills, profile } = results;
  const strongSkills = skills.filter((skill) => profile.effective[skill] >= DEVELOPED).slice(0, 8);

  return (
    <>
      <StageIntro title="National demand for your subjects">
        <p>
          Your area is only part of the picture. Many careers are national, and the UK's Industrial
          Strategy names eight sectors to grow the economy. Here's how your A levels line up with
          skills demand across the whole country.
        </p>
      </StageIntro>

      <section className="arcade-panel mb-6 p-5 sm:p-6" aria-labelledby="national-fit">
        <h2
          id="national-fit"
          className="font-display text-accent mb-4 text-[0.65rem] tracking-widest uppercase"
        >
          Your match with national skills demand
        </h2>
        <TierMeter fit={national.fit} tier={national.tier} />
      </section>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        {subjects.map((subject) => {
          const facts = NATIONAL_SUBJECTS[subject];
          const outlook = OUTLOOK[facts.outlook];
          return (
            <article key={subject} className="arcade-panel flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="font-display text-highlight text-[0.7rem] leading-relaxed">
                  {subject}
                </h2>
                <span className="flex items-center gap-2">
                  <span className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 4 }, (_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-3 w-3 rounded-[2px] border",
                          i < outlook.blocks ? "border-accent bg-accent" : "border-border",
                        )}
                      />
                    ))}
                  </span>
                  <span className="text-accent text-xs">{outlook.label}</span>
                </span>
              </div>
              <p className="text-foreground/90 text-sm">{facts.headline}</p>
              {facts.sectors.length ? (
                <ul className="flex flex-wrap gap-1.5" aria-label="Growth sectors">
                  {facts.sectors.map((sector) => (
                    <li
                      key={sector}
                      className="border-border bg-surface-2 rounded border px-2 py-1 text-xs"
                    >
                      {SECTOR_LABELS[sector]}
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="flex flex-col gap-1.5 text-sm">
                {facts.occupations.map((occupation) => (
                  <li key={occupation.title}>
                    <span className="text-foreground">{occupation.title}</span>
                    <span className="text-muted-foreground"> · {occupation.note}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-auto text-xs">
                Sources:{" "}
                {facts.sources.map((source, i) => (
                  <span key={source.url}>
                    {i > 0 ? "; " : ""}
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent inline-flex items-center gap-0.5 underline"
                    >
                      {source.label}
                      <ExternalLink className="h-3 w-3" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </span>
                ))}
              </p>
            </article>
          );
        })}
      </div>

      {strongSkills.length ? (
        <section className="arcade-panel p-5 sm:p-6" aria-labelledby="local-national">
          <h2
            id="local-national"
            className="font-display text-accent text-[0.65rem] tracking-widest uppercase"
          >
            Local vs national: your strongest skills
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            <span className="text-highlight">Yellow</span> is how much {region.name}'s plan asks for
            each skill; <span className="text-accent">teal</span> is national demand.
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {strongSkills.map((skill) => {
              const local = REGION_DEMAND[region.id][skill];
              const nationally = NATIONAL_DEMAND[skill];
              return (
                <li
                  key={skill}
                  className="grid gap-1.5 sm:grid-cols-[14rem_1fr_1fr] sm:items-center sm:gap-4"
                >
                  <span className="text-foreground text-sm">{SKILL_NAME.get(skill)}</span>
                  <span className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground w-16 shrink-0">{region.short}</span>
                    <span className="flex-1">
                      <DemandBar value={local} tone="local" />
                    </span>
                    <span className="sr-only">
                      {region.name} demand {local} of 5
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground w-16 shrink-0">England</span>
                    <span className="flex-1">
                      <DemandBar value={nationally} tone="national" />
                    </span>
                    <span className="sr-only">National demand {nationally} of 5</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </>
  );
}
