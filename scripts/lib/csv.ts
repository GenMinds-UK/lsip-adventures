/**
 * Minimal RFC 4180 CSV reader for the research data. It has no dependencies,
 * so the data scripts run with plain `node --experimental-strip-types`.
 */
import { existsSync, readFileSync } from "node:fs";

export type Row = { line: number; values: Record<string, string> };

export function parseCsv(text: string): string[][] {
  const records: string[][] = [];
  let record: string[] = [];
  let field = "";
  let quoted = false;
  const source = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (quoted) {
      if (char === '"') {
        if (source[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      record.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && source[i + 1] === "\n") i += 1;
      record.push(field);
      records.push(record);
      record = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field !== "" || record.length > 0) {
    record.push(field);
    records.push(record);
  }
  return records.filter((r) => r.some((value) => value.trim() !== ""));
}

export class Problems {
  errors: string[] = [];
  warnings: string[] = [];

  error(where: string, message: string) {
    this.errors.push(`${where}: ${message}`);
  }

  warn(where: string, message: string) {
    this.warnings.push(`${where}: ${message}`);
  }
}

/**
 * Read a CSV file into rows keyed by header. Missing files and missing
 * required columns are recorded as errors (or skipped when `optional`).
 */
export function readCsv(
  path: string,
  columns: readonly string[],
  problems: Problems,
  { optional = false }: { optional?: boolean } = {},
): Row[] {
  if (!existsSync(path)) {
    if (!optional) problems.error(path, "file is missing");
    return [];
  }
  const [header, ...records] = parseCsv(readFileSync(path, "utf8"));
  if (!header) {
    problems.error(path, "file is empty");
    return [];
  }
  const names = header.map((name) => name.trim());
  for (const column of columns) {
    if (!names.includes(column)) problems.error(path, `missing column "${column}"`);
  }
  return records.map((values, index) => {
    const row: Record<string, string> = {};
    names.forEach((name, i) => {
      row[name] = (values[i] ?? "").trim();
    });
    // +2: one for the header row, one because lines are 1-based.
    return { line: index + 2, values: row };
  });
}

export function list(value: string): string[] {
  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}
