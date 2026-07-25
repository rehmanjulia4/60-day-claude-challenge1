# PRD.md — HealthNexus Command Center (Day 51)

**Primary Persona:** Health System COO
**Deployment Target:** Live static site (GitHub Pages), offline-first, synthetic data

## Purpose & Background
HealthNexus Command Center is the capstone project for the final 10 days of the 60-Day Claude Challenge — a single deployed product synthesizing the governance discipline, design language, and executive audience of the prior 50 days.

## Problem Statement
Multi-facility health system COOs manage clinical and quality risk across sites with fragmented visibility. There is no single, governed view that ranks concurrent incidents by severity, proposes a vetted response, and enforces clinical accountability before closure.

## Target User & Use Context
Primary persona: a health system COO overseeing clinical operations across multiple facilities, accountable to the board and regulators for both the incidents and for demonstrating that AI-assisted recommendations were clinically validated, not auto-executed.

## In Scope — v1.0
- System-wide incident queue ranked by AI-derived severity across all facilities
- Multi-facility drill-down and comparison view
- AI-drafted recommended escalation path per incident (advisor role)
- Mandatory clinician-in-the-loop sign-off gate before resolution
- Resolved-incident audit trail (recommendation vs. actual decision)
- Five-tier severity language: Exceptional / Strong / Moderate / Elevated / High Risk
- Full English/Arabic bilingual support with true RTL mirroring
- Fully offline operation on clearly labeled synthetic data
- Deployed as a live static site with a shareable URL

## Out of Scope — v1.0
- Real backend, database, or persistent multi-user storage
- Non-clinical incident types (operational, compliance, AI-governance drift)
- Single-facility deep-dive as the primary experience
- Live integration with real EHR, incident-reporting, or claims systems
- Autonomous AI action-taking of any kind

## Governance & Safety Requirements
An incident cannot transition to Resolved without a recorded clinician sign-off, distinct from the AI recommendation. Every screen displays a persistent synthetic-data disclosure label.

## Success Criteria — Day 60
Deployed to a live, public static URL. Zero console errors and zero overflow at desktop (1440px) and mobile (390px). Full EN/AR bilingual toggle with correct RTL mirroring. A complete COO triage session walkthrough: queue → detail → recommendation → sign-off → resolved audit entry.
