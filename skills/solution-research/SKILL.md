---
license: MIT
name: solution-research
metadata:
  version: "3.1.0-preview.1"
description: Research broad technical solution landscapes before planning, including architecture-family discovery, build-vs-buy and platform alternatives, discovery of installable connectors, MCP servers, skills, plugins and GitHub open-source projects, hard-constraint filtering, evidence grading, trade-off analysis, and practical verification. Use when a user asks how something can be done, wants options beyond an initial proposal, compares integrations or architectures, or needs a decision-ready technical recommendation.
---

# Solution Research

Turn an unclear technical problem into a decision-ready report. This skill governs the research stage. Continue an explicitly authorized planning/implementation stage after recording the decision and handing off; a separate conversation is not required. A recommendation alone grants no authority to change live systems.

Use the user's language. Keep questions and progress updates compact.

## Workflow

When a plan or handoff packet is supplied, read it first and inherit its scope, decisions, authorization, evidence pointers, unknowns, failed approaches, acceptance criteria, and next permitted action. Ask again only if a material fact is stale or contradictory. Keep the same fields in the research handoff so the next agent can continue without a general re-research pass.

### 1. Frame the decision

Restate:

- The decision to make.
- The outcome independently of any solution already proposed.
- The decision owner and required audience views.
- Current state and desired outcome.
- Exact execution surface: product, host, runtime, version, tenant, license, identity, connector, operating system, and policy where relevant.
- Hard constraints and success criteria.
- Whether the output must be physically materialized, can remain a live connection, can be an exported artifact, or only needs to be visible to the consumer.

Distinguish the named base license from the user's actual entitlements and demonstrated access. An add-on not included in a base suite is `unknown`, not absent, until assigned licenses, accessible products, or target observations establish it. Fresh target behavior outranks an inference from a bundle matrix.

Read scoped local files, logs, code, configuration, and knowledge before asking for facts already available there. Treat local/private sources as read-only unless the user authorizes changes.

Load only the relevant question clusters from [references/context-question-bank.md](references/context-question-bank.md). Ask related questions in one batch. Record unavailable material facts as `unknown`; do not guess.

Completion criterion: the decision, execution surface, hard constraints, and success criteria are known or explicitly marked unknown.

For a downstream handoff, add one concise `next permitted action`; do not turn a recommendation into implementation authorization.

### 2. Select proportional research depth

Reuse the user's chosen depth. Otherwise use quick for a narrow reversible question, standard for a normal technical choice, and propose high-assurance when impact demands it. State the assumption; ask only when added cost, time or evidence collection changes the authorized scope:

- `quick` — low-consequence, narrow, reversible; use the smallest local evidence set and stop when the decisive question is resolved.
- `standard` — normal technical decision with alternatives and material failure modes.
- `high-assurance` — expensive, hard to reverse, production-critical, security/privacy adjacent, regulated, or safety relevant.

Completion criterion: the depth is selected, inherited from the handoff, or explicitly defaulted with a reversible assumption.

### 3. Map the solution landscape before narrowing

Treat user-proposed solutions as seeds, not boundaries. At standard/high-assurance depth, generate relevant architecture families from the outcome before ranking. At quick depth, answer the decisive question using the supplied evidence; expand only when uncertainty can change the answer. Do not reopen an approved architecture merely to enumerate alternatives.

Decompose the job into relevant layers, for example:

`source/query → compute/transform → schedule/orchestrate → transport/stage → materialize/serve → consume → monitor/operate`

Then vary which product or party owns each layer. Assess every plausible family, not merely minor variants within one family:

- Eliminate or simplify the transfer; use the source-native consumer when acceptable.
- Source-native scheduling, export, push, or file generation.
- Destination-native query, refresh, import, or live connection.
- Semantic/BI layer between source and destination.
- Workflow/integration platform using direct connectors.
- File, email, object-store, SFTP, or signed-URL bridge.
- Local or desktop scheduled runner and sync client.
- Managed connector, add-in, ETL SaaS, or general iPaaS.
- Installable agent capability or open-source project: connector, MCP server, skill, plugin, or GitHub library/CLI that already does the job.
- Enterprise data platform, dataflow, warehouse, or integration service.
- Custom cloud job or serverless compute.

