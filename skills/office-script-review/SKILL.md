---
license: MIT
name: office-script-review
description: >-
  Static review of Office Scripts (ExcelScript / the "Run script" action in Power
  Automate) for API and type errors BEFORE they are pasted into the Office Scripts
  editor. Catches the #1 failure: calling Office.js Add-in APIs (
  .values, .rows, .load/.sync, Excel.run) that do not exist in ExcelScript, plus
  `any` types, missing null checks, per-cell loops, and broken main() contracts.
  Use PROACTIVELY whenever an Office Script is being written, generated, edited, or
  reviewed — i.e. any .ts whose main() takes `ExcelScript.Workbook`, any file named
  office-script*/sheetToExcel*, or when the user mentions "office script",
  "ExcelScript", "Run script", "Excel Online script", or a Power Automate → Excel
  step. Trigger it yourself right after writing/editing such a file; do not wait to
  be asked. NOT for ordinary TypeScript (React/Node/web-app `.ts`) — only scripts
  that run on the ExcelScript host.
metadata:
  version: "3.1.0-preview.1"
---

# office-script-review

Office Scripts run on the **ExcelScript** API, NOT Office.js / Excel Add-ins. The
two look almost identical, so AI-generated scripts routinely call methods that do
not exist in ExcelScript and only fail when pasted into the editor or run from
Power Automate. This skill is a fast static gate that runs before that.

Use current official ExcelScript documentation as API authority; no private knowledge files are required.

## When to run

Right after you write or edit any Office Script, and before telling the user it is
ready. Signals: `main(workbook: ExcelScript.Workbook, ...)`, files like
`office-script*.ts` / `sheetToExcel*.ts`, or a Power Automate "Run script" step.

## How to review

Scan the script against the checklist below. Report findings as
`line — problem → fix`. If none, say “No static findings in the reviewed scope”; editor compilation, workbook state and Power Automate runs remain untested unless executed. Fix on request (or directly if
you authored the file this turn).

**Before flagging (avoid false positives):** a review that calls a VALID API an
error is worse than no review. If you are not certain a method is wrong, verify it
against current official ExcelScript docs before reporting; neighbouring code is only a lead — phrase an unverified doubt as "verify X exists", not
"X is wrong". Report **A-items first** (they block compile), then B, then C.

### A. Wrong-API (must fix — will not compile in ExcelScript)

| ❌ found in code | ✅ replace with |
|---|---|
| `range.values` / `range.formulas` (property) | `range.getValues()` / `range.getFormulas()` (+ `setValues`) |
| `worksheet.tables` / `worksheet.pivotTables` | `worksheet.getTables()` / `worksheet.getPivotTables()` |
| `workbook.worksheets.getItem(n)` | `workbook.getWorksheet(n)` |
| `table.rows.add(...)` | `table.addRows(-1, values2D)` |
| `.load(...)` / `ctx.sync()` / `Excel.run` / `Office.context` | delete — ExcelScript has no load/sync model; call getters directly |

### B. Correctness / performance

- [ ] `table.deleteRowsAt(index, count)` is a valid targeted deletion API; validate index/count and never replace it with whole-body deletion.
- [ ] `getTable(name)` / `getWorksheet(name)` can return `undefined` → null-checked before use
- [ ] No per-cell loop over hundreds+ rows; reads use one `getValues()`, writes one `setValues`/`addRows`
- [ ] On WIDE or LARGE ranges, `getValues()` over the whole body can throw *"The response payload size has exceeded the limit"* (a run-time error, not compile) → read only the columns you need with `range.getColumn(i).getValues()` (or chunk rows), never the full 100+-col body at once
- [ ] Batch only the intended contiguous rows; `table.deleteRowsAt(index, count)` is valid. Large batches need target timing (official docs warn that more than 1000 rows may time out in Power Automate).
- [ ] Row-by-row deletes (when unavoidable) go bottom-up so indexes don't shift
- [ ] `getRangeBetweenHeaderAndTotal()` guarded with `getRowCount() > 0` before column/row access
- [ ] Refresh only when the output requires it. In Power Automate, PivotTable.refresh and refreshAllPivotTables do nothing; refreshAllDataConnections only refreshes Power BI sources. Verify a supported refresh path for the actual source and host; recalculation is not external refresh.

