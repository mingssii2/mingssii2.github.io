// Run: node tests/copy-prompts.mjs (Node standard library only).
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const start = source.indexOf('/* ===== Copy starter prompts ===== */');
const end = source.indexOf('/* ===== All work ===== */');
assert(start >= 0 && end > start, 'Copy handler must be present');
const handler = source.slice(start, end);

for (const denied of [false, true]) {
  const prompt = { textContent: 'ใช้ $solution-research กับโจทย์จำลอง' };
  const status = { textContent: '' };
  let click, copied;
  const button = {
    dataset: { copyTarget: 'prompt' }, disabled: false, hidden: true,
    getAttribute: name => { assert.equal(name, 'aria-describedby'); return 'status'; },
    addEventListener: (name, callback) => { assert.equal(name, 'click'); click = callback; },
  };
  runInNewContext(handler, {
    document: {
      querySelectorAll: () => [button],
      getElementById: id => id === 'prompt' ? prompt : status,
    },
    navigator: { clipboard: { writeText: async text => {
      copied = text;
      if (denied) throw new Error('Clipboard permission denied');
    } } },
  });
  assert.equal(button.hidden, false, 'Only show the action after JavaScript initializes it');
  const pending = click();
  assert.equal(button.disabled, true, 'Prevent repeat clicks while pending');
  await pending;
  assert.equal(copied, prompt.textContent, 'Copy actual visible prompt');
  assert.equal(button.disabled, false, 'Restore action on success or denial');
  assert.equal(prompt.textContent, 'ใช้ $solution-research กับโจทย์จำลอง', 'Never lose selectable text');
  assert(status.textContent.includes(denied ? 'เลือกข้อความคำสั่ง' : 'คัดลอกแล้ว'));
}
console.log('PASS: clipboard success/denial, pending state, exact prompt and recovery');
