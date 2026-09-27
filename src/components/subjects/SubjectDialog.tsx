import { Flame } from "lucide-react";
import { ArcadeButton } from "@/components/arcade/ArcadeButton";
import { ArcadeDialog, DialogSection } from "@/components/arcade/ArcadeDialog";
import { SKILLS, type SkillId } from "@/data/generated/taxonomy";
import type { Region } from "@/data/regions/types";
import { SUBJECT_NAMES, type Subject } from "@/data/subjects";
import { MAX_SUBJECTS } from "@/lib/journey";
import type { SubjectInsight } from "@/lib/results";

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));

export function SubjectDialog({
  subject,
  region,
  insight,
  skillRanks,
  selected,
  full,
  onClose,
  onToggle,
}: {
  subject: Subject;
  region: Region;
  insight: SubjectInsight;
  skillRanks: Record<SkillId, number>;
  selected: boolean;
  full: boolean;
  onClose: () => void;
  onToggle: () => void;
}) {
  const blocked = !selected && full;
  return (
    <ArcadeDialog
      onClose={onClose}
      eyebrow={subject.group}
      title={subject.name}
      footer={
        <ArcadeButton
          onClick={onToggle}
          disabled={blocked}
          variant={selected ? "ghost" : "primary"}
          className="w-full"
        >
          {selected
            ? "Remove from your list"
            : blocked
              ? `All ${MAX_SUBJECTS} slots are full`
              : "Add to your list"}
        </ArcadeButton>
      }
    >
      <DialogSection title="What you'd learn">
        <p className="text-muted-foreground">{subject.learn}</p>
      </DialogSection>

      <DialogSection title={`${region.short} connection`} tone="highlight">
        <p className="text-muted-foreground">{region.subjectLinks[subject.name]}</p>
        {insight.inDemand ? (
          <p className="text-highlight flex items-center gap-1.5 text-xs">
            <Flame className="h-3.5 w-3.5" aria-hidden />
            In demand here: number {insight.rank} of {SUBJECT_NAMES.length} A levels for{" "}
            {region.name}'s skills needs
          </p>
        ) : null}
      </DialogSection>

      {insight.topSkills.length ? (
        <DialogSection title="Skills it builds">
          <ul className="flex flex-col gap-2">
            {insight.topSkills.map((skill) => (
              <li key={skill} className="arcade-inset flex items-center justify-between gap-3 p-3">
                <span className="text-foreground">{SKILL_NAME.get(skill)}</span>
                <span className="text-accent shrink-0 text-xs">
                  Demand here: #{skillRanks[skill]} of {SKILLS.length}
                </span>
              </li>
            ))}
          </ul>
        </DialogSection>
      ) : null}

      {insight.priorities.length ? (
        <DialogSection title="Feeds these LSIP priorities">
          <ul className="flex flex-wrap gap-1.5">
            {insight.priorities.map((priority) => (
              <li
                key={priority.id}
                className="border-border bg-surface-2 rounded border px-2 py-1 text-xs"
              >
                {priority.name}
              </li>
            ))}
          </ul>
        </DialogSection>
      ) : null}
    </ArcadeDialog>
  );
}
