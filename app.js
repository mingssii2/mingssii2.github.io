const USER = 'mingssii2';
const API = `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`;
const CACHE_KEY = 'hub-repos-v1';
const CACHE_MS = 10 * 60 * 1000; // unauthenticated API allows 60 requests/hour per visitor
const AUTO_INDEX_AT = 12; // switch to the dense index view once there are more items than this

// Hand-written copy and screenshots for repos that deserve more than the GitHub description.
const CURATED = {
  'wheel': { title: 'Fair Wheel', thumb: 'assets/shot-wheel.jpg',
    description: 'สุ่มตัวเลือก ปรับน้ำหนัก และแชร์ชุดตัวเลือกให้ทีม เหมาะกับกิจกรรมหรือการตัดสินใจเล็ก ๆ' },
  'pad-flow-cleaner': { title: 'PAD Flow Cleaner', thumb: 'assets/shot-pad.jpg',
    description: 'อ่าน Power Automate Desktop flow เป็นภาพ พร้อมสรุปขั้นตอนและข้อความฉบับย่อก่อนส่งต่อ' },
};
const HIDDEN = new Set([`${USER}.github.io`]);

// Shown while the API loads, or if it is unreachable / rate-limited.
const SNAPSHOT = [
  { name: 'wheel', language: 'JavaScript', pushed_at: '2026-10-18T04:31:48Z', has_pages: true, homepage: null, description: '' },
  { name: 'pad-flow-cleaner', language: 'HTML', pushed_at: '2026-10-16T10:21:16Z', has_pages: true, homepage: 'https://mingssii2.github.io/pad-flow-cleaner/', description: '' },
  { name: 'stock-dtw-lower-bound-evaluation', language: 'Python', pushed_at: '2026-04-22T15:21:31Z', has_pages: false, homepage: null,
    description: 'Reproducible DTW lower-bound evaluation for stock time-series similarity search' },
  { name: 'data-science-test', language: 'Python', pushed_at: '2026-02-12T20:38:14Z', has_pages: false, homepage: null, description: 'Personal test' },
];

const LANG_VAR = { JavaScript: '--lang-js', HTML: '--lang-html', Python: '--lang-py', TypeScript: '--lang-ts' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmt = iso => { const [y, m, d] = iso.split('-'); return d + ' ' + MONTHS[+m - 1] + ' ' + y; };
/* ===== Copy starter prompts ===== */
document.querySelectorAll('[data-copy-target]').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const prompt = document.getElementById(button.dataset.copyTarget);
    const status = document.getElementById(button.getAttribute('aria-describedby'));
    button.disabled = true;
    try {
      await navigator.clipboard.writeText(prompt.textContent);
      status.textContent = 'คัดลอกแล้ว ใช้กับ agent ที่ติดตั้ง skill นี้แล้ว';
    } catch {
      status.textContent = 'คัดลอกอัตโนมัติไม่ได้ เลือกข้อความคำสั่งเพื่อคัดลอกด้วยตนเอง';
    } finally {
      button.disabled = false;
    }
  });
});

/* ===== All work ===== */
function toItem(r) {
  const cur = CURATED[r.name] || {};
  const live = r.homepage || (r.has_pages ? `https://${USER}.github.io/${r.name}/` : null);
  return {
    name: cur.title || r.name,
    repo: r.name,
    kind: live ? 'app' : 'repo',
    language: r.language || 'Other',
    pushed: r.pushed_at.slice(0, 10),
    description: cur.description || r.description || '',
    homepage: live,
    thumb: cur.thumb,
  };
}
const toItems = repos => repos
  .filter(r => !r.fork && !r.archived && !HIDDEN.has(r.name))
  .map(toItem)
  .sort((a, b) => b.pushed.localeCompare(a.pushed));

const state = { filter: 'all', view: null, q: '', items: toItems(SNAPSHOT), source: 'snapshot' };
try { state.view = localStorage.getItem('hub-view'); } catch (e) {}

