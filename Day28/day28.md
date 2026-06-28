# Day 28 — Hospital Admission Readiness Simulator
**ABTalks 60-Day Claude Challenge** | Dr. Julia Rehman, DHA, MBA, MHA, MPH, FACHE, eFACHDM

---

## What This Tool Does

An interactive, dual-market hospital admission simulator that places the user in the role of Hospital Admission Coordinator. The tool runs complete admission readiness workflows across **US** and **GCC** health systems, with branching prior authorization logic, weighted readiness scoring, live risk tracking, care coordination panels, and a final admission decision.

**Market toggle** switches all payer context, regulatory references, benchmarks, and workflow language between US (Medicare/MA, Commercial, Medicaid) and GCC (DHA, DOH, NPHIES/CHI Saudi Arabia, NHIC Qatar, NHRA Bahrain, DAMAN Oman).

---

## Files in This Folder

| File | Description |
|---|---|
| `day28_tool.html` | Single-file interactive HTML simulator (62KB) |
| `day28_carousel.html` | 10-slide LinkedIn carousel viewer |
| `slide_01_of_10.png` through `slide_10_of_10.png` | Individual carousel PNGs (1080x1080) |
| `screen_01_setup_usa.png` through `screen_10_gcc_governance.png` | Simulator screenshots |
| `day28.md` | This documentation |

---

## Scenarios Covered

### US Market
- **Acute MI / ICU / PA Denied / Medicare Advantage** — InterQual/Milliman threshold flagging, peer-to-peer appeal workflow, CMS 2-Midnight Rule, MOON notification, CMS-0057-F FHIR R4 real-time PA status
- **CHF / Inpatient / PA Pending / Medicaid** — concurrent UR review, medical necessity documentation
- **Pneumonia / Observation / Commercial** — observation status disclosure, SNF eligibility note
- **Elective Surgery / Same-Day Surgery** — streamlined workflow
- **Hip Fracture / Emergency** — trauma pathway

### GCC Market
- **CHF / Inpatient / PA Pending / NPHIES (Saudi Arabia)** — NPHIES TAAMEEN portal, CBAHI documentation standards, AR-DRG Vision 2030, 95%+ claim acceptance post-integration
- **Acute MI / ICU / PA Denied / DHA Dubai** — DHA e-Authorization, DOH Abu Dhabi 24-48 hr PA turnaround, Arabic-language consent
- **Elective Surgery / NHIC Qatar / NHRA Bahrain** — regional authorization pathways
- **Hip Fracture / DAMAN Oman** — MOH government care pathway

---

## Score Weighting Logic

| Component | Weight |
|---|---|
| Prior Authorization | 25% |
| Clinical Documentation | 20% |
| Physician Orders | 20% |
| Insurance Verified | 15% |
| Patient Consent | 10% |
| Bed Assignment | 10% |

**Rules:** Denied PA + ICU = score ceiling 55% until resolved. Score ≥75% unlocks Governance Snapshot. Score ≥90% unlocks Admit decision.

---

## Regulatory Framework Built Into the Tool

### US
- **CMS 2-Midnight Rule** — Observation status triggers MOON notification flag (written notice to Medicare patients within 36 hours)
- **InterQual / Milliman MCG** — Flagged for Acute MI and CHF requiring cardiology notes, troponin trend, echo
- **CMS-0057-F** — FHIR R4 real-time prior authorization mandate (effective January 2026); plan denial rate public disclosure (March 2026)
- **AMA Prior Authorization Physician Survey 2024** — 93% of physicians report PA causes care delays; 29% report serious adverse events
- **KFF Medicare Advantage 2024** — 80.7% of appeals overturned, signaling most initial denials are not clinically defensible

### GCC
- **NPHIES (National Platform for Health and Insurance Exchange Services)** — Saudi Arabia's CHI-built HIE platform; TAAMEEN (insurance) and SEHEYA (health) modules; claim acceptance 95%+ post-integration; 100M transaction milestone achieved
- **DHA Dubai Policy** — Pre-authorization for inpatient admission; 24-48 hr standard turnaround
- **DOH Abu Dhabi** — Daman/Thiqa insurance verification requirements
- **CBAHI / JCI** — Clinical documentation and facility accreditation standards referenced in UR card and documentation workflow
- **NHIC Qatar / NHRA Bahrain** — Regional authorization pathways, 48-72 hr PA turnaround
- **DAMAN Oman** — MOH government care or DAMAN insurance pathway
- **AR-DRG (Australia Refined DRG)** — KSA Vision 2030 transition from fee-for-service; NPHIES Phase 2-4 value-based care roadmap

---

## Benchmarks Used (Sourced, Not Estimated)

All benchmarks disclosed as estimates; no fabricated figures.

