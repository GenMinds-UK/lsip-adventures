# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Read [AGENTS.md](AGENTS.md) first.** It holds the project rules (Lovable git-history constraints, data rules, British English copy, retro arcade styling, working conventions). This file only adds what AGENTS.md does not cover.

## Commands

```sh
npm i                  # install (bun.lock also present; Lovable uses bun)
npm run dev            # Vite dev server
npm run lint           # ESLint (flat config, Prettier integrated)
npm run typecheck      # tsc --noEmit — the only type check
npm run build          # production/SSR build (does NOT type-check)
npm run format         # Prettier write

npm run data:compile   # validate research/data/*.csv → src/data/generated/*.ts
npm run data:analyse   # score every 3–4 subject combination → tiers + review tables
npm run data:check     # validate hand-written content (quests, synergies, skills)
```

There is no test runner. `lint`, `typecheck` and `build` must all pass before committing, because commits to `main` sync straight into the Lovable editor. On a Windows checkout with `core.autocrlf=true`, untouched files can show Prettier "Delete ␍" lint errors; those are line-ending artefacts, so lint the files you changed.

## Architecture

**App shape.** TanStack Start (SSR, file-based routes) built via `@lovable.dev/vite-tanstack-config`, which already bundles the TanStack/React/Tailwind/tsconfig-paths/nitro plugins. Don't add those to [vite.config.ts](vite.config.ts) again, or they'll be duplicated. The server entry is redirected to [src/server.ts](src/server.ts), an SSR error wrapper. The build targets Cloudflare Workers.

**Everything is hardcoded and calculated.** There are no AI calls, server functions or database writes. Every screen is computed in the browser (and on the server for SSR) from committed data.

**Journey and state.** Ten stages, listed in `STAGES` in [src/lib/journey.ts](src/lib/journey.ts): `/` → `/where` → `/subjects` → `/journey/{skills,local,national,overlaps,quests,contacts,summary}`. All state is in URL search params: `region` (a region id), `subjects` (comma-separated `SubjectName`s, 3–4) and `quest` (a pinned quest id). [src/routes/journey.tsx](src/routes/journey.tsx) is the layout route:
- `validateSearch` uses `.catch(undefined)`, so bad params never throw.
- `beforeLoad` redirects to `/where` or `/subjects` when state is missing, and returns `{ regionId, subjects }` as context.
- The loader calls `loadRegion()`, which dynamically imports one region's data (one chunk per area).
- `retainSearchParams` keeps state across `<Link>`s. Links between stages pass `search={true}`.

Screens read everything through `useJourney()`, which calls `buildResults()` in [src/lib/results.ts](src/lib/results.ts).

**Scoring.** [src/lib/scoring.ts](src/lib/scoring.ts) holds pure functions over the research matrices (see `research/methodology.md`):
- **M:** subject→skill
- **D:** area→skill demand
- **W:** priority→skill
- **N:** national
- **Q:** quest→skill

It is shared with the data scripts, so keep it free of value imports (Node runs it with `--experimental-strip-types`, which can't resolve `@/`).

**Data pipeline.** [research/data/](research/data) CSVs are the source of truth for numbers and short facts. The format is specified in [research/data-schema.md](research/data-schema.md). `data:compile` validates them and writes `src/data/generated/` (committed, never hand-edited, ignored by ESLint and Prettier). `data:analyse` writes `research/data/tiers.csv` (Strong/Good/Emerging cut-offs, calibrated per area and per subject count) and review tables in `research/analysis/`. Run `data:compile` again afterwards so the new tiers take effect. Longer written content is hand-authored TypeScript:
- [src/data/regions/<id>.content.ts](src/data/regions) (subject connections and quests)
- [src/data/synergies.ts](src/data/synergies.ts) (36 subject-group pairs)
- [src/data/skills-content.ts](src/data/skills-content.ts)

`data:check` validates these.

**Adding an area.** Add a `research/data/regions/<id>/` folder, set `region` for it in `lsip_areas.csv`, add places, run the data scripts, write `<id>.content.ts`, and add the loader entry in [src/data/regions/index.ts](src/data/regions/index.ts). The `Record<RegionId, …>` types will flag anything missed.

**Database.** Supabase tables (`subject_combinations`, `selections`, `choices`, `project_plans`, `support_signups`) remain from the earlier AI version but are no longer read or written. RLS stays on and all privileges stay revoked from `anon`/`authenticated`. Don't drop them without a decision from the project owner. `drizzle.config.ts` builds its URL from `SUPABASE_PASSWORD` in `.env.local`.

**Generated / do-not-edit.**
- `src/routeTree.gen.ts`
- `src/data/generated/`
- `src/integrations/supabase/types.ts` and the other Supabase integration scaffolding
- `src/components/ui/` (shadcn primitives; prefer the `arcade/` components, e.g. `ArcadeDialog`, for app UI)

`.lovable/plan/` holds Lovable's own planning notes.
