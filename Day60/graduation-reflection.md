# Future Scope: HealthNexus Command Center

## Next 3 Months: Governance Depth

The MVP proves the loop (Queue, Case File, Recommendation, Sign-Off, Resolved) works end to end for a single facility view. The next quarter is about making the governance model defensible in front of an actual compliance or risk committee, not just a demo audience.

- Full audit trail export (who signed off, when, what the AI recommended vs. what the clinician decided, and any override rationale) as a downloadable, timestamped log per incident.
- Role-based views: a COO rollup, a CMIO clinical-quality lens, and a facility-level charge nurse queue, all reading from the same incidentState.js boundary but rendering different slices.
- Escalation rules: incidents that sit in queue past a configurable threshold auto-flag for a second reviewer, closing the gap between "recommendation shown" and "recommendation acted on."
- Expand the synthetic dataset beyond a single specialty mix so severity scoring and facility comparisons hold up across a more realistic case variety.

## Next 6 Months: Multi-Facility Reality

This is where the "multi-facility health system" framing in the original brief gets tested for real, not just in copy.

- Facility comparison dashboards with real (not synthetic) benchmarking logic: variance in time-to-sign-off, override rates, and severity distribution across sites.
- A configuration layer so a health system can define its own severity taxonomy and specialty list without a code change, since no two systems triage identically.
- Arabic-first data entry, not just RTL mirroring of English-authored content, so a GCC facility's clinical staff can log incidents natively rather than translating into an English-first tool.
- Accessibility pass (WCAG 2.1 AA) given this is a tool clinicians will use under time pressure.

## Next 12 Months: From Tool to Platform

- API layer so incident data can flow from and to an actual EHR or incident-reporting system, rather than living only inside the static-site sandbox.
- Longitudinal analytics: trend lines per facility over months, not just a point-in-time queue, so a COO can see whether governance interventions are actually moving the numbers.
- A credentialing/permissions model distinguishing who can recommend, who can sign off, and who can only view, matching how real clinical governance committees are structured.
- Formal validation study: compare AI-recommended severity/triage against retrospective clinician judgment on a real (de-identified) dataset, which is the credibility step needed before any health system takes this beyond a portfolio piece.

The throughline across all three horizons: every expansion adds capability without removing the clinician-in-the-loop sign-off. That constraint doesn't get "optimized away" as the tool grows, it's the whole point of the tool.
