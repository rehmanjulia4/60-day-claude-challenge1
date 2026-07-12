# Day 42 / 60 — Executive Compensation & Equity Command Center

## Reframe

The stock prompt asked for a generic "Personal Financial Command Center," an interview-driven budgeting dashboard for any consumer profile.

Reframed for the healthcare executive audience this challenge targets: a decision-support tool for evaluating competing **executive offers across any two markets**, the exact comparison a COO, CNO, or CMIO candidate runs when weighing offers across US states and GCC countries.

- **Domain:** Executive compensation across US states and GCC countries
- **User:** A healthcare C-suite candidate (VP / COO / CNO level) comparing two live offers in any market pairing
- **Input:** A synthetic target package (base, bonus) the person controls via sliders; the market data itself (tax rates, cost of living, gratuity law) is real and cited
- **Output:** Offer Comparison Ledger, cost-of-living snapshot, EOSB calculator, equity vesting timeline, local tax profiles, what-if simulator, printable report
- **Tone:** Executive, discreet, decision-support

## What was built

A single offline HTML file, no CDN dependencies, fonts embedded as base64 via `@fontsource` (Cormorant Garamond, DM Sans, Noto Sans Arabic). Covers **11 US states** (Massachusetts, California, New York, Washington, Florida, North Carolina, Pennsylvania, Illinois, Minnesota, Georgia, Texas) and **all six GCC countries** (UAE, Saudi Arabia, Qatar, Bahrain, Oman, Kuwait), selectable as Market A and Market B in any combination:

1. **Compensation Health Score** — a live-animated SVG ring (0–100) with a five-tier rating, recalculated from net take-home strength, offer balance, and retirement/EOSB coverage.
2. **Offer Comparison Ledger** (signature module) — a dual-column ledger driven by two market dropdowns, walking base salary through gross package, estimated tax, EOSB/retirement accrual, and net effective take-home, closing with a stamped verdict.
3. **What-if Simulator** — sliders for target base salary, bonus percentage, and years of service that recompute both markets live.
4. **Cost of Living Snapshot** — US states indexed to the US national average (MERIC/C2ER, 2025); GCC countries indexed to Dubai (Numbeo 2025). The two scales are explicitly labeled as non-interchangeable rather than blended into a false single number.
5. **EOSB Calculator** — models each GCC country's actual gratuity law: UAE's 21/30-day tiered formula, Saudi Arabia's half-month/full-month formula with its 2-to-10-year resignation reduction, Qatar's flat 21 days, Bahrain's flat 15 days, Oman's post-2023 flat one month from day one, and Kuwait's 15/30-day formula on full salary capped at 18 months.
6. **Equity Vesting Timeline** — a four-year, one-year-cliff US-style grant visualization.
7. **Local Tax Profile by Market** — two cards showing each selected market's real federal + state (or GCC 0%) tax structure side by side.
8. **AI planning notes and a pre-signature checklist**, plus a printable report view.

Bilingual EN/AR with full RTL layout mirroring, including all 17 market names, three executive themes (Navy default, Clinical Teal, GCC Gold), and a `?demo=1` deterministic mode. Salary inputs are disclosed as synthetic; every tax rate, cost-of-living index value, and gratuity formula is a real, cited figure, sourced in a dedicated block at the foot of the tool.

## QA

- Verified with Playwright headless Chromium: zero console errors, zero horizontal overflow at 1440px and 390px viewports, across US-vs-US, GCC-vs-GCC, and US-vs-GCC market pairings.
- Verified the tax computation against known values: Texas ($0 state tax) vs. California (13.3% top marginal on the same package) computed correctly to the dollar.
- Verified conditional rendering: the EOSB section correctly hides when neither selected market is a GCC country, and correctly shows the right country's formula when one or both are.
- Carousel corrected-standard applied, expanded to a full 15-step walkthrough (17 slides total): cover and closing are design-only; every other slide is a real browser-chrome screenshot of the tool mid-use, including a before/after pair on the simulator, two different EOSB formulas (UAE then Saudi Arabia, captured after actually switching the dropdown), a print-preview capture, the Arabic RTL ledger, and the mobile layout.
- Fixed a real bug surfaced while capturing the print-preview slide: the tool's `@media print` stylesheet only whited out `<body>` and left the ledger, cards, and score ring on their dark navy backgrounds, producing a half-dark, half-white printout. Rewrote the print stylesheet to properly convert every component to a clean light layout.

## Key learnings

01. A market picker beats a fixed pair: the same ledger logic that worked for Boston vs. Abu Dhabi holds for Texas vs. Saudi Arabia, if the tax and gratuity models are built generically from day one.
02. Two cost-of-living indices with different baselines can't be blended into one honest number; showing them side by side, clearly labeled, respects the data more than forcing false comparability.
03. Real state tax law has real edges, Texas at 0% and California at 13.3% on the identical package is a $41,000 swing that no synthetic placeholder would have caught.

## Files in this delivery

- `day42-compensation-command-center.html` — the tool
- `carousel/slides/01_cover.png` … `17_closing.png` (15-step walkthrough) — individual 1080×1080 carousel slides
- `carousel/html_out/day42-carousel.html` — HTML gallery version of the carousel
- `screenshots/` — standalone PNGs of the tool in key states
- `day42.md` — this file

