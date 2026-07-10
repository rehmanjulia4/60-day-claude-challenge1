# Day 40 / 60 · HealthNexus™ Vendor Diligence Advisor

**Challenge:** Build Your Own AI Assistant · From Idea to Production-Ready AI Assistant
**HealthNexus reframe:** Instead of a generic, interview-driven AI assistant builder, this day produces a purpose-built conversational governance officer: an AI assistant that pressure-tests a clinical AI vendor's claims across five fixed evidentiary dimensions before a health system signs a contract.

## Why this reframe

The original prompt asks for a general-purpose assistant discovered through a five-question interview. In a health system, the AI assistants that matter most to an executive are not friendly chatbots, they are decision-support tools for high-stakes, one-time judgment calls. Vendor evaluation for clinical AI is exactly that kind of call: a CDO or CMIO sits across from a vendor's sales team, hears confident claims about accuracy and validation, and has to decide within weeks whether to recommend a multi-year contract to the board.

The Vendor Diligence Advisor is built to be the skeptical voice in that room. It does not celebrate the vendor's pitch. It asks what evidence is behind the first claim it does not believe, grades every dimension of the evaluation as the conversation happens, and only renders a verdict once there is something real to base it on.

## What was built

A single-file, offline HTML application (no external libraries, no CDN dependencies) that:

- Calls the Claude API directly (`claude-sonnet-4-6`) using a user-supplied API key entered in the interface
- Sends a fixed governance system prompt on every request, defining scope, the five evaluation dimensions, tone, output format, and edge-case handling
- Parses a structured JSON response each turn (conversational reply, ledger update, optional verdict) rather than free text, so the interface never has to guess at the model's intent
- Renders a live "Evidence Ledger" that grades five fixed dimensions (Clinical Safety, Data Governance, Bias & Validation, Integration Risk, Commercial Terms) as unexamined, claimed, documented, or missing
- Stamps a case verdict (Proceed / Proceed with Conditions / Decline) only once the model actually issues one, styled as a rotated case-file stamp rather than a percentage score
- Ships with a deterministic `?demo=1` through `?demo=5` URL parameter that replays a scripted six-turn evaluation of a synthetic vendor ("NeuraTriage AI") for reliable screenshots without needing a live API key
- Supports three HealthNexus theme variants (Navy, Teal, Gold) and full English/Arabic bilingual support with true RTL layout mirroring, not just translated labels
- Includes a collapsible "How this was built" panel documenting the system prompt design, UI decisions, and extension ideas (tools, memory, multi-step workflows)

All fonts (Cormorant Garamond, DM Sans, Noto Sans Arabic) are embedded as base64 via `@font-face`, so the tool works fully offline once downloaded. Verified in headless Chromium via Playwright: zero console errors across desktop, mobile, and all theme/language/demo states.

## System prompt design

The system prompt fixes role and scope before tone, so the model cannot be reasoned into approving a vendor without evidence regardless of how the conversation is framed. Five dimensions are hard-coded rather than left to emerge from the conversation, which keeps the evaluation from drifting into generic vendor Q&A. A fixed status vocabulary (unexamined, claimed, documented, missing) keeps grading consistent from turn to turn instead of drifting with the model's mood. Edge cases (pasted marketing copy, a demand for instant approval, an out-of-scope legal question) are handled explicitly in the prompt rather than patched onto the interface afterward. The full system prompt is included in this folder as `system_prompt.md`.

## Synthetic scenario used for screenshots

All screenshots depict a synthetic vendor evaluation ("NeuraTriage AI," an emergency department triage tool) with fabricated claims, contract terms, and study details. No real vendor, contract, or patient data appears anywhere in this deliverable. The scenario is disclosed on-screen in the tool's footer at all times.

## Carousel design

The 10-slide carousel is a visual walkthrough of the actual tool, not generic text slides. Four slides embed real screenshots of the tool in browser-chrome mockups (traffic-light dots, URL bar) with leader-line callouts annotating a specific mechanic: the empty-state ledger, a claim flipping to "claimed" in real time, evidence graded "missing" in risk red, and the verdict stamp rendering only on an actual call. The remaining six slides use purpose-built diagrams: a claimed-versus-proven comparison grid, a before/after reframe strip, a five-dimension evidence grid mirroring the product's own information architecture, a bilingual EN/AR side-by-side, and a closing numbered-learnings layout. All 10 slides were rendered at 1080×1080 and checked for layout collisions before export.

## Key learnings

1. **Fixed dimensions beat open-ended chat.** Five graded categories, defined in the system prompt itself, keep a governance conversation from collapsing into generic reassurance the way an unstructured assistant would.
2. **A verdict should be a commitment device, not a running score.** By rendering the stamp only when the model issues an actual call, a partial conversation can never be mistaken for a completed evaluation, on screen or in a screenshot.
3. **Grading vocabulary needs to be fixed in the prompt, not inferred by the UI.** Defining "claimed," "documented," and "missing" explicitly in the system prompt, rather than leaving the model to describe evidence in free text, is what makes the ledger's color grading trustworthy turn over turn.

## Files in this folder

- `tools/VendorDiligenceAdvisor.html` · the complete offline application
- `system_prompt.md` · the full production system prompt
- `screenshots/` · 11 screenshots covering desktop, mobile, both languages, all three themes, the documentation panel, and three points in the demo conversation
- `carousel/` · 10 carousel slides at 1080×1080

---

*Acknowledgments: I'm grateful to [Anthropic](https://www.linkedin.com/company/anthropicresearch/), [ABTalksOnAI](https://www.linkedin.com/company/abtalks-on-ai/), and [Anil Bajpai](https://www.linkedin.com/in/anil-bajpai/) for creating challenges that encourage building practical AI solutions with real-world impact. Also for [Damian Swartz](https://www.linkedin.com/in/damian-swartz-41578110a/), [Madhumanti Mitra](https://www.linkedin.com/in/madhumanti-m-764b0aa5/), [Dr. Shaik Mohiuddin FACHE, CHE, M IOD](https://www.linkedin.com/in/shaik-mohiuddin-fache/), [Sonya Curtis DHA, DNP, MBA, RN, CNL, CPHQ, FACHDM, FADLN](https://www.linkedin.com/in/sonya-curtis-dha-dnp-mba-rn-cnl-cphq-fachdm-fadln-96455a19/), [Dr. Kaoutar Cheikhi](https://www.linkedin.com/in/kcheikhi/), and Dr. Fatema Ravat for being participants with me in this journey. I also appreciate the work being done by the [American College of Healthcare Executives](https://www.linkedin.com/company/american-college-of-healthcare-executives/) (ACHE), the [American College of Health Data Management](https://www.linkedin.com/company/american-college-of-health-data-management/) (ACHDM), and the [American College of Artificial Intelligence and Medicine](https://www.linkedin.com/company/american-college-of-artificial-intelligence-and-medicine/) (ACAIM) to advance leadership, data, and responsible AI across healthcare.*
