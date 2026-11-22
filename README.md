# EduBooks

**Learn. Practice. Grow.**  
An independent multilingual digital educational publishing project by Imad Limrani.

EduBooks is a **free, website-only PDF library**. Readers will be able to open a book's PDF preview in the browser and download the PDF directly from the EduBooks website. There will be no paid products, checkout, subscriptions, payment buttons, or external store delivery.

## Publishing model — current owner decision

- **Distribution:** EduBooks website only.
- **Reader actions:** Preview PDF in the browser and download PDF.
- **Price:** Free.
- **Languages:** English, French and Spanish. Arabic is outside the scope of the website and this initial series.
- **Editions:** Every book is published as three complete, independent monolingual editions, not as one multilingual book.
- **Hosting:** GitHub Pages. Cloudflare remains deferred.
- **No commerce:** Gumroad and PayPal are not part of the product or release workflow. Existing seller drafts are historical account state only; do not edit, attach files to, publish, or use them.

## Current publication status — 2026-11-22

- Website: Astro 5, hosted at https://gpldroid.github.io/edubooks/.
- Repository: https://github.com/gpldroid/edubooks.
- PR #32 and PR #33 established the six draft catalogue entries, rights register and internal PDF review pipeline. PR #36 added per-edition PDF QA evidence and a modest Book 02 pagination refinement; it is merged in commit `1481cfa77540f9426ed9ee973810a73ac1099b67`.
- The public catalogue in `src/data/catalog.ts` contains six separate draft entries: Book 01 EN/FR/ES and Book 02 EN/FR/ES. None is marked published.
- `public/books/` and `public/previews/` remain absent; no public PDF downloads or samples are exposed.
- Latest internal review builds: [Book 01 workflow #45078048226](https://github.com/gpldroid/edubooks/actions/runs/45078048226), [Book 02 workflow #45078048251](https://github.com/gpldroid/edubooks/actions/runs/45078048251). Both generated three language PDFs and five-page internal samples; QA reports confirm embedded fonts and report `Tagged: no`.
- Astro validation and responsive browser tests passed in [workflow #45078048273](https://github.com/gpldroid/edubooks/actions/runs/45078048273).
- These PDFs remain internal review candidates only. They are not final public editions, and no GitHub Actions artifact is linked from the site.
- No edition is approved for public release. Qualified language and pedagogical reviews, itemized asset-rights evidence, accessibility remediation/testing, final visual proof and edition-specific owner authorization remain mandatory.
## The first collection

| Book | English | French | Spanish | Draft scope |
|---|---|---|---|---|
| 01 — Language Foundations | 10 units | 10 units | 10 units | Beginner foundations |
| 02 — Essential Vocabulary | 12 units | 12 units | 12 units | Everyday vocabulary |

The six manuscripts are independent language editions. Each edition must include localized instructions, examples, exercises, answer guidance, glossary and supporting matter in its own target language.

## Public book experience

Each approved edition will have:
1. A book information page with description, language, level, cover and table of contents.
2. A **Preview PDF** action that opens the approved preview/sample PDF in the browser.
3. A **Download PDF** action that downloads the approved full PDF directly from this website.
4. Clear edition metadata and an accessible, searchable PDF.

Public assets will use stable paths under `public/previews/` and `public/books/`. The catalogue must reference only files that exist and have passed review. A build check must fail if a published entry points to a missing PDF or cover. Do not expose GitHub Actions review artifacts as public download links.

## Quality gates before website publication

For each of the six editions, separately:
- Complete qualified language review in the target language.
- Complete pedagogical review and verify level claims.
- Reconcile every closed exercise with its answer key; provide rubrics/model answers for open tasks.
- Clear rights and attribution for all text, images, fonts and assets.
- Inspect every PDF page, including page breaks, contents, bookmarks, links, fonts and page numbering.
- Review PDF accessibility, reading order, headings, contrast and selectable text.
- Produce final full PDF and a clearly marked preview PDF.
- Record reviewer names/roles, dates, source commit, build run, filenames and SHA-256 checksums.
- Obtain explicit owner approval to publish that edition on the website.

Technical CI success is not editorial approval. An internal review PDF is not a final public PDF.

## Repository structure

```text
edubooks/
├── .github/workflows/       # Astro deployment and internal PDF review builds
├── content/books/           # authoritative EN/FR/ES manuscripts
├── docs/
│   ├── PROJECT-HANDOVER.md
│   ├── REMAINING-WORK-REGISTER.md
│   ├── EDITORIAL-RELEASE-CHECKLIST.md
│   ├── SITE-ONLY-PUBLISHING-MODEL.md
│   ├── editorial/            # audits and edition-specific review records
│   └── production/           # manuscript and PDF design system
├── public/books/             # approved full downloadable PDFs only
├── public/previews/          # approved sample/preview PDFs
├── public/images/            # cover artwork
├── src/data/catalog.ts       # public catalogue; currently empty
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

Build output: `dist/`. Pull requests run Astro/TypeScript diagnostics, regression tests, production build and responsive browser tests where configured.

## GitHub Pages

- Repository: `gpldroid/edubooks`
- Site: https://gpldroid.github.io/edubooks/
- Astro project-site base: `/edubooks`
- Pages source: GitHub Actions

Verify **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Continuation guide

Read in this order:
1. [Site-only publishing model](docs/SITE-ONLY-PUBLISHING-MODEL.md)
2. [Project handover](docs/PROJECT-HANDOVER.md)
3. [Remaining-work register](docs/REMAINING-WORK-REGISTER.md)
4. [Editorial release checklist](docs/EDITORIAL-RELEASE-CHECKLIST.md)
5. [Independent language-edition architecture](docs/editorial/independent-language-editions.md)
6. [PDF design system](docs/production/BOOK-PDF-DESIGN-SYSTEM.md)

## Security and policy

- Keep API keys, access tokens, private account data and buyer data out of Git.
- Do not add checkout, pricing, paid downloads, payment buttons or store links.
- Do not claim official CEFR certification or endorsement.
- Preserve the original source manuscripts.
- Publish only approved, verified PDF files from this repository.

## Ownership

EduBooks — an independent educational publishing project by Imad Limrani.
