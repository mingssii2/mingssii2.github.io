---
license: MIT
name: gas-review
description: >-
  Review Google Apps Script (.gs) for runtime/contract errors that
  fail only after Save or when a trigger fires. Catches host-API mistakes (Node/
  browser assumptions like fetch/require/import/setTimeout that don't exist in the
  Apps Script V8 host), doPost/onFormSubmit event-shape bugs, unguarded JSON.parse,
  null/undefined at trust boundaries, `||`-vs-`??` fallbacks, per-cell loops that
  blow quotas, unchecked UrlFetchApp responses, and secrets/PII in logs. Use
  PROACTIVELY whenever an Apps Script is being written, generated, edited, or
  reviewed — i.e. any .gs file, code using SpreadsheetApp / UrlFetchApp / doPost /
  onFormSubmit / ContentService / Utilities / PropertiesService / LockService, or
  when the user mentions "apps script", "GAS", ".gs", "google script", "webhook to
  Power Automate", or a Sheet/Form automation. Trigger it yourself right after
  writing/editing such a file; do not wait to be asked. NOT for ordinary Node.js/
  browser JavaScript or TypeScript — only code that runs on the Apps Script host.
metadata:
  version: "3.1.0-preview.1"
---

# gas-review

Apps Script runs on a **V8 host that is neither Node.js nor a browser**, and its
Web-App / trigger entry points have a fixed event contract. Most GAS failures are
not syntax — they surface on Save or when a trigger fires with a shape the code
didn't expect. This skill is a fast static gate before that.

Use current official Apps Script documentation as API authority; no private knowledge files are required.

## When to run

Right after you write or edit any `.gs`, and before telling the user it is ready.
Signals: a `.gs` file; `doPost`/`doGet`/`onFormSubmit`/`onOpen`/`onEdit`;
`SpreadsheetApp`/`UrlFetchApp`/`ContentService`/`Utilities`/`PropertiesService`.

## How to review

Scan against the checklist. Report findings as `line — problem → fix`. If none,
say “No static findings in the reviewed scope”; this does not establish Save, trigger, permission or quota success. Fix on request (or directly if you authored the file this turn).

**Before flagging (avoid false positives):** flagging valid Apps Script as broken
is worse than no review. If unsure a global/method is unavailable, verify against
the current official Apps Script docs; neighbouring code can suggest a hypothesis but cannot prove availability before reporting — phrase
an unverified doubt as "verify X", not "X is wrong". Report host-API / contract
breakers (A, B) before performance and logging (D, E).

### A. Host-API (Apps Script is NOT Node/browser — will fail on Save or run)

| ❌ found in code | ✅ replace with |
|---|---|
| `fetch(...)` | `UrlFetchApp.fetch(url, {method,contentType,payload,muteHttpExceptions:true})` |
| `require(...)` / `import`/`export` (ES modules) | plain global functions across files; no module system |
| `setTimeout` / `setInterval` / `Promise`-based delays | time-driven trigger, or `Utilities.sleep(ms)` |
| `process` / `window` / `document` / `localStorage` | none exist — use `PropertiesService` for persistence |
| `Buffer` / Node crypto | `Utilities.base64Encode` / `Utilities.computeDigest` |
| Logging | `console` and `Logger` are valid; inspect content for secrets/PII, not the logger name |

### B. Web-App / trigger contract

- [ ] For JSON bodies, `doPost(e)` reads `e.postData.contents`, then parses and validates it. Query/form parameters legitimately use `e.parameter`/`e.parameters`.
- [ ] Web apps return `HtmlOutput` or `TextOutput`; for a JSON endpoint use `ContentService.createTextOutput(JSON.stringify(x)).setMimeType(ContentService.MimeType.JSON)`. Do not flag an HTML endpoint for returning HTML.
- [ ] Identify trigger source: spreadsheet form-submit events expose `e.range`, `e.namedValues`, `e.values`; Google Forms form-submit events expose `e.response` and `e.source`. Manual runs have no supplied event. See [official event contracts](https://developers.google.com/apps-script/guides/triggers/events).
- [ ] For JSON endpoints, handle entrypoint errors with the documented JSON error contract; caller checks business status, not HTTP alone.
- [ ] Changing a Web-App reminds the user to **deploy a new version** (edits don't go live until redeployed)

### C. Runtime safety

- [ ] `JSON.parse` guarded: check type/empty first, wrap in `try/catch`, then validate shape (object vs array)
- [ ] Null/undefined guarded at boundaries before property/method access (`x == null` catches both)
- [ ] `??` (not `||`) where `0` / `""` / `false` are valid values
- [ ] `Array.isArray()` used to tell array from object — not `typeof` alone
- [ ] Handle both HTTP failure responses and transport exceptions: either catch the default HTTP exceptions or use `muteHttpExceptions:true` and inspect response codes. A 2xx acceptance may precede downstream completion.

### D. Performance / quota

- [ ] Read once with `getRange(...).getValues()`, write once with `setValues()` — no per-cell `getValue`/`setValue` in a loop
- [ ] No service call (Sheet/Mail/UrlFetch) inside a tight per-row loop where a batch would do
- [ ] `LockService.getScriptLock()` around writes when a trigger can run concurrently; idempotency key if retries are possible
- [ ] Verify the actual trigger/execution and caller deadlines against [Apps Script quotas](https://developers.google.com/apps-script/guides/services/quotas). Do not copy the Excel/Power Automate120-second Run script limit into GAS. Measure representative target runs; static checks or local timing do not prove the deadline. If work cannot fit with headroom, use bounded resumable work and explicit completion/retry state; fast acknowledgement is not downstream completion.

### E. Secrets / logging

- [ ] No `Logger.log`/`console.log` of raw body, row values, email/phone, token, secret, or full URL+query
- [ ] Secrets read from `PropertiesService`, not hard-coded; never echoed in a response
- [ ] Logs carry allowlisted metadata only (error code, phase, counts)

## After review

If you fixed anything non-obvious, offer to record it via dev-knowledge (in the user-configured knowledge base) — do not write silently.

## Execution fit

Reuse known scope, decisions and fresh evidence; ask only for missing facts that change the next action. Use the current agent for this bounded workflow. A smaller available model is a provisional option after comparable passing trials; allow stronger review for ambiguity, failed checks or consequential effects. Delegate only an authorized independent subtask with bounded inputs, ownership, return evidence and stop rule. No token or latency savings claim without comparable telemetry. Explain outcome, uncertainty and the next usable action in the user’s language.
