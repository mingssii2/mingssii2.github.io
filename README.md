# mingssii2.github.io

Landing page for my apps and GitHub work: https://mingssii2.github.io

- **Hero**: fixed value proposition with a real app screenshot and direct app/Skills actions; no autoplay carousel.
- **Featured apps**: task-led copy and real screenshots in `index.html`; product limitations remain visible.
- **All work**: loaded live from the GitHub API in the browser (`app.js`). Every public, non-fork, non-archived repo appears automatically; repos with GitHub Pages or a homepage are marked **Live app**. Add nicer titles, Thai copy or a screenshot for a repo in `CURATED` in `app.js`. The list switches to the compact index view once it has more than 12 items.

Plain HTML/CSS/JS, no build step. Preview locally with `python -m http.server`.

## Skills

Six experimental public previews are listed on the website, with source, examples and ZIP downloads. See [the skills overview](skills/README.md), [evaluation methodology](skills/EVALUATION.md) and [version-scoped evidence](skills/evidence.json). The section uses static HTML and native details/summary; no dependency or build step was added.

The files under `skills/` and the included ZIP packages are licensed under [MIT](skills/LICENSE). This grant does not relicense the rest of the website or linked third-party works. Raw private reports and histories are outside this repository.

## Presentation and verification

The homepage explains each product through its use case, example and next action. Skill downloads remain visible without opening evaluation details. Starter prompts can be copied after installing the corresponding skill in a supported agent; copying does not invoke AI or send data. Clipboard denial leaves selectable text and a readable fallback message. Native details, downloads and content remain usable without JavaScript.

Marketing copy does not change the published skill packages, MIT or evaluation records. No adoption, conversion, reliability or time-saving figures are claimed. There is no new analytics or account service.

Run `node tests/copy-prompts.mjs` to check clipboard success, denial and recovery using only Node's standard library.
