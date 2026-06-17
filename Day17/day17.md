# Day 17 · Global Ambulance Fleet Intelligence Dashboard

**ABTalks 60-Day Claude Challenge**
Dr. Julia Rehman · Chief Intelligence & Transformation Officer

---

## What I Built

An interactive dark-mode ambulance fleet analytics dashboard covering 10 cities across 4 countries where I have lived and worked. Features a 5-language switcher, filterable city cards, head-to-head comparison panel, and two SVG data visualisations. Companion 6-slide LinkedIn carousel with baked-in comparison charts for every metric.

---

## Personal Context

These are not random cities. They map to my professional footprint:

| City | System | My Connection |
|---|---|---|
| Albuquerque, NM | Albuquerque Fire Rescue + AMR | Presbyterian Healthcare Services |
| Denver, CO | Denver Health Paramedics + Denver Fire | UCHealth |
| St. Louis, MO | St. Louis Fire Dept EMS + STARS | SSM Health / BJC network |
| Abu Dhabi, UAE | Abu Dhabi Police EMS + SEHA Ambulance | Current base |
| Dubai, UAE | Dubai Ambulance Corporation | Current region |
| Riyadh, KSA | Saudi Red Crescent Authority (SRCA) | MNGH / Director, Healthcare Data Science |
| Doha, Qatar | Hamad Medical Corporation EMS | GCC professional network |
| Delhi, India | Delhi 102/108 Ambulance + CATS | India professional background |
| Mumbai, India | 108 Emergency (GVK EMRI) + MCGM | India professional background |
| Hyderabad, India | 108 Emergency (GVK EMRI) Telangana | India professional background |

---

## Audited Dataset (Synthetic, Post-Generation Review)

All metrics are synthetic but were audited against published sources. **25 values were corrected post-generation** — every urban response time was optimistic in the original generation.

| City | Urban Resp (min) | Rural Resp (min) | Cost/mile ($) | Fleet | Calls/day | Uninsured % |
|---|---|---|---|---|---|---|
| Albuquerque, NM | 7.5 | 38 | $0.47 | 68 | 250 | 11% |
| Denver, CO | 6.2 | 22 | $0.44 | 95 | 420 | 8% |
| St. Louis, MO | 8.5 | 14 | $0.41 | 52 | 274 | 16% |
| Abu Dhabi, UAE | 8.5 | 28 | $0.28 | 180 | 700 | 5% |
| Dubai, UAE | 7.8 | 20 | $0.26 | 225 | 1,315 | 4% |
| Riyadh, KSA | 10.5 | 32 | $0.22 | 520 | 1,150 | 8% |
| Doha, Qatar | 7.5 | 15 | $0.24 | 210 | 770 | 3% |
| Delhi, India | 17.0 | 30 | $0.09 | 890 | 4,500 | 65% |
| Mumbai, India | 19.0 | 28 | $0.08 | 640 | 3,000 | 60% |
| Hyderabad, India | 15.5 | 35 | $0.10 | 380 | 620 | 58% |

### Audit Sources

- NEMSIS National EMS Data (USA response time benchmarks)
- Kaiser Family Foundation (KFF) State Health Facts 2023 (uninsured rates)
- Dubai Ambulance Corporation 2022 Annual Report (fleet size, call volume)
- Saudi Red Crescent Authority (SRCA) national publications
- GVK EMRI Telangana operational reports (Hyderabad call volume)
- HMC Qatar EMS data (Doha response, fleet size)
- WHO Emergency Care Atlas (regional benchmarks)

---

## Key Findings

**01. Mumbai response time is 3x Denver's.** 19.0 min vs 6.2 min. Not a resource gap — a structural geography and congestion gap. More ambulances do not fix monsoon flooding, bridge chokepoints, or Dharavi lane widths.

**02. India fleets cost 80% less per mile than US fleets.** $0.08-$0.10/mile vs $0.41-$0.47/mile. Driven by CNG penetration (40-45% of fleet) and subsidised fuel pricing, not lower service quality.

**03. The insurance gap is the operational gap.** Delhi 65% uninsured, Mumbai 60%. EMS in these cities functions as a primary care substitute. GCC mandatory insurance frameworks have reduced this to 3-8% — a policy outcome with direct EMS utilisation implications.

**04. Doha leads the dataset at 28% Hybrid penetration.** FIFA World Cup infrastructure investment created a lasting fleet modernisation effect. GCC fleets are transitioning faster than US fleets on this metric.

**05. Every city's first-generation response time was too fast.** Auditing against published sources corrected all 10. The lesson is structural: synthetic generation has an optimism bias on operational metrics. Always cross-check.

---

## Dashboard Features

- Dark mode throughout: #060d1a background, teal #0fd4be and gold #c9a84c accent system
- 8-language switcher: English, Español, Arabic (RTL layout), Hindi, Bengali, Tamil, Telugu, Urdu — Arabic and Urdu both trigger full dir="rtl" layout
- Region filter: All / USA / GCC / India — collapses city cards and cultural challenge cards simultaneously
- Fuel filter: highlights matching segment on every city fuel mix bar
- City cards: click to select up to 5, compare panel opens with 7-metric head-to-head bar chart
- Scatter chart: response time vs cost per mile, bubble size = daily call volume, hover tooltips
- Uninsured bar chart: sorted highest to lowest with system context on hover
- Cultural access challenges: 10 city cards, 4 challenges each, region-filterable

## Carousel Slides (6)

