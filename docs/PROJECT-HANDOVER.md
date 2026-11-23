# EduBooks — Project handover

**Updated:** 2026-11-23  
**Repository:** https://github.com/gpldroid/edubooks  
**Website:** https://gpldroid.github.io/edubooks/  
**Public library:** https://gpldroid.github.io/edubooks/books/

## Current product decision

EduBooks is a free, website-only PDF library. Visitors can browse books, open a sample in a large same-page modal dialog and download the complete PDF directly from the website. The sample is loaded only after the visitor activates the preview control and is unloaded when the dialog closes. There are no paid products, sales, checkout, subscriptions, payment buttons or external store delivery. Gumroad and PayPal are not part of this project.

The supported website and publication languages are English, French and Spanish. Every title is issued as three independent monolingual editions.

## Published collection

| Title | English | French | Spanish |
|---|---|---|---|
| Language Foundations | 10 units | 10 units | 10 units |
| Essential Vocabulary | 12 units | 12 units | 12 units |

All six editions are registered in `src/data/catalog.ts`. Each has a public cover, a five-page sample PDF, a complete PDF and a detail page with language switching.

- [Language Foundations — EN](https://gpldroid.github.io/edubooks/books/language-foundations-en/)
- [Language Foundations — FR](https://gpldroid.github.io/edubooks/books/language-foundations-fr/)
- [Language Foundations — ES](https://gpldroid.github.io/edubooks/books/language-foundations-es/)
- [Essential Vocabulary — EN](https://gpldroid.github.io/edubooks/books/essential-vocabulary-en/)
- [Essential Vocabulary — FR](https://gpldroid.github.io/edubooks/books/essential-vocabulary-fr/)
- [Essential Vocabulary — ES](https://gpldroid.github.io/edubooks/books/essential-vocabulary-es/)

## Production architecture

- Astro 5 static website deployed through GitHub Pages.
- Project-site base path: `/edubooks`.
- The GitHub Actions production workflow builds the six PDFs from the authoritative Markdown manuscripts, creates separate five-page samples, runs technical PDF checks and stages the generated assets for the Pages site.
- The catalogue validates required metadata and public PDF paths.
- Book detail pages include an on-demand, browser-native PDF preview dialog, a separate full-book download action, a table of contents and links to the other language editions.
- The preview dialog is implemented in `src/components/books/BookPreview.astro` with native HTML `<dialog>`; its iframe source is assigned on user activation and cleared on close. It does not add a PDF.js runtime dependency.
- The site metadata includes canonical URLs, localized alternates, page descriptions, keyword metadata and structured website data.

## PDF preview regression checks

The regression tests assert that the sample is not loaded on initial page render, opens in the same-page dialog after a click, and is unloaded on close. The Playwright suite also checks the separate complete-book download link and fallback sample links.

## Editorial and accessibility status

The six editions are available as free website publications. Their manuscript front matter now states that publication status accurately. This does not mean that the publisher's human editorial, language, pedagogical or accessibility reviews are complete.

Automated production checks are not human editorial approval. The PDFs include tagged-PDF metadata, but that alone does not establish PDF/UA conformance, correct semantic reading order or screen-reader usability.

Do not add human reviewer names, dates, approvals or accessibility claims unless the publisher has supplied and confirmed them. Do not claim formal CEFR certification.

## Important source locations

- `content/books/01-language-foundations/{en,fr,es}/manuscript.md`
- `content/books/02-essential-vocabulary/{en,fr,es}/manuscript.md`
- `src/data/catalog.ts`
- `src/pages/index.astro`
- `src/pages/books/`
- `src/components/books/BookCard.astro`
- `src/components/books/BookPreview.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/site.css`
- `.github/workflows/`
- `.github/scripts/`
- `public/covers/`, `public/previews/`, `public/books/`

## Continuation priorities

1. Build a detailed content-enhancement plan for the existing two titles, unit by unit, preserving the independent English, French and Spanish editions.
2. Improve practical examples, dialogues, exercise variety, answer explanations and review activities; avoid unreviewed machine translation.
3. Reconcile every closed-answer exercise with its answer key and regenerate all affected PDFs and samples.
4. Complete and document the publisher's human editorial review for each language edition.
5. Complete the publisher's accessibility assessment and record its actual scope and findings.
6. Prepare the next title only after the first collection's content and review priorities are settled.
7. Verify the public library and PDF URLs after each production deployment.

## Security and publishing policy

- Keep API keys, access tokens and private account data out of Git.
- Do not restore old store integrations, sales copy or paid-download flows.
- Do not publish internal CI artifacts as public PDFs.
- Preserve source manuscripts and documented release evidence.
