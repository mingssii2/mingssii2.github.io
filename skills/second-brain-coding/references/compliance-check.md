# Risk checks and compliance evidence

Read sections relevant to the changed boundary, not a checklist for every task.

## State, authorization and recovery

For state changes identify accepted-write semantics, compatibility and recovery invariants before editing. Test relevant invalid/empty input, permission denial, retries/concurrency and partial failure at the changed boundary.

For an unknown commit outcome, reconcile by stable operation ID/status before retrying. A timeout does not prove failure; preserve accepted writes and audit history. Do not bypass access controls to make a check pass.

Before a live migration/recovery, verify current-schema compatibility, the actual restore path, accepted writes after the snapshot, and who reconciles manual intake/duplicates before normal service resumes. Name an operator/backup or mark the owner unknown. An old snapshot is not proof of recoverability. Keep a data-preserving rollback point; ask before an unauthorized destructive/live step.

## Performance and AI behavior

Measure the actual bottleneck on equivalent workloads. Preserve full authorized totals, deterministic ordering/ties, empty/zero-related rows, freshness and audit semantics. Work/query counts and plans can explain a change; they do not prove production p95. Distinguish cold/warm and representative load when material.

For AI-dependent behavior define representative evals, input/output/tool/retrieval contracts, fallback/error states and approval boundaries. Include a relevant negative/compound case; self-grades are not independent validation.

## User-facing behavior

Verify the flow's relevant success/error/unknown states and safe next action in plain language. Protect drafts and identity, including shared devices. Check keyboard/accessibility and i18n where changed. A local functional pass or synthetic persona does not establish aesthetic approval or observed human comprehension.

## Evidence handoff

Use the existing project format with the fields below for risky work. Propose ADR/vault work only for a durable decision that warrants it.

For a requested formal Principle Compliance Check, retain the user's fields; otherwise merge empty/redundant fields:

- Instruction sources and principles applied
- Project rules and conflicts
- Verification performed, evidence location and source version
- Skipped checks and remaining risk
- Recovery/rollback and next permitted action
- ADR/Obsidian update needed, with proposed location if relevant

Distinguish untested/failed/passed evidence. Record a verified lesson in the configured KB only when authorized, retaining failed attempts separately.
