# API.md — HealthNexus Command Center

**Day 52 of 60 · System Design**

## 1. Why This Is a Module Interface, Not a REST API

Per the approved architecture (`ARCHITECTURE.md`), v1.0 has no server, so there are no HTTP endpoints. What follows is the **v1.0 API contract**: the function-level interface every component calls against `incidentState.js`. This is documented with the same rigor as a REST contract — purpose, request (params), response (shape), validation, "authentication" (session-level access, since v1.0 is single-user/local), and error cases — because this interface is exactly what gets swapped for real HTTP endpoints if a backend is added post-v1.0 (see §4).

## 2. v1.0 Module Interface

### `getIncidentQueue(filters?)`
- **Purpose:** Return the sorted, optionally filtered incident queue.
- **Request:** `filters?: { facilityId?: string }`
- **Response:** `Incident[]`, sorted by `severityTier` (desc) then `timestamp` (desc), each with `facilityName` joined in.
- **Validation:** `facilityId`, if provided, must exist in generated `Facility[]`; otherwise returns unfiltered queue and logs a dev-mode warning.
- **Auth:** None in v1.0 (single implicit COO session, no login per PRD out-of-scope).
- **Error cases:** Empty generated dataset (should not occur under seeded generation; defensive empty-array return if it does).

### `getIncidentDetail(incidentId)`
- **Purpose:** Return full detail for one incident, including its `Recommendation` and `SignOff` (if any).
- **Request:** `incidentId: string`
- **Response:** `{ incident, facility, recommendation, signOff | null }`
- **Validation:** `incidentId` must exist; throws a typed `NotFoundError` if not.
- **Auth:** None in v1.0.
- **Error cases:** Unknown `incidentId` (stale link after a reseed) → `NotFoundError`, caught by `IncidentDetail.jsx` to redirect to the queue.

### `getFacilitySummary()`
- **Purpose:** Return per-facility open-incident counts and worst severity tier, for the comparison strip.
- **Request:** none
- **Response:** `{ facilityId, name, openCount, worstTier }[]`
- **Validation:** N/A (derived, read-only aggregate).
- **Auth:** None.
- **Error cases:** None expected; defensive zero-state if `Facility[]` is empty.

### `submitSignOff(incidentId, signOffInput)`
- **Purpose:** The **only** function in the codebase permitted to transition an incident's derived `status` to `resolved`.
- **Request:** `incidentId: string`, `signOffInput: { signerName, signerRole, decision, decisionNote? }`
- **Response:** `{ success: true, incident, signOff }` on success.
- **Validation:**
  - Incident must exist and must not already have a `SignOff` (no double sign-off).
  - `decision` must be one of `accepted | modified | rejected`.
  - `decisionNote` is **required** if `decision !== 'accepted'` — rejected at the function boundary, not just in the form UI, so no code path can bypass it.
- **Auth:** None in v1.0, but `signerName`/`signerRole` are required fields precisely so the audit trail has an accountable name even without a login system.
- **Error cases:** `IncidentNotFoundError`, `AlreadySignedOffError`, `ValidationError` (missing required note on non-accepted decision).

### `getResolvedIncidents()`
- **Purpose:** Return all incidents with a completed `SignOff`, with recommendation vs. decision shown side by side.
- **Request:** none
- **Response:** `{ incident, facility, recommendation, signOff }[]`, each with a derived `divergent: boolean`.
- **Validation:** N/A, read-only.
- **Auth:** None.
- **Error cases:** None expected.

## 3. Error Case Summary

| Error | Thrown By | Handled By |
|---|---|---|
| `NotFoundError` | `getIncidentDetail` | Redirect to queue with a toast |
| `IncidentNotFoundError` | `submitSignOff` | Form shows a generic retry message |
| `AlreadySignedOffError` | `submitSignOff` | Form disables and shows existing sign-off instead |
| `ValidationError` | `submitSignOff` | Inline field error, submission blocked |

## 4. Future Backend API (Post-v1.0, Not Built Now)

If real persistence is added later, this module interface maps almost directly onto REST endpoints, which is precisely why we specified it this rigorously today:

| v1.0 Function | Future Endpoint |
|---|---|
| `getIncidentQueue(filters?)` | `GET /api/incidents?facilityId=` |
| `getIncidentDetail(id)` | `GET /api/incidents/:id` |
| `getFacilitySummary()` | `GET /api/facilities/summary` |
| `submitSignOff(id, body)` | `POST /api/incidents/:id/sign-off` |
| `getResolvedIncidents()` | `GET /api/incidents/resolved` |

No authentication scheme is specified for the future API today — that is a post-v1.0 design decision, out of scope per the Day 51 PRD, and will be scoped when real persistence is actually built.