### B2. Power Automate runtime budget (acceptance)

- [ ] Treat the synchronous **120-second deadline per Run script action** as a hard ceiling, not a tuning suggestion. Honor a stricter user budget. Aim below the ceiling with headroom (for example, 90 seconds); this margin is a recommendation, not a platform guarantee. This is not a total-flow budget or the Apps Script execution limit.
- [ ] Record workload shape, script/version, actual Power Automate action durations, and representative normal, growth and retry runs. Script-side elapsed milliseconds are diagnostic and exclude connector/queue overhead; Node/COM timing and static tests cannot prove cloud compliance. Without target timing, report **runtime acceptance unverified**, never “guaranteed under120 seconds”.
- [ ] Reduce workbook round trips and repeated formula work; batch intended reads/writes, cache getters outside loops, and keep only required recalculations. When pausing calculation, preserve the original mode and restore it in finally for ordinary exceptions. Timeout/host termination may leave partial writes or manual mode.
- [ ] Chunking ranges inside one invocation does **not** reset the120-second deadline. If measured representative work does not fit with headroom, split into separately bounded Run script actions with a fixed input snapshot, explicit checkpoint/version, idempotent retries and final reconciliation. Preserve the caller contract or update its mappings; do not return completed/success for partial work.
- [ ] A Date.now deadline check cannot cancel a workbook call already in flight; extra retries or an action timeout setting do not prove a longer supported runtime. State recovery behavior and do not hide timeout risk by skipping validation, losing history or weakening totals.

Authority: [platform limits](https://learn.microsoft.com/en-us/office/dev/scripts/testing/platform-limits), [performance guidance](https://learn.microsoft.com/en-us/office/dev/scripts/develop/web-client-performance). Recheck current official limits when applying this gate.

### C. Types / contract

- [ ] No `any`; JSON input typed via `interface` / `Record<string, unknown>` with narrow casts
- [ ] `main(workbook: ExcelScript.Workbook, ...)` is the first param; explicit return type
- [ ] `JSON.parse` wrapped/guarded; missing fields, empty string, wrong shape handled
- [ ] Reminder if `main` signature changed: the PA "Run script" action must be removed & re-added to reload the contract

### C2. Table appearance (only when relevant)

Preserve existing formatting ownership and user conventions. Review readability on the target host when relevant. Formatting is not an API error without a reproduced defect; measure its cost before widening the affected range.

### D. Linter (Office Scripts-only — blocks Save even when types are fine)

- [ ] Array-method callbacks are **arrow functions only** — `arr.map(String)` / `arr.forEach(fn)` (a function reference) fails with *"Only arrow functions may be used in array method callbacks"* → `arr.map(v => String(v))`
- [ ] No `var`; `let`/`const` only. No `eval`, no `with`.
- [ ] No ExcelScript object (Table/Range/Worksheet…) stored in a user `interface` field, object literal or array, then read back (`const t = reg.table`) — fails with *"Aliasing or assignment of Office Scripts APIs is not allowed"* even though tsc/Node accept it → keep plain data in objects, pass API objects as function parameters; use arrays of booleans/strings instead of arrays of tables

## After review

If you fixed anything non-obvious, offer to record it via dev-knowledge (in the user-configured knowledge base) — do not write silently.

## Execution fit

Reuse known scope, decisions and fresh evidence; ask only for missing facts that change the next action. Use the current agent for this bounded workflow. A smaller available model is a provisional option after comparable passing trials; allow stronger review for ambiguity, failed checks or consequential effects. Delegate only an authorized independent subtask with bounded inputs, ownership, return evidence and stop rule. No token or latency savings claim without comparable telemetry. Explain outcome, uncertainty and the next usable action in the user’s language.

## Current API evidence

- [ExcelScript.Table](https://learn.microsoft.com/en-us/javascript/api/office-scripts/excelscript/excelscript.table): deleteRowsAt is supported; reviewed 2026-09-06.
- [Power Automate refresh limitations](https://learn.microsoft.com/en-us/office/dev/scripts/testing/power-automate-troubleshooting): successful calls may be no-ops; reviewed 2026-09-06.
