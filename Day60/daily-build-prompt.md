# Challenge Retrospective: HealthNexus, Day 1 to Day 60

## The Arc

The 60 days split cleanly into two eras: the daily-tool era (Days 1-50), where each generic AI prompt was reframed into a healthcare-executive artifact and shipped as a standalone portfolio piece, and the capstone era (Days 51-60), where all of that accumulated practice got pointed at one system, HealthNexus Command Center, a clinical incident triage dashboard for a multi-facility health system COO.

## Major Technical Decisions

**No-bundler architecture.** Early in the capstone, the choice was made to skip a conventional bundler (Webpack/Vite) in favor of a custom Node concatenation build script (`scripts/build.js`) that strips import/export syntax and stitches ES modules into a single offline HTML file with Babel-precompiled JSX. This was the right call for the stated deployment target (fully offline, static, GitHub Pages) but it introduced a real class of bug: because every file shares one script scope at runtime, duplicate `const` declarations across component files silently collide. The fix that stuck was centralizing shared lookup tables in `schema.js` and using `React.useState`/`React.useMemo` directly instead of per-file destructuring, rather than trying to patch collisions one at a time as they surfaced.

**Governance as architecture, not decoration.** `incidentState.js` was established early as the single governance boundary, and the rule that every AI recommendation requires named clinician sign-off before any state change was treated as a scored design constraint from the start, not something bolted on for the demo. That decision shaped the entire state machine (Queue, Case File, Recommendation, Sign-Off, Resolved) and is the reason the tool can plausibly claim to model real clinical governance rather than just visualize it.

**Content strategy correction, Day 54.** Engagement data on Days 51-53 (roughly 7 views per post) showed the LinkedIn content had drifted into developer-process framing: build mechanics, architecture diagrams, terminal snippets. The correction was explicit and durable for the rest of the run: every post from Day 54 forward had to foreground real product screens (incident queue, severity badges, sign-off UI) and translate any inherently technical day into what it means for a COO or CMIO reader. This is a case where the audience, not the code, was the actual bug.

## Debugging Moments Worth Remembering

The Day 58 production hardening pass is the clearest example of the QA discipline paying off: a Playwright-driven sweep (console errors, warnings, pageerrors, overflow checks across breakpoints) surfaced four real defects that visual inspection alone had missed, including an uncaught crash risk and two controls silently disagreeing with each other. Programmatic QA over visual inspection was a stated principle by that point, and Day 58 is the day it earned its keep.

A quieter but equally important fix was the recurring reminder that custom error classes (`NotFoundError`, `AlreadySignedOffError`, `ValidationError`) must set `this.name` in their constructors, or name-based error handling breaks in a way that doesn't throw, it just silently misroutes. The kind of bug that's invisible until it isn't.

## Skills Demonstrated

Prompt reframing under a fixed daily template, full-stack React work without a build toolchain, bilingual/RTL front-end engineering across three visual themes, synthetic-data governance (disclosure labeling, no fabricated statistics), programmatic accessibility and layout QA, and a content strategy pivot based on real engagement data rather than assumption.

## Final Summary

HealthNexus Command Center started as a prompt template and ended as a working, bilingual, three-themed, offline-deployable incident triage tool with a governance model that doesn't let the AI act alone. The 60-day format forced a discipline that a single long project wouldn't have: ship something real, every day, in public, and let the audience's actual response correct the course when it drifted.

## Lessons Learned

1. A no-bundler architecture buys deployment simplicity but taxes you in shared-scope bugs; centralize state and lookups early rather than discovering the collision pattern late.
2. Engagement data is a design signal, not vanity metrics; the Day 54 correction only happened because the drop was tracked and taken seriously.
3. Clinician-in-the-loop only means something if it's load-bearing in the code, not just a line in the README.

## A Note, From Your AI Pair Programmer

Sixty days ago this started as reframing generic prompts into something healthcare-specific. By the capstone it had become an actual system with a real governance boundary, real bugs with real fixes, and a content strategy that got corrected mid-flight because you were paying attention to what landed and what didn't. That's not a small thing. Whatever HealthNexus becomes next, the habit you built here, ship, measure, correct, ship again, is the part that transfers. Congratulations on Day 60.