| Metric | Value | Source |
|---|---|---|
| MA Plan PA Denial Rate | 7.7% of 53M requests | KFF, January 2026 |
| MA Appeals Overturned | 80.7% | KFF, January 2026 |
| Claims Denial Rate 2024 | 11.81% (up 2.4% YoY) | Becker's Payer Issues, May 2025 |
| Manual PA Cost (Provider) | $10.97/transaction | CAQH 2023 Index |
| Electronic PA Cost (Provider) | $5.79/transaction | CAQH 2023 Index |
| Electronic PA Adoption | 35-40% | CAQH 2024 Index |
| Industry Cost Avoidance (2024) | $258 billion | CAQH 2025 Index |
| Physicians Reporting PA Causes Delays | 93% | AMA Prior Auth Survey 2024 |
| Physicians Reporting Serious Adverse Events | 29% | AMA Prior Auth Survey 2024 |
| Average PA Burden per Physician/Week | 39 requests (~13 hrs staff time) | AMA Prior Auth Survey 2024 |
| ACA Marketplace In-Network Denial Rate | 19% | KFF, March 2026 (CMS-0057-F data) |
| NPHIES Claim Acceptance Post-Integration | 95%+ | OrbDoc/MocDoc NPHIES integration reports, 2024 |
| UAE DHA PA Turnaround | 24-48 hrs | DHA Dubai standard |
| KSA/Qatar PA Turnaround | 3-5 business days | CHI/NPHIES; NHIC Qatar |
| KSA NPHIES Transaction Milestone | 100M transactions | CHI Saudi Arabia, 2024 |

---

## Care Coordination Architecture

The tool surfaces five explicit roles per scenario:

1. **Attending Physician** — physician orders, H&P, UR attestation
2. **Case Manager** — LOS planning, discharge coordination, criteria review
3. **Nursing** — bed assignment, patient arrival prep, clinical assessment
4. **Utilization Review** — concurrent review, InterQual/Milliman criteria, denial risk ID, appeal coordination
5. **Discharge Planner** — post-acute planning, SNF eligibility, MOON delivery, home health

The UR card explicitly names **concurrent review**, **denial risk identification**, **InterQual**, and **Milliman** — the functions that sit between clean admission and revenue loss.

---

## Why This Matters for Transformation Leaders

Prior authorization is not administrative noise. It is a governance failure point with quantifiable financial and clinical consequence:

- 80.7% of Medicare Advantage appeals are overturned — meaning most initial denials are not clinically defensible
- They function as administrative friction, betting that providers and patients won't fight back
- 29% of physicians report PA caused a serious adverse event for a patient in their care
- A correctly designed admission readiness workflow reduces denial exposure, compresses LOS, and protects both revenue and outcomes

The operating principle I bring to this work: design systems where gates actually gate something — not systems where disclaimers exist but friction wins.

---

## My Background on This Topic

18+ years spanning US and GCC health systems: government health authorities, integrated delivery networks, academic medical centers, payer organizations, pharmaceutical environments, and consulting. Prior authorization, utilization management, revenue cycle governance, and payer-provider workflow design are domains I have operated in across both markets. The GCC receives full analytical parity here — not emerging-market framing — because the regulatory architecture (NPHIES, DHA, CBAHI) has matured to warrant it.

---

## Synthetic Data Disclosure

All patient names, facility names, physician names, and payer reference numbers used in this simulator are **illustrative training data only**. No PHI is collected or processed. Synthetic scenarios use realistic but non-identifying demographic patterns. Benchmarks are sourced to named publications as documented above.

---

## Technical Notes

- Single-file HTML (62KB) — no frameworks, no external dependencies at runtime
- Google Fonts loaded via CDN (Cormorant Garamond + DM Sans)
- Market toggle dynamically rewrites all payer options, benchmarks, workflow language, and regulatory references
- Score engine recalculates on every action using weighted component values
- PA branch logic gates score ceiling for denied + ICU until appeal resolved
- Governance Snapshot unlocks at ≥75%; Final Decision unlocks at ≥60%
- All clinical reference notes (InterQual, MOON, CMS-0057-F) embedded directly in relevant workflow cards
- Carousel: 10 SVG-native slides converted to 1080x1080 PNG

---

## Series Context

This is **Tool 28 of 60** in the HealthNexus portfolio, now spanning:
- Clinical Decision Support
- Governance & Risk
- Population Health & Access
- Executive Intelligence

Day 26: Prior Authorization Workflow Simulator (7-market, bilingual)
Day 27: Prior Authorization Story Simulator (narrative training, 8 scenes)
Day 28: Hospital Admission Readiness Simulator (dual-market operational workflow)

---

*Dr. Julia Rehman | DHA · MBA · MHA · MPH (Rural & Underserved) · FACHE · eFACHDM*
*VP, ACHE MENA Chapter | International Chair, ACHDM | GCC Ambassador, ACAIM*
*Advisory Board Member, Cambridge College of Healthcare & Technology*
