import type { jsPDF } from "jspdf";

export const COLOURS = {
  purple: "#3d1a63",
  magenta: "#c81a7a",
  teal: "#0f8b83",
  ink: "#292530",
  muted: "#665f70",
  lightPurple: "#f5f0f8",
  paleTeal: "#edf7f5",
  rule: "#d9d0df",
  white: "#ffffff",
} as const;

const PAGE = {
  margin: 46,
  footerHeight: 38,
  coverHeight: 146,
  bodyTop: 174,
  textSize: 10.5,
  lineHeight: 14.5,
} as const;

type TextStyle = "normal" | "bold" | "italic";

/** Characters jsPDF's built-in Helvetica can't draw, mapped to safe stand-ins (by code point). */
const REPLACEMENTS = new Map<number, string>([
  [0x2190, "<-"], // leftwards arrow
  [0x2192, "->"], // rightwards arrow
  [0x27f6, "->"], // long rightwards arrow
  [0x2794, "->"], // heavy rightwards arrow
  [0x2264, "<="],
  [0x2265, ">="],
  [0x2605, "*"], // black star
  [0x2606, "*"], // white star
  [0x2b50, "*"], // star emoji
  [0x2713, "v"], // check mark
  [0x2714, "v"], // heavy check mark
  [0x00a0, " "], // no-break space
]);

/** WinAnsi extras beyond Latin-1 that Helvetica can draw: dashes, smart quotes, bullet, ellipsis, euro. */
const WINANSI_EXTRAS = new Set([
  0x2013, 0x2014, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2026, 0x20ac,
]);

export function sanitise(value: string): string {
  let out = "";
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    const replacement = REPLACEMENTS.get(code);
    if (replacement !== undefined) out += replacement;
    else if (code === 0x0a || (code >= 0x20 && code <= 0xff) || WINANSI_EXTRAS.has(code)) {
      out += char;
    }
  }
  return out;
}

/**
 * Drawing helpers for an A4 report: a cover band, section headings, wrapped
 * text, bullets, cards and page footers, all flowing onto new pages as needed.
 */
