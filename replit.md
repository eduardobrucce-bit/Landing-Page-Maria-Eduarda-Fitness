# Maria Eduarda Fitness

Landing page em português para a consultoria fitness personalizada da Maria Eduarda.

## Run & Operate

- `pnpm install --frozen-lockfile` — install the workspace dependencies after importing or cloning
- `PORT=20031 BASE_PATH=/ pnpm --filter @workspace/maria-eduarda-fitness run dev` — run the frontend locally
- Workflow do Replit: `Start fitness website`
- Para gerar o build manualmente, use `PORT=20031 BASE_PATH=/ pnpm --filter @workspace/maria-eduarda-fitness run build`
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000), quando necessário
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env for the API: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Frontend: `artifacts/maria-eduarda-fitness`
- API: `artifacts/api-server`
- Shared libraries: `lib/`
- Imagens públicas do site: `artifacts/maria-eduarda-fitness/public`

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

Página de conversão para apresentar a especialista, explicar a consultoria, exibir depoimentos e direcionar visitantes para o WhatsApp e para o e-book de receitas.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- O frontend exige `PORT` e `BASE_PATH`; o workflow usa a porta registrada pelo artifact (`20031`) e `BASE_PATH=/`.
- O API server depende de `DATABASE_URL` e não é necessário para renderizar a landing page atual.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
