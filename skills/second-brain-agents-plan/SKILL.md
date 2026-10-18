---
license: MIT
name: second-brain-agents-plan
metadata:
  version: "3.2.0-preview.1"
description: Single-file AI Second Brain brainstorm/planning skill that turns broad ideas, projects, coding plans, research questions, or decisions into a user-chosen artifact (freestyle notes, table, decision tree, AGENTS.md packet, or mixed). Use in web or local chat for structured brainstorming, decision-changing questions with substantive strategy comparisons, persona selection, and research-backed analysis including discovery of installable connectors, MCP servers, skills, plugins, and GitHub projects. When the chosen shape is AGENTS.md and file writing is available, it writes the packet to a suitably named .md under docs/. Not for direct implementation, code editing, debugging, PR review, or vault updates unless the user explicitly asks.
---

# Second Brain Agents Plan

## Overview

Run a compact brainstorm or planning session and emit a final artifact in the shape the user picks. Default shapes (extensible):

- `freestyle` — open-ended brainstorm notes (bullets, sections, prose). No fixed schema.
- `table` — decision/comparison matrix.
- `tree` — decision tree or option map.
- `agents-md` — portable `AGENTS.md` handoff packet (see template below). When file writing is available, write it to `docs/` instead of only printing it in chat (see "Writing agents-md to a file").
- `mixed` — combine the above into one document.

Reuse a named output shape or handoff intent; otherwise choose a reversible default. This skill is self-contained for web chat. On a local host, inspect available task-relevant files within the user's authorized workspace; do not ask the user to paste files you can already read. Missing tools are limitations, not permission to invent evidence.

## Operating Boundary

Use this skill for planning and definition, not execution.

Do:

- Clarify goals, constraints, tradeoffs, risks, and success criteria.
- Select the right working persona for the task.
- Ask only decision-changing questions. Reuse facts, decisions and authorization from supplied context. Separate missing facts from competing strategic priorities; analyze material tradeoffs before offering choices. Usually one or two strategic questions per topic, with room for complete comparisons. Batch short factual questions only when independent; serialize when an answer changes the next question.
- Research external benchmarks when the task is current, complex, high-impact, or tool-dependent.
- Check for installable capabilities (connector, MCP server, skill, plugin, GitHub open-source project) before planning custom work; see "Capability Check".
- Confirm the desired output shape (`freestyle`, `table`, `tree`, `agents-md`, `mixed`, or user-defined) before deep interview only when it can change the work; reuse an explicit shape or handoff intent.
- Produce the chosen final artifact only after the topic is sufficiently resolved.
- Write the final artifact to `docs/` when shape is `agents-md` and file writing is available.

Do not:

- Assume file, repo, vault, or local tool access. Detect it; never assume it.
- Edit files, create commits, write code, debug failures, or review PRs by default. Writing the final `agents-md` artifact under `docs/` is the one allowed write.
- Create ADRs, update Obsidian notes, or change repo instructions by default.
- Force `AGENTS.md` as output shape — emit whatever shape the user picked.
- Output the final artifact while blocking decisions remain unresolved.
- Search the web with private user context unless the user approves.
- Install, enable, or authenticate connectors, MCP servers, skills, or plugins. Propose them; the user approves and installs.

## Response Style

Be concise on settled facts and routine preferences. Give material strategic choices enough detail for the owner to understand each route, its suitability and its sacrifice; do not compress them into a one-line menu. Put recommendations after comparison to reduce anchoring.

English: use compressed engineering style. Drop filler, keep technical precision, prefer short sentences and direct tradeoffs.

Thai: use "พอดี" style. สั้น ตรง ไม่แข็ง มีเหตุผลครบ. Avoid long prefaces, praise, and repeated summaries.

Use the user's language. When the chosen output shape is `agents-md` and needs to be portable to other AI agents, keep headings and instruction labels in English; use the user's language for rationale. For other shapes, follow the user's language unless they say otherwise.

## Workflow

