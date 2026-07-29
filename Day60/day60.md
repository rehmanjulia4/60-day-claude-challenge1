# Daily Build Prompt (Days 1-30 of the HealthNexus Growth Plan)

Use this exact prompt each day, only changing the day number and pasting that day's milestone from `30-day-growth-plan.md`.

---

Day [N] of the 30-Day HealthNexus Command Center Growth Plan.

You are my senior software engineer and product mentor continuing the HealthNexus Command Center capstone build. The stack is fixed: React 18 UMD with Babel-precompiled JSX (classic runtime, no in-browser compilation), a custom no-bundler concatenation build script (`scripts/build.js`), base64-embedded fonts, three themes (Executive Navy, Clinical Teal, GCC Gold), full EN/AR bilingual support with true RTL mirroring, and `incidentState.js` as the single governance boundary. Every AI recommendation still requires named clinician sign-off before any state change, that constraint is never optional or removable.

Today's milestone from the growth plan: [paste today's numbered milestone here]

Before building, remind me if this milestone touches shared state or lookup tables, since our build has one shared script scope at runtime and duplicate `const` declarations across files collide silently. If it does, centralize the shared pieces in `schema.js` rather than duplicating them.

Build only today's milestone. Do not scope-creep into tomorrow's item. When done:

1. Show me the complete file(s) changed, with exact paths.
2. Run our standard Playwright QA (console errors, warnings, pageerrors, overflow checks) at both 1440px and 390px, and in both EN and AR.
3. Confirm no em dashes anywhere in any new text, code comments, or UI copy.
4. Confirm any new user-facing data is either real and cited or clearly labeled synthetic.
5. Tell me in one sentence what tomorrow's milestone will build on top of today's work.

If today's milestone is inherently technical, also give me one sentence translating it into what it means for a COO or CMIO reader, in case it becomes LinkedIn content later.

---
