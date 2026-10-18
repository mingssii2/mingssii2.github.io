# Skills I build & refine

Reusable AI workflows by mingssii2, developed and refined with AI assistance. Experimental public previews under [MIT](LICENSE).

| Skill | What it helps with |
|---|---|
| [second-brain-agents-plan](second-brain-agents-plan/README.md) | Compare meaningful choices and hand off a clear plan |
| [solution-research](solution-research/README.md) | Find existing options, check evidence and compare tradeoffs |
| [second-brain-coding](second-brain-coding/README.md) | Trace the real code path and make a small verified change |
| [skill-evaluate](skill-evaluate/README.md) | Separate instruction quality, user fit and task evidence |
| [gas-review](gas-review/README.md) | Review Google Apps Script host and event contracts |
| [office-script-review](office-script-review/README.md) | Review ExcelScript APIs and Power Automate boundaries |

## Start small
Read a package's SKILL.md and README, download its ZIP from the website, and extract the named folder into the skills directory supported by your agent. Keep SKILL.md, references and agents metadata together. Reload the host's discovery and explicitly request the skill by name. Start with the README's synthetic example and inspect the output before using real data. Required browsing, local file access or cloud tools depend on the host; these packages do not supply tools or accounts. Installing a skill does not authorize external actions.

For example, ask the agent to use solution-research to compare existing options before building an integration. Expected output: alternatives, evidence, limits and one justified next step. A missing tool or unknown entitlement must remain explicit.

See [evaluation methodology](EVALUATION.md) and [scoped evidence](evidence.json). Old task scores are version-specific; these previews have package checks, not universal behavioral certification. No token/time savings or vendor endorsement is claimed.

## Feedback and license
Open an issue in this repository with skill/version, host, sanitized input, expected result and actual result. Keep credentials, personal data and internal project content out of issues. To remove a skill, disable/remove its named folder with the host's supported controls.

Copyright (c) 2026 mingssii2. MIT applies to this skills directory and the LICENSE included in each ZIP; it does not relicense the rest of the website or linked third-party materials.