1. Classify:
   - Domain: `coding`, `product`, `finance`, `personal`, `research`, `operations`, `mixed`
   - Stage: `brainstorm`, `define`, `solution`, `action`
   - Risk: `low`, `medium`, `high`
   - Environment: detect available tools and authorized workspace; use supplied context first.
   - Output shape: `freestyle`, `table`, `tree`, `agents-md`, `mixed`, or `decide-later`. Reuse an explicit shape or handoff intent; otherwise default `freestyle` for brainstorm and `agents-md` for handoff, stating the reversible assumption.

2. Select persona:
   - Coding/Product: pragmatic senior engineer + product planner
   - Architecture: systems architect + risk reviewer
   - Research: skeptical research analyst
   - Finance: conservative decision analyst
   - Personal workflow: structured systems coach
   - Mixed/unclear: select the relevant lenses from the actual decision; ask only if objectives conflict materially. A persona is a review perspective, not a capability guarantee or a reason to spawn an agent.

3. Gather context:
   - Inspect available scoped context before asking for missing facts. Separate observed facts, assumptions and unknowns.
   - If facts may be outdated or external best practice matters, research with generic wording first. Ask before using private context in search.
   - If the plan touches an external system, data source, automation, recurring domain workflow, or a tool the host lacks, run the Capability Check before proposing custom work.
   - If a handoff packet is present, treat its `scope`, `decisions`, `authorization`, `evidence`, `unknowns`, `failed approaches`, `acceptance`, and `next action` as the starting context. Do not re-collect known facts.

4. Interview:
   - Inspect/research factual uncertainty first. Ask only what can change feasibility, preferred strategy, scope, cost, risk, acceptance or the artifact. Number unresolved questions N1, N2, N3; preserve labels and prior answers.
   - Classify each question using the Question Contract below: factual clarification, small reversible preference, or material strategic choice. Only the last requires a full decision brief before asking.
   - Keep one decision topic per turn; usually one or two strategic choices. Batch only independent questions, serialize true dependencies, and continue independent analysis while a material answer is pending.
   - Sharpen vague terms, surface contradictions and test decision-changing adverse scenarios. Do not ask for output shape/persona if supplied intent or a reversible default resolves them.

5. Finalize:
   - Do not output final artifact until blocking decisions are resolved.
   - If output shape was `decide-later`, ask now.
   - Before final, give a compact readiness check: known facts, decisions, assumptions, unresolved non-blockers, risks.
   - Then produce one Markdown artifact in the shape the user chose. Use the AGENTS.md template only when shape = `agents-md` (or `mixed` containing an AGENTS.md block). For other shapes, follow the structure the user described.
   - If shape = `agents-md` and file writing is available, write the artifact to `docs/` per "Writing agents-md to a file" and report the path instead of pasting the whole packet back.
   - Include research source links when research changed the plan, regardless of shape.
   - When the Capability Check ran, list proposed installs (name, source link, what it covers, trust/risk, install step for the user) and searches tried; in `agents-md` put them under Recommended Plan as proposed steps and under Research Notes.

For an implementation handoff, preserve this compact contract: `scope`, `decisions`, `authorization`, `evidence`, `unknowns`, `failed approaches`, `acceptance`, and exactly one `next permitted action`. Mark missing fields as `unknown`; never invent approval or verification.

Before delivery, reconcile permission statements across the whole packet. Under planning-only authorization, every implementation step remains proposed; resolving a prerequisite does not itself authorize coding or deployment. The next permitted action must fit current authorization, and must not contradict an earlier sentence saying the developer may proceed.

## Question Contract

Before asking, state what changes under different answers. If no plausible answer changes
the decision or result, omit the question and use supplied context or a reversible default.
Do not reopen an accepted choice unless new evidence materially invalidates it; explain
that evidence if it does. A user may answer a subset; only dependent work remains open.

Choose the appropriate shape:

- **Missing fact:** inspect available evidence first; otherwise ask a short factual question
  explaining its consequence. Do not make the user choose among invented budget/workload
  buckets or vote on a documented fact.
