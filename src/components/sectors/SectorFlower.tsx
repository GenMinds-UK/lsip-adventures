import { useState } from "react";
import { FitBlocks } from "@/components/journey/FitMeter";
import { SectorDialog } from "@/components/sectors/SectorDialog";
import { PixelHeading } from "@/components/arcade/PixelHeading";
import type { PriorityResult } from "@/lib/results";
import { cn } from "@/lib/utils";

const TONES = ["text-primary", "text-accent", "text-highlight"];

const SIZE = 340;
const CENTRE = SIZE / 2;
const INNER = 34;
const OUTER = 148;

function point(radius: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return [CENTRE + radius * Math.cos(rad), CENTRE + radius * Math.sin(rad)] as const;
}

function band(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = point(r0, a0);
  const [x1, y1] = point(r1, a0);
  const [x2, y2] = point(r1, a1);
  const [x3, y3] = point(r0, a1);
  return [
    `M ${x0} ${y0}`,
    `L ${x1} ${y1}`,
    `A ${r1} ${r1} 0 0 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${r0} ${r0} 0 0 0 ${x0} ${y0}`,
    "Z",
  ].join(" ");
}

/**
 * One petal per LSIP priority, one band per role; a band lights up as more of
 * that role's skills are covered. The SVG is decorative: the list beside it is
 * the accessible, interactive version.
 */
export function SectorFlower({
  priorities,
  regionName,
}: {
  priorities: PriorityResult[];
  regionName: string;
}) {
  const [open, setOpen] = useState<PriorityResult | null>(null);
  const petals = [...priorities].sort((a, b) => a.priority.order - b.priority.order);
  const step = 360 / Math.max(petals.length, 1);
  const gap = 4;
  const matched = priorities.reduce(
    (total, p) => total + p.roles.filter((role) => role.matched).length,
    0,
  );

  return (
    <div className="arcade-panel p-5 sm:p-6">
      <PixelHeading as="h2">{regionName}'s LSIP priorities</PixelHeading>
      <p className="text-muted-foreground mt-2 text-sm">
        Ranked by how well your skills fit each one. Tap a priority to see the roles and the gaps
        you could help close.
      </p>

      <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row lg:items-start">
        <svg
          style={{ order: 2 }}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full max-w-[340px] shrink-0"
          aria-hidden
        >
          {petals.map((result, index) => {
            const a0 = index * step + gap / 2;
            const a1 = (index + 1) * step - gap / 2;
            const roles = result.roles;
            const thickness = (OUTER - INNER) / Math.max(roles.length, 1);
            const tone = TONES[index % TONES.length];
            const [lx, ly] = point(OUTER + 18, (a0 + a1) / 2);
            return (
              <g
                key={result.priority.id}
                className={cn(tone, "cursor-pointer")}
                onClick={() => setOpen(result)}
              >
                {roles.map((role, ri) => (
                  <path
                    key={role.item.title}
                    d={band(INNER + ri * thickness + 1.5, INNER + (ri + 1) * thickness, a0, a1)}
                    fill="currentColor"
                    fillOpacity={role.matched ? 0.85 : 0.08 + role.share * 0.45}
                    stroke="currentColor"
                    strokeOpacity={0.35}
                    strokeWidth={0.75}
                  />
                ))}
                <text
                  x={lx}
                  y={ly}
                  textAnchor={lx > CENTRE + 4 ? "start" : lx < CENTRE - 4 ? "end" : "middle"}
                  dominantBaseline="middle"
                  className="pointer-events-none fill-current text-[9px] font-semibold"
                >
                  {result.priority.short}
                </text>
              </g>
            );
          })}
          <circle cx={CENTRE} cy={CENTRE} r={INNER - 6} className="text-primary/20 fill-current" />
          <text
            x={CENTRE}
            y={CENTRE - 4}
            textAnchor="middle"
            className="fill-current text-[14px] font-bold"
          >
            {matched}
          </text>
          <text
            x={CENTRE}
            y={CENTRE + 9}
            textAnchor="middle"
            className="fill-current text-[7px] opacity-70"
          >
            roles
          </text>
        </svg>

        <ol className="flex w-full flex-col gap-2" style={{ order: 1 }}>
          {priorities.map((result) => {
            const roleCount = result.roles.filter((role) => role.matched).length;
            const gapCount = result.gaps.filter((g) => g.matched).length;
            return (
              <li key={result.priority.id}>
                <button
                  type="button"
                  onClick={() => setOpen(result)}
                  className="border-border bg-surface hover:border-accent hover:bg-surface-2 focus-visible:ring-ring flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-md border-2 px-3 py-2.5 text-left text-sm focus-visible:ring-2 focus-visible:outline-none"
                >
                  <span>{result.priority.name}</span>
                  <span className="text-accent flex shrink-0 items-center gap-2 text-xs whitespace-nowrap">
                    {roleCount} {roleCount === 1 ? "role" : "roles"} · {gapCount}{" "}
                    {gapCount === 1 ? "gap" : "gaps"}
                    <FitBlocks fit={result.fit} label="Fit" />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {open ? <SectorDialog result={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