For cross-ecosystem integration, always investigate three directions:

1. `destination pulls` — destination-native connector, query, refresh, or live connection;
2. `source pushes` — source-native scheduled query, connected spreadsheet/reporting surface, export, automation runtime, or file/message delivery;
3. `intermediary serves` — semantic/BI/data layer exposes a live connection, query endpoint, standard connector, export, or file.

Within a promising ecosystem, distinguish mechanisms that materially change scheduling, identity, scaling, or ownership. A native connected surface with scheduled refresh plus export is not the same mechanism as custom scripting, even if both later use the same transport bridge.

For each family, record one route in arrow form, the owner of each layer, data mode (`live`, `import`, `snapshot`, `incremental`, or `replace`), and why it is plausible or excluded.

Search for compositions, not only direct connectors. A direct edge may be premium, unavailable, or blocked while a standard ingress, semantic layer, export bridge, or sync client still satisfies the outcome.

For every plausible intermediary, search its egress paths before excluding it: live connection, query/execute endpoint, export, file generation, standard workflow connector, or destination-native connection. Do not assume an intermediary can only serve its primary UI.

Keep architecture families separate from transport variants. For example, email, SFTP, and cloud drive may be transport choices inside one source-native export family, not three independent architectures.

Run an anchoring check:

- Would this landscape look substantially the same if the user had not suggested an approach?
- Did the search include source-owned, destination-owned, intermediary, local, managed, and elimination options where plausible?
- Did any hard constraint prematurely hide a compositional route?

Completion criterion: every plausible ownership family is represented or explicitly excluded before detailed comparison starts.

### 4. Reconstruct the real system

Trace the actual path end to end:

- Entry point, callers, and consumers.
- Data and state transformations.
- Runtime and network boundaries.
- Identity, permission, and resource ownership.
- Schema and API contracts.
- Pagination, caching, mutation, retry, concurrency, and idempotency.
- User-visible result and operational ownership.

For a bug or failure, distinguish symptom from root cause. Search all callers of a shared function or contract before proposing a local correction.

Apply the reuse ladder before considering anything new:

1. Remove the need when possible.
2. Reuse an existing local solution or pattern.
3. Use the standard library.
4. Use a native platform capability.
5. Use an installed dependency.
6. Configure an existing component.
7. Adopt a vetted public capability: connector, MCP server, skill, plugin, or open-source project.
8. Only then consider new code, dependencies, services, or architecture.

Completion criterion: every material boundary and existing reusable option has been accounted for.

### 5. Define the research protocol

Create sub-questions and a query matrix:

`solution family × layer owner × component × host/runtime × version × operation × constraint`

Specify source lanes, version/time scope, inclusion and exclusion rules, evidence needed to choose, and the stopping rule. Include at least one discovery query and one limitation/licensing query for every plausible family.

Scale the protocol:

- `quick`: scoped local evidence plus the smallest authoritative source set that resolves the decision; do not enumerate every solution family or produce a standard-depth report unless the evidence reveals a material risk.
- `standard`: multiple source lanes, alternative comparison, disconfirmation search, major failure modes, and a verification plan.
- `high-assurance`: reproducible search record, claim ledger, competing hypotheses, uncertainty/sensitivity analysis, and target-environment verification when access permits.

Load [references/evidence-rubric.md](references/evidence-rubric.md) for `standard`, `high-assurance`, ambiguous failures, conflicting sources, or any provisional recommendation.

Completion criterion: every decision criterion maps to evidence to collect or an explicit unknown.

### 6. Gather evidence efficiently

Use the cheapest authoritative source first:

1. Scoped local code, logs, raw outputs, configuration, tests, and verified knowledge.
2. Official documentation, API references, standards, limits, release notes, and vendor guidance.
3. Primary research and authoritative institutional material.
4. Vendor issue trackers, reproducible incident reports, and verified local cases.
5. Reputable secondary analysis for discovery or practitioner context.
6. Forums and social posts only as leads.

