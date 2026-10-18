# solution-research — publication preview

สำรวจวิธีทำหลายทาง ตรวจของที่มีอยู่แล้ว และอ้างอิงหลักฐานก่อนแนะนำให้ลงทุนลงแรง

Status: PUBLIC PREVIEW, 3.1.0-preview.1. Released under the MIT license by the owner's authorization. Read the source before enabling it in an agent. A preview is experimental; historical results do not certify this adapted package.

## Input and output
Input example: ต้องส่งข้อมูลระหว่างสองระบบทุกวัน มีวิธีใช้ของเดิมหรือ connector แทนเขียนใหม่ไหม ช่วยเทียบข้อจำกัดและค่าใช้จ่าย
Expected output: วิธีที่ทำได้ ข้อจำกัด แหล่งอ้างอิง และสิ่งที่ต้องตรวจเพิ่ม
Smoke acceptance: เทียบ source-owned, destination-owned และตัวกลางตามความเกี่ยวข้อง; แยก unknown จาก fail; ไม่ติดตั้ง connector เอง
This example has not been executed as a new agent trial.

## Installation
Unzip so `solution-research/SKILL.md` and its bundled references stay together. Put this folder in the skills directory supported by your agent, reload discovery, and explicitly request the skill by name. Location, discovery and capabilities depend on the host; the folder alone does not provide tools or accounts. Use a disposable task first. To remove, disable/delete only this installed folder using your host's supported controls.

## Dependencies and evidence
Markdown instructions for a compatible agent, not a standalone executable. Research/evaluation require evidence access; browser/CLI/cloud tools depend on your host. No external installation, authentication, messaging or deployment is granted by installing this package. Coding can use an optional configured vault; no private vault is included. API review needs current official docs and target-host checks before operational claims.

Local source version: 3.1.0; SKILL.md SHA-256: cdce42940ddba4188b3602e0b15edac6225e94bba172b8d4643d290a49ea991f.
Public preview SKILL.md SHA-256: e835509e5836880135232557c22019f39fc0c3f215b7bcdc7f2b905380bbfdc0.
Changes relative to local files: SKILL.md. Version labels change in every preview; privacy/portability changes additionally affect coding, GAS and Office review. Old behavior scores do not certify these previews.

Historical evidence (3.1.0): รุ่น 3.1.0 ได้ 10/10 ในโจทย์ research 2 ข้อ ข้อละ 1 trial; baseline 3.0.0 ได้ 7/10 และ 8/10 มี negative control ร่วมที่ทั้งสองรุ่นได้ 10/10
Limitations: โจทย์เขียนโดยผู้แก้ skill; AI grader ปิดบังได้บางส่วนและมี ceiling effect ทดสอบบน host ที่มี discovery tools; fallback บน host อื่นยังไม่พิสูจน์ ยอด subagent tokens ของชุดทดลองรวม 4 cases เพิ่ม 5.6% จึงไม่อ้างว่าประหยัด
Current source-review rationale: สำรวจหลาย family และตรวจข้อโต้แย้งได้; workflow ระดับ standard หนักสำหรับคำถามแคบ จึงต้องเลือกระดับให้ถูก
See EVIDENCE.json for rubric inputs and evidence boundaries. Local raw evidence is retained privately and is not included in this package.

## Credit and license
Copyright (c) 2026 mingssii2. This package is licensed under MIT; see LICENSE. Selected and adapted from the owner's personal workflow skills, with AI assistance. The owner authorized this publication and MIT licensing. External documentation remains credited at its original links; no vendor endorsement or independent certification is claimed. This grant covers this package's files and does not relicense linked third-party works.
