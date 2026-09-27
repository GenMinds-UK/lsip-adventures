# Places and LSIP areas — research notes (R4)

## Method

**`lsip_areas.csv`** (Task 2). Fetched the GOV.UK notice with `curl` and parsed the raw HTML with
Python's `html.parser`/BeautifulSoup rather than relying on a summarised fetch, so that the
`name` and `erb_name` values are copied byte-for-byte from the `<td>` cells rather than
paraphrased. The page has 9 `<table>` elements, one per English region heading, with 39 data
rows in total (`<tr>` with a leading `<td>`) — confirmed twice, once via an LLM-summarised
`WebFetch` pass and once via a direct HTML parse of the same fetched file; the two matched
except for two South West rows where the summarised pass had trimmed a parenthetical suffix
that is genuinely present in the GOV.UK cell (see "Uncertain/edge cases" below).

`england_region` was taken from the page's own section heading for each row, mapped to the
canonical list given in the task ("East" → "East of England", "Greater London" → "London",
the rest unchanged). `region` (one of the 5 NW ids) was set only for the 5 North West rows;
every other area's `region` is empty, as instructed.

**`places.csv`** (Task 1). Built from standard UK local-government geography (ceremonial
county → metropolitan borough/unitary/district → settlement), which is well documented and
consistent across sources. Every row's council assignment either:
- follows directly from the fixed council list given for each region id in the task, or
- was cross-checked against Wikipedia and/or the relevant council's own website when the
  place sits near a boundary or was named in the task's disambiguation list.

Web searches were run (via Wikipedia articles, council sites `sthelens.gov.uk`,
`pendle.gov.uk`, and GOV.UK) for every case in the task's explicit disambiguation checklist,
plus several more duplicate-name pairs discovered independently while assembling the list
(Eccleston, Orrell, Ince, Walton, Middleton, Halton, Billinge — see table below). Each search
is cited inline in the table.

CSV files were written with Python's `csv` module (UTF-8, no BOM, `\n` line endings) directly
to `research/data/places.csv` and `research/data/lsip_areas.csv`. After writing, both files
were re-parsed to check: exact row counts, zero duplicate `name` values, every `region` value
is one of the 5 valid ids, no empty `name`/`council` cells, and — for `places.csv` — that every
alias shared between two rows is a *deliberate* disambiguation pair (printed and reviewed by
hand; see the collision list in the table below, which matches exactly the intended pairs and
nothing else).

## Sources

