const LINE_ONE = [
  "██╗     ███████╗██╗██████╗ ",
  "██║     ██╔════╝██║██╔══██╗",
  "██║     ███████╗██║██████╔╝",
  "██║     ╚════██║██║██╔═══╝ ",
  "███████╗███████║██║██║     ",
  "╚══════╝╚══════╝╚═╝╚═╝     ",
].join("\n");

const LINE_TWO = [
  " █████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗███████╗",
  "██╔══██╗██╔══██╗██║   ██║██╔════╝████╗  ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝██╔════╝",
  "███████║██║  ██║██║   ██║█████╗  ██╔██╗ ██║   ██║   ██║   ██║██████╔╝█████╗  ███████╗",
  "██╔══██║██║  ██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ██║   ██║██╔══██╗██╔══╝  ╚════██║",
  "██║  ██║██████╔╝ ╚████╔╝ ███████╗██║ ╚████║   ██║   ╚██████╔╝██║  ██║███████╗███████║",
  "╚═╝  ╚═╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝",
].join("\n");

export function AsciiTitle() {
  return (
    <div className="flex w-full flex-col items-center gap-2 text-center">
      <pre
        aria-hidden
        className="text-accent font-mono leading-[1.05] font-bold whitespace-pre"
        style={{ fontSize: "min(3.4vw, 20px)" }}
      >
        {LINE_ONE}
      </pre>
      <pre
        aria-hidden
        className="text-primary font-mono leading-[1.05] font-bold whitespace-pre"
        style={{ fontSize: "min(1.12vw, 12px)" }}
      >
        {LINE_TWO}
      </pre>
      <h1 className="sr-only">
        LSIP Adventures: a quest to explore how A level choices can lead to real opportunities
      </h1>
      <p
        aria-hidden
        className="font-display text-highlight pixel-shadow mt-3 max-w-xl text-[0.6rem] leading-relaxed tracking-[0.2em] uppercase sm:text-xs"
      >
        A quest to explore how A level choices can lead to real opportunities
      </p>
    </div>
  );
}
