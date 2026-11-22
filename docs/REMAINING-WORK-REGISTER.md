# EduBooks — Remaining work register

**Updated:** 2026-11-22 (AI-assisted review and release audit)  
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

## Latest AI-assisted release audit — 2026-11-22

- [x] Inspect all six EN/FR/ES manuscript files; confirm 10 Book 01 units and 12 Book 02 units per language.
- [x] Run structural scan for TODO/FIXME/placeholder markers and explicit external URLs; none were detected in the six manuscripts by this scan.
- [x] Record AI-assisted language and pedagogical first-pass findings in `docs/editorial/ai-assisted-six-edition-review-2026-11-22.md`.
- [x] Record owner confirmation for all six current catalogue SVG covers; legacy Gumroad covers remain excluded.
- [x] Update PDF workflows to install DejaVu Sans explicitly, archive its Debian copyright/licence notice and package version, and generate SHA-256 sidecars for full PDFs and samples.
- [ ] Inspect archived font package/version and licence evidence from both final six-language workflow runs; verify any external runtime font fetch is absent or licensed.
- [ ] Obtain qualified language and pedagogical reviewer sign-off for each edition; AI review is not a substitute.
- [ ] Complete itemized third-party source/quotation/asset clearance.
- [ ] Inspect every rendered PDF page at full resolution; current workflows still create technical QA artifacts, not AI visual sign-off.
- [ ] Implement semantic PDF tagging with correct document language, heading hierarchy, link annotations, reading order and alt text; validate with a PDF accessibility checker and screen reader. Existing XeLaTeX/Pandoc output reports `Tagged: no`; this is a hard release blocker.\n- [x] Evaluate the experimental LibreOffice tagged-PDF route in PR #40: all six EN/FR/ES matrix builds report `Tagged: yes`, A4 page size, embedded fonts and SHA-256. Evidence: `docs/editorial/experimental-tagged-six-edition-build-2026-11-22.md`.\n- [ ] Validate semantic tag-tree correctness, PDF/UA, reading order and screen-reader behavior; `Tagged: yes` alone is not conformance.
- [x] Rebuild all six internal review candidates; verify manuscript structure, searchable text and embedded fonts; record page counts, package version, source commit, workflow runs and SHA-256 in `docs/editorial/six-edition-pdf-rebuild-report-2026-11-22.md`.\n- [ ] Rebuild the six final publication PDFs after all language, pedagogical, visual and accessibility corrections; current hashes are review-candidate hashes only.
- [ ] Obtain owner approval for the exact six final PDF checksums.
- [ ] Only then publish six full PDFs and six previews, update catalogue status and deploy GitHub Pages.

AI-assisted review is a preliminary quality-control layer. It does not certify language quality, pedagogy, copyright, plagiarism status, PDF/UA or accessibility. Do not mark any unchecked item complete.

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

## Latest technical review — 2026-11-22

- [x] Add per-edition PDF QA reports to internal review artifacts (page count, extracted word count, embedded-font audit and tagged-PDF status).
- [x] Correct the Poppler `pdffonts` parser to inspect the actual embedded-font column.
- [x] Refine Book 02 heading reservation from 6/3 baselines to 4/2 to reduce unnecessary pagination gaps without removing heading/content grouping.
- [x] Rebuild all six EN/FR/ES internal PDF candidates and five-page samples after the refinement.
- [x] Confirm all detected fonts are embedded in the six latest candidates.
- [x] Record that all six candidates report `Tagged: no`; PDF tagging, semantic reading order and screen-reader validation remain open.
- [x] Pass Astro/TypeScript, regression, production build and responsive browser checks.
- [x] Merge PR #36 (commit `1481cfa77540f9426ed9ee973810a73ac1099b67`).

Latest evidence:
- Book 01 independent PDF review: https://github.com/gpldroid/edubooks/actions/runs/45078048226
- Book 02 independent PDF review: https://github.com/gpldroid/edubooks/actions/runs/45078048251
- Astro and responsive validation: https://github.com/gpldroid/edubooks/actions/runs/45078048273

The French Book 02 candidate remains 14 pages; its final page contains 264 extracted words. The pagination refinement reduces heading reservation but does not establish final visual approval. Inspect all pages at full resolution before release. Book 01 French remains 11 pages and also requires full-page visual sign-off.

**Release principle:** publish each edition only after its language, pedagogy, rights, accessibility and visual proof are complete. Once approved, offer it free as browser preview plus direct PDF download.
