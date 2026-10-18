# skill-evaluate — publication preview

แยกคุณภาพคำสั่ง ความเหมาะกับเจ้าของงาน และผลทดลองจริง เพื่อเลือกว่าจะใช้ ปรับ หรือหยุดใช้

Status: PUBLIC PREVIEW, 3.0.0-preview.1. Released under the MIT license by the owner's authorization. Read the source before enabling it in an agent. A preview is experimental; historical results do not certify this adapted package.

## Input and output
Input example: ประเมิน skill นี้จาก source และหลักฐานที่มี แยกสิ่งที่ยังไม่ได้ทดสอบ และอย่าสรุปว่า production-ready จากคะแนนสูง
Expected output: เหตุผลในการใช้หรือปรับ พร้อมขอบเขตความน่าเชื่อถือ
Smoke acceptance: ไม่รวม G/F กับ benchmark; คะแนนสูงที่มี critical failure ต้องไม่ผ่าน release; ไม่อ้าง savings เมื่อไม่มี telemetry
This example has not been executed as a new agent trial.

## Installation
Unzip so `skill-evaluate/SKILL.md` and its bundled references stay together. Put this folder in the skills directory supported by your agent, reload discovery, and explicitly request the skill by name. Location, discovery and capabilities depend on the host; the folder alone does not provide tools or accounts. Use a disposable task first. To remove, disable/delete only this installed folder using your host's supported controls.

## Dependencies and evidence
Markdown instructions for a compatible agent, not a standalone executable. Research/evaluation require evidence access; browser/CLI/cloud tools depend on your host. No external installation, authentication, messaging or deployment is granted by installing this package. Coding can use an optional configured vault; no private vault is included. API review needs current official docs and target-host checks before operational claims.

Local source version: 3.0.0; SKILL.md SHA-256: efa54a352b05990d83abdffa345e5f24b388ee2c902455ddebf791f06eb4fe4d.
Public preview SKILL.md SHA-256: bdc8db7aea24fac4be081b720ac51605f8c355ea7c17007289191ec111a7d681.
Changes relative to local files: SKILL.md. Version labels change in every preview; privacy/portability changes additionally affect coding, GAS and Office review. Old behavior scores do not certify these previews.

Historical evidence (3.0.0): รุ่น 3.0.0 มี synthetic smoke 1 case ได้ 10/10 ในรายงานเดิม โดย agent เดียวสร้างและให้คะแนนเอง
Limitations: ไม่ใช่การรับรองจากบุคคลที่สาม ตัวประเมินและรายงานนี้อยู่ใน workflow เดียวกับผู้พัฒนา; ไม่มี independent certification หรือผล production
Current source-review rationale: แยก static/behavior และ critical failures ชัด; การประเมินหลายมิติมีต้นทุน ต้อง reuse หลักฐานและจำกัด trial budget
See EVIDENCE.json for rubric inputs and evidence boundaries. Local raw evidence is retained privately and is not included in this package.

## Credit and license
Copyright (c) 2026 mingssii2. This package is licensed under MIT; see LICENSE. Selected and adapted from the owner's personal workflow skills, with AI assistance. The owner authorized this publication and MIT licensing. External documentation remains credited at its original links; no vendor endorsement or independent certification is claimed. This grant covers this package's files and does not relicense linked third-party works.
