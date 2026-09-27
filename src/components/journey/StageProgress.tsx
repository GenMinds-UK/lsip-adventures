import { Link } from "@tanstack/react-router";
import { STAGES } from "@/lib/journey";
import { cn } from "@/lib/utils";

/**
 * "LEVEL n / 10" progress bar. Stages 4–10 are all calculated from the URL,
 * so any of them can be visited directly once subjects are chosen.
 */
export function StageProgress({ current }: { current: number }) {
  const stage = STAGES[current];
  return (
    <nav aria-label="Journey progress" className="mb-6">
      <p className="font-display text-accent mb-3 text-[0.6rem] tracking-[0.2em] uppercase">
        Level {current + 1} / {STAGES.length}
        {stage ? <span className="text-muted-foreground"> · {stage.title}</span> : null}
      </p>
      <ol className="grid grid-cols-10 gap-1">
        {STAGES.map((item, index) => {
          const state = index < current ? "done" : index === current ? "current" : "todo";
          const block = (
            <span
              className={cn(
                "block h-2.5 rounded-[2px] border transition-colors",
                state === "done" && "border-accent/70 bg-accent/70",
                state === "current" && "border-highlight bg-highlight",
                state === "todo" && "border-border bg-surface",
              )}
            />
          );
          const label = `Level ${index + 1}: ${item.title}`;
          return (
            <li key={item.path}>
              {index === 0 || index === current ? (
                <span aria-current={index === current ? "step" : undefined} title={label}>
                  <span className="sr-only">{label}</span>
                  {block}
                </span>
              ) : (
                <Link
                  to={item.path}
                  search={true}
                  title={label}
                  className="focus-visible:ring-ring block rounded-[2px] focus-visible:ring-2 focus-visible:outline-none"
                >
                  <span className="sr-only">{label}</span>
                  {block}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
