import { Compass, GraduationCap, Pin } from "lucide-react";
import type { QuestResult } from "@/lib/results";
import { cn } from "@/lib/utils";

export function QuestCard({
  result,
  pinned,
  onOpen,
}: {
  result: QuestResult;
  pinned: boolean;
  onOpen: () => void;
}) {
  const { quest, priority } = result;
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "arcade-panel hover:border-accent focus-visible:ring-ring group flex h-full w-full flex-col gap-3 p-5 text-left transition-colors focus-visible:ring-2 focus-visible:outline-none",
        pinned && "border-highlight",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        {priority ? (
          <p className="text-accent text-[0.6rem] tracking-wide uppercase">{priority.name}</p>
        ) : (
          <span />
        )}
        {pinned ? (
          <span className="text-highlight inline-flex shrink-0 items-center gap-1 text-[0.6rem] uppercase">
            <Pin className="h-3 w-3" aria-hidden /> Pinned
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-highlight text-[0.72rem] leading-relaxed">{quest.title}</h3>
      <p className="text-foreground/90 text-sm">{quest.strapline}</p>
      <div className="text-muted-foreground mt-auto grid grid-cols-2 gap-2 text-xs">
        <span className="flex items-center gap-1.5">
          <Compass className="text-accent h-3.5 w-3.5" aria-hidden />
          {result.subjectLinks.length} subject links
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap className="text-accent h-3.5 w-3.5" aria-hidden />
          {quest.whereThisCouldLead.careers.length} career routes
        </span>
      </div>
    </button>
  );
}
