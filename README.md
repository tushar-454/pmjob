# PM.JOB

A modern server-rendered Next.js app deployed to Cloudflare Workers using OpenNext.

## Overview

P.JOB is a Next.js 16 app (OpenNext) wired for Cloudflare platform features such as Workers, R2, Queues, Workflows, and custom bindings. It uses Drizzle ORM and serverless Postgres connectors for data storage, and includes utilities for auth, file previewing, and report workflows.

## Key Features

- Server-rendered UI with Next.js 16 and OpenNext Cloudflare adapter.
- Cloudflare Worker entry point at `src/custom-worker.ts`.
- Persistent object storage with R2 (`PMJOB_R2`).
- Background processing via Queues and Consumers (`PMJOB_QUEUE`).
- Long-running orchestrations with Workflows (`pmjob-workflow`).
- Optional Hyperdrive / remote Postgres binding for serverless DB access.
- AI binding available (`AI`) for remote AI integrations.
- Image and asset handling via Cloudflare `images` and `assets` bindings.

## Technology Stack

- Framework: `next` 16 (OpenNext Cloudflare integration)
- Cloudflare tooling: `wrangler` + `@opennextjs/cloudflare`
- Database: `drizzle-orm`, `@neondatabase/serverless`, `postgres`
- Auth: `better-auth` with `@better-auth/drizzle-adapter`
- Styling/UI: `tailwindcss`, `shadcn`, `lucide-react`
- Utilities: `zod`, `slugify`, `sonner`, `unpdf`

## What the configs reveal

- `package.json` exposes scripts for local dev and Cloudflare-specific build/deploy using `opennextjs-cloudflare` and a `cf-typegen` script to generate Cloudflare env types.
- `wrangler.jsonc` configures the Worker main entry (`src/custom-worker.ts`), R2 bucket binding (`PMJOB_R2`), a named queue (`pmjob-queue`), workflows, images, assets, observability, and Hyperdrive Postgres connection info.

## Useful Scripts

- `pnpm dev` or `npm run dev`: Run Next.js in development mode (`next dev`).
- `npm run build`: Build the Next.js app (`next build`).
- `npm run preview`: Build and preview an OpenNext Cloudflare build: `opennextjs-cloudflare build && opennextjs-cloudflare preview`.
- `npm run deploy`: Build and deploy via OpenNext: `opennextjs-cloudflare build && opennextjs-cloudflare deploy`.
- `npm run upload`: Build and upload assets: `opennextjs-cloudflare build && opennextjs-cloudflare upload`.
- `npm run cf-typegen`: Generate Cloudflare env types with `wrangler types` into `cloudflare-env.d.ts`.

## Deployment notes

- The project targets Cloudflare Workers (see `wrangler.jsonc`) and uses the `nodejs_compat` flag to enable Node-compatible APIs.
- Ensure environment secrets are configured in Cloudflare (R2, Hyperdrive/Postgres, AI keys, queue/workflow permissions) before deploying.

## Where to look next

- Worker entry: `src/custom-worker.ts`
- Cloudflare config: `wrangler.jsonc`
- App pages and API routes: `src/app/` and `src/app/api/`
- Database schema and Drizzle setup: `db/` and `drizzle/`

If you want, I can: add a short contributor or setup section, generate a quick deploy checklist, or commit these changes.
