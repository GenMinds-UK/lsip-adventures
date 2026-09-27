import { Search, X } from "lucide-react";
import { useId, useMemo, useState, type KeyboardEvent } from "react";
import type { Place } from "@/data/generated/places";
import { REGION_META } from "@/data/regions";
import { searchPlaces } from "@/lib/places";
import { cn } from "@/lib/utils";

/**
 * Town or city search over the hardcoded North West gazetteer, following the
 * ARIA combobox pattern. What the student types never leaves the browser.
 */
export function PlacePicker({ onPick }: { onPick: (place: Place) => void }) {
  const id = useId();
  const listId = `${id}-list`;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const results = useMemo(() => searchPlaces(query), [query]);
  const showList = open && results.length > 0;
  const noMatch = query.trim().length >= 2 && results.length === 0;

  const pick = (place: Place) => {
    setQuery(place.name);
    setOpen(false);
    onPick(place);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActive((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      const place = results[active];
      if (showList && place) {
        event.preventDefault();
        pick(place);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <label htmlFor={`${id}-input`} className="sr-only">
        Your town or city
      </label>
      <Search
        className="text-muted-foreground pointer-events-none absolute top-6 left-3 h-4 w-4 -translate-y-1/2"
        aria-hidden
      />
      <input
        id={`${id}-input`}
        type="text"
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={showList ? `${id}-option-${active}` : undefined}
        autoComplete="off"
        value={query}
        placeholder="Start typing your town or city..."
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
        className="arcade-inset focus-visible:ring-ring h-12 w-full pr-10 pl-10 text-sm focus-visible:ring-2 focus-visible:outline-none"
      />
      {query ? (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setOpen(false);
          }}
          aria-label="Clear search"
          className="text-muted-foreground hover:text-foreground absolute top-6 right-3 -translate-y-1/2"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}

      <ul
        id={listId}
        role="listbox"
        aria-label="Matching places"
        hidden={!showList}
        className="border-border bg-surface absolute inset-x-0 top-full z-30 mt-1 max-h-80 overflow-y-auto rounded-md border-2 shadow-lg"
      >
        {results.map((place, index) => (
          <li
            key={`${place.name}-${place.council}`}
            id={`${id}-option-${index}`}
            role="option"
            aria-selected={index === active}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => pick(place)}
            onMouseEnter={() => setActive(index)}
            className={cn(
              "flex cursor-pointer flex-col gap-0.5 px-3 py-2.5 text-sm",
              index === active && "bg-surface-2",
            )}
          >
            <span className="text-foreground">{place.name}</span>
            <span className="text-muted-foreground text-xs">
              {place.council} · {REGION_META[place.region].name}
            </span>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground mt-2 text-xs" aria-live="polite">
        {noMatch
          ? `We couldn't find "${query.trim()}". Try a nearby town, or pick your area below.`
          : ""}
      </p>
    </div>
  );
}
