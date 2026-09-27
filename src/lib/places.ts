import { PLACES, type Place } from "@/data/generated/places";

/** Lower-case, "Saint" → "st", hyphens to spaces, no punctuation. */
export function normalisePlace(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/[-–—/]/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\bsaint\b/g, "st")
    .replace(/\s+/g, " ")
    .trim();
}

type IndexedPlace = { place: Place; terms: string[] };

const INDEX: IndexedPlace[] = PLACES.map((place) => ({
  place,
  terms: [place.name, ...place.aliases].map(normalisePlace),
}));

/** How well a search term matches: lower is better, null for no match. */
function matchRank(term: string, query: string): number | null {
  if (term === query) return 0;
  if (term.startsWith(query)) return 1;
  if (term.split(" ").some((word) => word.startsWith(query))) return 2;
  if (query.length >= 3 && term.includes(query)) return 3;
  return null;
}

/** Places matching what the student typed, best matches first. */
export function searchPlaces(input: string, limit = 8): Place[] {
  const query = normalisePlace(input);
  if (query.length < 2) return [];
  return INDEX.flatMap(({ place, terms }) => {
    const ranks = terms.map((term) => matchRank(term, query)).filter((r) => r !== null);
    return ranks.length ? [{ place, rank: Math.min(...ranks) }] : [];
  })
    .sort((a, b) => a.rank - b.rank || a.place.name.localeCompare(b.place.name))
    .slice(0, limit)
    .map(({ place }) => place);
}