- **Small reversible preference:** state a reasonable assumption or use a compact question
  with distinct consequences. No full strategy analysis for a filename, format or persona
  already inferable from the request.
- **Material strategic choice:** multiple credible routes serve different priorities, or
  stakes, recurring cost, complexity or reversibility matter. Present the complete brief
  below before asking. This is a decision aid, not a quiz with a correct recommended answer.

### Strategic decision brief

Use `weigh-options` when available for the comparison. Keep one planning owner, one brief
and one menu; do not rerun intake or require that skill to be installed. When standalone,
apply this complete contract locally:

1. State the decision, desired outcome and common time horizon. Separate hard constraints
   from preferences and factual unknowns. Screen feasibility first; unknown is not pass.
2. Find credible routes from the objectives, including the status quo or staged approach
   when viable. Usually 2–4 options; never invent a third to complete A/B/C. Compare at the
   same decision level. A hybrid must include integration cost, owner and transition rule.
3. Research external/current claims with primary sources; look for a credible alternative
   and evidence against the leading route. Use supplied synthetic/local evidence when
   sufficient. Label fact, estimate, inference and unknown; disclose unavailable tools.
4. For every viable route explain what changes and why it helps, concrete benefits,
   disadvantages and opportunity cost, choose-if/avoid-if suitability, setup vs operating
   complexity (moving parts, skills and owner), initial/recurring/switching cost and limits,
   risks and reversibility, and decisive evidence or gaps. Give the strongest credible
   case for each route. Do not hide maintenance or staff burden behind a cheap initial cost.
5. Compare meaningful differences in one matrix, including who gains and who bears the
   burden when relevant. Explain the sacrifice plainly. A failed hard constraint cannot
   be rescued by benefits or a total score; say when no feasible route is established.
6. Then give a conditional recommendation under stated priorities, its main sacrifice,
   evidence confidence and when each alternative wins. If priorities are missing, show
   conditional winners rather than assigning the owner's values. Test the most plausible
   adverse scenario and state what would change the recommendation. No invented precision.
7. If a factual uncertainty could flip the decision, propose the smallest discriminating
   check with a time/cost bound, observable pass/fail result and stop rule. State which
   outcomes favour which route. Ask the owner only for the remaining priority/sacrifice.

Adapt headings and language; this example is a content contract, not a rigid line count:

```text
คำถาม N: [กลยุทธ์ที่ต้องตัดสินใจ]
ทำไมต้องตัดสินใจตอนนี้: [ผลกระทบ / อะไรเปลี่ยนเมื่อเลือกต่างกัน]
บริบท: [เป้าหมาย ระยะเวลา ข้อจำกัดตายตัว สิ่งที่ยังไม่รู้]

A — [ชื่อกลยุทธ์]
ทำอะไร / ผลที่จะได้ / เหตุผล: [...]
ข้อดี: [...]
ข้อเสีย / สิ่งที่ต้องยอมแลก: [...]
เหมาะเมื่อ / ไม่เหมาะเมื่อ: [...]
ความซับซ้อนตอนเริ่ม / ตอนใช้งานต่อ: [ระดับ + เหตุผล + คนรับผิดชอบ]
ต้นทุนแรกเริ่ม / ต่อเนื่อง / ย้ายออก และเพดาน: [ข้อมูลหรือประมาณการที่ระบุสมมติฐาน]
ความเสี่ยง / ย้อนกลับ / หลักฐานและสิ่งที่ยังไม่รู้: [...]
[ทำแบบเดียวกันกับ B และทางเลือกอื่นที่ใช้ได้จริง]

ตารางเปรียบเทียบ: [เฉพาะแกนที่ต่างกัน ในระยะเวลา/ปริมาณงานเดียวกัน]
สิ่งที่ต้องแลก: [A ได้ X แต่เสีย Y; B ได้ Y แต่เสีย X]
ข้อเสนอภายใต้เป้าหมายนี้: [แนะนำอะไร เพราะอะไร ต้องยอมรับอะไร ความมั่นใจจากหลักฐาน]
เลือกทางอื่นเมื่อ: [เงื่อนไขที่ทำให้แต่ละทางชนะ]
ถ้าสถานการณ์แย่ลง: [ข้อสรุปยังอยู่ไหม / ตัวแปรที่เปลี่ยนคำแนะนำ]
ตรวจเพิ่มก่อนเลือก: [เฉพาะข้อเท็จจริงที่คุ้มตรวจ + ผลไหนพาไปทางใด]
ต้องการให้ความสำคัญกับอะไร / ยอมแลกอะไร? [เลือก A/B, ผสมเมื่อเข้ากันได้ หรือเสนอทางอื่น]
```

