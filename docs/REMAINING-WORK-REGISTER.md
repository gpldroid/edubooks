# EduBooks — Remaining work register

**Updated:** 2026-11-22  
**Publication model:** Free website-only library; in-browser PDF preview and direct PDF download. No sales, checkout, Gumroad or PayPal.

Technical CI, editorial approval and public release are separate states.

## P0 — Website-only publication architecture
- [x] Align public privacy, terms, FAQ and contact copy with the free website-only model.
- [ ] Confirm there are no public Gumroad or PayPal links, checkout controls or paid-download flows.
- [x] Register all six existing language editions as review-only catalogue entries with cover assets and disabled PDF actions.
- [ ] Convert an edition to `published` only after all release gates and owner approval.
- [ ] Validate both preview and full-download paths for every published catalogue record.
- [ ] Ensure preview opens in-browser and download serves the full PDF from EduBooks, respecting `/edubooks`.
- [ ] Verify preview and download on desktop and mobile after Pages deployment.
- [ ] Keep internal review artifacts outside `public/`; never link GitHub Actions artifacts publicly.
- [x] Remove three unapproved legacy Book 01 PDFs from deployable public assets.

## P1 — Book 01: Language Foundations (EN / FR / ES)
- [x] Complete first-draft manuscripts across ten units in each language.
- [x] Complete first-pass exercise/answer-key reconciliation; see `docs/editorial/book-01/answer-key-reconciliation-2026-11-22.md`.
- [x] Correct French Unit 3 answer key and regenerate its internal review PDF.
- [ ] Qualified English, French and Spanish language review.
- [ ] Pedagogical review: level, progression, instructions, exercise validity and assessment.
- [ ] Rights and attribution review.
- [ ] Full-page visual proof for all three PDFs.
- [ ] Accessibility and tagged-PDF/reading-order assessment.
- [ ] Produce approved final full PDF and sample PDF for each language.

## P1 — Book 02: Essential Vocabulary (EN / FR / ES)
- [x] Complete first-draft manuscripts across twelve units in each language.
- [x] Complete first-pass exercise/answer-check crosswalk; see `docs/editorial/book-02/answer-key-crosscheck-2026-11-22.md`.
- [x] Correct French Unit 10 and Spanish Unit 9 prompt/answer alignment.
- [ ] Qualified English, French and Spanish language review.
- [ ] Pedagogical review: vocabulary selection, collocations, register, level and progression.
- [ ] Improve French PDF final-page whitespace through pagination/layout refinement.
- [ ] Inspect every page of all three PDFs.
- [ ] Rights and attribution review.
- [ ] Accessibility and tagged-PDF/reading-order assessment.
- [ ] Produce approved final full PDF and sample PDF for each language.

## P2 — Shared production and release gates
- [ ] Record qualified language reviewer, role and date for every edition.
- [ ] Record pedagogical reviewer, role and date for every edition.
- [ ] Verify rights and attribution for text, images, fonts and other assets.
- [ ] Verify searchable text, embedded fonts, links, bookmarks, page numbering and reading order.
- [ ] Inspect all pages at full resolution and on mobile-sized screens.
- [ ] Generate final full PDF and separate sample PDF; record filenames, page counts and SHA-256.
- [ ] Record source commit and successful build run.
- [ ] Complete `docs/EDITORIAL-RELEASE-CHECKLIST.md` for each edition.
- [ ] Obtain explicit owner approval before adding an edition to the public catalogue.

## P3 — Gradual website publication
- [ ] Add approved files under `public/books/` and `public/previews/`.
- [ ] Verify corresponding cover asset.
- [ ] Add only that approved edition to `src/data/catalog.ts`.
- [ ] Verify book information page, browser preview and direct download.
- [ ] Run `npm run check`, `npm test`, `npm run build` and responsive browser tests.
- [ ] Merge, deploy and verify public URLs.
- [ ] Record publication commit, deployment run, preview URL, download URL and date.

## Explicitly out of scope
- Gumroad product setup, prices, cover uploads, checkout, file attachments or publication.
- PayPal integration, payment links or parallel checkout.
- Paid access, subscriptions, donations or sales analytics.
- Republishing internal review artifacts as public PDFs.

Existing Gumroad drafts are historical external account state only. This repository work must not alter them.

## Current state
- PR #27 and PR #28 are merged; post-PR #27 Pages deployment and internal-only Book 01 PDF workflows succeeded.
- Book 01 and Book 02 have six independent working manuscripts in total.
- Book 02 matrix review artifacts passed automated technical validation; they are not final editions.
- Public catalogue lists six review-only edition records; no edition is approved or downloadable.
- Three historical, unapproved Book 01 PDFs have been removed from deployable public assets.
- No edition is currently approved for public distribution.

**Release principle:** publish each edition only after its language, pedagogy, rights, accessibility and visual proof are complete. Once approved, offer it free as browser preview plus direct PDF download.
