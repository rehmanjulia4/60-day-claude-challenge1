# Day 20 — Visual Decision Support Companion
### 60-Day Claude Challenge | Dr. Julia Rehman

**Original prompt:** Build an AI Face Puzzle Game
**Healthcare lens applied:** I moved away from the puzzle mechanic entirely. Instead: a primary care intake aid where a clinician uploads a clinical photo and structured visit notes, and Claude drafts an objective, framework-referenced observation summary, never a diagnosis, to support the clinician's own decision about a care plan or referral.

---

## What I built

A single-file HTML application: `visual-decision-support-companion.html`

- Photo upload (or a synthetic, clearly-labeled demo image for testing without a real patient photo)
- A structured visit-notes form: anatomic location, age band, duration, evolution, and checkbox findings (bleeding, pain, immunosuppression, family history, etc.)
- A Claude API call (vision) that returns a strict JSON structure: objective visual observations, named clinical frameworks referenced, referral discussion points, and items the clinician must confirm independently
- The model is explicitly instructed never to name a diagnosis, give a probability, or output a numeric risk score
- A clinician acknowledgment gate: referral discussion content is visibly blurred and inert until the clinician checks "I have personally examined this patient... and understand this draft does not replace my own clinical judgment"
- Two prominent, persistent banners: a non-diagnostic disclaimer, and a demo-environment data handling notice

## Why this design

This is a more sensitive build than a game, so the constraints did real work:

- **No fabricated certainty.** The model is prompted to use only objective, descriptive language and to reference real, named, published frameworks (the ABCDE criteria for pigmented lesions, from the American Academy of Dermatology) rather than inventing thresholds, sensitivities, or risk scores.
- **The clinician stays the decision-maker.** The acknowledgment gate isn't decorative, the referral section is genuinely inert (blurred, non-interactive) until checked. The output is framed throughout as discussion points and items to confirm, not a recommendation.
- **Data handling is disclosed, not assumed.** Because this demo necessarily sends an image to an API to use vision capability, I said so plainly, including that a real deployment handling protected health information would need BAA-covered infrastructure, not a public demo page. That's a meaningfully different governance posture than my earlier puzzle builds, which could legitimately claim local-only processing. This one can't, so it doesn't.

## Result

Full workflow tested end to end: upload, structured intake, generation, the acknowledgment gate correctly blurring and unblurring the referral section. Screenshots of the actual running app are included in this folder.

## Key learnings

01. **A healthcare AI tool that touches real clinical photos needs a fundamentally different governance posture than a game.** "Processed locally" was an honest claim for the puzzle. It would be a dishonest claim here, so I changed the disclosure instead of trying to preserve the claim.
02. **A consent gate has to actually gate something.** Blurring and disabling the referral section until acknowledgment is checked is a small amount of code that does real work; without it, "decision support, not diagnosis" is just a sentence in a banner.
03. **Constraining the model's output schema is itself a safety control.** Telling Claude to never output a named diagnosis or a numeric risk score, and enforcing that through the JSON contract, is what keeps the tool in descriptive-support territory instead of drifting into something that looks like automated diagnosis.

## Files in this folder

- `visual-decision-support-companion.html` — the complete application
- `screenshots/` — real captures of the running app (intake, gated result, unlocked result)
- This file

---

*Built as part of the [ABTalks 60-Day Claude Challenge](https://www.abtalks.in/?ref=BCVEJQ).*
