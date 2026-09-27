import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Users } from "lucide-react";
import { StageIntro } from "@/components/journey/StageIntro";
import { SUBJECT_SKILLS } from "@/data/generated/matrix";
import { SKILL_IDS, SKILLS } from "@/data/generated/taxonomy";
import type { SubjectName } from "@/data/subjects";
import { useJourney } from "@/lib/journey";
import type { PairResult } from "@/lib/results";
import { DEVELOPED } from "@/lib/scoring";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/journey/overlaps")({
  head: () => ({ meta: [{ title: "Where your subjects overlap | LSIP Adventures" }] }),
  component: OverlapsStage,
});

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));

function sharedCount(a: SubjectName, b: SubjectName) {
  return SKILL_IDS.filter(
    (skill) => SUBJECT_SKILLS[a][skill] >= DEVELOPED && SUBJECT_SKILLS[b][skill] >= DEVELOPED,
  ).length;
}

function OverlapsStage() {
  const { region, subjects, results } = useJourney();
  const { pairs, multiSubjectRoles } = results;

  return (
    <>
      <StageIntro title="Where your subjects overlap">
        <p>
          Your subjects are stronger together. Where two of them build the same skill, you get
          double the practice. Where one leads and the other doesn't, they fill each other's gaps.
          Those meeting points are where the best project ideas come from.
        </p>
      </StageIntro>

      <section className="arcade-panel mb-6 p-5 sm:p-6" aria-labelledby="matrix-heading">
        <h2
          id="matrix-heading"
          className="font-display text-accent mb-4 text-[0.65rem] tracking-widest uppercase"
        >
          Shared skills between each pair
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-separate border-spacing-1 text-xs">
            <caption className="sr-only">
              Number of skills each pair of your subjects both build strongly
            </caption>
            <thead>
              <tr>
                <td />
                {subjects.map((subject) => (
                  <th
                    key={subject}
                    scope="col"
                    className="text-muted-foreground p-1 text-left font-normal"
                  >
                    {subject}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subjects.map((row, i) => (
                <tr key={row}>
                  <th scope="row" className="text-muted-foreground p-1 text-left font-normal">
                    {row}
                  </th>
                  {subjects.map((col, j) => {
                    if (i === j) {
                      return (
                        <td key={col} className="bg-surface rounded" aria-label="Same subject" />
                      );
                    }
                    const count = sharedCount(row, col);
                    return (
                      <td
                        key={col}
                        className={cn(
                          "rounded p-2 text-center font-semibold",
                          count >= 4
                            ? "bg-accent/70"
                            : count >= 2
                              ? "bg-accent/40"
                              : "bg-accent/15",
                        )}
                      >
                        {count}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mb-6 flex flex-col gap-4">
        {pairs.map((pair, index) => (
          <PairCard
            key={pair.subjects.join("+")}
            pair={pair}
            regionName={region.name}
            top={index === 0}
          />
        ))}
      </div>

      {multiSubjectRoles.length ? (
        <section
          className="arcade-panel border-highlight/60 p-5 sm:p-6"
          aria-labelledby="multi-roles"
        >
          <h2
            id="multi-roles"
            className="font-display text-highlight flex items-center gap-2 text-[0.65rem] tracking-widest uppercase"
          >
            <Users className="h-4 w-4" aria-hidden />
            Roles that use 3+ of your subjects
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {multiSubjectRoles.map((role) => (
              <li key={`${role.priority.id}-${role.item.title}`} className="arcade-inset p-4">
                <h3 className="text-foreground font-semibold">{role.item.title}</h3>
                <p className="text-muted-foreground text-xs uppercase">{role.priority.name}</p>
                <p className="text-muted-foreground mt-2 text-sm">{role.item.what}</p>
                <p className="text-accent mt-2 text-xs">{role.subjects.join(" + ")}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}

function PairCard({
  pair,
  regionName,
  top,
}: {
  pair: PairResult;
  regionName: string;
  top: boolean;
}) {
  const [a, b] = pair.subjects;
  return (
    <article
      className={cn("arcade-panel flex flex-col gap-4 p-5 sm:p-6", top && "border-highlight/70")}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h2 className="font-display text-highlight text-[0.72rem] leading-relaxed">
          {a} + {b}
        </h2>
        {top ? (
          <span className="text-highlight inline-flex items-center gap-1 text-xs uppercase">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> Strongest pairing for {regionName}
          </span>
        ) : null}
      </div>

      {pair.synergy ? <p className="text-foreground/90 text-sm">{pair.synergy.blurb}</p> : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-accent mb-1.5 text-xs uppercase">Skills you practise twice</h3>
          {pair.shared.length ? (
            <ul className="flex flex-wrap gap-1.5">
              {pair.shared.map((skill) => (
                <li
                  key={skill}
                  className="border-highlight/60 bg-surface-2 rounded border px-2 py-1 text-xs"
                >
                  {SKILL_NAME.get(skill)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-xs">
              None strongly shared. These two cover different ground.
            </p>
          )}
        </div>
        <div>
          <h3 className="text-accent mb-1.5 text-xs uppercase">How they fill each other's gaps</h3>
          {pair.complementary.length ? (
            <ul className="flex flex-col gap-1 text-xs">
              {pair.complementary.slice(0, 5).map(({ skill, from }) => (
                <li key={skill}>
                  <span className="text-foreground">{from}</span>
                  <span className="text-muted-foreground"> brings {SKILL_NAME.get(skill)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-xs">They overlap more than they complement.</p>
          )}
        </div>
      </div>

      {pair.seeds.length ? (
        <div className="arcade-inset p-4">
          <h3 className="text-accent mb-2 text-xs uppercase">
            Project ideas{pair.bestPriority ? ` · ${pair.bestPriority.name}` : ""}
          </h3>
          <ul className="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm">
            {pair.seeds.map((seed) => (
              <li key={seed}>{seed}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