01. Hook: "19 minutes." Mumbai vs Denver 3x stat, 10-flag city row
02. Response time: horizontal bar chart, all 10 cities ranked fastest to slowest
03. Cost per mile: horizontal bar chart, cheapest to most expensive with source note
04. Uninsured rate: proportional bubble chart, policy insight box
05. Fuel mix: stacked bar chart, all 10 cities side by side — CNG dominance visible
06. Cultural challenges: 3-column grid (USA / GCC / India) with CTA and credentials

---

## Learnings

**01.** Synthetic data generation reliably produces optimistic operational estimates. Response times were too fast in every single city without exception. Audit before you publish.

**02.** The biggest cross-system insight is not fuel cost — it is the insurance gap as an operational variable. Delhi handles 4,500 calls/day with a 17-minute urban response because EMS is filling a primary care void. That is a population health policy failure expressed as an EMS metric.

**03.** Cultural context is not a soft add-on to fleet data. Hajj surge planning, Ramadan demand shifts, monsoon rerouting, and informal settlement access all require operational protocols with no analogue in Western EMS frameworks. You cannot import a US EMS model into Mumbai or Riyadh.

**04.** RTL language support (Arabic) adds one layer of technical complexity — dir="rtl", mirrored flexbox, Arabic font fallback — achievable in pure HTML/JS with no framework.

---


## Operational Intelligence Layer (Research Extension)

**Key metrics added beyond fuel cost and access:**

### Unit Hour Utilization (UHU)
UHU = responses in period / staffed unit hours in period. Healthy range: 0.30–0.45. Above 0.50 = crew fatigue risk.

| City | Est. UHU | Status |
|---|---|---|
| Mumbai | 0.50 | Crew fatigue threshold |
| Delhi | 0.43 | High operational stress |
| Dubai | 0.35 | Healthy range |
| St. Louis | 0.33 | Healthy range |
| Denver | 0.28 | Moderate |
| Albuquerque | 0.23 | Moderate |
| Doha | 0.22 | Low — best GCC profile |
| Abu Dhabi | 0.19 | Low — reallocation opportunity |
| Riyadh | 0.13* | Baseline low; Hajj surge 2-4x |
| Hyderabad | 0.12* | Distribution maldistribution |

*Low UHU masks geographic maldistribution or known seasonal surge exposure, not true excess capacity.

### 133% Buffer Rule
Industry standard: fleet should equal 133% of peak operational units (Frazer EMS / EMS World).

| City | Fleet | 133% Target | Vehicles down before impact |
|---|---|---|---|
| St. Louis | 52 | 58 | ~6 — Critical |
| Albuquerque | 68 | 76 | ~8 — Thin |
| Denver | 95 | 106 | ~11 — Adequate |
| Doha | 210 | 233 | ~23 — Good |
| Dubai | 225 | 253 | ~28 — Good |
| Abu Dhabi | 180 | 200 | ~20 — Adequate |
| Riyadh | 520 | 572 | ~52 — Good baseline, Hajj wipes it |
| Hyderabad | 380 | 426 | ~46 — Adequate |
| Mumbai | 640 | 718 | ~78 — High volume risk |
| Delhi | 890 | 997 | ~107 — Large buffer but high demand |

### Lifecycle Intelligence
- Replace at 5–7 years / 150–250K miles (Frazer EMS benchmark)
- Cost per mile rises 35% for vehicles over 10 years old (Fleetio 2025 Fleet Benchmark Report)
- Each missed PM interval reduces vehicle life 5% and raises CPM 12% over next 50,000 miles
- Ambulance Patient Offload Time (APOT) at overcrowded EDs silently drains fleet availability

### Capacity Building: Improvement Pathways

**USA (St. Louis, Denver, Albuquerque):**
- Community paramedicine diversion: 11–61% of EMS calls are non-urgent (RHIhub); diverting 15–30% recovers unit hours without adding fleet
- APOT reduction protocols restore units to service faster
- Dynamic system status management vs fixed-station dispatch

**GCC (Abu Dhabi, Dubai, Riyadh, Doha):**
- Predictive surge modelling for Hajj, Ramadan, summer heat waves — all calendar-predictable
- Dedicated staged units for single-bridge access zones (Palm Jumeirah)
- EV/hybrid fleet transition: Doha 28% hybrid is the regional benchmark

**India (Delhi, Mumbai, Hyderabad):**
- Partial outsourcing to 112/police: PMC 2022 Uttarakhand simulation showed 13–17% rural response improvement
- Community paramedicine model for low-acuity call diversion
- Monsoon pre-positioning before June onset (Mumbai)
- Address system modernisation for GPS routing accuracy in new development zones

### Sources for Operational Intelligence Layer
- NEMSIS National EMS Data (UHU benchmarks)
- Frazer EMS: fleet size 133–150% standard
- EMS World / HMP Global: fleet replacement strategy
- Fleetio 2025 Fleet Benchmark Report: CPM by vehicle age
- PMC 2022 / Dove Medical Press: sustainable EMS model India, partial outsourcing simulation
- RHIhub Toolkit: community paramedicine non-urgent transport rates
- JEMS / EMS1: APOT, UHU, lifecycle articles
- NAEMSP / USFA FEMA: UHU provider satisfaction research

## Tools

- Claude Sonnet 4.6 (claude.ai) — generation, audit, iteration
- Pure HTML / CSS / JS / SVG — zero CDN dependencies
- 8 languages built inline, no external translation API
- Chrome DevTools device emulator for screenshot capture

---

*ABTalks 60-Day Claude Challenge · Day 17 · Dr. Julia Rehman*
*Challenge is free and open: https://www.abtalks.in/?ref=BCVEJQ*
