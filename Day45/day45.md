# Day 45 / 60 — HealthNexus Executive Decision Strategist

**Track:** AI Decision Intelligence
**Suite:** HealthNexus
**Persona:** CDO / CMIO / CITO facing a build-vs-buy technology decision

## The Reframe

The template prompt builds a general-purpose personal decision coach: ask four questions, then generate a decision report. Reframed for HealthNexus into a live tool that switches between two real healthcare executive build-vs-buy decisions with one click, no page reload.

All names, organizations, and figures in both use cases are synthetic and composite, disclosed on-screen. No real patient, employee, or organizational data is used.

## Two Live Use Cases

A scenario switcher in the tool's header swaps every section, interview, options, matrix, premortem, plan, and verdict, for a different real decision:

- **Use Case 1 · GCC** — A CDO deciding between building an in-house AI orchestration layer or replatforming onto an enterprise vendor's turnkey AI platform, under a five-week board deadline. Matrix result: 44 (in-house) vs. 47 (vendor replatform), a narrow win.
- **Use Case 2 · US** — A CMIO deciding between building an in-house ambient AI documentation tool or licensing a commercial ambient scribe platform, across 3,000 providers, ahead of a four-month value-based care contract renewal. Matrix result: 43 (in-house) vs. 52 (vendor license), a clear win.

Same structure, same seven scoring dimensions, genuinely different verdicts, because the constraints were genuinely different.

## What Was Built

A single-file, offline HTML tool with:

- **Scenario switcher** toggling the entire report between the two use cases instantly
- **Structured 4-question interview** (decision, goal/timeline, gut call, biggest fear) collected before any analysis begins, per scenario
- **Case-for-each-option cards** with strongest case, hidden upside, biggest weakness, and a "best if you value" tag
- **Assumption Buster** naming specific cognitive biases and one operationally ignored cost, tailored to each scenario
- **7-dimension animated decision matrix**: Clinical/Operational Upside, Financial Safety, Regulatory & Compliance Risk, Clinician/Staff Adoption, Reversibility, Digital Health Roadmap Alignment, and Patient/Population Outcome Risk, scored out of 70 per option
- **Premortem** for both options: three failure reasons, one early warning sign, one prevention action
- **7-Day Test Plan** turning the decision into an evidence-gathering week instead of a single leap
- **Verdict card** that names a winner, states what would flip the decision, and closes with one hard truth
- **Three shareable mini-cards** per scenario for social use

## Design System

- Themes: Executive Navy, Clinical Teal, GCC Gold (toggle in-app)
- Typography: Cormorant Garamond (display) + DM Sans (body) + Noto Sans Arabic (RTL)
- Full bilingual EN/AR support with true RTL layout mirroring, not just label translation, verified in both scenarios
- All fonts embedded as base64, zero CDN dependencies, fully offline
- Verified programmatically: zero console errors, zero horizontal overflow at desktop (1280px) and mobile (390px) viewports, across both use cases, both languages, and all three themes

## Files in This Folder

- `HealthNexus-Decision-Strategist.html` — the complete offline tool with the scenario switcher
- `screenshots/` — full-page views of both use cases (Teal/EN and Gold/AR-RTL), plus matrix and verdict crops for each
- `carousel/` — 12 LinkedIn carousel slides (1080x1080, 2x scale), a live walkthrough of both use cases including the scenario switch itself

## Key Learnings

01. A decision matrix only earns trust when the scores are traceable back to the interview answers, not invented for effect.
02. Naming a bias by name, sunk cost, status quo, forces a harder look than any generic "consider your options" line ever will.
03. A verdict is only useful if it also states what would flip it. Certainty without a falsification condition is just confidence.

---
Part of the [ABTalks 60-Day Claude Challenge](https://www.abtalks.in/?ref=BCVEJQ). Free to join, no incentive for sharing.
