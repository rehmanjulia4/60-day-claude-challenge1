# Day 26 — Prior Authorization Workflow Simulator (US + GCC)

**ABTalks 60-Day Claude Challenge**
**Author:** Dr. Julia Rehman, DHA, MBA, MHA, MPH, FACHE, eFACHDM

---

## What This Is

A fully interactive prior authorization workflow simulator covering the complete PA lifecycle — intake through authorization, resubmission, denial, peer-to-peer review, formal appeal, and external review — across seven markets: United States, UAE (Dubai/DHA), Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.

Each market tab switches the platform, administrative burden clock limit, documentation requirements, denial codes, and appeal pathways. The tool is bilingual (English/Arabic) with full RTL layout support.

---

## Live Workflow

The simulation runs through seven stages:

| Stage | Lane | Clock Impact |
|-------|------|--------------|
| 1. Intake | Patient | +1 day |
| 2. Evaluate | Provider | +2 days |
| 3. Assemble | Provider | +0.5 days per doc added |
| 4. Submit | Provider → Payer | +1 day |
| 5. Payer Review | Payer | +2–3 days |
| 6. Denial/Appeal | Payer | +3–14 days depending on path |
| 7. Complete | — | — |

The administrative burden clock turns amber at 60% of each market's limit and red when the limit is exceeded. The resubmission pathway (pend → gather → update → resubmit → clock resets) is a distinct three-step workflow, not a soft denial.

---

## Markets and Platforms

| Market | Platform | Standard Limit | Urgent |
|--------|----------|---------------|--------|
| 🇺🇸 United States | FHIR ePA / CMS-0057-F | 14 calendar days | 72 hours |
| 🇦🇪 UAE — Dubai | DHA eClaimLink | 5 business days | 24 hours |
| 🇸🇦 Saudi Arabia | NPHIES / CCHI | 3 business days | 24 hours |
| 🇶🇦 Qatar | NHIC / SEHA | 5 business days | 24 hours |
| 🇰🇼 Kuwait | MOH + Private (Hybrid) | 5–7 business days | Insurer SLA |
| 🇧🇭 Bahrain | NHRA / Salam | 5 business days | Priority |
| 🇴🇲 Oman | DAMAN / MOH | 7 business days | Insurer SLA |

---

## AI Touchpoints

| Stage | AI Role | Human Role |
|-------|---------|------------|
| Intake | Real-time eligibility check | Authorization request initiation |
| Evaluate | Criteria pre-matching | Clinical judgment on necessity |
| Assemble | Document gap detection | Clinical documentation authorship |
| Submit | Auto-routing (routine cases) | Complex case escalation |
| Appeal | Brief preparation, evidence surfacing | Peer-to-peer argument |

The peer-to-peer conversation cannot be automated. AI prepares. A physician argues.

---

## Denial Appeal Pathways

### United States (InterQual / US payers)
- **Peer-to-Peer Review:** +3 days, 43% overturn rate
- **Formal Internal Appeal:** +7 days, 28% overturn rate
- **External Independent Review:** +14 days, 35% overturn rate (payer bound)

### GCC Markets (documentation-based reconsideration)
- **Reconsideration:** 4–7 business days, 28–38% overturn
- **Mediation:** 8–10 business days
- **Regulatory Escalation (DHA/CCHI/NHRA):** 14–21 business days

GCC reconsideration is documentation-based, not physician-call-based. Document package AI is higher-value in GCC than peer-to-peer preparation tools.

---

## Key Technical Features

- **Single-file HTML (119KB):** No build system, no external dependencies except Google Fonts CDN
- **7 market tabs** with fully distinct data: platform name, turnaround limit, documentation requirements, denial codes, appeal labels, appeal rates
- **Bilingual EN/AR** with RTL layout flip via `dir="rtl"` on body and Noto Naskh Arabic font
- **Drag-and-drop** case card movement between lanes (with drop zone affordances)
- **Seeded efficiency scoring** that penalizes resubmissions and denial cycles
- **Confetti animation** on authorization
- **AI touchpoint labeling** at each stage using inline pill badges

---

## Data Sources

All clinical thresholds, turnaround times, denial rates, and platform details are drawn from named sources:

- **AHA 2024 Survey:** 15–18% first-pass denial rate, 3+ hours/week physician PA burden
- **CAQH Index 2024:** $78 average administrative cost per specialty PA request
- **CMS-0057-F Final Rule (Feb 2024):** FHIR ePA mandate, 14-day standard window, 72-hour urgent
- **DHA eClaimLink documentation:** 5 business day standard, 24-hour urgent, AED 5,000 threshold, ±15% cost estimation requirement
- **CCHI / NPHIES:** 3 business day mandate, FHIR R4 native, structured data requirement
- **NHIC Qatar:** 5 business day SLA, Seha scheme mandatory coverage
- **NHRA Bahrain:** 5 business day standard, NHRA centralized oversight
- **AMA data:** $13 billion annual PA administrative cost estimate

GCC payer-specific denial rates (DHA: 16%, CCHI: 22%, NHIC: 14%, Kuwait: 18%, Bahrain: 13%, Oman: 20%) are estimated from available market intelligence and disclosed as estimates, not published survey data.

All synthetic demo data uses fixed scenarios with named patients, ICD-10 codes, CPT codes, and payer names. It is educational and does not represent a real coverage determination.

---

## Files

| File | Description |
|------|-------------|
| `day26_pa_simulator.html` | Interactive PA simulator (119KB) |
| `carousel_01.png` – `carousel_10.png` | LinkedIn carousel slides (1080×1080) |
| `wf_us_01_intake.png` – `wf_us_06_authorized.png` | US workflow live screenshots |
| `wf_uae_01_intake.png` – `wf_uae_06_arabic.png` | UAE DHA workflow + Arabic mode |
| `wf_sau_*.png` | Saudi NPHIES workflow screenshots |
| `wf_qat_*.png` | Qatar NHIC workflow screenshots |
| `wf_kwt_*.png` | Kuwait hybrid PA screenshots |
| `wf_bhr_*.png` | Bahrain NHRA screenshots |
| `wf_omn_*.png` | Oman DAMAN screenshots |

---

## What I Learned Building This

**01.** Saudi Arabia and UAE are ahead of the US on PA digital infrastructure. NPHIES FHIR R4 launched in 2021. CMS-0057-F FHIR ePA mandate targets 2027. The US is catching up to the GCC.

**02.** The resubmission pathway is the most overlooked part of PA education. A pend resets the clock entirely. Three distinct steps. AI gap detection at document assembly is the highest-ROI intervention.

**03.** AI has five distinct touchpoints in the PA lifecycle. At appeal, AI prepares the brief. A physician makes the argument. That line does not move.

**04.** Building this required operational knowledge of six distinct platforms. DHA, CCHI, NHIC, NHRA, DAMAN, and MOH are not variants of one system. Treating them as such is the first mistake in GCC market entry.

---

*Dr. Julia Rehman · DHA, MBA, MHA, MPH, FACHE, eFACHDM*
*Chief Intelligence and Transformation Officer · Abu Dhabi, UAE*
*ABTalks 60-Day Claude Challenge · Day 26*
