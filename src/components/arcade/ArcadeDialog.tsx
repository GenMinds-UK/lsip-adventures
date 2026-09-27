import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Arcade-styled modal on Radix Dialog: focus is trapped inside, moves to the
 * dialog on open and returns to the trigger on close; Escape and a click on
 * the backdrop both close it. Slides up as a sheet on small screens.
 */
export function ArcadeDialog({
  onClose,
  eyebrow,
  title,
  description,
  children,
  footer,
  className,
}: {
  onClose: () => void;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <Dialog.Root open onOpenChange={(open) => (open ? undefined : onClose())}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-background/80 fixed inset-0 z-50 flex items-end justify-center backdrop-blur-sm sm:items-center sm:p-6">
          <Dialog.Content
            className={cn(
              "arcade-panel relative flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-b-none focus:outline-none sm:rounded-b-lg",
              className,
            )}
            {...(description ? {} : { "aria-describedby": undefined })}
          >
            <div className="border-border bg-surface-2 flex items-start justify-between gap-3 border-b-2 p-4">
              <div className="min-w-0">
                {eyebrow ? (
                  <p className="text-accent text-[0.65rem] tracking-wide uppercase">{eyebrow}</p>
                ) : null}
                <Dialog.Title className="font-display text-highlight mt-1.5 text-[0.75rem] leading-relaxed">
                  {title}
                </Dialog.Title>
              </div>
              <Dialog.Close
                aria-label="Close"
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring shrink-0 rounded p-1 focus-visible:ring-2 focus-visible:outline-none"
              >
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>

            <div className="flex flex-col gap-6 overflow-y-auto p-5 text-sm leading-relaxed">
              {description ? (
                <Dialog.Description className="text-foreground/90">
                  {description}
                </Dialog.Description>
              ) : null}
              {children}
            </div>

            {footer ? (
              <div className="border-border bg-surface-2 border-t-2 p-4">{footer}</div>
            ) : null}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function DialogSection({
  title,
  children,
  tone = "plain",
}: {
  title: string;
  children: ReactNode;
  tone?: "plain" | "highlight";
}) {
  return (
    <section
      className={cn(
        "flex flex-col gap-2",
        tone === "highlight" && "border-highlight/50 bg-surface-2 rounded-md border-2 p-4",
      )}
    >
      <h3
        className={cn(
          "font-display text-[0.6rem] tracking-widest uppercase",
          tone === "highlight" ? "text-highlight" : "text-accent",
        )}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}
