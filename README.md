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

## Current publication status — 2026-11-23

- Website: Astro 5, hosted at https://gpldroid.github.io/edubooks/.
- Repository: https://github.com/gpldroid/edubooks.
- The six independent editions (Book 01 EN/FR/ES and Book 02 EN/FR/ES) are configured as free website publications in PR #43.
- The GitHub Pages build generates all six full PDFs from the authoritative Markdown manuscripts, creates a separate five-page sample for each edition, verifies tagged-PDF metadata, embedded fonts, extractable text, unit headings and minimum page counts, and calculates SHA-256 checksums. Astro then verifies that every catalogue PDF path exists before generating the site.
- The six current catalogue covers are owner-authorized for website use and PDF embedding. The cover artwork now identifies each edition as a free PDF edition; legacy Gumroad-format covers remain excluded.
- Book 01 contains 10 units per language; Book 02 contains 12 units per language. Existing answer-key reports document first-pass checks and corrections: Book 01 French Unit 3; Book 02 French Unit 10 and Spanish Unit 9.
- The owner will supply the human editorial-review and accessibility-certification statements separately. The site and PDF metadata do not claim that these human certifications have already been completed. Tagged PDF metadata is a technical property, not proof of PDF/UA conformance or screen-reader usability.
- PR #43 must be merged and its GitHub Pages deployment must succeed before the six editions are considered live. Do not link review artifacts from GitHub Actions as public files.

## Latest release audit and evidence

- AI-assisted review: [docs/editorial/ai-assisted-six-edition-review-2026-11-22.md](docs/editorial/ai-assisted-six-edition-review-2026-11-22.md)
- Six rebuilt internal PDFs, page counts, font evidence and SHA-256: [docs/editorial/six-edition-pdf-rebuild-report-2026-11-22.md](docs/editorial/six-edition-pdf-rebuild-report-2026-11-22.md)
- Rights and licences: [docs/RIGHTS-AND-LICENSE-REGISTER.md](docs/RIGHTS-AND-LICENSE-REGISTER.md)
- Asset audit: [docs/editorial/asset-rights-audit-2026-11-22.md](docs/editorial/asset-rights-audit-2026-11-22.md)
- Release checklist: [docs/EDITORIAL-RELEASE-CHECKLIST.md](docs/EDITORIAL-RELEASE-CHECKLIST.md)
- Remaining work: [docs/REMAINING-WORK-REGISTER.md](docs/REMAINING-WORK-REGISTER.md)
- PDF design/accessibility requirements: [docs/production/BOOK-PDF-DESIGN-SYSTEM.md](docs/production/BOOK-PDF-DESIGN-SYSTEM.md)
- Experimental tagged-PDF route and limitations: [docs/production/EXPERIMENTAL-TAGGED-PDF-ROUTE.md](docs/production/EXPERIMENTAL-TAGGED-PDF-ROUTE.md)
- Six A4 tagged-PDF build report and release blockers: [docs/editorial/experimental-tagged-six-edition-build-2026-11-22.md](docs/editorial/experimental-tagged-six-edition-build-2026-11-22.md)


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

## Production checks and owner-led review statements

For each of the six editions, separately:
- The owner will add the human editorial-review statement after completing their review of each edition.
- The owner will add the accessibility-certification statement after completing their accessibility review.
- Reconcile every closed exercise with its answer key; provide rubrics/model answers for open tasks.
- Clear rights and attribution for all text, images, fonts and assets.
- Inspect every PDF page, including page breaks, contents, bookmarks, links, fonts and page numbering.
- Technical build checks confirm tagged-PDF metadata, embedded fonts, extractable text and stable output checksums; they do not certify PDF/UA or screen-reader accessibility.
- Produce final full PDF and a clearly marked preview PDF.
- Record reviewer names/roles, dates, source commit, build run, filenames and SHA-256 checksums.
- Human-review and accessibility statements are owner-supplied follow-up information; they are not fabricated by CI.

Technical CI success is not editorial approval. An internal review PDF is not a final public PDF.

## Repository structure

```text
edubooks/
├── .github/workflows/       # Astro deployment and PDF production/validation
├── .github/scripts/         # shared six-edition PDF and preview generator
├── content/books/           # authoritative EN/FR/ES manuscripts
├── docs/
│   ├── PROJECT-HANDOVER.md
│   ├── REMAINING-WORK-REGISTER.md
│   ├── EDITORIAL-RELEASE-CHECKLIST.md
│   ├── SITE-ONLY-PUBLISHING-MODEL.md
│   ├── editorial/            # audits and edition-specific review records
│   └── production/           # manuscript and PDF design system
├── public/books/             # generated full PDFs included in the Pages build
├── public/previews/          # generated five-page PDF samples
├── public/images/            # cover artwork
├── src/data/catalog.ts       # six independent free editions with preview/download paths
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
