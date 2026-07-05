# Day 35: Prompt Command Center

## Challenge
**Build Prompt Puzzle: Master AI Prompting Through Play**
Build an educational game where users learn prompt engineering through interactive challenges.

## Reframe
The original challenge is domain-agnostic: pick any field, learn prompting through a generic game. That is not a HealthNexus tool, it is a template exercise wearing a healthcare theme.

I rebuilt it as the **HealthNexus Prompt Command Center**. Same three mechanics the challenge asks for, Build the Prompt, Clean the Prompt, Choose the Best Prompt, and the same live scoring engine, but every one of the six scenarios is a real healthcare executive prompting task: a board memo on AI governance risk, a prior authorization appeal, bilingual discharge instructions, a clinical documentation improvement query, a supply chain disruption briefing, and a workforce retention plan. Three scenarios are framed for the US market, three for GCC markets, so the practice itself models the dual-market operating context this portfolio is built around.

## HealthNexus Build
Bilingual (English/Arabic, full RTL), three theme variants (Executive Navy, Clinical Teal, GCC Gold), Cormorant Garamond and DM Sans typography, all fonts embedded as base64 for offline use. The tool is a single HTML file, offline capable, with no CDN dependencies.

The scoring engine tracks accuracy, wrong placements, hints used, and time against a par, then aggregates into a five-axis **Prompt DNA** (Clarity, Constraint Discipline, Context Specificity, Format Control, Efficiency), rendered as an SVG radar chart, alongside a Prompt Score, a five-tier rating (Exceptional through High Risk), a rank, personalized feedback naming the strongest and weakest axis, a next milestone, and the person's strongest-performing prompt surfaced as a takeaway.

## On the Carousel
This is also the day I rebuilt the carousel approach itself. Every slide carries one dominant, purpose-built visual instead of a repeated card template: a prompt transformation strip, a US/GCC scenario map, a block-assembly diagram, a before/after funnel, a spectrum of prompt quality, a Prompt DNA radar, a per-scenario score chart, an annotated prompt anatomy, three icon medallions for the session's learnings, and a closing equation. No two slides share the same visual grammar. Every slide was verified for zero overflow at 1080x1080 before export.

## Files Included
- `index.html`, the complete HealthNexus Prompt Command Center (offline, bilingual, three themes)
- `carousel.html`, the 10-slide carousel source
- `/carousel/slide_01.png` through `slide_10.png`, individually exported 1080x1080 PNGs
- `/screenshots`, application states across languages and themes
- `day35.md`, this documentation

## Methodology and Data Disclosure
All six scenarios are **synthetic composite situations** built to teach a specific prompting principle. No real organization, patient, vendor, or payer is represented. Metrics like the 9% attrition figure or the six-day customs delay are illustrative constructs, not sourced statistics.

## Key Learnings
01. Role plus constraint plus format beats a wall of expert titles. Precision narrows the output, extra adjectives do not.
02. Every additional ask, background, alternatives, pleasantries, dilutes a prompt that has to move fast.
03. Design the prompt for whoever actually acts on the output. In GCC households that is often the caregiver, not the patient.

## GitHub Commit Steps
```bash
mkdir -p Day35/prompt-command-center/screenshots Day35/prompt-command-center/carousel
cp index.html Day35/prompt-command-center/index.html
cp carousel/carousel.html Day35/prompt-command-center/carousel/carousel.html
cp carousel/slide_*.png Day35/prompt-command-center/carousel/
cp screenshots/*.png Day35/prompt-command-center/screenshots/
cp day35.md Day35/prompt-command-center/day35.md

git add Day35/prompt-command-center
git commit -m "Add Day 35 HealthNexus Prompt Command Center (bilingual EN/AR)"
git push
```

## Submission
Submit the GitHub commit URL after pushing the Day35 folder.

## Tags
#60DayClaudeChallenge #HealthNexus #PromptEngineering #HealthcareAI #AIGovernance #GCCHealthcare #FACHE
