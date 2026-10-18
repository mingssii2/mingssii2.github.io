# Behavior evaluation

## Build the case matrix

Start from real user outcomes, tasks, failure reports and operations, not a role-name checklist. Use a scoped, anonymized example when available. Add synthetic cases for gaps and label them. Cover these lenses only where they affect the skill:

| Lens | Case design | Observable success |
|---|---|---|
| Ordinary use case | Typical workload, known environment, actual user intent | Completes the task with correct scope and usable output |
| Rare/compound case | Change one material variable, then combine two plausible failures | Handles invariants; does not merely memorize a fixture |
| Missing information | Withhold a fact that can change the decision; prepare consistent user replies | Asks the material question or gives a conditional answer; continues independent work |
| Architecture | Hard constraints, workload sizes, existing alternatives, ownership | No hard-constraint failure rescued by a score; decisive evidence and reconsideration threshold |
| Maintenance | Absent owner, new host/version, dependency patch, stale evidence, restore or manual fallback | Replacement operator can use the runbook; data-preserving rollback and fallback reconciliation |
| System optimization | Measured bottleneck and unchanged semantic contract | Before/after correctness plus relevant query/latency/memory/load evidence; no speculative rewrite |
| Human/non-technical | Real task, language, stress/time, shared devices, accessibility and support access | Clear state and safe next action; no blame, false certainty, hidden data loss or unconsented repurposing |
| Handoff | New agent/operator receives only packet and allowed artifacts | Correct first action; preserves decisions, permissions, unknowns and failed approaches |
| Negative control | Adjacent trivial request or explicit research-only boundary | No unnecessary workflow, delegation, artifacts or implementation |

Differentiate use cases from transport/UI variants. A unique case should add a new failure mechanism or decision boundary, not merely rename a user. Keep a common regression set and a harder development/transfer set; do not let rare cases hide failure on ordinary work.

## Task and answer separation

For each case record:

`id; primary skill/stage; user outcome; public prompt; raw inputs; allowed environment/actions; given facts; missing-fact reply script if needed; expected artifacts; grader criteria; critical gates; category; provenance`

The evaluator-only answer is an accepted solution space: invariants, decisive calculations/evidence, acceptable alternatives, known wrong approaches and next valid action when information is insufficient. A recommendation can correctly be conditional or 'no feasible route established'. Do not test unstated requirements or exact prose unless the public contract requires it.

Hide answer keys and tests from the candidate through access isolation when possible. A different directory or a fresh subagent is only procedural separation if the filesystem remains shared. State this limit. Do not call editor-seen cases sealed holdouts. For genuine transfer, use unseen cases/variants inaccessible to the skill editor and candidate.

## Graders and calibration

Use executable checks for arithmetic, state, data integrity and actual output contracts. Use a rubric for architecture, reasoning, human understanding and maintainability, with output/evidence locators. Use independent review for consequential judgments and disagreements; a second model does not replace human/domain or actual-user validation.

A small rubric may use 0/5/10 per criterion: absent/incorrect, materially partial, sufficient/correct. Freeze criteria/weights and critical failures before inspecting outputs. Aggregate only within comparable cases; show coverage and per-category results. N/A is not zero. Surface disagreement rather than choosing the more flattering grade.

Calibrate: known-correct output passes; known-defective output fails; semantic mutants exercise decisive boundaries. A code-only grader can miss a human-facing wrong answer. Keyword presence, long prose, many tests, and a model's claim of success do not prove the outcome. Correct a flawed grader in a new rubric version and rerun/regrade all compared arms; preserve the prior result and reason.

Distinguish `not tested`, `unavailable`, `blocked`, `failed`, and `passed`. A tool-availability failure is not automatically a reasoning failure. A task omission is not automatically evidence of a chosen unsafe design; score it against the predeclared criterion.

## Controlled experiments

Select only the arms needed for the decision: no-target-skill/current/candidate; or the same skill on baseline/smaller model; or serial/parallel execution. Change one factor at a time. A no-target arm must actually exclude automatic target loading; otherwise label contaminated. Keep shared host instructions, tools, evidence, task, model/effort and relevant settings stable and use fresh workspaces. Record immutable hashes, requested and returned model metadata, traces/artifacts, trial count and usage availability.

Start with a small smoke set, then increase difficulty/coverage/repeats where the decision requires it. One passing run proves one passing run. Report first-delivered correctness, critical failures, unnecessary re-questions, rework and cold-handoff success. Do not select best-of-many results without reporting failed attempts. Synthetic fixtures test reasoning under supplied evidence; live retrieval and actual users require separate trials.

## Human checks that earn their cost

Evaluate the user's ability to answer: What happened? Is my work saved? What can I do now? Who helps if it fails? Can I recover without re-entering or exposing data? Observe task completion and comprehension with representative users when access is authorized; otherwise mark the result expert/synthetic review, not a user-tested finding.

Use plain language in examples, clear known/unknown/error states, keyboard and assistive-tech checks where relevant, and preserve context during recovery. Avoid demographic stereotypes. Include the operator/support person's workload, shift handover, consent/purpose limits and incentives; an operational metric must not silently become an employee performance score. State who reconciles manual intake and how duplicates/missing records are detected before normal operation resumes.

## Maintenance and performance checks

Follow the lifecycle from creation to update, failure, recovery, owner transfer and retirement. Check version drift, patch compatibility, backup restore on current schema, stale evidence and runbook usability only where relevant. A rollback that loses accepted writes fails the invariant even if uptime returns.

For performance, start from measured bottlenecks and preserve permissions, totals, ordering, freshness and audit semantics. Measure the same workload and relevant distributions; query-count reduction is not production latency proof. Use thresholds and rollback/reconsideration triggers, not blanket speed guarantees. For large differences in environment/load, label the comparison non-equivalent and remeasure.
