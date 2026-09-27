# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Read [AGENTS.md](AGENTS.md) first.** It holds the project rules (Lovable git-history constraints, data/security rules, British English copy, retro arcade styling, working conventions). This file only adds what AGENTS.md does not cover.

## Commands

```sh
npm i              # install (bun.lock also present; Lovable uses bun)
npm run dev        # Vite dev server
npm run lint       # ESLint (flat config, Prettier integrated)
npm run build      # production build — also the only type/SSR check
npm run format     # Prettier write
```

There is no test runner. `lint` and `build` must both pass before committing, because commits to `main` sync straight into the Lovable editor.

## Architecture

**App shape.** TanStack Start (SSR, file-based routes) built via `@lovable.dev/vite-tanstack-config`, which already bundles the TanStack/React/Tailwind/tsconfig-paths/nitro plugins. Don't add those to [vite.config.ts](vite.config.ts) again, or they'll be duplicated. The server entry is redirected to [src/server.ts](src/server.ts), an SSR error wrapper.

**Data flow across the journey.** Routes call server functions from [src/lib/adventure.functions.ts](src/lib/adventure.functions.ts) with `useServerFn`:

1. `/subjects` → `startAdventure({ subjects })` (3–4 subjects). It normalises them with `comboKey()` from [src/data/subjects.ts](src/data/subjects.ts), which lowercases, sorts and joins with `|`. It then looks up `subject_combinations.combo_key`. On a cache miss it calls the model once, stores the four ideas and handles a duplicate insert if another visitor cached the same combination first. It always inserts a new `selections` row and returns its id.
2. `/quests/$selectionId` → `getAdventure` loads the ideas through the selection. `chooseProject({ selectionId, projectIndex })` inserts a `choices` row that references the combination and the idea index. Ideas are never copied.
3. `/plan/$choiceId` → `getChoice` resolves the idea as `subject_combinations.ideas[choice.project_index]`.
4. `requestSupport` stores an email in `support_signups` keyed only by `choice_id`, with no name. This is the anonymous-selection/email separation.

**Plan generation is currently stubbed.** `planSchema`, the `ProjectPlan` type, the `project_plans` table, [PlanView.tsx](src/components/plan/PlanView.tsx) and the jsPDF export in [planPdf.ts](src/components/plan/planPdf.ts) all exist. However, `getChoice` returns `plan: null` and nothing generates or caches plans. If you re-enable it, cache by choice/combination + index in `project_plans`, following the rules in AGENTS.md.

**Database access.** Every table has RLS on, with all privileges revoked from `anon`/`authenticated` ([drizzle/migrations/0001_lock_down_public_table_access.sql](drizzle/migrations/0001_lock_down_public_table_access.sql)). All reads and writes therefore go through server functions that use `supabaseAdmin` (service role). This client is loaded with a dynamic `import()` inside `getDb()` so it never reaches the client bundle. The browser Supabase client in `client.ts` cannot read these tables. The schema lives in the drizzle migrations; `drizzle.config.ts` uses `LOVABLE_DB_MIGRATION_URL`.

**AI calls.** `getModel()` builds an `@ai-sdk/openai-compatible` provider named `openrouter`, pointed at `https://openrouter.ai/api/v1` with `OPENROUTER_API_KEY`, and uses the model `openai/gpt-5.6-terra`. Generation uses the Vercel AI SDK `streamText` with `Output.object({ schema })`. `providerOptions.openrouter` is passed through into the request body: `reasoning.effort: "none"` and `provider.require_parameters: true`, so OpenRouter only routes to upstreams that support strict `json_schema` output. Locally, put the key in `.env.local`, which `*.local` gitignores. Don't use `.env`, because it's committed. In Lovable, it's a project secret. The system prompt adds `LSIP_CONTEXT` from [src/data/lsip.ts](src/data/lsip.ts). If you change an idea's shape, update the Zod schema in `adventure.functions.ts`, the types in `adventure-types.ts` and every renderer together. Cached `ideas` JSON in the database will still have the old shape.

**Static domain data.** [src/data/subjects.ts](src/data/subjects.ts) is the curated A level list. [src/data/lsip-sectors.ts](src/data/lsip-sectors.ts) holds the LSIP sectors plus `computeSectorOverlaps()`, which feeds the client-side `SectorFlower` visualisation without any model call.

**Generated / do-not-edit.** `src/routeTree.gen.ts`, `src/integrations/supabase/types.ts` and the other Supabase integration scaffolding, as well as `src/components/ui/` (shadcn primitives; prefer the `arcade/` components for app UI). `.lovable/plan/` holds Lovable's own planning notes.
