# Day 48 / 60, The Clinical AI Verdict Engine

**Challenge:** ABTalks 60-Day Claude Challenge
**Track:** AI Research & Decision Intelligence, "Build The Verdict Engine"
**Author:** Dr. Julia Rehman, DHA, MBA, MHA, MPH, FACHE, eFACHDM

## The reframe

The generic Day 48 prompt asks for a "Compare & Decide Builder": pick any category, name four comparable options, pick measurable criteria, weight them or not, and generate a single-file HTML comparison app.

Left generic, that's a shopping tool. Reframed for HealthNexus, it becomes something a CMIO or CDO could actually bring into a steering committee meeting: a weighted decision engine for comparing sepsis early-warning AI vendors, the exact kind of purchase decision that health system executives are making right now, in both the US and GCC markets.

## The scenario

A CMIO has three sepsis early-warning AI proposals on the table and a steering committee meeting in twenty minutes. Every vendor slide claims the highest accuracy. None of them show their work. The Verdict Engine renders a live, adjustable ranking instead of a static comparison slide, and every ranking traces back to a named, citable source.

## What it does

- **Five weighted criteria:** Regulatory Clearance & Safety Validation, Clinical Accuracy & Equity Validation, Interoperability & Data Governance, Total Cost of Ownership & Time-to-Value, and Clinician-in-the-Loop Override Governance.
- **Live re-ranking:** drag any weight slider and the other four rebalance proportionally, the five weights always resolve to exactly 100%, and the three vendor cards re-sort in place.
- **Dual-market persona toggle:** switching between "US Health System" and "GCC Health System (UAE)" swaps the default weighting, US leans FDA clearance and ONC HTI-1 interoperability transparency, GCC leans UAE Health Data Law and Malaffi/Nabidh exchange readiness.
- **Sources panel:** nine real, named, citable sources, spanning FDA clearance records, two peer-reviewed clinical validation studies, the ONC HTI-1 algorithm transparency rule, and three UAE/GCC health-data regulatory frameworks.
- **"How this was researched" panel:** explicitly separates what's real (regulatory frameworks, published study figures) from what's synthetic (the three vendor composites and their per-criterion scores), and documents a real conflict in the underlying literature: a completed 764,000-encounter study reporting 82% sensitivity versus a smaller preliminary study reporting mid-90s sensitivity, and why the larger completed study is stronger evidence despite the lower headline number.
- **Clinician-in-the-loop governance, scored not assumed:** every vendor names a specific bedside override role (Charge Nurse, Attending Physician, Rapid Response Nurse), not "the care team," with a documented escalation path.
- **Full bilingual support:** true English/Arabic RTL layout mirroring, not just translated labels, built on Noto Sans Arabic.
- **Three HealthNexus themes:** Executive Navy, Clinical Teal, GCC Gold, switchable live.
- **Single-file, fully offline:** React-free vanilla JS, all fonts (Cormorant Garamond, DM Sans, Noto Sans Arabic) embedded as base64, zero CDN dependencies.

## Synthetic data disclosure

The three vendors in this tool (Vendor Meridian, Vendor Solaris, Vendor Atlas) are synthetic composites built for this demo, not real companies. Their per-criterion numeric scores are illustrative values calibrated to sit within the realistic range that the cited studies establish for this device category. They are not a claim about any actual product on the market. This is disclosed on-screen in a persistent banner and expanded on in the "How this was researched" panel. Every regulatory framework and clinical study figure referenced in the vendor detail cards is real and sourced; see the sources list below.

## Real sources used

1. FDA AI/ML-Enabled Medical Devices List (fda.gov), over 1,000 authorized AI/ML devices as of March 2025, including the Sepsis ImmunoScore, the first FDA-authorized AI software for sepsis prediction (April 2024).
2. NEJM AI, development and validation study for the Sepsis ImmunoScore (ai.nejm.org).
3. Nature Medicine, prospective study of the Targeted Real-Time Early Warning System (TREWS) across five US hospitals and over 764,000 encounters; 82% sensitivity, 18% in-hospital mortality reduction when clinicians acted on alerts.
4. FDA 510(k) clearance record, Bayesian Health / TREWS continuous monitoring module (cidrap.umn.edu).
5. Mednition KATE AI breakthrough device designation coverage, reporting approximately 95% sensitivity and 96% specificity in preliminary results (medicaldevice-network.com).
6. ONC HTI-1 Final Rule, 45 CFR 170 and 171 (healthit.gov), algorithm transparency requirements for predictive decision support interventions, effective January 2024.
7. UAE Federal Law No. 2 of 2019, Health Data Law, and Ministerial Resolution 51 of 2021 (trade.gov market intelligence brief).
8. Abu Dhabi Healthcare Information and Cyber Security Standard, ADHICS (doh.gov.ae).
9. Malaffi (Abu Dhabi) and Nabidh (Dubai) Health Information Exchanges (malaffi.ae).

## Technical build

- Single-file offline HTML, vanilla JS (no React, no build step needed for this tool given the tight interaction surface).
- Base64-embedded fonts: Cormorant Garamond (400/600/700), DM Sans (400/500/700), Noto Sans Arabic (400/700), sourced from `@fontsource`, converted from woff2 to base64 at build time.
- Three HealthNexus themes via a `data-theme` attribute and CSS custom properties.
- Live weighted-sum ranking engine with proportional slider rebalancing, always summing to 100%.
- Full English/Arabic i18n object with true `dir="rtl"` layout mirroring, not label-only translation.
- Demo mode exposed via `window.__demo` (persona switch, theme switch, language switch, deterministic detail-panel opening, deterministic collapsible opening) for reproducible Playwright screenshot capture.
- QA verified programmatically with Playwright: zero console/page errors, zero horizontal overflow at 1440px desktop and 390px mobile viewports, interactive state transitions (slider rebalancing, persona switching, RTL toggle) tested via headless automation before any screenshot was taken.
- Carousel slides generated at 1080×1080 (2x supersampled then downsampled) with PIL, using the same converted TTF fonts, in a consistent browser-chrome mockup frame with annotated callouts.

## Files in this folder

- `verdict-engine.html`, the full offline application
- `screenshots/`, standalone PNG screenshots of key app states
- `carousel_png/`, 12 PNG carousel slides, 1080×1080
- `carousel_html/`, HTML versions of each carousel slide
- `day48.md`, this file

## Key learnings

01. Grounding an AI-generated decision tool in named, real sources is what separates a demo from something a CMIO can actually bring to a steering committee.
02. Letting people reweight criteria live, with the math always resolving to 100%, turns a static comparison into an actual decision-support instrument.
03. Clinician override authority has to be a scored, named criterion, not an assumed footnote, or governance becomes marketing language.
