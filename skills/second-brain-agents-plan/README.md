# second-brain-agents-plan — publication preview

เปลี่ยนไอเดียกว้าง ๆ ให้เป็นทางเลือกที่เทียบกันได้ พร้อมข้อแลกเปลี่ยนและขั้นถัดไปที่ชัดเจน

Status: PUBLIC PREVIEW, 3.2.0-preview.1. Released under the MIT license by the owner's authorization. Read the source before enabling it in an agent. A preview is experimental; historical results do not certify this adapted package.

## Input and output
Input example: ช่วยวางแผนระบบจองห้องประชุมสำหรับทีมเล็ก เปรียบเทียบใช้ของเดิมกับสร้างเอง แล้วส่งต่อสิ่งที่ตัดสินใจแล้ว
Expected output: ทางเลือก เหตุผล ข้อจำกัด และแผนส่งต่อ
Smoke acceptance: เปรียบเทียบทางเลือกตามเงื่อนไขที่ให้; ไม่เปลี่ยนข้อเสี่ยงให้เป็นข้อห้ามที่ผู้ใช้ไม่ได้ตั้ง; ไม่ลงมือสร้างระบบจากคำขอวางแผน
This example has not been executed as a new agent trial.

## Installation
Unzip so `second-brain-agents-plan/SKILL.md` and its bundled references stay together. Put this folder in the skills directory supported by your agent, reload discovery, and explicitly request the skill by name. Location, discovery and capabilities depend on the host; the folder alone does not provide tools or accounts. Use a disposable task first. To remove, disable/delete only this installed folder using your host's supported controls.

## Dependencies and evidence
Markdown instructions for a compatible agent, not a standalone executable. Research/evaluation require evidence access; browser/CLI/cloud tools depend on your host. No external installation, authentication, messaging or deployment is granted by installing this package. Coding can use an optional configured vault; no private vault is included. API review needs current official docs and target-host checks before operational claims.

Local source version: 3.2.0; SKILL.md SHA-256: 722cef41fd093240bc4eec3d6fdfaddfc78a53467344ce38f7d5db21aead1998.
Public preview SKILL.md SHA-256: 280cdcc29ee641c8df7afb0c73fc8cebba625e850b874a3b16965183c055a755.
Changes relative to local files: SKILL.md. Version labels change in every preview; privacy/portability changes additionally affect coding, GAS and Office review. Old behavior scores do not certify these previews.

Historical evidence (3.2.0): รุ่น 3.2.0 ได้ 10/10 ใน 4 outputs ใหม่ (2 โจทย์ × 2 รอบ) ในการเปรียบเทียบกับ 3.3.0; รุ่น 3.3.0 ได้เฉลี่ย 9.17/10 ในกลุ่มเดียวกัน
Limitations: การตรวจแบบปิดชื่อรุ่นโดย AI และการตรวจข้อเท็จจริงภายหลัง; ไม่ใช่ผู้ตรวจภายนอกหรือผู้ใช้จริง การแยก filesystem ไม่สมบูรณ์ และไม่มี telemetry ต้นทุน รุ่น 3.3.0 เคยมี critical failure 1 output ในกลุ่ม historical ซึ่งแยกจาก 4 outputs ใหม่นี้
Current source-review rationale: ขอบเขต planning ชัดและใช้เดี่ยวได้; คำสั่งค่อนข้างยาวและยังมีความตึงระหว่างรูปแบบส่งมอบกับการเขียนไฟล์
See EVIDENCE.json for rubric inputs and evidence boundaries. Local raw evidence is retained privately and is not included in this package.

## Credit and license
Copyright (c) 2026 mingssii2. This package is licensed under MIT; see LICENSE. Selected and adapted from the owner's personal workflow skills, with AI assistance. The owner authorized this publication and MIT licensing. External documentation remains credited at its original links; no vendor endorsement or independent certification is claimed. This grant covers this package's files and does not relicense linked third-party works.
