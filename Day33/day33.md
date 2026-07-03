# Day 33 — Media Integrity Intelligence
### HealthNexus™ Decision Intelligence Suite — Clinical & AI Governance Track
**60-Day Claude Challenge · Day 33 of 60**

---

## Overview

Day 33 asked for a Media Integrity Analyzer that teaches media literacy through guided
discovery. I built **HealthNexus™ Media Integrity Intelligence**, an executive-facing
simulator scoped specifically to the content categories that matter most in my field:
healthcare AI claims, hospital and public-health reporting, digital health platforms,
and patient-facing social content.

The tool is a single-file, offline-capable HTML application with React, ReactDOM, and
Babel embedded directly in the file (no CDN, no backend, no external calls at runtime).
Brand typefaces (Cormorant Garamond, DM Sans) and an Arabic fallback (Noto Sans Arabic)
are embedded as base64 web fonts so the tool renders correctly with or without an
internet connection, in both English and Arabic.

## Why This Scope

Healthcare leaders are increasingly the audience *and* the subject of AI-era media:
overstated headlines about diagnostic tools, hospital rankings built on undisclosed
methodology, outbreak alerts detached from the stated risk level, and social posts that
frame clinicians as withholding information. Each of these has a direct governance
cost — patient decisions, board credibility, regulator attention, and public trust move
before anyone reads past the headline.

## What the Tool Does

**Challenge 1 — Headline Detective**
The reader is shown a fictional, illustrative healthcare/AI headline alongside its
source article, asked whether they'd click it, and asked to flag which phrases are
exaggerated, misleading, or missing key context. The reveal shows a Headline Accuracy
Score, a breakdown of what the headline gets wrong, a fair rewrite, and a personal
detection-accuracy score comparing the reader's picks to the correct answer set.

**Challenge 2 — Emotion Detector**
The reader is shown a fictional social post or caption, asked how it makes them feel,
and asked to identify which words are doing the emotional work. The reveal names the
target audience, the intended emotional response, the manipulation technique (fear
framing, false urgency, outrage bait, authority distortion, trust erosion), and a
neutral rewrite.

**Live Media Integrity Metrics** update after every completed round: Headline Accuracy,
Source Reliability, Emotional Manipulation, and Audience Targeting.

**Media Integrity Dashboard** closes the session with an overall score, a plain-language
summary of what was learned, an automatically identified "biggest red flag" (the metric
with the largest gap from the ideal range that session), three practical media-literacy
habits, a healthcare-leadership takeaway, and a reseed-and-replay option that draws a new
set of scenarios via a seeded PRNG (Mulberry32).

## Methodology Disclosure

- **All headlines, articles, and social posts in this tool are fictional, illustrative
  training constructs written for this exercise.** They do not describe real
  organizations, individuals, published studies, or events. Every scenario is labeled
  "Illustrative training scenario" inside the app, and a standing disclosure appears in
  the footer of every screen.
- **Every score (Headline Accuracy, Source Reliability, Emotional Manipulation, Audience
  Targeting) is an author-defined synthetic rating** attached to each fictional scenario
  to demonstrate how the metric behaves, not a measurement derived from any real dataset
  or model inference at runtime.
- The "Your Detection Accuracy" figure shown to the reader **is real-time and
  reader-specific** — it is computed live in the browser from the reader's own chip
  selections compared against the scenario's answer key.
- Scenario order is selected client-side by a seeded pseudorandom shuffle
  (Mulberry32), so each session and each "Replay" draws a different pair of headline
  and emotion scenarios from the five-scenario library in each category.

## Technical Notes

- React 18 / ReactDOM 18 (production UMD builds) and Babel Standalone are embedded
  directly in the HTML file — not loaded from a CDN — for genuine offline capability.
- Cormorant Garamond, DM Sans, and Noto Sans Arabic are embedded as base64 `@font-face`
  declarations for the same reason, including full Arabic glyph coverage so the EN/AR
  toggle does not fall back to tofu boxes on a machine without Arabic fonts installed.
- Full EN/AR bilingual support with RTL layout mirroring, consistent with the dual
  US/GCC market positioning of the rest of the HealthNexus suite.
- Three on-brand theme variants (Executive Navy, Clinical Teal, GCC Gold) satisfy the
  challenge's "choose a color theme" step without breaking from the established
  HealthNexus visual identity.
- `?demo=1` loads a fixed seed and exposes `window.demoGoTo(state)` for deterministic,
  scriptable navigation to any of six states (`landing`, `headline-q`, `headline-r`,
  `emotion-q`, `emotion-r`, `dashboard`) — used to capture the screenshots in this
  folder via headless Chromium (Playwright).

## Screenshots

| File | State |
|---|---|
| `screenshots/01-landing.png` | Landing / theme & language selection |
| `screenshots/02-headline-challenge.png` | Headline Detective — question state |
| `screenshots/03-headline-reveal.png` | Headline Detective — reveal (Score 42, Elevated Risk) |
| `screenshots/04-emotion-challenge.png` | Emotion Detector — question state |
| `screenshots/05-emotion-reveal.png` | Emotion Detector — reveal (Score 74, Moderate) |
| `screenshots/06-dashboard.png` | Final Media Integrity Dashboard (Overall Score 34, High Risk) |
| `screenshots/07-dashboard-arabic-rtl.png` | Dashboard in Arabic, full RTL mirroring |

## Key Learning

The biggest insight from building this: **misleading healthcare content is rarely
fabricated outright — it is real information with the uncertainty, the sample size, or
the disconfirming evidence quietly removed.** Every scenario in this tool is built from
a true underlying fact paired with a headline or post that drops exactly one qualifying
detail. That is a more dangerous and more common pattern than outright fabrication, and
it is the one this tool is designed to train people to catch.

## Biggest Red Flag (Pattern-Level)

Emotionally loaded language that asks the audience to react — share, ask now, wake up —
before they have had a chance to evaluate the underlying claim.

## Three Practical Media Literacy Habits

1. Pause before reacting to emotionally charged headlines or posts.
2. Look for what is missing from the claim, not only what is stated.
3. Separate the factual claim from the emotional framing before forming a judgment.

## Healthcare Leadership Connection

This tool sits in the HealthNexus Clinical & AI Governance track alongside the Privacy
& Trust Intelligence Dashboard (Day 21) and the AI Shark Tank Simulator (Day 25). As
health systems adopt AI, digital health platforms, and automated communication, media
integrity literacy is a governance function — protecting clinical trust, board
credibility, and public confidence — not a media-relations nicety.

## Files in This Folder

- `HealthNexus_Media_Integrity_Analyzer.html` — the complete offline-capable application
- `screenshots/` — seven PNG captures of the application in key states
- `carousel-png/` — 10 LinkedIn carousel slides, 1080×1080 PNG
- `carousel-html/` — the same 10 slides as standalone, offline-renderable HTML files
- `day33.md` — this file

---
*Part of the HealthNexus™ Decision Intelligence Platform — Dr. Julia Rehman*
