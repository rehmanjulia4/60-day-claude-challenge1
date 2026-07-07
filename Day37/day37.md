# Day 37 / 60: Task Compass, Leadership Crossroads

**Challenge:** ABTalks 60-Day Claude Challenge
**Deliverable type:** Interactive HTML tool, LinkedIn carousel, screenshots
**Author:** Dr. Julia Rehman

**Update:** extended from two critical access hospital scenarios to four
sites, adding two large academic medical center transformation scenarios
(USA and Saudi Arabia), so the tool now spans both ends of the health system
size spectrum: rural critical access and large academic transformation.

## Reframe from the base prompt

The Day 37 prompt template ships as a generic organizational-thinking game where the
player picks a workplace type (tech company, café, retail, and so on) and routes
generic tickets between generic job titles.

For the HealthNexus portfolio, that generic frame was replaced with a use case
tied directly to the kind of role I am pursuing: a **CEO-perspective leadership
simulation set inside two critical access hospitals**, one in the Midwest United
States and one in Oman, both composite scenarios built around the operational,
financial, and community pressures that put critical access hospitals at risk
of closing. The player is the newly arrived CEO deciding who on the leadership
team owns each situation, in what order work should move, and who else needs
to be in the room for the harder problems.

## What the tool does

**Task Compass: Leadership Crossroads** is a single self-contained HTML
file, fully bilingual in English and Arabic with complete right-to-left layout
mirroring, not just translated labels.

- **Four-site toggle:** switch between the Midwest US critical access
  hospital, the Oman critical access hospital, a large academic medical
  center in the USA, and a large academic medical center in Saudi Arabia.
  Same three-stage mechanic, four different regulatory and organizational
  contexts, four different leadership benches.
  - Midwest US / Oman: CFO/CNO/CMO/Board Chair equivalents, focused on
    reimbursement, staffing, and community trust pressures that put small
    rural hospitals at risk of closing.
  - USA / Saudi Arabia academic centers: Chief Digital & Information (Health)
    Officer, Chief Medical Officer or Medical Director, Chief Research
    Officer, Dean of Medicine, CFO, CNO, VP Quality/CBAHI Accreditation
    Director, and Board of Trustees, focused on digital transformation,
    research governance, accreditation, and academic-clinical tension at
    large teaching hospitals.
- **Stage 1, Who Owns This:** three realistic situations per hospital (a
  Medicare Cost Report deadline, an OB staffing shortage, a community
  newspaper story questioning solvency, and their Oman equivalents). The
  player places one leader in the ownership slot; the reveal always explains
  the reasoning and who may assist, never a plain right or wrong.
- **Stage 2, Task Routing:** three situations per hospital where the player
  builds the order work should travel through the leadership team (three to
  four steps), then sees the reasoning behind that sequence.
- **Stage 3, Collaboration Challenge:** three larger situations per hospital
  (a physician recruitment crisis, a payer mix collapse, a facility
  designation decision, and Oman equivalents around national health strategy
  and rural access) where the player selects up to four leaders who need to
  be involved, not a single owner.
- **Leadership Thinking Dashboard:** a canvas-drawn radar chart across four
  dimensions (Ownership, Delegation, Collaboration, Workflow Thinking) plus a
  short written reflection, generated from the player's choices rather than a
  single score.

## Synthetic data disclosure

All four scenarios are **composite case studies built for this exercise**.
No real hospital, health system, or named individual is represented. Figures,
deadlines, and situations are illustrative and drawn from publicly known
categories of risk and transformation activity for each facility type
(regulatory reimbursement, clinical staffing, payer mix, and community trust
for the critical access scenarios; digital transformation, research
governance, and accreditation for the academic medical center scenarios), not
from any single institution's actual data. This is disclosed on-screen via
the scenario tag under each site name.

## Build stack

- React 18 and ReactDOM 18 production UMD builds, embedded directly in the
  HTML file (no CDN)
- JSX precompiled at build time via `@babel/core` with `@babel/preset-react`
  (classic runtime), output embedded as plain JavaScript
- Cormorant Garamond and DM Sans from `@fontsource`, plus Noto Sans Arabic for
  the bilingual/RTL experience, converted to base64 and embedded as
  `@font-face` declarations
- Canvas-based radar chart, no charting library
- Native HTML5 drag-and-drop for role placement, with click-to-place as a
  reliable fallback
- Verified with Playwright: zero console/page errors, zero DOM-level overflow
  across intro, all three stages, and the results screen, in both English and
  Arabic, at both mobile and desktop viewports

## Files in this folder

- `task-compass.html`, the complete offline tool, four sites (`?demo=1`,
  `?demo=2`, `?demo=3` pre-load sample states for quick review)
- `screenshots/`, standalone PNGs of the tool in key states across all four
  sites, synthetic data only
- `carousel/`, the original 10-slide two-hospital carousel (Midwest US and
  Oman), PNG and HTML
- `carousel-v2-four-sites/`, a revised 10-slide carousel walking through all
  four sites as a single capability narrative: the range (quadrant map of
  rural-to-academic, US-to-GCC), a tour of each site, the shared three-stage
  mechanic, a side-by-side of the reveal logic across all four leadership
  benches, two results dashboards, and a closing capability statement
- `carousel-v3-scenario-walkthrough/`, the final 13-slide version, which
  walks through one real Stage 1 (ownership) and one real Stage 3
  (collaboration) decision from each of the four sites, using actual in-tool
  screenshots of the task and its reveal, then closes with the shared
  mechanic, two results dashboards, and the capability statement

## Key learnings

1. The closest operational leader usually owns the task, not the most senior
   title in the room, and that holds whether the title is CNO or Director of
   Nursing.
2. Complex critical access hospital problems rarely have one owner. Finance,
   clinical operations, and community relations have to move together, not in
   sequence.
3. Building the same mechanic across two health systems with different
   regulators (CMS/state rural health offices versus Oman's MOH and Wilayat
   health councils) surfaced how much of "who owns this" is really about
   proximity to the problem, not the org chart title.

