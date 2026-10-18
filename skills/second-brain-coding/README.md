# second-brain-coding — publication preview

ไล่เส้นทางโค้ดจริง ใช้ของเดิมก่อน เพิ่มเฉพาะที่จำเป็น และส่งมอบพร้อมการตรวจที่เหมาะกับความเสี่ยง

Status: PUBLIC PREVIEW, 3.1.0-preview.1. Released under the MIT license by the owner's authorization. Read the source before enabling it in an agent. A preview is experimental; historical results do not certify this adapted package.

## Input and output
Input example: แก้การตรวจข้อมูลใน helper ที่ CLI และ API ใช้ร่วมกัน โดยรักษาค่า 0 ที่ถูกต้อง และทิ้ง runnable check ไว้
Expected output: การแก้ที่มีขอบเขตชัด พร้อมผลตรวจและสิ่งที่ยังไม่พิสูจน์
Smoke acceptance: แก้ helper ร่วมแทนแปะ guard ทุก caller; คง 0; ปฏิเสธ input ผิด; check ต้องจับ defect เดิมได้
This example has not been executed as a new agent trial.

## Installation
Unzip so `second-brain-coding/SKILL.md` and its bundled references stay together. Put this folder in the skills directory supported by your agent, reload discovery, and explicitly request the skill by name. Location, discovery and capabilities depend on the host; the folder alone does not provide tools or accounts. Use a disposable task first. To remove, disable/delete only this installed folder using your host's supported controls.

## Dependencies and evidence
Markdown instructions for a compatible agent, not a standalone executable. Research/evaluation require evidence access; browser/CLI/cloud tools depend on your host. No external installation, authentication, messaging or deployment is granted by installing this package. Coding can use an optional configured vault; no private vault is included. API review needs current official docs and target-host checks before operational claims.

Local source version: 3.1.0; SKILL.md SHA-256: dd34cbbbe69e229e19deca14902f95854106a234c4c359097660cd210b288a42.
Public preview SKILL.md SHA-256: 38d468b57f6029a038985d69a279ec47624eae91ac310b292e5e45cb9197fb53.
Changes relative to local files: SKILL.md. Version labels change in every preview; privacy/portability changes additionally affect coding, GAS and Office review. Old behavior scores do not certify these previews.

Historical evidence (3.1.0 local): รุ่น local 3.1.0: local artifact checks ผ่าน T1/T2/T5; อีก 5 scenarios เป็น walkthrough ที่ผู้แก้เห็นโจทย์ ไม่ใช่ fresh agent trials
Limitations: ยังไม่มี A/B ที่เทียบเท่ากัน ไม่มี human comprehension, cold handoff หรือ whole-run token savings ที่วัดได้ ฉบับ public ปรับการตั้งค่า vault จึงยังไม่รับคะแนนพฤติกรรมของรุ่น local โดยอัตโนมัติ
Current source-review rationale: สอดคล้องกับ diff เล็กและ root cause; local รุ่นเดิมพึ่ง vault ส่วนตัว ฉบับเตรียมเผยแพร่ต้องใช้ได้เมื่อไม่มี vault
See EVIDENCE.json for rubric inputs and evidence boundaries. Local raw evidence is retained privately and is not included in this package.

## Credit and license
Copyright (c) 2026 mingssii2. This package is licensed under MIT; see LICENSE. Selected and adapted from the owner's personal workflow skills, with AI assistance. The owner authorized this publication and MIT licensing. External documentation remains credited at its original links; no vendor endorsement or independent certification is claimed. This grant covers this package's files and does not relicense linked third-party works.
