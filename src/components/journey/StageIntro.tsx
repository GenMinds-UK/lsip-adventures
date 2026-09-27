import type { ReactNode } from "react";
import { PixelHeading } from "@/components/arcade/PixelHeading";

/** The heading panel at the top of each stage. */
export function StageIntro({
  title,
  children,
  aside,
}: {
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="arcade-panel mb-6 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <PixelHeading as="h1">{title}</PixelHeading>
        {aside}
      </div>
      {children ? (
        <div className="text-muted-foreground mt-3 flex flex-col gap-2 text-sm leading-relaxed">
          {children}
        </div>
      ) : null}
    </div>
  );
}
