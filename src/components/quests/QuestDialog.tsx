import { ArcadeButton } from "@/components/arcade/ArcadeButton";
import { ArcadeDialog, DialogSection } from "@/components/arcade/ArcadeDialog";
import { ArcadeDisclosure } from "@/components/arcade/ArcadeDisclosure";
import { SKILLS } from "@/data/generated/taxonomy";
import type { SkillId } from "@/data/generated/taxonomy";
import type { QuestResult } from "@/lib/results";

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="border-border bg-surface-2 rounded border px-2 py-1 text-xs">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function QuestDialog({
  result,
  pinned,
  onClose,
  onPin,
}: {
  result: QuestResult;
  pinned: boolean;
  onClose: () => void;
  onPin: () => void;
}) {
  const { quest, priority, subjectLinks } = result;
  const skills = (Object.entries(quest.skills) as [SkillId, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([skill]) => SKILL_NAME.get(skill) ?? skill);

  return (
    <ArcadeDialog
      onClose={onClose}
      eyebrow={priority?.name}
      title={quest.title}
      description={<span className="italic">{quest.strapline}</span>}
      className="max-w-2xl"
      footer={
        <ArcadeButton onClick={onPin} variant={pinned ? "ghost" : "primary"} className="w-full">
          {pinned ? "Unpin this quest" : "Pin this quest to my summary"}
        </ArcadeButton>
      }
    >
      <DialogSection title="The quest">
        <p className="text-muted-foreground">{quest.summary}</p>
      </DialogSection>

      <DialogSection title="Why it matters here">
        <p className="text-muted-foreground">{quest.whyItMatters}</p>
      </DialogSection>

      <DialogSection title="How your subjects feed in">
        <ul className="flex flex-col gap-2">
          {subjectLinks.map((link) => (
            <li key={link.subject} className="arcade-inset p-3">
              <span className="text-highlight font-semibold">{link.subject}</span>
              <p className="text-muted-foreground mt-1">{link.contribution}</p>
            </li>
          ))}
        </ul>
      </DialogSection>

      <DialogSection title="Skills you'll use">
        <Chips items={skills} />
      </DialogSection>

      <ArcadeDisclosure
        title="Questions you could ask"
        value="questions"
        summary="Use these prompts to shape your investigation."
      >
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          {quest.researchQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </ArcadeDisclosure>

      <ArcadeDisclosure
        title="Where this could lead"
        value="pathways"
        summary="Degrees, apprenticeships, careers and local organisations."
      >
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="text-accent mb-1.5 text-xs uppercase">Degrees</p>
            <Chips items={quest.whereThisCouldLead.degrees} />
          </div>
          <div>
            <p className="text-accent mb-1.5 text-xs uppercase">Apprenticeships</p>
            <Chips items={quest.whereThisCouldLead.apprenticeships} />
          </div>
          <div>
            <p className="text-accent mb-1.5 text-xs uppercase">Careers</p>
            <Chips items={quest.whereThisCouldLead.careers} />
          </div>
          <div>
            <p className="text-accent mb-1.5 text-xs uppercase">Local organisations</p>
            <Chips items={quest.whereThisCouldLead.localOrganisations} />
          </div>
        </div>
      </ArcadeDisclosure>
    </ArcadeDialog>
  );
}
