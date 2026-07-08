# Day 38 · Clinical Decision Velocity Lab

**HealthNexus Executive Series — 60-Day Claude Challenge**

## Reframe

The Day 38 challenge prompt was a typing-speed platform: timed sprints, adaptive difficulty, and a post-session analytics dashboard. The underlying mechanic, measuring speed and accuracy together across skill categories, maps directly onto a real healthcare executive problem: how fast, and how correctly, clinicians and administrators make decisions under time pressure.

**Clinical Decision Velocity Lab** keeps that mechanic and rebuilds it around five real domains of healthcare judgment: emergency triage, sepsis recognition, medication safety, prior authorization, and discharge readiness.

## What it does

- Choose a case domain (or an adaptive mix of all five), a market context (US, GCC, or mixed), and a round format: 60 / 120 / 300-second timed sprints, or an untimed Case Review mode.
- Work through synthetic case vignettes, each with four possible actions. Selecting an answer immediately reveals the correct call and the clinical rationale.
- After the round, review a full **Decision Velocity Report**: accuracy, decisions per minute, average time to decision, longest correct streak, a consistency score, an illustrative percentile estimate, a speed-vs-accuracy scatter by case, an error heatmap by domain, an accuracy trend line across the round, and an executive summary that names the dominant error pattern (under-triage vs. overcall).
- Full English / Arabic toggle with true right-to-left layout mirroring, not a translated skin.
- Session history is stored locally on-device so a reviewer can track their own rounds over time; a `?demo=1` URL parameter pre-loads a completed round for reviewers and screenshot capture.

## Data integrity

All case vignettes are synthetic composite scenarios, clearly badged on-screen as such. No real patients, organizations, or payer determinations are represented. Regulatory bodies referenced in scenario context (CMS, DHA, DOH, CBAHI, MOPH) are real, named organizations used only to ground scenario realism to the correct market; no fictional hospitals or brand names are invented. No fabricated statistics are presented as fact; the percentile estimate on the dashboard is explicitly labeled as an illustrative composite benchmark, not a validated clinical measure.

## Build notes

- Single-file offline HTML tool. Vanilla JavaScript (no framework, no CDN dependency) for reliability and file-size control.
- Fonts (Cormorant Garamond, DM Sans, Noto Sans Arabic) embedded as base64 `@font-face` declarations from `@fontsource` packages.
- Executive Navy / Teal / Gold theme variants, matching the HealthNexus design system.
- All 20 case scenarios, 5 domains × 4 cases (2 US-market, 2 GCC-market each), fully bilingual with independently written Arabic vignettes, not machine-translated placeholders.
- Verified in headless Chromium via Playwright: zero console errors, zero DOM overflow (`scrollWidth`/`scrollHeight` vs `clientWidth`/`clientHeight`) across setup, round, Arabic RTL, dashboard, and a 390×844 mobile viewport.

## Key learning

Under-triage and overcall are opposite failure modes with different root causes and different fixes. A single "accuracy" number collapses that distinction; separating error type by case domain is what makes a decision-support self-assessment tool actually actionable for an executive rather than just a score.

## Files in this folder

- `clinical_decision_velocity_lab.html` — the interactive tool
- `carousel.html` — 10-slide LinkedIn carousel (source)
- `carousel_slides/slide_01.png` … `slide_10.png` — carousel slide exports, 1080×1080 at retina scale
- `screenshots/` — tool screenshots across key states (setup, round, feedback, Arabic RTL, dashboard, mobile)
