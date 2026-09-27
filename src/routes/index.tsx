import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { AsciiTitle } from "@/components/arcade/AsciiTitle";
import { ArcadeButton } from "@/components/arcade/ArcadeButton";
import { ArcadeFrame } from "@/components/arcade/ArcadeFrame";
import { REGION_IDS, REGION_META } from "@/data/regions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LSIP Adventures" },
      {
        name: "description",
        content:
          "A quest to explore how A level choices can lead to real opportunities. Pick where you live and your A levels, and see how they match your area's Local Skills Improvement Plan.",
      },
      { property: "og:title", content: "LSIP Adventures" },
      {
        property: "og:description",
        content:
          "A quest to explore how A level choices can lead to real opportunities, built on the North West's Local Skills Improvement Plans.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TitleScreen,
});

function TitleScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && event.target.closest("button, a, input")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        void navigate({ to: "/where" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  const areas = REGION_IDS.map((id) => REGION_META[id].name);

  return (
    <ArcadeFrame className="flex min-h-screen flex-col items-center justify-center gap-10 py-16">
      <div className="animate-arcade-float w-full">
        <AsciiTitle />
      </div>

      <div className="arcade-panel w-full max-w-sm p-6">
        <p className="text-muted-foreground mb-6 text-center text-sm leading-relaxed">
          Choose where you live and your A levels. See the skills you'll build, and how they match
          what employers near you need.
        </p>
        <ArcadeButton size="lg" className="w-full" onClick={() => navigate({ to: "/where" })}>
          <span className="animate-arcade-blink" aria-hidden>
            ▶
          </span>
          Start
        </ArcadeButton>
        <p className="text-muted-foreground mt-5 text-center text-xs">
          Press <span className="text-highlight">Enter</span> or tap Start
        </p>
      </div>

      <p className="text-muted-foreground max-w-md text-center text-xs leading-relaxed">
        Built on the Local Skills Improvement Plans written by employers across the North West:{" "}
        {areas.slice(0, -1).join(", ")} and {areas.at(-1)}.
      </p>
    </ArcadeFrame>
  );
}
