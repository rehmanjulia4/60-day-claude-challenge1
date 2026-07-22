# ENVIRONMENT.md — HealthNexus Command Center

**Day 53 of 60 · Project Setup & Foundation**

## 1. Environment Variables

**None.** This is intentional, not an oversight:

| Would-be variable | Why it doesn't exist in v1.0 |
|---|---|
| `DATABASE_URL` | No database — PRD explicitly scopes out real persistence for v1.0 (see `docs/prd.md`, Out of Scope). |
| `CLAUDE_API_KEY` | The AI recommendation engine is a local, deterministic rule-based function in v1.0 (`src/data/generateRecommendation.js`), not a live API call. See `docs/ARCHITECTURE.md` §5 for the future-scope swap-in point. |
| `AUTH_SECRET` / session config | No authentication in v1.0 — single implicit COO session, no login. |

If a `.env` file is ever introduced post-v1.0 (e.g., when a real Claude API key is added), it must be added to `.gitignore` immediately and never committed. As of Day 53, no `.env` file exists in this repository.

## 2. Tool Versions Used

| Tool | Version (as configured for this build) |
|---|---|
| Node.js | 18+ |
| npm | bundled with Node |
| React | 18.3.1 (UMD production build, embedded) |
| ReactDOM | 18.3.1 (UMD production build, embedded) |
| @babel/core + @babel/preset-react | 7.25.x — used only at build time to precompile JSX |
| Fonts | Cormorant Garamond, DM Sans, Noto Sans Arabic (via `@fontsource`, converted to base64, embedded in `src/fonts.css`) |

## 3. Configuration Files

| File | Purpose |
|---|---|
| `package.json` | Declares build-time dependencies and the `build`/`start` npm scripts. No runtime dependencies are listed because nothing is installed into the shipped bundle at runtime. |
| `scripts/build.js` | The precompile/bundle step. Reads `src/`, runs Babel on JSX, strips module syntax, embeds fonts/CSS/React, writes `public/index.html`. |
| `.gitignore` | Excludes `node_modules/` (reinstallable via `npm install`) and `public/index.html` (a build artifact, regenerated via `npm run build` — see note below on why it's not committed). |
| `.github/workflows/deploy.yml` | GitHub Actions workflow: on push to `main`, installs dependencies, runs `npm run build`, then deploys the resulting `public/` folder to GitHub Pages. |

## 4. Why `public/index.html` Is Not Committed

It's a generated artifact, not source code — committing it would mean two sources of truth (the `src/` files and the generated file) that could drift out of sync. The GitHub Actions workflow rebuilds it fresh on every push to `main`, which is the standard practice for generated files.

## 5. Branching Strategy

- **`main`** — always deployable. Every push to `main` triggers the GitHub Pages deploy workflow.
- **`day{N}-{feature}`** — one short-lived branch per capstone day (e.g., `day53-foundation`). Work happens here, gets committed, then merged into `main` at the end of the day via fast-forward merge (no long-lived parallel branches, since this is a solo 10-day build, not a team project).
- Today's branch: `day53-foundation`, merged into `main` at end of day (see `DAY3-SUMMARY.md`).
