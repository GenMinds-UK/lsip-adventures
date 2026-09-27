import { Flame, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ArcadeButton } from "@/components/arcade/ArcadeButton";
import { SubjectDialog } from "@/components/subjects/SubjectDialog";
import { SubjectSlots } from "@/components/subjects/SubjectSlots";
import type { SkillId } from "@/data/generated/taxonomy";
import type { Region } from "@/data/regions/types";
import { SUBJECTS, type Subject, type SubjectName } from "@/data/subjects";
import { MAX_SUBJECTS, MIN_SUBJECTS } from "@/lib/journey";
import type { SubjectInsight } from "@/lib/results";
import { cn } from "@/lib/utils";

export function SubjectPicker({
  region,
  insights,
  skillRanks,
  initialChosen,
  onSubmit,
}: {
  region: Region;
  insights: Record<SubjectName, SubjectInsight>;
  skillRanks: Record<SkillId, number>;
  initialChosen: SubjectName[];
  onSubmit: (subjects: SubjectName[]) => void;
}) {
  const [query, setQuery] = useState("");
  const [chosen, setChosen] = useState<SubjectName[]>(initialChosen);
  const [open, setOpen] = useState<Subject | null>(null);

  const grouped = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const map = new Map<string, Subject[]>();
    for (const subject of SUBJECTS) {
      if (needle && !subject.name.toLowerCase().includes(needle)) continue;
      map.set(subject.group, [...(map.get(subject.group) ?? []), subject]);
    }
    return Array.from(map.entries());
  }, [query]);

  const toggle = (name: SubjectName) => {
    setChosen((current) => {
      if (current.includes(name)) return current.filter((s) => s !== name);
      if (current.length >= MAX_SUBJECTS) return current;
      return [...current, name];
    });
  };

  const full = chosen.length === MAX_SUBJECTS;
  const ready = chosen.length >= MIN_SUBJECTS;

  return (
    <div className="flex flex-col gap-6 pb-40">
      <div className="arcade-panel p-5 sm:p-6">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pick the {MIN_SUBJECTS} or {MAX_SUBJECTS} A levels you're studying or thinking about. Tap
          any subject to see how it connects to {region.name}.{" "}
          <span className="text-highlight inline-flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" aria-hidden /> In demand here
          </span>{" "}
          marks the subjects whose skills this area's plan needs most.
        </p>

        <div className="relative mt-5">
          <Search
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search subjects..."
            aria-label="Search A level subjects"
            className="arcade-inset focus-visible:ring-ring h-12 w-full pr-10 pl-10 text-sm focus-visible:ring-2 focus-visible:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      {grouped.length === 0 ? (
        <p className="text-muted-foreground px-1 text-sm">
          No subjects match “{query}”. Try a shorter word.
        </p>
      ) : null}

      <div className="flex flex-col gap-6">
        {grouped.map(([group, subjects]) => (
          <section key={group}>
            <h2 className="font-display text-accent mb-3 text-[0.6rem] tracking-widest uppercase">
              {group}
            </h2>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => {
                const selected = chosen.includes(subject.name);
                const hot = insights[subject.name].inDemand;
                return (
                  <button
                    key={subject.name}
                    type="button"
                    onClick={() => setOpen(subject)}
                    aria-pressed={selected}
                    aria-label={`${subject.name}${hot ? ", in demand here" : ""}${selected ? ", chosen" : ""}`}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md border-2 px-3 py-2.5 text-left text-sm transition-colors",
                      "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                      selected
                        ? "border-highlight bg-primary text-primary-foreground"
                        : "border-border bg-surface hover:border-accent hover:bg-surface-2",
                    )}
                  >
                    {subject.name}
                    {hot ? <Flame className="text-highlight h-3.5 w-3.5" aria-hidden /> : null}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {chosen.length} of {MIN_SUBJECTS} required subjects selected.{" "}
        {full ? "All slots are full." : ""}
      </p>

      <div className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t-2 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:px-6">
          <SubjectSlots chosen={chosen} onRemove={(name) => toggle(name as SubjectName)} />
          <ArcadeButton
            type="button"
            size="md"
            disabled={!ready}
            onClick={() => onSubmit(chosen)}
            className="w-full"
          >
            {ready ? "See the skills you'll build" : `Pick ${MIN_SUBJECTS - chosen.length} more`}
          </ArcadeButton>
          {ready && !full ? (
            <p className="text-muted-foreground text-center text-xs">
              You can add a fourth subject, or carry on with three.
            </p>
          ) : null}
        </div>
      </div>

      {open ? (
        <SubjectDialog
          subject={open}
          region={region}
          insight={insights[open.name]}
          skillRanks={skillRanks}
          selected={chosen.includes(open.name)}
          full={full}
          onClose={() => setOpen(null)}
          onToggle={() => {
            toggle(open.name);
            setOpen(null);
          }}
        />
      ) : null}
    </div>
  );
}