Tool routing:

- Use `rg` and local file reads before external research when local evidence exists.
- Use web search for current or externally verifiable facts.
- Use authorized connectors or MCP tools for private live systems.
- Use shell/runtime checks for static validation and minimal reproductions.
- Use browser control when UI state or an interactive flow is part of the claim.
- Escalate to broad/deep research only when the selected depth and source breadth justify it.

Capability discovery lane: when the job needs an external system, integration, recurring domain workflow, or a tool the host lacks, load [references/capability-discovery.md](references/capability-discovery.md) and search installed capabilities, host registry/plugin/skill search tools, the official MCP Registry, vendor-official servers, skill/plugin marketplaces, and GitHub (`gh search`). Vet every third-party item; propose installs, never perform them. Mark N/A for pure in-code logic or standard-library problems.

Search official product matrices, connector classifications, supported hosts, authentication modes, quotas, payload/file/row limits, scheduled execution behavior, and license boundaries. A connector existing is not evidence that it works in the user's host, license, identity, or execution mode.

Keep private identifiers, payloads, logs, and internal context out of public queries. Search with generic wording; ask permission before external disclosure.

Completion criterion: material claims have traceable evidence, not repeated unsourced assertions.

### 7. Challenge the leading answer

Challenge both the agent's leading answer and every user-proposed route. For ambiguous behavior, maintain competing hypotheses. For each, record:

- Supporting and contradicting evidence.
- The smallest safe observation or test that distinguishes it.
- Result: supported, disproven, or unresolved.

Search specifically for incompatibilities, negative results, limitations, quotas, permissions, version differences, and failure reports. Absence of an error is not evidence of correctness; verify the real user-visible result and intermediate invariants.

Preserve failed approaches and why they failed.

Completion criterion: the recommended option has survived a meaningful disconfirmation attempt.

### 8. Compare viable alternatives

Choose criteria with the decision owner. Consider only relevant dimensions:

- Functional and execution-surface fit.
- Security, privacy, reliability, and data integrity.
- Performance, scale, cost, and licensing.
- Delivery time and team capability.
- Complexity, observability, and supportability.
- Lock-in, reversibility, migration path, and long-term ownership.
- Evidence confidence.

Compare in two passes:

1. `Landscape and hard filter` — show each architecture family, route, data mode, decisive limits, and pass/fail/unknown for every hard constraint.
2. `Shortlist ranking` — rank only the surviving routes against operational criteria.

Use `pass`, `conditional`, `unknown`, and `fail` rather than forcing binary feasibility:

- `pass` — evidence shows the route satisfies the constraint.
- `conditional` — viable if a stated existing entitlement, permission, or small constraint relaxation is confirmed.
- `unknown` — evidence is insufficient; do not infer failure.
- `fail` — evidence directly contradicts a hard constraint.

Do not let a weighted score rescue a hard-constraint failure. Do not discard a family silently because one connector, transport, or serving mode inside it failed. Keep conditional routes visible when they could win on maintainability, scale, or implementation effort.

Define what qualitative scores mean. Treat weighted totals as decision aids, not objective truth. Test whether reasonable changes in assumptions or weights would change the recommendation.

Completion criterion: every plausible family has a disposition, and every shortlisted route, including reuse, simplification, or doing nothing, is accepted or rejected with evidence.

### 9. Verify proportionally

Use the smallest check that can falsify the decisive claim, then expand only as risk requires. Verification may include contract checks, static checks, minimal reproduction, boundary/negative cases, target-runtime tests, end-to-end integration, identity/permission tests, pagination/load, retry/concurrency/idempotency, and rollback.

Use these evidence states precisely:

