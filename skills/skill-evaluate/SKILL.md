---
license: MIT
name: skill-evaluate
description: Evaluate agent skills or portfolios using source review, task benchmarks, user fit, maintenance, human usability, and measured efficiency. Use for skill evaluation, comparison, or evidence-led upgrade plans. Use skill-creator for authoring mechanics; do not treat a static score as proven task quality.
metadata:
  version: "3.0.0-preview.1"
  rubric-version: "G-F-1; behavior-2"
  usage: "Skill paths or repos; optional profile, task examples, traces, and budget. Modes: review, benchmark, upgrade."
---

# Skill Evaluate

Decide which skills help this user, prove what their outputs can do, and change only what the evidence supports. Quality and hard constraints come before cost. A score is scoped evidence, not a seniority or bug-free certification.

Use the user's language for decisions and explanations. Keep identifiers or portable handoff labels in English only when useful. Explain the impact and next action plainly for the intended reader; technical terminology belongs beside its practical meaning, not in place of it.

## 1. Scope and profile

Reuse the user's request, supplied context and previous decisions. Choose the requested mode: `review` (source analysis), `benchmark` (tasks and trials), or `upgrade` (evaluate and apply authorized changes). Do not silently turn a quick review into a large experiment or change reviewed skills without authorization.

Summarize five profile fields: primary work; verification habit; change-size bias; stack/surfaces; team and ceremony tolerance. Label each as user-stated, observed, inferred or unknown. Identify up to two relevant frictions with the same provenance. Historical percentages require actual usage data. When useful, contrast intended interaction with the output a non-technical user can act on, without assuming actual user comprehension was observed. Prefer a supplied/scoped usage report; do not mine private session logs by default. Ask only for a missing fact that changes the evaluation; otherwise continue with a provisional profile. Unknown fit is not zero fit.

Set the decision, outputs, allowed writes, trial budget and stop rule. Reuse existing authorization; a new consequential tradeoff belongs to the user. Write new reports beside existing ones when no overwrite was requested.

Done: scope and profile are adequate or explicitly provisional; unresolved choices block only dependent work.

## 2. Inspect actual skills

Resolve exact paths/names. Read SKILL.md and invocation metadata, then only references/dependencies affecting the task. Trace the effective load path and conflicting instructions, including external vaults; a short entrypoint can still load a large workflow. Record source hash/version, installed locations, required tools and actual availability. Never score an unread skill. Report unavailable sources without substituting their descriptions as evidence.

Group overlap by job, not name. Keep complementary stages when they differ; name a winner only for genuine redundancy. Inspect intake/output/next-agent contracts and whether decisions, permissions, failed attempts and evidence freshness survive handoff. Avoid forcing every loop through every adopted skill.

Done: findings cite source locations and distinguish observed defects from behavior hypotheses.

## 3. Static scores — stable G/F rubric

Keep these dimensions and equal weights for historical comparison. Subscores are 0–10 in half points; each axis is the mean of its four subscores. Show the inputs and round only presentation. Missing fit evidence makes F provisional or unavailable; never fabricate a historical profile or silently reweight missing dimensions.

| G — General quality | Question |
|---|---|
| Trigger clarity | Does description say when to fire and when not to? Would it misfire? |
| Instruction robustness | Are requirements checkable, proportional, and explicit about material failures? |
| Composability | Progressive disclosure, dependency availability, usable inputs/outputs and handoffs? |
| Complexity fit | Is workflow weight proportional to the problem? |

| F — Fit to this user | Question |
|---|---|
| Workflow relevance | Does this sit on the user's actual or stated primary loop? |
| Anti-friction | Does it address the identified friction, without introducing larger friction? |
| Stack fit | Do commands, tools and examples fit the user's host and runtime? |
| Team-shape fit | Do ownership, delegation and ceremony fit the team? |

Verdicts from F: `Adopt` >=7.5; `Try` >=5.5 and <7.5; `Skip` <5.5. Adjust for complete redundancy or a demonstrated unavailable hard dependency. Label verdict provisional when fit is provisional; with F unavailable, withhold the verdict. `Adopt` means workflow fit, not production release approval. A critical behavioral failure blocks release regardless of G/F. Do not reward sheer counts of prohibitions or templates.

Done: static scores have rationales/confidence and are not presented as observed task-success scores.

## 4. Task-quality evaluation

For benchmark/upgrade, read [behavior-evaluation.md](references/behavior-evaluation.md). Reuse valid cases/results first. Cover the ordinary use case plus relevant rare/compound failures, maintenance, system optimization, human/non-technical experience and cold handoff. Mark irrelevant dimensions N/A with a reason. Do not expand every skill into a universal software checklist.

Write public tasks/raw fixtures separately from evaluator-only accepted answers, invariants and critical failures. Accept equivalent correct approaches. Calibrate graders against correct and defective outputs. Use fresh trials; keep expected answers out of candidate context and access where possible. Record isolation limits. Freeze or version the rubric; rerun/regrade comparable arms after a correction.

Report task-quality scores separately from G/F, with trial counts and evidence. Unexecuted tests remain planned; missing telemetry remains unavailable. Synthetic user checks are not observed human usability. A small perfect sample calls for harder transfer cases, not a world-class claim.

Done: each conclusion identifies source review, actual trial, calculation, human observation, or uncertainty.

## 5. Token, model and delegation evaluation

When efficiency/model/delegation is in scope, read [efficiency-and-models.md](references/efficiency-and-models.md). Separate system-performance optimization from agent-token optimization. Establish a quality bar and a strong passing baseline before testing smaller models, reduced context or parallelism. Use models actually available/allowed on the host; supported names, effort and measured suitability outrank labels such as senior or cheap. Do not hardcode one provider/model per repo.

Default to the current agent or deterministic local check for small dependent work. Existing no-delegation/user/host constraints still apply; an evaluation mode does not itself authorize extra agents. Delegate only concrete independent work with useful concurrency or a justified independent review. Send a narrow packet, define ownership, outputs and stop/escalation criteria; account for dispatch, repeated context, synthesis and failed attempts. Model self-confidence alone cannot authorize a cheaper route for high-impact work.

Done: per-skill recommendations state when to stay local, delegate or escalate; model choices are measured or clearly provisional. Savings and 'best model' claims require comparable runs and actual usage/pricing evidence.

## 6. Report and upgrade

Produce one canonical report in the requested form; default to a self-contained HTML with no external scripts/build step. A companion Markdown is useful for implementation handoff, not an independently rewritten second source of facts. Use [report-and-release.md](references/report-and-release.md) for benchmark or upgrade evidence and release checks.

Lead with the decision and scope of evidence. Include profile; stable G/F table; behavioral results by relevant category; installed status and overlap calls; useful workflow loops; keep/fix/drop actions; token/model limits; tradeoffs needing user choice; and next bounded action. For each improvement name trigger, expected benefit, adverse effect, acceptance check and rollback. A user-facing summary should explain what improves in their work, not only internal prompt mechanics.

For an authorized upgrade, snapshot baseline, edit a candidate, validate metadata/links and run proportional behavior checks before promotion. Reuse skill-creator for authoring validation when available. Update reachable sources of conflicting rules within authorized scope; do not quietly alter unrelated vault policies. Promote only a reviewable candidate with recorded results. Check current hashes before writing, preserve concurrent edits, synchronize only known intended mirrors, verify and report installed version. Keep observed failures and unresolved limits visible.

Done: requested artifacts/authorized changes exist and were checked; proposed decisions are not recorded as approved; the next agent can proceed without another general research pass.
