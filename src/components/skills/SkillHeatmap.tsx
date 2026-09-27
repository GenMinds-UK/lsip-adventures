import { REGION_DEMAND } from "@/data/generated/demand";
import type { SkillId } from "@/data/generated/taxonomy";
import { REGION_IDS, REGION_META, type RegionId } from "@/data/regions";
import { cn } from "@/lib/utils";

const DEMAND_FILL = [
  "bg-surface",
  "bg-accent/15",
  "bg-accent/30",
  "bg-accent/50",
  "bg-accent/70",
  "bg-accent/90",
] as const;

const DEMAND_WORDS = ["not named", "implied", "mentioned", "a gap", "a big gap", "a top gap"];

/** One skill's LSIP demand (0–5) in each North West area, current area outlined. */
export function SkillHeatmapRow({ skill, current }: { skill: SkillId; current: RegionId }) {
  return (
    <ul className="grid grid-cols-5 gap-1" aria-label="Demand across the North West">
      {REGION_IDS.map((id) => {
        const demand = REGION_DEMAND[id][skill];
        return (
          <li
            key={id}
            title={`${REGION_META[id].name}: ${DEMAND_WORDS[demand]}`}
            className={cn(
              "flex h-7 items-center justify-center rounded-[3px] border text-[0.6rem]",
              DEMAND_FILL[demand] ?? DEMAND_FILL[0],
              id === current ? "border-highlight border-2" : "border-border",
            )}
          >
            <span aria-hidden>{demand}</span>
            <span className="sr-only">
              {REGION_META[id].name}: demand {demand} of 5, {DEMAND_WORDS[demand]}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function SkillHeatmapHeader({ current }: { current: RegionId }) {
  return (
    <div className="grid grid-cols-5 gap-1" aria-hidden>
      {REGION_IDS.map((id) => (
        <span
          key={id}
          className={cn(
            "truncate text-center text-[0.55rem] leading-tight uppercase",
            id === current ? "text-highlight" : "text-muted-foreground",
          )}
        >
          {REGION_META[id].short}
        </span>
      ))}
    </div>
  );
}