- `documented` — directly supported by an authoritative source.
- `observed` — present in scoped code, configuration, logs, raw output, or a run.
- `inferred` — reasoned from evidence and labeled as inference.
- `provisional` — missing a material verification step.
- `verified` — decisive behavior passed in the relevant target surface.
- `disproven` — contradicted by a discriminating test.
- `unknown` — evidence is unavailable, contradictory, or insufficient.

When verification is incomplete, issue a `provisional recommendation` with the evidence gap, consequence if wrong, next discriminating test, and required owner/tool.

Completion criterion: recommendation status matches fresh evidence.

### 10. Deliver one decision model

Load the relevant sections of [references/report-contract.md](references/report-contract.md).

Produce one canonical evidence-backed report, then render only the views needed:

- Executive: decision, value, investment, confidence, top risks, and approval needed.
- Tech lead: system boundaries, alternatives, trade-offs, failure modes, rollout/rollback implications, and operational ownership.
- Developer: exact runtime/contracts, edge cases, evidence, verification matrix, and implementation constraints.

End with:

- Recommendation and status.
- Evidence gaps and unknowns.
- Next decision or verification gate.
- Ownership, monitoring, review date/trigger, and conditions that require reconsideration.

Lead with the big-picture landscape before zooming into implementation variants. When the user asks for methods or options, include:

- A layer or route map.
- When discovery ran: the capability table with source links, trust signals and proposed install steps, plus searches tried.
- A family coverage table.
- A hard-constraint matrix.
- A ranked shortlist with different winners by objective when no single option dominates.
- Separate winners for strict-current-constraint fit, easiest operations, highest scale/reliability, and best conditional route when those differ.
- Size, volume, frequency, identity, license, and operational thresholds that change the recommendation.

Do not independently rewrite facts for each audience.

Completion criterion: the report can support a decision or a subsequent planning task without another general research pass.

## Stop And Ask

Stop for:

- Missing context that could materially change cost, security, data handling, or architecture.
- Permission to send private context outside the current environment.
- Installation of a dependency, plugin, connector, or MCP server.
- A consequential choice that available evidence cannot distinguish.
- A request that crosses into implementation, deployment, or changes to live systems.

When research is complete, provide the next permitted action. Continue planning only when the user has already authorized that stage; otherwise keep it proposed.

## Lifecycle, optimization and human impact

Cover relevant compound cases rather than collecting unusual labels: timeouts after commit, owner absence during an urgent patch, schema drift during restore, permission changes during caching, or partial manual recovery. Distinguish ordinary operation, failure, recovery and return to service. Name the operator/backup owner, compatibility and restore check, migration/reconciliation risk, and retirement or review trigger. Do not assume a backup is usable because it exists.

For performance advice, trace the measured bottleneck and compare the same workload before/after, including cold/warm state and load variance where relevant. Preserve authorization, full-set totals, deterministic ordering/ties, empty/zero-related rows, audit integrity and freshness. Query-count reductions, estimates and query plans do not prove production p95. Consider human waiting and support effort alongside machine time.

For non-tech readers, give the practical effect, uncertainty and next action in their language before implementation detail. Check who bears recovery work or privacy risk; do not turn service-health metrics into judgments about people without a justified basis and authorization. A proposed comprehension test is not evidence that real users understood the design.

## Token, models and subagents

Reuse fresh evidence with source/version pointers and refresh only decision-changing claims. Do arithmetic, hashing and contract checks with local deterministic tools. Keep one owner for recommendation and evidence reconciliation.

Use a capable current model for constrained synthesis. A smaller model can do narrow extraction or a calibrated comparison; use stronger reasoning when evidence conflicts or a hard constraint is ambiguous. Resolve available model IDs/effort per host. Retain a passing quality baseline before downshifting and do not declare a universal cheapest/best model from one trial.

Parallelize only independent source lanes that can materially resolve the decision. Each child gets a narrow question, source scope, output contract and stop rule; no shared writers or full-conversation duplication. A missing tool or quota triggers a labeled local fallback or an explicit evidence gap, not repeated dispatch. Count parent + children + synthesis + review + retries; distinguish agent-token economy from application performance and report unavailable telemetry honestly.
