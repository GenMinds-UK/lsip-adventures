import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb } from "lucide-react";
import { StageIntro } from "@/components/journey/StageIntro";
import { SkillBar } from "@/components/skills/SkillBar";
import { SkillHeatmapHeader, SkillHeatmapRow } from "@/components/skills/SkillHeatmap";
import { CLUSTERS, SKILLS } from "@/data/generated/taxonomy";
import { SKILL_CONTENT } from "@/data/skills-content";
import { useJourney } from "@/lib/journey";
import { DEVELOPED } from "@/lib/scoring";

export const Route = createFileRoute("/journey/skills")({
  head: () => ({ meta: [{ title: "Skills you will develop | LSIP Adventures" }] }),
  component: SkillsStage,
});

const SKILL = new Map(SKILLS.map((skill) => [skill.id, skill]));

function SkillsStage() {
  const { region, subjects, results } = useJourney();
  const { profile, skills, skillRanks, worthAdding } = results;
  const strong = skills.filter((skill) => profile.effective[skill] >= DEVELOPED);

  return (
    <>
      <StageIntro title="Skills you will develop">
        <p>
          Every A level trains you in particular skills. Put your {subjects.length} together and
          this is your skill set. You're building{" "}
          <strong className="text-foreground">{strong.length}</strong> of the {SKILLS.length} skills
          that employers across the North West talk about in their skills plans.
        </p>
        <p className="text-xs">
          Blocks show how strongly your subjects build each skill. A star means two or more of your
          subjects build it, so it gets extra practice. The coloured squares show how much each
          North West area's LSIP asks for that skill (0–5), with {region.name} outlined.
        </p>
      </StageIntro>

      <div className="flex flex-col gap-5">
        {CLUSTERS.map((cluster) => {
          const inCluster = skills.filter((skill) => SKILL.get(skill)?.cluster === cluster.id);
          if (inCluster.length === 0) return null;
          return (
            <section
              key={cluster.id}
              className="arcade-panel p-5 sm:p-6"
              aria-labelledby={`cluster-${cluster.id}`}
            >
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <h2
                  id={`cluster-${cluster.id}`}
                  className="font-display text-accent text-[0.65rem] tracking-widest uppercase"
                >
                  {cluster.name}
                </h2>
                <div className="hidden w-64 sm:block">
                  <SkillHeatmapHeader current={region.id} />
                </div>
              </div>
              <ul className="flex flex-col gap-4">
                {inCluster.map((skillId) => {
                  const skill = SKILL.get(skillId)!;
                  return (
                    <li
                      key={skillId}
                      className="border-border grid gap-3 border-t pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_16rem] sm:items-start"
                    >
                      <div className="flex flex-col gap-1.5">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-foreground font-semibold">{skill.name}</h3>
                          <SkillBar
                            level={profile.effective[skillId]}
                            reinforced={profile.reinforced[skillId]}
                          />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {SKILL_CONTENT[skillId].youCan}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {profile.contributors[skillId].length
                            ? `Built by ${profile.contributors[skillId].join(", ")}`
                            : "Touched on in your subjects"}{" "}
                          ·{" "}
                          <span className="text-accent">
                            Demand in {region.short}: #{skillRanks[skillId]} of {SKILLS.length}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="sm:hidden">
                          <SkillHeatmapHeader current={region.id} />
                        </div>
                        <SkillHeatmapRow skill={skillId} current={region.id} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {worthAdding.length ? (
          <section
            className="arcade-panel border-highlight/60 p-5 sm:p-6"
            aria-labelledby="worth-adding"
          >
            <h2
              id="worth-adding"
              className="font-display text-highlight flex items-center gap-2 text-[0.65rem] tracking-widest uppercase"
            >
              <Lightbulb className="h-4 w-4" aria-hidden />
              Skills worth adding
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {region.name}'s employers ask for these a lot, and your subjects only touch on them.
              You don't need another A level to build them. Here's how:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {worthAdding.map((skillId) => (
                <li key={skillId} className="arcade-inset p-4">
                  <h3 className="text-foreground font-semibold">{SKILL.get(skillId)?.name}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {SKILL_CONTENT[skillId].buildItBy}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
