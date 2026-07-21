# Day 52 / 60 — System Design: HealthNexus Command Center

**Track:** Capstone Project — Day 2 of 10
**Deliverable:** System Design

## What This Is

Day 52 turns the Day 51 PRD, Implementation Blueprint, and Pitch Deck into a complete technical blueprint — tech stack, system architecture, data model, API contract, UI wireframes, and project structure — with no production code written. Everything here is checked against the Day 51 PRD rather than re-deciding scope.

## Tech Stack (Justified)

| Layer | Decision | Why |
|---|---|---|
| Frontend | React 18 UMD + Babel-precompiled JSX | No build server; matches the proven 50-day portfolio pattern |
| Backend | None — fully client-side | PRD explicitly excludes real persistence for v1.0 |
| Database | None — in-memory synthetic data | No real patient data exists to store |
| Authentication | None in v1.0 | Single implicit COO session, no multi-user access in scope |
| AI Model/API | Deterministic rule-based generator (v1.0), Claude-API-ready interface (future) | Keeps the demo offline and reproducible; swappable later with zero UI changes |
| Hosting | GitHub Pages | Free, static, matches the offline-first architecture |

## System Architecture

A fully client-side, offline-first single-page app. Incident generation, AI recommendation drafting, and sign-off state all happen in the browser. Full Mermaid diagrams (component diagram, data flow, request lifecycle, AI interaction, external services) are in `docs/ARCHITECTURE.md`.

## Data Model

No database — a plain in-memory shape: **Facility**, **Incident**, **Recommendation**, **SignOff**. The critical design decision: `Recommendation` and `SignOff` are stored as separate objects, and `Incident.status` is *derived* from the presence of a `SignOff`, never directly settable. Full schema in `docs/SCHEMA.md`.

## API Contract

No server, so this is a function-level module interface (`getIncidentQueue`, `getIncidentDetail`, `submitSignOff`, `getResolvedIncidents`, `getFacilitySummary`) documented with the same rigor as REST — purpose, request, response, validation, error cases — specifically so it can become real HTTP endpoints post-v1.0 with minimal translation. Full contract in `docs/API.md`.

## UI Flow & Wireframes

Queue → Detail → Recommendation → Sign-Off → Resolved. Every screen exists to answer one triage question. Low-fidelity wireframes and the full user flow diagram are in `docs/UI-WIREFRAMES.md`.

## Project Structure

Flat, shallow, and deliberately simple: `src/components`, `src/data` (synthetic generators), `src/state` (the governance boundary), `src/i18n`. Full tree and rationale in `docs/PROJECT-STRUCTURE.md`.

## Day 3 Readiness Check

- Remaining Blueprint (Days 53–60) confirmed realistic against today's design.
- No scope creep found — today's documents confirm Day 51's plan, they don't expand it.
- No PRD or Blueprint conflicts surfaced; no changes needed to the Day 51 Blueprint.
- Day 53 can begin implementation immediately: `prng.js` and the data generators first.

## Deliverables

- `docs/ARCHITECTURE.md`, `SCHEMA.md`, `API.md`, `UI-WIREFRAMES.md`, `PROJECT-STRUCTURE.md` — committed to the project repo
- `HealthNexus_Command_Center.html` — companion tool updated with a new "System Design" tab
- `carousel/slide_01.png` – `slide_11.png` — 11-slide carousel, new varied visual style
- `demo_workflow.json` — updated with today's tech stack and architecture decisions

## Key Learnings

01. A schema is just an honest sentence about what you're NOT building: no backend, no database, no auth.
02. Writing the API contract before code exists is what makes swapping in a real Claude model later a non-event, not a rewrite.
03. The best readiness check is boring: no scope crept in, because yesterday's plan was already right.

## What's Next

Day 53 builds the seeded synthetic data engine and the incident data model that every later feature reads from — the first production code of the capstone.
