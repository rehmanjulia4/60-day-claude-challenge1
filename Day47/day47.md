# Day 47 / 60: HealthNexus Patient Communication Intelligence Studio

## Reframe

The original challenge prompt asked for a generic "Content Intelligence Studio," a multi-stage AI content review tool with specialized reviewers, multimodal input, and scoring. For a healthcare executive audience, generic content review is not the real use case. The real use case is **pre-publication review of patient-facing materials**: discharge instructions, informed consent forms, health education handouts, and medication guides, in a bilingual EN/AR health system operating across US and GCC markets.

This build also adds a requirement the generic prompt does not: **clinicians in the loop**. AI review accelerates the process, but it does not get to decide what reaches a patient. That decision stays with a named clinician, every time.

## What was built

**HealthNexus Patient Communication Intelligence Studio** is a single-file offline HTML tool with five specialized AI reviewers, a mandatory clinician review gate, and a governed publishing checklist.

### The five reviewers
1. **Health Literacy Reviewer** — reading level, plain-language compliance, jargon density
2. **Clinical Accuracy Reviewer** — internal consistency, safety-critical omissions, ambiguous instructions
3. **Linguistic & Cultural Reviewer** — EN/AR translation fidelity, register, GCC cultural fit
4. **Consent & Compliance Reviewer** — disclosure norms, escalation pathways, voluntariness language
5. **Accessibility Reviewer** — layout, contrast, scannability for elderly and low-vision patients

Each reviewer runs a live call to the Claude Messages API with a production-quality system prompt and returns a structured score, rating, summary, and 3-5 findings. Nothing is hardcoded or templated; every insight comes from the model.

### Clinician Review Gate
This is the governance layer the generic prompt does not ask for. Every AI flag is explicitly labeled "AI-assisted, not clinical sign-off." A clinician (selectable role: Attending Physician, Patient Education Nurse, Compliance Officer, Clinical Pharmacist) must **Acknowledge** or **Override** each flag before the document can move to "Approved for release." Overrides require a documented clinical reason, which becomes part of a visible audit trail. The Executive Summary explicitly separates AI-identified risk from clinician-confirmed risk from clinician-overridden (dismissed) risk, so leadership sees the human oversight layer, not just an aggregate score.

### Multimodal support
The tool accepts both pasted text and uploaded images (a photo of a printed pamphlet or a screenshot), sending images directly to Claude's vision capability so visual issues (layout density, font sizing, cramped bilingual text) can be caught, not just text-only issues.

### Design system
Built on the established HealthNexus design system: Executive Navy, Clinical Teal, and GCC Gold themes; Cormorant Garamond (display) + DM Sans (body) + Noto Sans Arabic (RTL); full EN/AR bilingual support with true RTL layout mirroring, not just translated labels; all fonts embedded as base64 for a zero-CDN-dependency offline file.

## Demo walkthrough

Using a synthetic composite cardiac catheterization discharge pamphlet (no real patient, provider, or institution), the five reviewers ran in sequence:

| Reviewer | Rating | Score |
|---|---|---|
| Health Literacy | Moderate | 61/100 |
| Clinical Accuracy | Strong | 78/100 |
| Linguistic & Cultural | Elevated | 69/100 |
| Consent & Compliance | Moderate | 72/100 |
| Accessibility | Strong | 80/100 |

The most consequential finding came from the Linguistic & Cultural reviewer: the Arabic translation dropped the word "firm" from "bleeding or swelling that does not stop with firm pressure," a precision loss that could change when a patient decides to call for help. A reviewing clinician overrode this flag after verifying the gap was covered by verbal counseling, but only after documenting that reasoning, which is now part of the permanent audit trail rather than a silent judgment call.

## Key learnings

01. AI can run five specialist reviews in the time it takes to read one email, but it cannot sign its name to a patient safety decision.

02. The highest-value catch wasn't a low score. It was a single dropped safety word in translation that both language versions had passed on their own.

03. A publishing checklist that requires a named clinician's signature turns AI review from a suggestion into a governed process.

## Build notes

- Single-file HTML, React 18 (UMD production build) + JSX precompiled via Babel at build time, zero CDN dependencies
- Fonts embedded as base64 (Cormorant Garamond, DM Sans, Noto Sans Arabic)
- Verified with Playwright: zero console errors, zero horizontal overflow at desktop and mobile viewports
- `?demo=1` URL parameter exposes deterministic state-injection hooks used to generate these screenshots without live API dependency in the test harness
- All demo content is synthetic composite data, disclosed on-screen throughout

## Disclosure

All content in this demo, patient scenario, facility name, medical record identifiers, and sample pamphlet text, is synthetic composite data created for demonstration purposes. No real patient, provider, or institutional information was used.
