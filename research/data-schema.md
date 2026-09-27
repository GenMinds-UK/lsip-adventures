# Research data schema

The CSV files in `research/data/` are the **source of truth** for every number and short fact in LSIP Adventures. Run `npm run data:compile` to validate them and regenerate `src/data/generated/*.ts`. Never edit the generated files by hand.

## General rules

- CSV follows RFC 4180. Encode files as UTF-8 without a BOM, with a header row. Quote any field that contains a comma, quote or newline, and double any quote inside a quoted field (`""`).
- A column marked *list* holds several values separated by `|`, with no spaces around the separator.
- Ids use lowercase kebab-case (`[a-z0-9]+(-[a-z0-9]+)*`).
- The `subject` column must match a `name` in `src/data/subjects.ts` exactly. For example, `Art & Design (Fine Art)` and `Design & Technology (Product Design)`.
- The `region` column must be one of the five region ids: `cheshire-warrington`, `cumbria`, `greater-manchester`, `lancashire`, `liverpool-city-region`.
- The `skill` column must be an `id` from `skills.csv`.
- Write all text in British English, in a plain, encouraging tone suitable for 16–18 year olds.
- An evidence value is a short note (≤ 200 chars). A source value is a URL, optionally followed by ` p.N` for a page reference.
- If you could not verify a fact, prefix the cell with `VERIFY: `. The compile step reports these but does not fail on them.

## Taxonomy

### `clusters.csv`

| column | notes |
|---|---|
| `id` | kebab-case |
| `name` | ≤ 28 chars |
| `order` | integer, display order |

### `skills.csv`

| column | notes |
|---|---|
| `id` | kebab-case, ≤ 24 chars |
| `cluster` | a `clusters.id` |
| `name` | ≤ 34 chars, e.g. "Data literacy and analysis" |
| `short` | ≤ 14 chars, used for heatmap labels |
| `definition` | one neutral sentence |
| `lsip_terms` | *list* of phrases from the LSIPs that this skill captures |
| `crosswalk` | *list* of `Framework: item` (Skills Builder, Employer Skills Survey, etc.) |

## Matrices

### `subject_skills.csv` (M, one row per subject × skill, every combination present)

| column | notes |
|---|---|
| `subject` | |
| `skill` | |
| `score` | 0–3 |
| `evidence` | required when score ≥ 2: which part of the spec or assessment develops it |
| `source` | URL of the DfE subject content or exam board specification |

### `national_demand.csv` (N, one row per skill)

| column | notes |
|---|---|
| `skill` | |
| `score` | 0–5 |
| `evidence` | |
| `source` | |

## Regions

Each region has its own folder, `research/data/regions/<region-id>/`, so the region agents can work in parallel without write conflicts. The files in these folders have **no `region` column**: the folder name is the region.

### `demand.csv` (D, one row per skill, every skill present)

| column | notes |
|---|---|
| `skill` | |
| `score` | 0–5 |
| `evidence` | a quote or paraphrase from the LSIP |
| `source` | URL + page |

### `region.csv` (exactly one data row)

| column | notes |
|---|---|
| `id` | region id; must match the folder name |
| `name` | e.g. "Greater Manchester" |
| `short` | ≤ 16 chars, e.g. "Greater Manchester", "Cheshire & Warr." |
| `tagline` | ≤ 90 chars, one-line hook |
| `erb_name` | exactly as on GOV.UK |
| `erb_url` | |
| `lsip_title` | |
| `lsip_published` | e.g. "July 2026" |
| `lsip_url` | |
| `authority_name` | strategic authority, or empty |
| `authority_url` | |
| `councils` | *list* |
| `summary` | 2–3 sentences on the economy and what the LSIP is trying to fix |

### `priorities.csv`

| column | notes |
|---|---|
| `id` | unique within its region |
| `order` | integer |
| `name` | ≤ 48 chars |
| `short` | ≤ 18 chars |
| `blurb` | 1–2 sentences |
| `source` | |

### `priority_weights.csv` (W; only list non-zero weights)

| column | notes |
|---|---|
| `priority` | |
| `skill` | |
| `weight` | 1–3 |
| `evidence` | |

### `roles.csv` (3–6 roles per priority)

| column | notes |
|---|---|
| `priority` | |
| `title` | |
| `level` | e.g. "Level 3–4 apprenticeship", "Degree or Level 6 apprenticeship" |
| `what` | one sentence |
| `skills` | *list* of 2–5 skill ids |

### `gaps.csv` (2–5 gaps per priority)

| column | notes |
|---|---|
| `priority` | |
| `text` | the gap in plain words, ≤ 140 chars |
| `skills` | *list* of 1–4 skill ids |
| `source` | |

### `cross_cutting.csv`

| column | notes |
|---|---|
| `title` | |
| `detail` | 1–2 sentences |

### `contacts.csv` (6–12 per region; organisations only, never named individuals or personal emails)

| column | notes |
|---|---|
| `name` | |
| `kind` | `erb`, `authority`, `council`, `growth-hub`, `careers-hub`, `university`, `college`, `sector-body` or `other` |
| `what` | one sentence |
| `why_contact` | one sentence written to the student |
| `url` | a page you have checked loads |
| `checked` | `YYYY-MM-DD` |

## National subject facts

### `tiers.csv` (written by `npm run data:analyse`)

| column | notes |
|---|---|
| `region` | region id or `national` |
| `subjects` | `3` or `4` |
| `strong` | fit at or above this is Strong (the 70th percentile of all combinations of that size) |
| `good` | fit at or above this is Good (the 30th percentile) |

### `national_subjects.csv` (one row per subject)

| column | notes |
|---|---|
| `subject` | |
| `outlook` | `very-high`, `high`, `growing` or `steady` |
| `headline` | ≤ 160 chars, framed positively |
| `sectors` | *list* of IS-8 sector ids: `advanced-manufacturing`, `clean-energy`, `creative`, `defence`, `digital-technologies`, `financial-services`, `life-sciences`, `professional-business`, plus `foundational` for health/care/education/construction and other foundational sectors |

### `national_occupations.csv` (3–4 per subject)

| column | notes |
|---|---|
| `subject` | |
| `title` | |
| `note` | ≤ 120 chars on the national outlook |

### `national_sources.csv` (1–3 per subject)

| column | notes |
|---|---|
| `subject` | |
| `label` | |
| `url` | |

## Places

### `places.csv`

| column | notes |
|---|---|
| `name` | as people write it, e.g. "Ashton-under-Lyne" |
| `aliases` | *list* of alternative spellings, e.g. "Ashton under Lyne" |
| `council` | unitary, metropolitan borough or Lancashire district |
| `region` | region id |

### `lsip_areas.csv` (all 39 English LSIP areas)

| column | notes |
|---|---|
| `name` | exactly as on GOV.UK |
| `erb_name` | exactly as on GOV.UK |
| `erb_url` | |
| `england_region` | e.g. "North West", "London" |
| `region` | a region id when the area is supported, otherwise empty |