export function createPdfWriter(doc: jsPDF) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - PAGE.margin * 2;
  const contentBottom = pageHeight - PAGE.footerHeight;
  let y = PAGE.bodyTop;

  const setText = (size: number, colour: string, style: TextStyle = "normal") => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(colour);
  };

  const wrapped = (value: string, width = contentWidth) =>
    doc.splitTextToSize(sanitise(value || ""), width) as string[];

  const newPage = () => {
    doc.addPage();
    y = PAGE.margin + 8;
  };

  const ensureSpace = (height: number) => {
    if (y + height > contentBottom && y > PAGE.margin + 12) newPage();
  };

  const drawLines = (
    lines: string[],
    options: {
      size?: number;
      colour?: string;
      style?: TextStyle;
      lineHeight?: number;
      x?: number;
    } = {},
  ) => {
    const size = options.size ?? PAGE.textSize;
    const lineHeight = options.lineHeight ?? PAGE.lineHeight;
    const x = options.x ?? PAGE.margin;
    setText(size, options.colour ?? COLOURS.ink, options.style);
    for (const line of lines) {
      if (y + lineHeight > contentBottom) newPage();
      doc.text(line, x, y);
      y += lineHeight;
    }
  };

  const text = (
    value: string,
    options: {
      size?: number;
      colour?: string;
      style?: TextStyle;
      gap?: number;
      width?: number;
      lineHeight?: number;
    } = {},
  ) => {
    const size = options.size ?? PAGE.textSize;
    const lineHeight = options.lineHeight ?? PAGE.lineHeight;
    drawLines(wrapped(value, options.width ?? contentWidth), { ...options, size, lineHeight });
    y += options.gap ?? 7;
  };

  const heading = (value: string) => {
    ensureSpace(34);
    y += 5;
    doc.setFillColor(COLOURS.magenta);
    doc.rect(PAGE.margin, y - 11, 4, 15, "F");
    setText(12, COLOURS.purple, "bold");
    doc.text(sanitise(value).toUpperCase(), PAGE.margin + 12, y);
    y += 21;
  };

  const bullets = (items: string[]) => {
    for (const item of items) {
      const lines = wrapped(item, contentWidth - 17);
      ensureSpace(Math.max(lines.length, 1) * PAGE.lineHeight + 4);
      setText(PAGE.textSize, COLOURS.teal);
      doc.text("•", PAGE.margin, y);
      drawLines(lines, { x: PAGE.margin + 16 });
      y += 4;
    }
    y += 3;
  };

  const card = (options: {
    title?: string | undefined;
    label?: string | undefined;
    body?: string | undefined;
    bodyColour?: string;
    fill?: string;
    border?: string;
    titleColour?: string;
    padding?: number;
  }) => {
    const padding = options.padding ?? 12;
    const inner = contentWidth - padding * 2;
    const titleLines = options.title ? wrapped(options.title, inner) : [];
    const labelLines = options.label ? wrapped(options.label, inner) : [];
    const bodyLines = options.body ? wrapped(options.body, inner) : [];
    const lineCount = titleLines.length + labelLines.length + bodyLines.length;
    const height = padding * 2 + Math.max(lineCount, 1) * PAGE.lineHeight + 4;

    ensureSpace(height);
    doc.setFillColor(options.fill ?? COLOURS.lightPurple);
    doc.setDrawColor(options.border ?? COLOURS.rule);
    doc.roundedRect(PAGE.margin, y - 10, contentWidth, height, 5, 5, "FD");
    y += padding;
    if (labelLines.length) {
      drawLines(labelLines, { size: 8.5, colour: COLOURS.teal, style: "bold", lineHeight: 12 });
      y += 2;
    }
    if (titleLines.length) {
      drawLines(titleLines, {
        size: 11,
        colour: options.titleColour ?? COLOURS.purple,
        style: "bold",
      });
      y += 1;
    }
    if (bodyLines.length) drawLines(bodyLines, { colour: options.bodyColour ?? COLOURS.ink });
    y += padding - 4;
    y += 5;
  };

  const cover = ({ eyebrow, title, meta }: { eyebrow: string; title: string; meta: string[] }) => {
    doc.setFillColor(COLOURS.purple);
    doc.rect(0, 0, pageWidth, PAGE.coverHeight, "F");
    doc.setFillColor(COLOURS.magenta);
    doc.rect(0, PAGE.coverHeight, pageWidth, 6, "F");

    setText(8.5, "#91e1db", "bold");
    doc.text(sanitise(eyebrow).toUpperCase(), PAGE.margin, 39);

    const titleLines = wrapped(title, contentWidth - 12).slice(0, 2);
    setText(20, COLOURS.white, "bold");
    doc.text(titleLines, PAGE.margin, 70, { lineHeightFactor: 1.18 });

    setText(9.5, "#eadcf3");
    let metaY = 78 + titleLines.length * 22;
    for (const line of meta) {
      doc.text(wrapped(line, contentWidth)[0] ?? "", PAGE.margin, metaY);
      metaY += 16;
    }
  };

  const footers = (note: string) => {
    const pages = doc.getNumberOfPages();
    for (let page = 1; page <= pages; page += 1) {
      doc.setPage(page);
      doc.setDrawColor(COLOURS.rule);
      doc.line(
        PAGE.margin,
        pageHeight - PAGE.footerHeight + 4,
        pageWidth - PAGE.margin,
        pageHeight - PAGE.footerHeight + 4,
      );
      setText(7.5, COLOURS.muted);
      doc.text(sanitise(note), PAGE.margin, pageHeight - 19);
      doc.text(`${page} / ${pages}`, pageWidth - PAGE.margin, pageHeight - 19, { align: "right" });
    }
  };

  return { text, heading, bullets, card, cover, footers, gap: (space: number) => (y += space) };
}
