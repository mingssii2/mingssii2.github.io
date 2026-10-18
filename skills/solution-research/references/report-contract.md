# Report Contract

Build one canonical report. Render only the audience views required by the decision owner.

## Contents

1. Canonical report
2. Alternative comparison
3. Recommendation blocks
4. Audience views
5. Lifecycle block

## 1. Canonical Report

Use the sections the task needs:

1. Decision requested
2. Executive answer
3. Context and execution surface
4. Goals, non-goals, and hard constraints
5. Research method and source scope
6. Solution landscape and architecture-family coverage
7. Evidence-backed findings
8. Hard-constraint filter
9. Shortlisted alternatives and trade-offs
10. Recommendation, status, and confidence
11. Risks, limitations, unknowns, and contradicting evidence
12. Verification evidence or next discriminating test
13. Implementation implications without an implementation plan
14. Operations and lifecycle
15. Sources and research date

Keep citations adjacent to supported claims. Separate sourced facts, observed behavior, and inference.

## 2. Landscape And Alternative Comparison

Show the broad landscape before ranking:

| Family | End-to-end route | Layer owners | Data mode | Hard-constraint status (`pass/conditional/unknown/fail`) | Decisive limits | Evidence/confidence |
|---|---|---|---|---|---|---|

Use one row per architecture family. Group transport or connector variants beneath their parent family instead of presenting minor variations as independent architectures.

Then compare only surviving routes:

Use criteria selected with the decision owner:

| Criterion | Operational definition | Option A | Option B | Option C | Evidence/confidence |
|---|---|---|---|---|---|

Include reuse, simplification, native capability, or doing nothing when viable.

When scoring:

- Define what each score means.
- Show hard constraints separately; a disqualified option cannot win by total score.
- State assumptions and weights.
- Test whether reasonable weight/assumption changes alter the result.

Run a coverage audit before recommending:

- Source-native route considered.
- Destination-native route considered.
- Semantic/intermediary route considered.
- For cross-ecosystem work, destination-pull, source-push, and intermediary-serve directions considered.
- Direct integration and compositional bridge considered.
- Local/self-hosted and managed-service routes considered where plausible.
- Live versus physically materialized output distinguished.
- Actual entitlement/access distinguished from what the named base suite includes.
- Every intermediary checked for live, query, export, file, and workflow egress where applicable.
- Excluded families shown with the decisive reason.

When no single route dominates, name separate winners for strict constraint fit, operational simplicity, scale/reliability, and conditionally available capabilities. Do not hide a strong conditional route inside an exclusions paragraph.

## 3. Recommendation Blocks

### Verified recommendation

- Recommended option.
- Why it wins under the stated constraints.
- Fresh target-relevant evidence.
- Residual risks and monitoring.
- Decision or approval needed.

### Provisional recommendation

- Current best option.
- Missing evidence.
- Consequence if the assumption is wrong.
- Next discriminating test.
- Required owner, tool, environment, or permission.
- Decision that can safely proceed now versus the part that must wait.

## 4. Audience Views

### Executive

Keep to decision, value, investment, time/organizational impact, top risks, confidence, reversibility, and approval needed. Link to the canonical evidence instead of reproducing technical detail.

### Tech Lead

Include system context, runtime/identity/data boundaries, alternatives, architectural trade-offs, failure modes, rollout/rollback implications, observability, and operational ownership.

### Developer

Include exact product/runtime/API/contracts, version assumptions, edge cases, data invariants, evidence, verification matrix, and constraints the later implementation plan must preserve.

## 5. Lifecycle Block

Always state:

- Decision owner.
- Implementation owner if known.
- Operational owner.
- User-relevant health indicators.
- Monitoring and escalation expectation.
- Review date or event trigger.
- Scale/cost/security/vendor thresholds that require reconsideration.
- Exit, rollback, or migration path.
