# Context Question Bank

Load only clusters relevant to the classified problem. Ask questions whose answers can change the search, viable options, risk treatment, acceptance criteria, or recommendation.

## Decision And Outcome

- What exact decision must be made?
- Who decides, who implements, who operates, and who is affected?
- What user or business outcome must improve?
- What happens if no change is made?
- What observable result means the solution works?
- Which outcomes are required versus desirable?

## Research Depth

Ask when the depth is unknown; reuse a depth already selected in the current decision thread or handoff:

- `quick` — narrow, reversible, low consequence.
- `standard` — normal technical decision.
- `high-assurance` — costly, irreversible, production-critical, regulated, security/privacy adjacent, or safety relevant.

Recommend one and let the user choose.

## System And Runtime

- What product, host, runtime, version, deployment mode, operating system, region, tenant, and license are involved?
- Which capabilities are demonstrably accessible now, and which licenses/add-ons are actually assigned rather than merely included in the named base suite?
- Does behavior differ between client, server, cloud, local, test, and production?
- What is the entry point and full execution path?
- Which components, callers, consumers, and external services participate?
- What parts are being replaced or expected to change?

## Data And Contracts

- What is the real input/output shape from raw output, not the UI label?
- Must the result be physically copied/materialized, or can it remain a live connection, semantic view, exported artifact, or source-native view?
- Is the required mutation append, incremental upsert, table replacement, file replacement, or read-only presentation?
- What are the schema, field names, types, null/blank rules, encoding, locale, and time-zone rules?
- What are expected and maximum volume, payload, and retention?
- Where do pagination, filtering, transformation, caching, and persistence occur?
- What correctness and data-integrity invariants must hold?

## Identity And Permissions

- Which identity owns the workflow, connection, resource, and data?
- Which credential actually executes each action?
- What effective permissions apply to each operation?
- Are there tenant, network, DLP, conditional-access, multi-geo, or cross-resource boundaries?
- Which private or regulated data may appear in files, logs, queries, or reports?

## Reliability And Recovery

- What retries automatically, and can a timeout hide a completed side effect?
- Must the operation be idempotent?
- Can multiple users, runs, or clients mutate the same resource?
- What locking, transaction, reconciliation, rollback, backup, or recovery exists?
- What partial-failure states are acceptable?

## Performance And Scale

- What are current and projected volume, concurrency, latency, throughput, and freshness requirements?
- Which quotas, throttles, timeouts, payload limits, or file-size limits apply?
- Does the current design perform network or connector calls inside a loop?
- What measured baseline exists?
- At what threshold should the architecture change?

## Security, Privacy, And Compliance

- What trust boundaries and threat scenarios matter?
- What secrets, personal data, confidential fields, or regulated records are in scope?
- What must never appear in logs, caches, prompts, or external searches?
- What retention, audit, access-review, and incident-response requirements apply?
- Is specialist review required?

## Cost, Delivery, And Team

- What budget, deadline, licensing, procurement, and vendor constraints apply?
- What skills and operational capacity does the team have?
- What existing tools, dependencies, services, patterns, or contracts can be reused?
- What maintenance burden is acceptable?
- How reversible must the decision be?

## Operations And Lifecycle

- Who owns deployment, monitoring, support, credentials, and vendor changes?
- Which user-relevant indicators and targets define health?
- What alerts, runbooks, escalation, and recovery are required?
- Which release, policy, scale, cost, or incident should trigger review?
- What is the exit or migration path?

## Audience And Output

- Who is the decision owner?
- Which views are required: executive, tech lead, developer, or another audience?
- Is the deliverable a decision brief, comparison, diagnosis, architecture recommendation, or build-vs-buy analysis?
- What level of implementation detail belongs in research without turning it into a plan?
