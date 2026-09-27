import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { StageIntro } from "@/components/journey/StageIntro";
import { QuestCard } from "@/components/quests/QuestCard";
import { QuestDialog } from "@/components/quests/QuestDialog";
import { useJourney } from "@/lib/journey";

export const Route = createFileRoute("/journey/quests")({
  head: () => ({ meta: [{ title: "Research quests | LSIP Adventures" }] }),
  component: QuestsStage,
});

function QuestsStage() {
  const { region, subjects, results, pinnedQuestId } = useJourney();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<string | null>(null);
  const open = results.quests.find((result) => result.quest.id === openId);

  const setPinned = (questId: string | undefined) =>
    navigate({
      to: "/journey/quests",
      search: (previous) => ({ ...previous, quest: questId }),
      replace: true,
      resetScroll: false,
    });

  return (
    <>
      <StageIntro title="Your research quests">
        <p>
          These four projects sit where your {subjects.length} A levels meet {region.name}'s skills
          needs. Each one is sized for a small group of sixth-form students alongside their studies,
          and each could grow into an EPQ. Tap a quest to see how every one of your subjects feeds
          in.
        </p>
        <p className="text-xs">Pin the one you like best and it'll go on your summary.</p>
      </StageIntro>

      {results.quests.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {results.quests.map((result) => (
            <QuestCard
              key={result.quest.id}
              result={result}
              pinned={result.quest.id === pinnedQuestId}
              onOpen={() => setOpenId(result.quest.id)}
            />
          ))}
        </div>
      ) : (
        <p className="arcade-panel text-muted-foreground p-5 text-sm">
          Quests for {region.name} are still being written. Check back soon.
        </p>
      )}

      {open ? (
        <QuestDialog
          result={open}
          pinned={open.quest.id === pinnedQuestId}
          onClose={() => setOpenId(null)}
          onPin={() => {
            void setPinned(open.quest.id === pinnedQuestId ? undefined : open.quest.id);
            setOpenId(null);
          }}
        />
      ) : null}
    </>
  );
}
