# Efficiency, models and subagents

## Select by evidence

Optimize task quality/hard constraints first, then minimize cost and latency among passing configurations. For uncertain complex work, establish a capable-model baseline. Test smaller/less expensive available models on identical cases before adopting them. Provider marketing names, task titles and self-confidence are not measurements. A configured model that is unavailable is a routing failure; report it and select an allowed fallback explicitly.

Use host model/tool metadata for exact names and supported effort. Verify current official pricing only when calculating money; API prices are not automatically equivalent to subscription usage units. Keep exact version/reasoning and returned identity when exposed. If only the requested model is known, say so. Do not claim a universal best model from one task/trial.

Practical model classes, not hardcoded IDs:

| Work | Default approach | Escalation signal |
|---|---|---|
| File inventory, hashes, arithmetic, assertions | Local deterministic tools | Unexpected source/contract ambiguity |
| Extraction or bounded comparison of supplied facts | Small model after calibration, or stay in current agent if dispatch costs more | Missing critical facts, contradictions or misclassification |
| Known workflow, scoped implementation, ordinary planning | Calibrated capable general/coding model | Cross-boundary effects, failed checks, ambiguous requirements |
| Architecture, difficult debugging, irreversible tradeoffs | Strong reasoning model with domain evidence and relevant review | Unresolved decision-critical uncertainty goes to test/user, not endless retries |
| Mechanical grading | Code for contracts; calibrated small model for simple rubric judgments | High-impact findings or grader disagreement → independent stronger/human review |

If the host cannot override a subagent model, inherit explicitly and narrow its task; do not claim cost savings from a model that was never selected.

## Per-skill routing

| Skill role | Stay in one agent | Useful independent subtask | Keep with the owner |
|---|---|---|---|
| Planning / Second Brain Agents Plan | Scope, user interview, ordinary plan, small changes | Bounded risk/operability/non-tech comprehension review after a concrete draft | User decisions, conflicting requirements, final plan and approval provenance |
| Solution Research | Narrow fact check or dependent hypothesis search | Separate plausible solution family/source lane or disconfirmation search with shared hard constraints | Evidence reconciliation, ranking, missing facts and recommendation |
| Second Brain Coding | Small/shared-helper fixes and same-file dependent edits | Independent test/review, or disjoint modules with stable contracts | Shared state, integration, regression verification and final changes |
| Skill evaluation | Small portfolio/static review, arithmetic and artifact checks | Blind trial or independent grader; partition large portfolios only when useful | Frozen rubric/profile, cross-skill comparison, conflict adjudication and release decision |

These are role mappings, not dependencies requiring those named skills to be installed. Do not spawn one agent per persona, file, heading or repo by default. Do not have two writers touch the same resource concurrently. Parallel code work needs ownership and integration checks; where these dominate, serial work is cheaper and safer.

## Dispatch packet and stop rule

Each child gets only the task, scoped source pointers, relevant contracts, allowed reads/writes, acceptance, requested model/effort, evidence-return format and stop conditions. Use a fresh/narrow context instead of copying full history. Return findings + source locators + uncertainty + artifact path, not a duplicate full report. A brevity target must still fit mandatory evidence; avoid output limits that truncate answers or exhaust reasoning.

Continue locally when dispatch/merge overhead likely exceeds useful work. Stop a child on scope completion, budget boundary, unavailable prerequisite or a material unresolved choice; ask/test or escalate deliberately. Retry only for a new hypothesis or transient failure. Budget exhaustion is not permission to claim success or infer approval. Stay within host/user limits on concurrency and cost.

## Cost ledger

Capture, when available: input/output tokens, cache categories, reasoning usage, model/effort, tool calls/output volume, elapsed time and task result. Follow provider definitions: reasoning may already be included in output; cached input may be a subset of input. Do not double count. Null/unavailable is not zero. Characters/words and file bytes are labeled proxies, never actual tokens.

For a delegated task include parent + every child + synthesis/grading + retries and failed runs. Compare critical-pass rate, per-category quality and cost per successful task; include the cost of failures in the numerator. Separate system speed, model response latency and end-to-end wall time; parallelism can reduce wall time while increasing total tokens.

Reuse scoped evidence/decisions, read changed sections, avoid repeated searches without a freshness trigger, and keep invariant policy separate from task state. Change context size, output shape, model or concurrency one lever at a time. Savings apply to the measured workload only; if usage is unavailable give a hypothesis and next measurement, not a percentage claim.

## Recommendation record

For each evaluated skill, report: tested work category; preferred model/class; measured vs provisional status; when no child is needed; child role/context boundary; escalation trigger; quality floor; cost/latency evidence and remaining gaps. Model routing is a maintained policy: re-evaluate on model availability, pricing, workload, host, skill or source-contract changes. Keep a known passing fallback.

Source principles: [OpenAI model selection](https://developers.openai.com/api/docs/guides/model-selection) prioritizes accuracy then cost/latency; [Anthropic multi-agent research](https://www.anthropic.com/engineering/multi-agent-research-system) describes benefits and substantial token overhead. Their examples are not universal multipliers for this user's workload.
