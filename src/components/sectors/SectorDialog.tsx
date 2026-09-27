import { CheckCircle2 } from "lucide-react";
import { ArcadeDialog, DialogSection } from "@/components/arcade/ArcadeDialog";
import { SKILLS } from "@/data/generated/taxonomy";
import type { PriorityResult } from "@/lib/results";

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));

export function SectorDialog({ result, onClose }: { result: PriorityResult; onClose: () => void }) {
  const { priority, roles, gaps } = result;
  const matchedRoles = roles.filter((role) => role.matched);
  const otherRoles = roles.filter((role) => !role.matched);
  const closable = gaps.filter((gap) => gap.matched);

  return (
    <ArcadeDialog
      onClose={onClose}
      eyebrow={`${matchedRoles.length} of ${roles.length} roles match your skills`}
      title={priority.name}
      description={priority.blurb}
    >
      {closable.length ? (
        <DialogSection title="Gaps your subjects help close" tone="highlight">
          <ul className="flex flex-col gap-2">
            {closable.map((gap) => (
              <li key={gap.item.text} className="flex gap-2">
                <CheckCircle2 className="text-highlight mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  <span className="text-foreground">{gap.item.text}</span>
                  {gap.subjects.length ? (
                    <span className="text-muted-foreground block text-xs">
                      Through {gap.subjects.join(", ")}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </DialogSection>
      ) : (
        <p className="border-border bg-surface-2 text-muted-foreground rounded-md border-2 p-4">
          Your subjects don't line up directly with this priority's gaps. That doesn't rule it out:
          the roles below show what employers here are asking for.
        </p>
      )}

      <DialogSection title="Roles in this priority">
        <div className="flex flex-col gap-3">
          {[...matchedRoles, ...otherRoles].map((role) => (
            <article
              key={role.item.title}
              className={
                role.matched
                  ? "border-highlight/60 bg-surface-2 rounded-md border-2 p-4"
                  : "border-border bg-surface rounded-md border-2 p-4 opacity-80"
              }
            >
              <h4 className="text-foreground font-semibold">{role.item.title}</h4>
              <p className="text-muted-foreground mt-0.5 text-xs uppercase">{role.item.level}</p>
              <p className="text-muted-foreground mt-2">{role.item.what}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Skills this role needs">
                {role.item.skills.map((skill) => {
                  const have = role.developed.includes(skill);
                  return (
                    <li
                      key={skill}
                      className={
                        have
                          ? "border-highlight bg-primary text-primary-foreground rounded border-2 px-2 py-1 text-xs"
                          : "border-border text-muted-foreground rounded border px-2 py-1 text-xs"
                      }
                    >
                      {SKILL_NAME.get(skill)}
                      <span className="sr-only">{have ? " (you build this)" : ""}</span>
                    </li>
                  );
                })}
              </ul>
              {role.subjects.length ? (
                <p className="text-muted-foreground mt-2 text-xs">
                  Your subjects that help: {role.subjects.join(", ")}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </DialogSection>
    </ArcadeDialog>
  );
}