- GOV.UK, [Notice of designated Employer Representative Bodies](https://www.gov.uk/government/publications/designated-employer-representative-bodies/notice-of-designated-employer-representative-bodies) (fetched 2026-09-27; page states it was last updated 10 July 2026) — source for all of `lsip_areas.csv`, including the "Locations covered" text used to double-check several `places.csv` council assignments (e.g. it lists Cheshire East/Cheshire West and Chester/Warrington under "Cheshire and Warrington", and Halton/Knowsley/Liverpool/Sefton/St Helens/Wirral under "Liverpool City Region").
- Wikipedia articles for each place named in the disambiguation table below (standard infobox gives the civil parish/metropolitan borough/unitary authority).
- St Helens Borough Council pages for Eccleston, Rainford, Billinge and Seneley Green wards.
- Pendle Borough Council page confirming Barnoldswick and Earby are administered from Pendle despite being historically in the West Riding of Yorkshire.

## Ambiguous / duplicate-name cases

| Case | Resolution |
|---|---|
| Ashton-under-Lyne vs Ashton-in-Makerfield | Kept as their existing distinct full names (`Ashton-under-Lyne`, council Tameside; `Ashton-in-Makerfield`, council Wigan); both carry alias `Ashton` so a search on the short form surfaces both for disambiguation. |
| Hale (Trafford) vs Hale village (Halton) | Two rows using the exact qualified names given in the task brief: `Hale (Trafford)` and `Hale village (Halton)`, both aliased `Hale`. |
| Cheadle (Stockport) | Only one `Cheadle` in scope — the Staffordshire Cheadle is outside the North West and was not added, per the task. No qualifier needed. |
| Middleton (Rochdale borough) | Confirmed via Wikipedia. **Also found** a second, much smaller `Middleton` — a village of ~810 people in the City of Lancaster district, post town Morecambe (LA3). Added both as `Middleton (Rochdale)` and `Middleton (Lancaster)`, both aliased `Middleton`, since a resident of the Lune valley village might genuinely type just "Middleton". |
| Widnes / Runcorn | Confirmed Borough of Halton (Liverpool City Region), not Cheshire. |
| Ellesmere Port and Neston | Confirmed Cheshire West and Chester, not Wirral. |
| Skelmersdale and Ormskirk | Confirmed West Lancashire district. |
| Penrith | Confirmed Westmorland and Furness (former Eden district). |
| Millom | Confirmed Cumberland (former Copeland district). |
| Whiston | Confirmed Knowsley. |
| Hindley | Confirmed Wigan. |
| Newton-le-Willows | Confirmed St Helens (Merseyside), not Wigan — distinct from the unrelated village of Lowton, which is Wigan and sits just east of it. |
| Golborne | Confirmed Wigan. |
| Irlam | Confirmed Salford. |
| Partington | Confirmed Trafford. |
| **Eccleston** (found independently) | Two separate places of this name in scope: `Eccleston (Chorley)` in Lancashire, and `Eccleston (St Helens)`, a civil parish in the Metropolitan Borough of St Helens. A third, distinctly-named `Great Eccleston` (Wyre district) needed no qualifier since its full name already differs. All three carry the alias `Eccleston` where their own name doesn't already contain it. |
| **Orrell** (found independently) | `Orrell (Wigan)` (suburb of Wigan) and `Orrell (Sefton)` (urban area east of Bootle, in Sefton, Merseyside) — both aliased `Orrell`. |
| **Ince** (found independently) | `Ince` (Cheshire West and Chester, near Ellesmere Port) and `Ince-in-Makerfield` (Wigan) — the Wigan one is aliased `Ince` since that's its common short form locally. |
| **Walton** (found independently) | `Walton (Liverpool)` (the well-known Liverpool neighbourhood/ward) and `Walton (Warrington)` (a civil parish — Lower Walton/Higher Walton — southwest of Warrington town) — both aliased `Walton`. |
| **Halton** (found independently) | The Borough of Halton (Widnes/Runcorn, Liverpool City Region) keeps the unqualified name `Halton` since that's overwhelmingly the dominant referent. A small, separate village 3 miles east of Lancaster — `Halton-on-Lune`, in the City of Lancaster district — was added under its more specific common name, aliased `Halton` too, so a search for the bare word still surfaces both. |
| **Billinge** (found independently) | This village genuinely straddles two boroughs: Billinge Higher End is in Wigan, Billinge Chapel End is in St Helens. Added as two rows, `Billinge (Wigan)` and `Billinge (St Helens)`, both aliased `Billinge`, following the same pattern as the Hale case above. |

## Flagged for further verification

Nothing in the delivered CSVs is prefixed `VERIFY:` — every row above was either given directly
by the task brief or checked against at least one authoritative source (Wikipedia infobox,
council website, or the GOV.UK notice itself). Two lower-confidence judgement calls worth
flagging to a human reviewer, though, rather than treated as unverified facts:

- **Billinge** — the split above is well documented, but which side a given student would
  consider "their" Billinge may still be a coin flip in practice; both rows point to the correct
  council either way.
- Common English place-name elements (Clifton, Newton, Woodside, and similar) were **not**
  exhaustively cross-checked for every possible duplicate across the five regions beyond the
  cases the task named and the several this pass turned up unprompted (Eccleston, Orrell,
  Ince, Walton, Middleton, Halton, Billinge). It is possible a small, obscure hamlet
  sharing a name with a larger included settlement was missed; none of the well-known
  towns/suburbs a teenager would plausibly type appear to be affected.
- The GOV.UK South West rows `Greater Devon` and `Somerset` carry a parenthetical suffix
  ("comprised of part of the existing Heart of the South West LSIP") that is genuinely part of
  the table cell text (confirmed in the raw HTML, not a footnote marker) — copied verbatim into
  `name` per the "exactly as on GOV.UK" instruction, even though it makes those two `name`
  values unusually long. Neither is in the North West so it has no effect on `region`.
