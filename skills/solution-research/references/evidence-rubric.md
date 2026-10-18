# Evidence Rubric

Use for standard/high-assurance research, ambiguous failures, conflicting sources, or provisional recommendations.

## Contents

1. Source hierarchy
2. Claim ledger
3. Hypothesis tests
4. Search record
5. Confidence and status
6. Stopping rules

## 1. Source Hierarchy

Prefer evidence closest to the decisive behavior:

1. Fresh target-environment test with retained output.
2. Raw logs, configuration, code, request/response, or runtime observation from the scoped environment.
3. Current official API contract, standard, limit, policy, or release note.
4. Primary research or authoritative institutional guidance.
5. Reproducible vendor issue or verified incident record.
6. Reputable secondary analysis.
7. Forum, social post, or unattributed example as a discovery lead only.

Several pages repeating one underlying claim count as one line of evidence.

## 2. Claim Ledger

Track each decision-critical claim:

| Claim | State | Source/observation | Environment/version | Contradiction | Impact if wrong | Required check |
|---|---|---|---|---|---|---|

States:

- `documented`
- `observed`
- `inferred`
- `provisional`
- `verified`
- `disproven`
- `unknown`

Keep facts and inferences in separate rows when an inference materially affects the decision.

## 3. Hypothesis Tests

For an ambiguous symptom:

| Hypothesis | Supporting evidence | Contradicting evidence | Discriminating test | Result |
|---|---|---|---|---|

A useful discriminating test:

- Changes the conclusion depending on the result.
- Runs in or closely represents the target surface.
- Measures the real output or a necessary invariant.
- Minimizes writes, cost, and blast radius.

Preserve disproven hypotheses and failed solutions so later work does not repeat them.

## 4. Search Record

For high-assurance work record:

- Research question and sub-questions.
- Search date and version/time scope.
- Sources, databases, sites, repositories, and tools searched.
- Query strings or query matrix.
- Inclusion and exclusion rules.
- Results screened and material exclusions with reasons.
- Backward/forward citation or reference chasing.
- Known blind spots, inaccessible sources, and search limits.

Use generic wording for external queries when private context exists.

## 5. Confidence And Status

Judge confidence from:

- Evidence proximity to the target behavior.
- Source authority and independence.
- Environment/version match.
- Reproducibility.
- Agreement or explained disagreement.
- Coverage of material failure modes.
- Sensitivity to unresolved assumptions.

Suggested labels:

- `high`: decisive target evidence plus authoritative support; material contradictions resolved.
- `medium`: strong documentation/observation but one meaningful target check or assumption remains.
- `low`: indirect evidence, poor environment match, unresolved contradictions, or important unknowns.

Confidence never upgrades `provisional` to `verified`.

Treat observed target access as stronger evidence than an inference that a base license does not include an add-on. Record the unresolved explanation—separate assignment, trial, workspace capacity, inherited entitlement, or another account—as `unknown` rather than overwriting the observation.

## 6. Stopping Rules

Stop searching when:

- Every decision criterion has evidence or an explicit unknown.
- Each plausible architecture family has been assessed or explicitly excluded.
- User-proposed approaches no longer define the boundary of the option space.
- Material failure modes and disconfirming evidence have been sought.
- Further search is unlikely to change the ranking or the next test.
- Remaining uncertainty is captured with consequence and owner.

Continue or escalate when:

- A critical claim depends only on a secondary source.
- Documentation and observed runtime behavior conflict.
- A plausible unknown can change the selected option.
- The recommendation is expensive, irreversible, security/privacy relevant, regulated, or safety critical and lacks target evidence.

If the evidence cannot distinguish options, report that result. Recommend the smallest safe test that can.
