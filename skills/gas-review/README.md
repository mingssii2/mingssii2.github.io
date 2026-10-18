# gas-review — publication preview

ตรวจ API ของ host รูปร่าง event ข้อมูลว่าง และการเปิดเผยข้อมูลใน log ก่อนนำสคริปต์ไปใช้

Status: PUBLIC PREVIEW, 3.1.0-preview.1. Released under the MIT license by the owner's authorization. Read the source before enabling it in an agent. A preview is experimental; historical results do not certify this adapted package.

## Input and output
Input example: ตรวจ onFormSubmit นี้ว่าใช้ event ของ Google Forms หรือ Google Sheets ถูกหรือไม่ และมีข้อมูลลับหลุดใน log ไหม
Expected output: จุดที่ต้องแก้พร้อมเหตุผล และรายการที่ต้องทดลองใน Apps Script จริง
Smoke acceptance: Forms event ใช้ e.response; spreadsheet submit ใช้ e.range/e.values; ไม่แจ้งว่า console เป็น API ผิดเพียงเพราะชื่อ logger
This example has not been executed as a new agent trial.

## Installation
Unzip so `gas-review/SKILL.md` and its bundled references stay together. Put this folder in the skills directory supported by your agent, reload discovery, and explicitly request the skill by name. Location, discovery and capabilities depend on the host; the folder alone does not provide tools or accounts. Use a disposable task first. To remove, disable/delete only this installed folder using your host's supported controls.

## Dependencies and evidence
Markdown instructions for a compatible agent, not a standalone executable. Research/evaluation require evidence access; browser/CLI/cloud tools depend on your host. No external installation, authentication, messaging or deployment is granted by installing this package. Coding can use an optional configured vault; no private vault is included. API review needs current official docs and target-host checks before operational claims.

Local source version: 3.1.0; SKILL.md SHA-256: 85c92d9871c527da11e7a95e0a2f4e7e561259a9fdada869a074adf521b94672.
Public preview SKILL.md SHA-256: d797f932b9ca08faa52a0adf57e4c5f9489da5cfed2812c8c5593bc50f4d8817.
Changes relative to local files: SKILL.md. Version labels change in every preview; privacy/portability changes additionally affect coding, GAS and Office review. Old behavior scores do not certify these previews.

Historical evidence (3.0.0 historical): รุ่น 3.0.0 เคยมี self-graded smoke 1 case; รุ่นที่ติดตั้งปัจจุบัน 3.1.0 ยังไม่มี fresh behavioral score ที่เทียบได้ในหลักฐานชุดนี้
Limitations: คะแนนรุ่นเก่าไม่ถ่ายมารุ่น 3.1.0 หรือฉบับ public; ยังไม่ได้รัน Save, trigger, permission และ quota ใน host จริง
Current source-review rationale: trigger เฉพาะ host และแยก static/live ชัด; checklist ต้องตรวจ official API สดเมื่อไม่แน่ใจและยังมีโอกาส false positive
See EVIDENCE.json for rubric inputs and evidence boundaries. Local raw evidence is retained privately and is not included in this package.

## Credit and license
Copyright (c) 2026 mingssii2. This package is licensed under MIT; see LICENSE. Selected and adapted from the owner's personal workflow skills, with AI assistance. The owner authorized this publication and MIT licensing. External documentation remains credited at its original links; no vendor endorsement or independent certification is claimed. This grant covers this package's files and does not relicense linked third-party works.
