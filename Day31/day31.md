# Day 31 — AI Supply Chain Control Tower → Hospital Operations Edition

**Series:** 60-Day Claude Challenge · HealthNexus Build Series
**Builder:** Dr. Julia Rehman
**Category:** AI Operations & Supply Chain Control Towers
**Deliverable:** Single-file interactive HTML simulation

---

## What this is

The Day 31 prompt asked for a generic logistics "Supply Chain Control Tower" game: trucks, ports,
warehouses. I rebuilt it as a **Hospital Supply Chain Control Tower** that puts the player in the seat
of a Head of Supply Chain & Operations for a live health system, continuing directly from Day 30's
Healthcare Supply Chain Optimizer.

Instead of generic freight alerts, the simulation runs on ten healthcare-specific disruption types:
blood product shortages, critical drug backorders, PPE stockouts, cold-chain temperature excursions,
device recalls, port/customs holds on implants, OR equipment failures, seasonal demand spikes,
inventory discrepancies, and damaged biologics shipments. Every decision moves eight live KPIs:
Patient Safety Index, Patient Satisfaction, Inventory Health, Logistics Efficiency, Operating Cost
Impact, Care Continuity Protected, Score, and Remaining Time.

## Dual-market build

At the start screen, the player chooses which health system to run:

- **Lakeshore Regional Health** — Chicago, Illinois, USA · 612-bed system · FDA / CMS / Joint
  Commission oversight · USD · O'Hare air cargo routing
- **Al Noor Health System** — Abu Dhabi, UAE · 480-bed system · MOHAP / DOH / SFDA oversight ·
  AED · Jebel Ali port routing

Alert text, currency, regulatory references and logistics routing all change based on the selected
market, so the GCC system gets the same operational depth as the US system rather than a
find-and-replace treatment.

The full interface — KPI labels, alert titles and descriptions, action buttons, the operations log,
the help modal, and the end-of-shift summary — toggles between English and Arabic with right-to-left
layout on a single tap.

## How the simulation works

1. Player selects a health system and starts a 3-minute shift.
2. Alerts spawn on a randomized timer that accelerates as the shift progresses (more alerts, shorter
   fuses, up to four active at once).
3. Each alert carries a priority tier (critical / high / medium), a countdown, a stated clinical or
   operational impact, and four response options — typically one or two correct actions, one partial
   / compromise action, and clearly weaker options (ignore, delay).
4. Choosing an action applies immediate deltas to all eight KPIs and the score; letting an alert
   expire applies a fixed penalty across safety, satisfaction, inventory and logistics.
5. At time zero, the shift ends with a letter grade (A+ through D) computed from final score and
   average KPI health, plus a breakdown of alerts resolved, correct decisions, wrong decisions, and
   missed/ignored alerts.

## Screenshots

| | |
|---|---|
| ![Briefing screen](screenshots/01-briefing-screen.png) Health system selection (briefing screen) | ![GCC market](screenshots/02-gcc-market-selected.png) Al Noor Health System selected (GCC market) |
| ![Live alert feed](screenshots/03-live-alert-feed.png) Live alert feed mid-shift, KPIs under pressure | ![Shift results](screenshots/04-shift-results.png) End-of-shift grade and scorecard |
| ![Arabic RTL mode](screenshots/05-arabic-rtl-mode.png) Full Arabic / RTL toggle | ![Mobile responsive](screenshots/06-mobile-responsive.png) Mobile responsive layout |

## Final shift score (demo run)

- **Grade:** A
- **Score:** 760
- **Alerts resolved:** 11 · **Correct decisions:** 8 · **Wrong decisions:** 2 · **Missed/ignored:** 1
- **Patient Safety Index:** 86% · **Patient Satisfaction:** 82% · **Inventory Health:** 79% ·
  **Logistics Efficiency:** 88%
- **Operating Cost Impact:** -$21,300 · **Care Continuity Protected:** $224,000

## Key learnings

1. **Operational games need clinical stakes, not generic ones.** Swapping "truck breakdown" for
   "O-negative blood reserve critical" changes how seriously a leader engages with the same decision
   mechanic — the urgency reads as real rather than illustrative.
2. **Dual-market parity means region-coherent detail, not a language switch.** GCC alerts route
   through Jebel Ali and cite MOHAP/SFDA; US alerts cite FDA/CMS and route through US air cargo.
   Mixing the two would have broken the simulation's credibility immediately for a GCC health
   executive reviewing it.
3. **A scorecard only feels real when cost and protection are both visible.** Showing Operating Cost
   Impact next to Care Continuity Protected forces the same trade-off real supply chain leaders make
   under pressure, instead of collapsing everything into a single abstract "score."

## Methodology note

Alert categories are modeled on documented healthcare supply chain risk types (AHRMM supply chain
risk categories, ASHP drug shortage reporting structure, FDA/MOHAP recall notice formats). All
facility names, supplier names, dollar/AED figures, and incident details inside the simulation are
synthetic and built for training purposes — they do not represent real patients, vendors, or
incidents.

## Technical notes

- Single self-contained HTML file — HTML, CSS, and vanilla JavaScript only, no frameworks, no
  external APIs, fully playable offline (Google Fonts links degrade gracefully to system fonts
  without a connection).
- Bilingual EN/AR implemented via a `data-en` / `data-ar` attribute pattern on every static string,
  with `dir` toggled on `<body>` and Noto Naskh Arabic applied for RTL rendering.
- Demo state loader (`?demo=1` URL parameter) exposes `loadDemoCrisis()` and `loadDemoEnd()` for
  deterministic, reproducible screenshots of mid-shift and end-of-shift states.
- Responsive down to mobile (390px) with a dedicated breakpoint for the top action bar.
- Carousel slides built as eight individual 1080×1080 HTML files sharing one design-token stylesheet
  (navy/teal/gold palette, Cormorant Garamond + DM Sans), screenshotted individually via headless
  Chromium — the same reliable pattern used in prior challenge days.

---

*Part of the 60-Day Claude Challenge. Free to join: https://www.abtalks.in/?ref=BCVEJQ*
