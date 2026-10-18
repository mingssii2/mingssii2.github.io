# office-script-review — publication preview

จับความสับสนระหว่าง Office.js กับ ExcelScript รวมถึงสัญญา Run script และขอบเขตที่ต้องวัดบน Power Automate

Status: PUBLIC PREVIEW, 3.1.0-preview.1. Released under the MIT license by the owner's authorization. Read the source before enabling it in an agent. A preview is experimental; historical results do not certify this adapted package.

## Input and output
Input example: ตรวจ Office Script นี้ว่ามีการเรียก Office.js ปนหรือไม่ และแยกผล static review จากการรัน Power Automate จริง
Expected output: ปัญหา API/type ที่พบ และสิ่งที่ยังต้องพิสูจน์บน workbook จริง
Smoke acceptance: ไม่กล่าวหา table.deleteRowsAt ว่า API ผิด; พบ range.values ต้องแนะนำ getValues; ไม่อ้างผ่าน cloud deadline จาก Node timing
This example has not been executed as a new agent trial.

## Installation
Unzip so `office-script-review/SKILL.md` and its bundled references stay together. Put this folder in the skills directory supported by your agent, reload discovery, and explicitly request the skill by name. Location, discovery and capabilities depend on the host; the folder alone does not provide tools or accounts. Use a disposable task first. To remove, disable/delete only this installed folder using your host's supported controls.

## Dependencies and evidence
Markdown instructions for a compatible agent, not a standalone executable. Research/evaluation require evidence access; browser/CLI/cloud tools depend on your host. No external installation, authentication, messaging or deployment is granted by installing this package. Coding can use an optional configured vault; no private vault is included. API review needs current official docs and target-host checks before operational claims.

Local source version: 3.1.0; SKILL.md SHA-256: e382b4dc6a179e518792f544d833996d6710b2d39c230a671043ccdd66f3b372.
Public preview SKILL.md SHA-256: 67c148c132871abef3183b61de8d494e12486f9a5d2e6c894a5bffe6d139daf4.
Changes relative to local files: SKILL.md. Version labels change in every preview; privacy/portability changes additionally affect coding, GAS and Office review. Old behavior scores do not certify these previews.

Historical evidence (3.0.0 historical): รุ่น 3.0.0 เคยมี self-graded smoke 1 case และ static gate ของ deleteRowsAt; รุ่นปัจจุบัน 3.1.0 ยังไม่มี fresh behavioral score ที่เทียบได้ในหลักฐานชุดนี้
Limitations: ฉบับ public ตัด optional formatter ที่อยู่นอกหน้าที่ review; static check ไม่พิสูจน์ editor compilation, workbook state หรือเวลารัน cloud
Current source-review rationale: มี API authority และ false-positive guard; runtime/formatting ทำให้คำสั่งยาวและต้องแยกหลักฐาน cloud จาก local
See EVIDENCE.json for rubric inputs and evidence boundaries. Local raw evidence is retained privately and is not included in this package.

## Credit and license
Copyright (c) 2026 mingssii2. This package is licensed under MIT; see LICENSE. Selected and adapted from the owner's personal workflow skills, with AI assistance. The owner authorized this publication and MIT licensing. External documentation remains credited at its original links; no vendor endorsement or independent certification is claimed. This grant covers this package's files and does not relicense linked third-party works.
