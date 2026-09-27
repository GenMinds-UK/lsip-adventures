import { Star } from "lucide-react";
import { MAX_LEVEL } from "@/lib/scoring";
import { cn } from "@/lib/utils";

const LEVEL_WORDS = ["Not really", "A little", "Regularly", "At the core"] as const;

/** Pixel meter for a 0–3 skill level, with a star when two subjects reinforce it. */
export function SkillBar({ level, reinforced }: { level: number; reinforced?: boolean }) {
  const whole = Math.floor(level);
  const words = LEVEL_WORDS[Math.min(whole, MAX_LEVEL)] ?? LEVEL_WORDS[0];
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="flex gap-0.5" aria-hidden>
        {Array.from({ length: MAX_LEVEL }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-3 w-5 rounded-[2px] border",
              i < whole
                ? "border-highlight bg-highlight"
                : i < level
                  ? "border-highlight bg-[linear-gradient(90deg,var(--color-highlight)_50%,transparent_50%)]"
                  : "border-border bg-surface",
            )}
          />
        ))}
      </span>
      {reinforced ? <Star className="text-accent h-3.5 w-3.5 fill-current" aria-hidden /> : null}
      <span className="sr-only">
        {words}
        {reinforced ? ", boosted because two of your subjects build it" : ""}
      </span>
    </span>
  );
}
