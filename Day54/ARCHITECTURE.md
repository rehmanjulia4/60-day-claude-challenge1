# SETUP.md — HealthNexus Command Center

**Day 53 of 60 · Project Setup & Foundation**

## 1. What You Need Installed (and Why)

| Tool | Why It's Needed |
|---|---|
| **Node.js** (v18 or later) | Runs `scripts/build.js`, the one-time local step that precompiles JSX and bundles the app into `public/index.html`. There is no live dev server and no bundler like webpack — Node is only used at build time, matching the "no build server" architecture decision from Day 52. |
| **npm** (comes with Node.js) | Installs the two build-time dependencies: React/ReactDOM (for their UMD files) and Babel (to precompile JSX). Neither ships to the browser as a package — only their built files get embedded. |
| **Git** | Version control. You already have a repository from Day 52. |
| **A code editor (VS Code recommended)** | Recommended extensions: **ESLint** (catches JS errors early), **Prettier** (consistent formatting), **GitHub Pull Requests and Issues** (branch/PR management from the editor). None of these are required to run the project — they just make editing easier. |
| **A terminal** | To run `npm install`, `npm run build`, and `npm start`. |

**Beginner note:** "build-time" vs "runtime" is the key idea today. Node.js and npm are tools *you* run on *your* computer to produce one plain HTML file. That HTML file is what actually runs in a browser — it doesn't need Node, npm, or an internet connection to work, because everything (React, fonts, app code) is embedded directly inside it.

## 2. Environment Variables

**None required.** The v1.0 architecture has no backend, no database, and no API keys (the AI recommendation engine is a local rule-based function, not a live API call — see `docs/ARCHITECTURE.md` §5). If a real Claude API integration is added post-v1.0, an API key would be introduced then, not now. See `ENVIRONMENT.md` for the full (currently empty) list.

## 3. First-Time Setup

```bash
# 1. Clone the repository (skip if you already have it locally from Day 52)
git clone <your-repo-url>
cd healthnexus-command-center

# 2. Install build-time dependencies
npm install

# 3. Build the app (precompiles JSX, embeds fonts, bundles everything into public/index.html)
npm run build

# 4. Run it locally
npm start
# This runs `npx serve public` and prints a local URL like http://localhost:3000
# Open that URL in your browser.
```

If you'd rather not install `serve`, you can also just open `public/index.html` directly in a browser — the bundle has no live network dependency, so it works either way.

## 4. Verifying It Worked

You should see:
- A header reading "HealthNexus Command Center" with theme (Navy/Teal/Gold) and language (EN/AR) switcher buttons.
- A **Foundation Status** panel showing "Data engine online" with real numbers: a facility count, an incident count, and a seed value.
- Clicking EN/AR and the theme buttons should visibly change the interface immediately.

If the numbers show `0` or the panel says "Loading…" and never resolves, see `DAY3-SUMMARY.md` for troubleshooting notes.

## 5. Rebuilding After Changes

Every time you (or a future Claude session) edit any file in `src/`, run `npm run build` again before opening/reloading `public/index.html`. The build script is not a watcher — it runs once per invocation by design, to keep today's foundation simple.