function el(tag, attrs = {}, text) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (text != null) n.textContent = text;
  return n;
}
function lang(name) {
  const s = el('span', { class: 'lang' });
  const dot = el('i'); dot.style.background = 'var(' + (LANG_VAR[name] || '--lang-other') + ')';
  s.append(dot, document.createTextNode(name));
  return s;
}
function badge(p) {
  if (p.kind === 'app') { const b = el('span', { class: 'pill live' }); b.append(el('i'), document.createTextNode('Live app')); return b; }
  return el('span', { class: 'pill' }, 'Repo');
}
const href = p => p.homepage || `https://github.com/${USER}/${p.repo}`;

function visible() {
  const q = state.q.trim().toLowerCase();
  return state.items
    .filter(p => state.filter === 'all' || p.kind === state.filter)
    .filter(p => !q || [p.name, p.repo, p.language, p.description].join(' ').toLowerCase().includes(q));
}
function render() {
  const list = visible();
  const total = state.items.length;
  const view = state.view || (total > AUTO_INDEX_AT ? 'index' : 'cards');
  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === view));
  document.getElementById('count').textContent = list.length + ' จาก ' + total + ' ผลงาน'
    + (state.source === 'offline' ? ' · GitHub ไม่ตอบสนอง แสดงข้อมูลสำรอง' : '');
  const out = document.getElementById('results');
  if (!list.length) { out.replaceChildren(el('p', { class: 'empty th' }, 'ไม่พบงานที่ตรงกับ “' + state.q + '” ลองคำอื่น หรือเลือกทั้งหมด')); return; }

  if (view === 'cards') {
    const grid = el('div', { class: 'cards' });
    list.forEach(p => {
      const a = el('a', { class: 'card', href: href(p), target: '_blank', rel: 'noopener' });
      if (p.thumb) { const t = el('div', { class: 'thumb' }); t.append(el('img', { src: p.thumb, alt: '', loading: 'lazy' })); a.append(t); }
      const top = el('div', { class: 'top' }); top.append(lang(p.language), badge(p));
      a.append(top, el('h3', {}, p.name), el('p', { class: 'th' }, p.description), el('span', { class: 'foot' }, 'อัปเดต ' + fmt(p.pushed)));
      grid.append(a);
    });
    out.replaceChildren(grid);
  } else {
    const head = el('div', { class: 'index-head mono', 'aria-hidden': 'true' });
    head.append(el('span', {}, 'Updated'), el('span', {}, 'Name'), el('span', { class: 'h-desc' }, 'Description'), el('span', { class: 'h-meta' }, 'Language'), el('span'));
    const ul = el('ul', { class: 'index' });
    list.forEach(p => {
      const a = el('a', { href: href(p), target: '_blank', rel: 'noopener' });
      const name = el('span', { class: 'name' }); name.append(document.createTextNode(p.name), badge(p));
      const meta = el('span', { class: 'meta' }); meta.append(lang(p.language));
      a.append(el('span', { class: 'date' }, fmt(p.pushed)), name, el('span', { class: 'desc th' }, p.description), meta, el('span', { class: 'arrow', 'aria-hidden': 'true' }, '↗'));
      const li = el('li'); li.append(a); ul.append(li);
    });
    out.replaceChildren(head, ul);
  }
}

async function loadRepos() {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (c && Date.now() - c.at < CACHE_MS && Array.isArray(c.repos)) { state.items = toItems(c.repos); state.source = 'live'; render(); return; }
  } catch (e) {}
  try {
    const res = await fetch(API, { headers: { Accept: 'application/vnd.github+json' } });
    if (!res.ok) throw new Error('GitHub API ' + res.status);
    const repos = (await res.json()).map(({ name, language, pushed_at, has_pages, homepage, description, fork, archived }) =>
      ({ name, language, pushed_at, has_pages, homepage, description, fork, archived }));
    state.items = toItems(repos); state.source = 'live';
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos })); } catch (e) {}
  } catch (e) {
    state.source = 'offline';
  }
  render();
}

document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  state.filter = b.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(x => x.setAttribute('aria-pressed', x === b));
  render();
}));
document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => {
  state.view = b.dataset.view;
  try { localStorage.setItem('hub-view', state.view); } catch (e) {}
  render();
}));
document.getElementById('q').addEventListener('input', e => { state.q = e.target.value; render(); });
render();
loadRepos();
