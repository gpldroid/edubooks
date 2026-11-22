## Verified Book 01 production update — 2026-11-22

The latest production workflow has now built and committed three standalone PDF files to `public/books/`:

- `public/books/edubooks-book-01-en.pdf` (79,833 bytes)
- `public/books/edubooks-book-01-fr.pdf` (84,973 bytes)
- `public/books/edubooks-book-01-es.pdf` (80,334 bytes)

The publishing workflow run [#44996350390](https://github.com/gpldroid/edubooks/actions/runs/44996350390) completed successfully. Its bot commit is [838acdc](https://github.com/gpldroid/edubooks/commit/838acdc46bbdb1523cbb99c7b27038e78f85ef8a). This proves the files were generated and committed; it does not prove editorial approval, full-page visual review, accessibility compliance, or commercial readiness.

The Pages build/deploy run [#44996350403](https://github.com/gpldroid/edubooks/actions/runs/44996350403) also succeeded, but it built commit `38dd982`, immediately before the PDF bot commit. Therefore, the deployed Pages artifact is not yet confirmed to include the three PDFs. A subsequent main-branch deployment must be verified after the documentation/triggering commit is merged.

The current public catalogue remains intentionally empty (`books = []`). There is no `public/previews/` directory yet, and the current Book 01 covers are SVG masters under `public/images/gumroad-covers/`. Do not add published catalogue entries until valid preview assets, verified edition metadata and cover paths exist. Keep all editions out of published status until the editorial and visual gates pass. Gumroad and PayPal sales integration remain deferred; do not add checkout controls or publish products.

# EduBooks

**Learn. Practice. Grow.**  
An independent multilingual digital educational publishing project by Imad Limrani.

EduBooks develops standalone educational books in **English, French and Spanish**. Each language edition is intended to be a complete, independent book—not one multilingual manuscript divided into language tabs. Arabic is outside the scope of this website and initial series.

## Current project status — 2026-11-22

- Website: Astro 5, hosted on GitHub Pages.
- Primary store: [EduBooks on Gumroad](https://edupdf.gumroad.com).
- Footer store link: merged to `main`; it points to `https://edupdf.gumroad.com`.
- Six Gumroad product drafts exist, localized descriptions and metadata have been added, and every product remains unpublished.
- Six original SVG cover designs are included in `public/images/gumroad-covers/`. Gumroad's cover uploader rejected SVG; convert them to PNG/JPEG and upload them to the six matching product drafts. Cover attachment is not yet verified.
- No final PDF files are attached to Gumroad. Do not attach review candidates.
- The six-edition architecture and migration audits are merged to `main`. Book 01 has three language-specific outline drafts; their source formatting/localization repair was merged in [PR #15](https://github.com/gpldroid/edubooks/pull/15). They are not complete workbooks. Book 02 has three independent working manuscripts and three CI-generated PDF review candidates; the clean integration was merged in [PR #17](https://github.com/gpldroid/edubooks/pull/17), preserving the legacy source. None of these files is approved for sale.
- All six editions remain blocked from sale until their individual editorial and production gates pass.

## Approved publication matrix

| Book | English | French | Spanish |
|---|---|---|---|
| 01 — Language Foundations | €5 | €7 | €5 |
| 02 — Essential Vocabulary | €7 | €5 | €7 |

The amounts above are the current draft prices in Gumroad. The earlier instruction selected a uniform-pricing policy but also supplied six different amounts; the actual created product drafts use the six listed amounts. Confirm pricing policy before any release.

### Gumroad draft product links

| Edition | Draft product |
|---|---|
| Book 01 — English | [Open draft](https://edupdf.gumroad.com/l/cawqiv) |
| Book 01 — French | [Open draft](https://edupdf.gumroad.com/l/liyoos) |
| Book 01 — Spanish | [Open draft](https://edupdf.gumroad.com/l/buayfx) |
| Book 02 — English | [Open draft](https://edupdf.gumroad.com/l/pbeti) |
| Book 02 — French | [Open draft](https://edupdf.gumroad.com/l/gtjaok) |
| Book 02 — Spanish | [Open draft](https://edupdf.gumroad.com/l/ukzunh) |

A separate legacy draft named **EduBooks** also exists. Do not delete or publish it without reviewing its contents.

## Project decisions

- Brand: EduBooks.
- Learning languages: English, French and Spanish.
- Each book is delivered as three standalone monolingual editions.
- Hosting: GitHub Pages; Cloudflare is deferred.
- Primary checkout and protected digital delivery: Gumroad.
- PayPal is optional only after a verified product-specific payment link is configured and tested.
- No product is published until the release gates in `docs/EDITORIAL-RELEASE-CHECKLIST.md` pass.

## Technology

- Astro 5 static site generator.
- HTML, CSS and browser JavaScript.
- Multilingual interface with persisted language preference.
- Canonical URLs, Open Graph metadata, sitemap, robots.txt and custom 404.
- Typed catalogue and static book-detail templates.
- GitHub Actions build and GitHub Pages deployment.
- Pandoc + XeLaTeX PDF production pipeline.

## Repository map

```text
edubooks/
├── .github/workflows/       # site deployment and PDF production
├── content/books/           # authoritative book manuscripts
├── docs/
│   ├── PROJECT-HANDOVER.md
│   ├── EDITORIAL-RELEASE-CHECKLIST.md
│   ├── STORE-OPERATIONS.md
│   ├── series-01-detailed-contents.md
│   ├── book-01-editorial-review.md
│   ├── editorial/           # language-edition architecture (PR #7)
│   └── production/          # manuscript and PDF design system
├── public/images/gumroad-covers/ # six original SVG cover masters
├── src/data/catalog.ts
├── src/layouts/BaseLayout.astro
├── src/pages/
├── astro.config.mjs
└── package.json
```

## Local development

Requirements: Node.js 22+ (CI uses Node.js 24).

```bash
npm ci
npm run dev
npm run check
npm test
npm run build
npm run preview
```

Responsive browser tests (Chromium):

```bash
npx playwright install chromium
npm run test:e2e
```

Build output: `dist/`. Pull requests run Astro/TypeScript diagnostics, project regression tests, a production build, and responsive Playwright checks before review. See [the responsive UI and stability audit](docs/RESPONSIVE-UI-AUDIT.md).

## GitHub Pages

- Repository: `gpldroid/edubooks`
- Site: https://gpldroid.github.io/edubooks/
- Astro project-site base: `/edubooks`
- Pages source: GitHub Actions

Verify **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Current pull-request status — 2026-11-22

| PR | Status | Review result / dependency |
|---|---|---|
| [#13](https://github.com/gpldroid/edubooks/pull/13) | Merged | Mobile UI and PDF preview improvements. |
| [#12](https://github.com/gpldroid/edubooks/pull/12) | Closed, not merged | Preview PDF built, but validation incorrectly required at least five pages for a four-page sample extract. Superseded by PR #14. |
| [#18](https://github.com/gpldroid/edubooks/pull/18) | Merged | Restores the four-page A1 internal preview workflow; CI passed and review artifact uploaded. |
| [#15](https://github.com/gpldroid/edubooks/pull/15) | Merged | Repairs Book 01 outline formatting and localizes French/Spanish draft labels; manuscripts remain outlines. |
| [#17](https://github.com/gpldroid/edubooks/pull/17) | Merged | Adds independent Book 02 EN/FR/ES manuscripts and matrix PDF workflow; CI passed all three editions and uploaded review artifacts. |
| [#4](https://github.com/gpldroid/edubooks/pull/4) | Merged | Legacy Book 01 trilingual-source PDF workflow; not a set of independent editions. |
| [#1](https://github.com/gpldroid/edubooks/pull/1) | Merged | Preserves integrated trilingual Book 02 source for traceability. |
| [#16](https://github.com/gpldroid/edubooks/pull/16) | Merged | README and project handover update. |

PR #17 and PR #18 have been merged after all required CI jobs and artifact uploads succeeded. PR #9 and PR #14 were superseded by the clean-mainline replacements. PR #4 is not a substitute for the three standalone Book 01 editions.

## Book production status

### Book 01 — Language Foundations

- Preserved multilingual source: `content/books/01-language-foundations/manuscript.md`.
- Independent editorial drafts: `content/books/01-language-foundations/en/manuscript.md`, `fr/manuscript.md`, and `es/manuscript.md`.
- Source inventory and review requirements: `docs/editorial/book-01/source-inventory.md`.
- The three language-specific files are outline-stage drafts, not complete learner books. Their formatting/localization correction was merged in PR #15. They still need full explanations, examples, exercises, answer keys, target-language editing and pedagogical review.

### Book 02 — Essential Vocabulary

- Source audit: `docs/editorial/book-02/source-audit.md`.
- Three separate first-draft manuscripts now exist in `content/books/02-essential-vocabulary/{en,fr,es}/manuscript.md` on PR #9. CI successfully built EN, FR and ES PDF review candidates (13, 14 and 14 pages respectively); the PDFs are temporary review artifacts, not sale files.
- The manuscript structure includes 12 units, localized practice and answer checks, an integrated project, final test, answer key and glossary. These drafts still require qualified language and pedagogical review, answer-key verification, rights clearance and complete visual/accessibility proof.
- Initial PDF spot-check: title/contents and sampled lesson pages are readable; no blank pages or obvious font/overflow defects were seen in the inspected samples, and DejaVu Sans is embedded. The Spanish editorial note continues onto a mostly empty final page; refine pagination before final proof. This is a limited spot-check, not a full page-by-page sign-off.
- PR #9 is a stacked draft based on PR #1's preserved trilingual source branch. Keep both unmerged until the dependency and source-preservation plan is reviewed.

## PDF production

The Book 01 workflow `.github/workflows/book-01-pdf.yml` currently builds the preserved trilingual source, not three independent sale editions. PR #4 produced a 28-page A4 review candidate with embedded fonts; it is useful as a source/reference proof only and does not satisfy the standalone-edition requirement. PR #17 adds three independent Book 02 PDF builds; CI run #44986040328 passed EN/FR/ES manuscript checks, PDF builds, output validation and artifact uploads. The PDFs remain temporary review candidates, not approved books. PR #18 fixes the four-page A1 preview threshold; GitHub Actions run #44986069717 passed and uploaded the review artifact. This legacy preview contains Arabic support text and is not one of the approved six language editions. Full-page editorial and accessibility proof remains outstanding. Never upload a review candidate to Gumroad.

## Remaining work

See the [prioritized remaining-work register](docs/REMAINING-WORK-REGISTER.md) for the current technical, editorial, visual, accessibility and deferred commercial tasks.

## Continuation guide

Read these documents in order:
1. [Project handover](docs/PROJECT-HANDOVER.md)
2. [Independent language-edition architecture](docs/editorial/independent-language-editions.md)
3. [Editorial release checklist](docs/EDITORIAL-RELEASE-CHECKLIST.md)
4. [Gumroad store operations](docs/STORE-OPERATIONS.md)
5. [Series outline](docs/series-01-detailed-contents.md)

## Security and commercial policy

- Keep API keys, access tokens, seller identity documents, bank details and buyer data out of Git.
- Verify seller payout eligibility inside the seller account; country-level availability does not guarantee account approval.
- Confirm price, currency, licence, refund terms, file delivery and checkout before launch.
- Do not claim official CEFR certification or endorsement.
- Keep all six products unpublished until each edition independently passes editorial, pedagogical, rights, PDF and accessibility review.

## Ownership

EduBooks — an independent educational publishing project by Imad Limrani.
