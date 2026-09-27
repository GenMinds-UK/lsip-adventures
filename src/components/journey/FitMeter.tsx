import type { Tier } from "@/lib/scoring";
import { TIER_LABELS } from "@/lib/results";
import { cn } from "@/lib/utils";

const BLOCKS = 10;

/**
 * Arcade "XP bar" for a 0–100 fit. The tier is the headline; the bar shows
 * relative strength without printing a raw score that could put students off.
 */
export function TierMeter({ fit, tier, label }: { fit: number; tier: Tier; label?: string }) {
  const filled = Math.max(1, Math.round((fit / 100) * BLOCKS));
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        {label ? <span className="text-muted-foreground text-xs uppercase">{label}</span> : null}
        <TierBadge tier={tier} />
      </div>
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: BLOCKS }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-4 flex-1 rounded-[2px] border",
              i < filled ? TIER_FILL[tier] : "border-border bg-surface",
            )}
          />
        ))}
      </div>
    </div>
  );
}

const TIER_FILL: Record<Tier, string> = {
  strong: "border-highlight bg-highlight",
  good: "border-accent bg-accent",
  emerging: "border-primary bg-primary",
};

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      className={cn(
        "font-display rounded border-2 px-2 py-1 text-[0.55rem] tracking-wider uppercase",
        tier === "strong" && "border-highlight text-highlight",
        tier === "good" && "border-accent text-accent",
        tier === "emerging" && "border-primary text-foreground",
      )}
    >
      {TIER_LABELS[tier]}
    </span>
  );
}

/** Five-block meter for how well subjects fit one priority or quest. */
export function FitBlocks({ fit, label }: { fit: number; label: string }) {
  const filled = fit > 0 ? Math.max(1, Math.round(fit / 20)) : 0;
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`${label}: ${filled} of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-2.5 w-3 rounded-[1px] border",
            i < filled ? "border-accent bg-accent" : "border-border bg-surface",
          )}
        />
      ))}
    </span>
  );
}
