# Day 21: Healthcare Privacy & Trust Intelligence Dashboard

## The Challenge

The original prompt asked for a personal digital footprint visualizer: how much of your data is exposed online.

## The Reframe

I changed the question from an individual privacy audit to an executive governance instrument:

**How prepared is a healthcare organization to protect patient trust in an AI-enabled world?**

A personal exposure dashboard has limited relevance to a health system board. An executive trust score that spans privacy, AI governance, data governance, cybersecurity, and patient experience does.

## What I Built

A single-file, self-contained HTML dashboard, dark mode by default, with:

- **Role gate**: the first thing anyone sees is "I'm viewing this as: Clinical/Executive or Patient/Family," a prominent pill selector, not a buried settings toggle. Busy clinicians get full governance detail; patients and families get a plain-language summary with the technical checklists hidden.
- **Sticky status bar**: trust score, risk level, and organization name stay visible while scrolling, so a clinician glancing at the dashboard between patients doesn't have to scroll back to the top to get oriented.
- **Quick-jump navigation**: one-click links to Modules, Risk Map, Patient Trust, Simulator, and Actions in the header (hidden in Patient view to reduce clutter).
- **Executive Trust Score™**: a weighted composite across five governance domains, generated from a seeded synthetic audit (see Synthetic Data Methodology below)
- **Five Governance Modules**: Privacy Risk Assessment, AI Governance Readiness, Data Governance Maturity, Cybersecurity Posture, Patient Trust Indicators, each mapped to its accountable owner, each clickable for a full audit-sample breakdown
- **Patient-friendly module notes**: in Patient view, the dense technical checklist for each module is replaced with one plain-language sentence ("Any AI tool used in your care is reviewed by a human committee before it goes live")
- **Patient Trust Indicators**: benchmarked against real 2024 national patient access data (ASTP/ONC)
- **Rural Health Network Case Study**: real, published national benchmarks (Chartis Center for Rural Health, Microsoft Threat Intelligence) showing why a 14-hospital rural system carries materially higher cybersecurity and AI governance risk than an urban IDN, shown only in Clinical/Executive view
- **Scenario Simulator**: models the trust-score impact of governance events, anchored to real 2024 HHS OCR breach-scale data
- **"Questions to ask your care team"**: replaces the board-facing recommendations panel when viewing as a patient
- Light/dark toggle (dark is the default), CSV export, and a printable executive report view
- Five sample organization profiles, selectable as clickable cards: Integrated Delivery Network, Regional Payer, Digital Health/AI Vendor, Government Health Authority (GCC), and Rural Health Network (14 critical access hospitals, 2 referral centers)

## Why This Matters

Privacy in healthcare is not simply a compliance checkbox. It is the operating condition for patient trust, and trust is increasingly a board-level asset, not just an IT or legal concern. As AI moves into clinical and operational workflows, the organizations that treat privacy, AI oversight, and cybersecurity as one connected system, rather than three separate reporting lines, will be the ones patients and regulators trust.

## Carousel

Rebuilt as an actual product walkthrough, not abstract charts: real screenshots of the live tool (hero and org selector, the Privacy/Cybersecurity score rings, a module's synthetic audit detail, the risk heat map, and the Patient/Family simplified view) embedded in browser-chrome mockups, the same pattern used in Day 16's EHII carousel.

## A Note on Mobile Rendering

Earlier drafts used a sticky header with a collapsible menu panel. On the iOS in-app browser this produced a visual ghosting artifact during scroll capture, content appearing to double-render or wash out. The header is no longer sticky and the menu panel was removed entirely; the role toggle, quick-jump links, and export controls now sit directly in the hero, always visible, nothing collapsed. Verified clean at both 1400px desktop and 390px mobile widths, including mid-scroll.

## Design System

Rebuilt to align with the visual identity established across the challenge series (Day 9, 15, 16, 19, 20): dark-native navy (#060d1a) and navy2 (#0d1e35) surfaces, a five-tier color grading system (Exceptional/Strong/Moderate/Elevated/High using green, teal, gold, amber, and red), glowing SVG score rings, gradient progress bars, a subtle grid texture, and ambient glow accents in the hero. Cormorant Garamond for display type, DM Sans for body, gold left-rule accents on section headings.

## Synthetic Data Methodology

Per-organization module scores are no longer fixed constants. They are generated from a seeded synthetic audit: for Privacy Risk, AI Governance, Data Governance, and Cybersecurity, the tool runs a simulated checklist (40 to 60 items per domain, calibrated probabilities by organization type) through a reproducible pseudo-random generator (mulberry32, seeded per organization). The same organization always produces the same score on reload, the same way a real audit would not change just because someone refreshed a dashboard. Patient Trust Indicators are handled differently: they are anchored directly to the real ASTP/ONC 2024 national benchmark, with a small seeded organization-level deviation, not a simulated checklist.

Clicking into any module surfaces the underlying synthetic checklist sample (which items passed or failed) so a board member or auditor can see the basis for the score rather than trusting an opaque number. This is still demonstration data, clearly labeled as such throughout, but it is now generated through a transparent, documented, and reproducible method rather than typed in by hand.

## Clinically Accurate, Cited Sources

Every statistic in this deliverable that is presented as real (not labeled illustrative) traces to a publicly available, citable source:

- **HHS Office for Civil Rights, Annual Report to Congress on HIPAA Breaches, CY2024**: 663 large breach notifications, 242,908,056 individuals affected, roughly 69.5% of the US population.
- **ASTP/ONC, Individuals' Access and Use of Patient Portals and Smartphone Health Apps (2024 HINTS data)**: 77% of individuals offered online record access (up from 73% in 2022), 65% accessed records at least once in the past year, 34% are frequent users (6+ times/year), 51% proxy/caregiver access (up from 24% in 2020).
- **Chartis Center for Rural Health, Rural Health Safety Net report, Feb 2026 (CMS HCRIS Q3 2024 data)**: 41.2% of rural hospitals operating at a loss, 417 vulnerable to closure nationally.
- **Microsoft Threat Intelligence, Rural Hospital Cybersecurity Landscape, 2025**: in an analysis of 13 hospital systems including rural facilities, 93% of malicious activity was phishing or ransomware.

All per-organization module and trust scores remain illustrative design demonstrations, clearly labeled as such, not derived from any real organization's audit data.

## Learnings

01. Privacy is a trust issue before it is a compliance issue. Framing it as compliance alone undersells its strategic weight.

02. AI governance needs the same board visibility as cybersecurity already has, and that visibility needs to account for resource gaps. A rural network with under-10% of its IT budget on cybersecurity (a widely cited research estimate) cannot be governed with the same assumptions as an urban academic medical center.

03. Trust is measurable through behavior (portal adoption, consent participation, complaint trends, all now tracked nationally by ASTP/ONC), not survey sentiment alone.

## Files

- `healthcare_privacy_trust_dashboard.html`: the deployable tool
- `carousel.html`: interactive LinkedIn carousel (1080x1080)
- `carousel_png/`: individual PNG exports of all slides
- state_*.png: tool screenshots in key states

---

*Day 21 of the [60-Day Claude Challenge](https://www.abtalks.in/?ref=BCVEJQ)*
