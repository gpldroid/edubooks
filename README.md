# EduBooks

**Learn. Practice. Grow.**  
An independent multilingual digital educational publishing project by Imad Limrani.

EduBooks develops standalone educational books in **English, French and Spanish**. Each language edition is intended to be a complete, independent book—not one multilingual manuscript divided into language tabs. Arabic is outside the scope of this website and initial series.

## Current project status — 2026-11-21

- Website: Astro 5, hosted on GitHub Pages.
- Primary store: [EduBooks on Gumroad](https://edupdf.gumroad.com).
- Footer store link: merged to `main`; it points to `https://edupdf.gumroad.com`.
- Six Gumroad product drafts exist, localized descriptions and metadata have been added, and every product remains unpublished.
- Six original SVG cover designs are included in `public/images/gumroad-covers/`. Gumroad's cover uploader rejected SVG; convert them to PNG/JPEG and upload them to the six matching product drafts. Cover attachment is not yet verified.
- No final PDF files are attached to Gumroad. Do not attach review candidates.
- The approved six-edition architecture and migration source audits are merged to `main` in [docs/editorial/](docs/editorial/). Book 01 now has three language-specific manuscript drafts; Book 02 has a source audit. These are editorial drafts, not approved sale editions.
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

## Book production status

### Book 01 — Language Foundations

- Preserved multilingual source: `content/books/01-language-foundations/manuscript.md`.
- Independent editorial drafts: `content/books/01-language-foundations/en/manuscript.md`, `fr/manuscript.md`, and `es/manuscript.md`.
- Source inventory and review requirements: `docs/editorial/book-01/source-inventory.md`.
- The three manuscripts are drafts requiring substantial editorial review and completion; they are not approved sale editions.

### Book 02 — Essential Vocabulary

- Source audit: `docs/editorial/book-02/source-audit.md`.
- The current integrated trilingual draft must be authored/adapted into `content/books/02-essential-vocabulary/{en,fr,es}/manuscript.md`.
- No independent Book 02 manuscripts have been approved or built yet.

## PDF production

The current PDF workflow is `.github/workflows/book-01-pdf.yml`. Review-candidate artifacts are temporary Actions artifacts (90-day retention), not permanent sale files. Inspect the full PDF proof, embedded fonts, text extraction, page breaks, tables, links, accents, contents and accessibility. Do not upload a review candidate to Gumroad.

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
