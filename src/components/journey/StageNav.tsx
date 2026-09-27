import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { STAGES } from "@/lib/journey";
import { cn } from "@/lib/utils";

const buttonBase =
  "font-display inline-flex items-center justify-center gap-2 rounded-md border-2 px-5 py-3 text-[0.65rem] uppercase tracking-wider transition-transform duration-100 active:translate-y-[5px] active:shadow-none focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

/** Back / Next between stages, carrying the journey's search params. */
export function StageNav({ current }: { current: number }) {
  const previous = STAGES[current - 1];
  const next = STAGES[current + 1];
  return (
    <nav
      aria-label="Stage navigation"
      className="mt-8 flex flex-wrap items-center justify-between gap-3 pb-12"
    >
      {previous && current > 0 ? (
        <Link
          to={previous.path}
          search={true}
          className={cn(
            buttonBase,
            "bg-surface-2 text-foreground border-border shadow-[0_5px_0_0_color-mix(in_oklch,var(--color-background)_80%,black)]",
          )}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          {previous.short}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next.path}
          search={true}
          className={cn(
            buttonBase,
            "bg-primary text-primary-foreground border-primary/40 shadow-[0_5px_0_0_color-mix(in_oklch,var(--color-primary)_55%,black)]",
          )}
        >
          Next: {next.short}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : null}
    </nav>
  );
}
