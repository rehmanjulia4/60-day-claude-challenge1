# Day 36 — HealthNexus Executive Decision Pattern Explorer
## ABTalks 60-Day Claude Challenge · Cognitive Pattern Explorer, Reframed

**Founder:** Dr. Julia Rehman, DHA, MBA, MHA, MPH, FACHE, eFACHDM
**Role:** Chief Intelligence and Transformation Officer
**Associations:** ACHE VP MENA · ACHDM International Chair · GCC Ambassador ACAIM
**Markets:** United States & GCC
**Date:** Day 36 of 60

---

## The Reframe

The starter prompt for Day 36 asked for a generic self-reflection quiz on thinking styles, told through everyday life scenarios. That was rebuilt into the **HealthNexus Executive Decision Pattern Explorer**, a bilingual-ready, single-file offline tool that explores how healthcare executives naturally approach uncertainty, using real HealthNexus-style scenarios: a supply chain shortage, a clinical AI governance flag, a board budget conflict, a regulatory deadline, a patient safety report, and a staffing crisis, instead of generic personal situations.

This keeps the original mechanic (Calm/Stress mode, scenario-based discovery, drag-and-drop priorities, a mapped thinking sequence, and a personalized Reflection Journal) but grounds every scenario in executive decision-making rather than abstract life choices.

## What Was Built

A single self-contained HTML file, `index.html`, requiring no internet connection and no external dependencies.

### Flow
1. **Start Screen** — Calm Mode or Stress Mode selection, each reframing the same six scenarios at a different pace and pressure level.
2. **Chapter 1 · Discover Your Thinking Style** — Six executive scenarios, each with five response options mapped to one of five thinking tendencies.
3. **Chapter 2 · Choose Your Priorities** — Five draggable priority cards (Data & Evidence, Team Consensus, Speed of Action, People & Human Impact, Thorough Risk Review) ranked by instinct.
4. **Chapter 3 · Map Your Thinking** — Five draggable steps (Gather data, Check gut, Revisit options, Act, Pause and weigh) arranged into a natural sequence.
5. **Reflection Journal** — A personalized percentage breakdown across five thinking tendencies, rendered as a native SVG radar chart plus ranked bars, with reflective (not diagnostic) language, and a Calm vs. Stress comparison if both modes are completed.

### Thinking Tendencies Explored
- Analytical Thinker
- Emotional Intuitive
- Overthinking Loop Style
- Action-First Decision Maker
- Balanced Reflective Thinker

### Technical Build
- Single HTML file, vanilla JavaScript only, no frameworks.
- Cormorant Garamond and DM Sans fonts embedded as base64 `@font-face` declarations, fully offline.
- Native HTML5 drag-and-drop for reordering, with keyboard arrow-button fallback for full keyboard accessibility.
- `prefers-reduced-motion` respected throughout.
- `?demo=1` URL parameter pre-loads a synthetic demo state for reviewers.
- Verified with a full Playwright run through every chapter, both modes, and the Reflection Journal, with zero console or page errors and zero horizontal scroll overflow at mobile viewport width.

### Design System
Executive Navy background with a Clinical Teal accent in Calm Mode, shifting to a warmer amber accent in Stress Mode to visually signal urgency, consistent with the established HealthNexus visual language (navy, teal, gold) used across the portfolio.

## Reflection Journal Language

All results are framed reflectively rather than clinically: "You tend to lead with data before committing to a direction," never "You are an Analytical type." The tool explicitly states in the interface and documentation that it is an educational self-reflection exercise, not a psychological or clinical assessment.

## Carousel

A 10-slide LinkedIn carousel (1080x1080, exported individually plus as `carousel.html`) with one dominant, purpose-built visual per slide:

1. Opening compass graphic
2. Before/after reframe comparison
3. Five-segment radial wheel of thinking tendencies
4. Chapter 1 scenario and response card
5. Chapter 2 ranked priority cards with a connector rail
6. Chapter 3 horizontal decision timeline
7. Calm vs. Stress split-screen contrast
8. Reflection Journal radar chart with sample data
9. Three icon-medallion lessons learned
10. Closing equation and call to action

Every slide was verified at zero pixel overflow programmatically (`scrollWidth`/`scrollHeight` vs. `clientWidth`/`clientHeight`) before export, not just checked visually.

## Synthetic Data Disclosure

All example scenario responses, priority rankings, and the sample radar chart shown in the carousel and screenshots use illustrative, synthetic selections. No real executive assessment data is represented anywhere in this deliverable.

## Files in This Package

- `index.html` — the interactive tool
- `carousel/carousel.html` and `carousel/slide_01.png` through `slide_10.png`
- `screenshots/` — tool screenshots across all chapters and both modes
- `day36.md` — this file
- `linkedin_post.txt` — ready-to-post LinkedIn copy and first comment

---

*Part of the HealthNexus Executive Decision Intelligence portfolio, built across the ABTalks 60-Day Claude Challenge.*