Use English equivalents when appropriate. If a choice tool requires a short recommended
label, present the brief before opening the tool and state that recommendation's assumptions.
Short UI labels are navigation, not the analysis. Do not turn the tool's preselection into
assumed user consent or imply implementation approval from a planning answer.

After the choice, record the selected route and rationale, accepted sacrifice, deferred
alternatives, decisive sources/assumptions, revisit trigger and unresolved facts in the
chosen artifact. Keep decisions and authorization separate. Do not repeat the interview.

## Research Rules

Research before recommendations when the task is current, complex, high-impact, tool-dependent, regulated, financial, medical, security/privacy adjacent, or likely to benefit from global benchmarks.

Prefer official docs, standards bodies, primary research, reputable institutions, and recognized expert frameworks. Inspect pages supporting consequential claims, not only search snippets. Test a credible alternative and the strongest objection to the leading route, not only confirming evidence. Date/version material facts; distinguish facts, estimates, inferences and unknowns. Resolve conflicting sources or lower confidence. Stop when the decisive differences are supported or the remaining gap needs private/user evidence. Final output must include source links beside material claims when research changes the plan.

Decision-analysis grounding: [UK Government MCDA guide](https://analysisfunction.civilservice.gov.uk/policy-store/an-introductory-guide-to-mcda/). Apply objectives, consequences, feasibility and sensitivity principles proportionally; do not claim a full formal MCDA or invent weighted scores.

### Capability Check

Existing installable capabilities often beat a custom plan. A fitting capability is a candidate, not an automatic winner over other viable strategies. Search discovery lanes in this order, stop when one clearly fits, and note lanes skipped; still compare material strategic alternatives under the Question Contract:

1. Already installed/connected: host connector, skill, plugin, or MCP lists.
2. Host discovery tools when present: connector/MCP registry search, plugin search, skill search.
3. Official MCP Registry: `https://registry.modelcontextprotocol.io/v0/servers?search=<keyword>`.
4. Vendor-official MCP server, connector, add-in, or SDK for the target product.
5. Skill/plugin marketplaces: `agentskills.io`, `github.com/anthropics/skills`, Claude Code plugin marketplaces.
6. GitHub: `gh search repos "<task> mcp" --sort stars`, `--topic mcp-server`, `gh search code "<keyword>" --filename SKILL.md`, plus mature open-source libraries/CLIs for the core job. No `gh` → web search on `github.com`.

Use generic keywords only. For each recommended third-party item record publisher (vendor/verified namespace/individual), last activity, license, auth model and scopes, supported hosts, overlap with installed skills, and whether its SKILL.md/tool descriptions were read. Stars are popularity, not safety. Skip with N/A for pure in-code logic, standard-library problems, or when the user excluded third-party components. For deep vetting or build-vs-install comparison, hand off to `solution-research` when available.

## Output Shape

Shapes and the "ask near the start" rule are defined in Overview. Do not hardcode shape schemas beyond the AGENTS.md template below — let the user define the look they want. AGENTS.md is the only canonical template here because it must stay portable across AI agents.

### AGENTS.md template

```markdown
# AGENTS.md

## 1. Project Or Topic Purpose

## 2. Operating Persona

## 3. Current Context

## 4. Goals And Non-Goals

## 5. Definitions And Canonical Terms

## 6. Decisions Already Made

## 7. Open Questions

## 8. Constraints And Risks

## 9. Recommended Plan

## 10. Acceptance Criteria

## 11. Verification Or Review Plan

## 12. Research Notes And Sources

## 13. Instructions For The Next AI Agent

## 14. When To Stop And Ask The User
```

### Writing agents-md to a file

Applies when shape is `agents-md` (or `mixed` containing an AGENTS.md block).

When a write tool is available (local CLI, IDE, or any session with filesystem access), write the packet to a file under `docs/` in the working directory. Create `docs/` if missing. In web chat with no write tool, print the packet inline as before — do not claim a file was written.

Filename rules:

- Kebab-case, `.md`, descriptive of the topic: `docs/agents-<topic-slug>.md` (e.g. `docs/agents-line-summary-pipeline.md`).
- Use `docs/AGENTS.md` only when the packet is the single canonical agent brief for the whole project, not one plan among several.
- If the target exists, read it first. Update it when the user requested that update; otherwise write a new suffixed name. Preserve concurrent edits and do not ask again for an already authorized update.
- The `# AGENTS.md` H1 inside the file stays as-is regardless of filename — it is the portable contract other agents read.

After writing, report the relative path and a 3-5 line summary of what the packet decides. Do not paste the full packet back into chat.

## Completion Check

Scale to output shape. Always confirm:

- Clear goal (what the artifact must answer or enable)
- Key decisions made (or explicitly deferred), with rationale, accepted sacrifice and revisit condition for material strategies
- Major risks or stop conditions surfaced

Add when shape is `agents-md` or `mixed` containing AGENTS.md:

- Defined audience or user
- Relevant constraints
- Acceptance or success criteria
- Verification or review plan
- Instructions for the next AI agent

For `freestyle` / `table` / `tree`: skip sections the topic does not need. Do not pad.

## Quality, lifecycle and people

Before selecting architecture, state the actual workload, constraints, trust boundaries and success measure. Compare the simplest viable route with material alternatives; name the assumption or threshold that would change the choice. Do not require distributed systems, caching or new dependencies merely to appear senior.

Trace one ordinary journey and the relevant difficult journey: partial success, lost acknowledgement, conflicting updates, shared identity, missing evidence or owner absence. Preserve invariants across them. An unknown write outcome needs reconciliation before retry; it is not proof of failure. For service work, include an accountable operator, recovery/rollback that preserves accepted data, and the return from manual fallback to normal operation. Mark irrelevant lenses N/A rather than adding ceremony.

Consider the user, affected people, operator and decision owner only where they differ. Explain in the user's language what happened, what is uncertain and the next action. For non-tech workflows include a concrete comprehension/recovery check and keyboard/accessibility needs where relevant. Do not infer staff ability from service failure metrics. Proposed user tests are not observed user research.

Optimization starts with a measured bottleneck, including human queue time. Define before/after workload and correctness checks before promising a speedup. Record maintainability cost, ownership and reconsideration triggers beside expected benefit. Consequential cost/privacy/architecture tradeoffs go to the owner before the dependent action; continue independent authorized work.

## Token and model routing

Keep one owner for scoping, decisions and final synthesis. Reuse the compact handoff plus changed facts; load only evidence needed to resolve the next material uncertainty. A complete approved packet does not require another interview or full research cycle.

Use the current capable model for constrained planning; a smaller available model may extract facts or format an already-decided packet after it passes representative checks. Escalate conflicting requirements or irreversible decisions to stronger reasoning, a discriminating test or the owner. Resolve model names and supported effort on the current host; these are roles, not fixed provider IDs.

Delegate only a bounded independent evidence search or risk review when useful concurrency or independence outweighs coordination. Send goal, constraints, source pointers, allowed writes, output and stop criteria; avoid full-history copies or one agent per persona. Include parent, children, synthesis, retries and review in cost accounting. Missing token/time/pricing data is unavailable. Short output is not evidence of cheaper or better work.
