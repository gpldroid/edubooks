## Current verified status — 2026-11-22 (supersedes older status notes below)

PR #25 and PR #26 are merged to `main`. PR #26 corrected the French Book 01 Unit 3 answer key and its regenerated French PDF was checked in run [#45035163849](https://github.com/gpldroid/edubooks/actions/runs/45035163849): 11 A4 pages, searchable text, embedded DejaVu Sans fonts, and the corrected answer appears in the PDF. First-pass answer-key cross-checks are documented for Book 01 (ten units per language) and Book 02 (twelve units per language). Two Book 02 prompt/answer alignment fixes (French Unit 10 and Spanish Unit 9) and a safety change to the Book 01 PDF workflow are in PR #27.

Important workflow safety event: merging PR #26 triggered the legacy `publish-book-01-pdfs.yml` workflow, which rebuilt and committed PDFs to `public/books/`. The previous public PDF blobs were restored in commit `20d1c51572e224a75397982ab4933e694a8fb9c7`. Those earlier public files pre-existed this event and are not approved final editions. PR #27 changes the workflow to read-only internal artifact builds; no Gumroad product was published. See `docs/editorial/book-01/pdf-proof-2026-11-22.md`, `docs/editorial/book-01/answer-key-reconciliation-2026-11-22.md`, and `docs/editorial/book-02/answer-key-crosscheck-2026-11-22.md`.

All editions still require qualified language and pedagogical review, rights review, accessibility proof and full-resolution visual inspection. No edition is approved for sale.

PR #22 is merged. Its Astro validation passed, and the Book 01 PDF publishing workflow completed successfully:

- Run [#44996350390](https://github.com/gpldroid/edubooks/actions/runs/44996350390): success.
- Bot commit [838acdc](https://github.com/gpldroid/edubooks/commit/838acdc46bbdb1523cbb99c7b27038e78f85ef8a) added three PDFs under `public/books/`: EN (79,833 bytes), FR (84,973 bytes), ES (80,334 bytes).
- Pages run [#44996350403](https://github.com/gpldroid/edubooks/actions/runs/44996350403): build and deploy succeeded for commit `38dd982`, which predates the PDF bot commit. Do not assume those PDFs are present in the currently deployed Pages artifact. Trigger and verify a deployment from a commit containing the PDFs.

The catalog in `src/data/catalog.ts` is currently empty. `public/previews/` does not exist. Six SVG cover masters exist under `public/images/gumroad-covers/`; they are source artwork, not confirmed final production covers. The three PDF files are generated build outputs, not editorially approved editions. No language, pedagogy, full-page visual, accessibility or rights sign-off is recorded. Do not mark these books as published and do not attach them to Gumroad.

Preview pages must remain information-only (description and table of contents). The dedicated download page has a ten-second countdown. Typography refinements are scoped to inner pages; homepage styles must remain unchanged. Gumroad and PayPal integration/publication remain deferred by owner instruction.

# EduBooks — Project Handover and Continuation Guide

Last updated: 2026-11-22  
Repository: https://github.com/gpldroid/edubooks  
Website: https://gpldroid.github.io/edubooks/  
Store: https://edupdf.gumroad.com

## 1. Read this first

The project is not commercially launched. The six language-specific Gumroad products are unpublished drafts only. No approved final PDF editions are attached. The next developer/editor must preserve that state. Selling remains explicitly deferred until the six editions pass all release gates and the owner authorizes release.

GitHub changes merged to `main`:
- [PR #8 — footer store link, six SVG cover masters, README and handover updates](https://github.com/gpldroid/edubooks/pull/8).
- [PR #7 — independent language-edition architecture, Book 01 EN/FR/ES draft manuscripts, Book 01 source inventory and Book 02 source audit](https://github.com/gpldroid/edubooks/pull/7).
- [PR #13 — mobile UI and PDF preview improvements](https://github.com/gpldroid/edubooks/pull/13).
- The footer now points to `https://edupdf.gumroad.com`.
- PR #17 and PR #18 have now also been merged after successful CI and artifact verification; see the authoritative status below.

## 1A. Current pull-request and review state (2026-11-22)

- PR #17 is merged: three independent Book 02 EN/FR/ES manuscripts, language matrix PDF workflow and layout safeguards. Run #44986040328 passed all three jobs and uploaded three review-candidate PDFs.
- PR #18 is merged: four-page English Starter A1 internal preview workflow. Run #44986069717 passed and uploaded its review artifact. This is a legacy internal sample, not one of the six editions.
- PR #19 is merged: first-draft Book 01 EN/FR/ES content across all ten units and the independent PDF matrix workflow are on `main`. Run #45034306841 passed all three language jobs. PR #26 later corrected the French Unit 3 key and the updated PDF was verified in run #45035163849. First-pass answer-key cross-checks are documented; qualified language and pedagogical review, rights, accessibility and full-page visual proof remain open.
- PR #15, #16, #1 and #4 are merged as documented in the README. PR #17 and #14 were superseded/closed; their clean replacements are #17 and #18.
- Astro validation and Book 01 legacy PDF workflow also passed in the PR #17 CI cycle.
- PR #26 is merged; PR #27 is the active review branch for Book 02 prompt corrections and converting the Book 01 PDF workflow to internal-only artifacts.
- Technical CI success does not constitute editorial, pedagogical, visual, rights or accessibility approval. No final PDFs are approved, no PDF is attached to Gumroad, and all six products remain unpublished.

## 2. Approved publishing model

Two titles, each as three separate, monolingual learner books:
1. Book 01 — Language Foundations: English, French, Spanish.
2. Book 02 — Essential Vocabulary: English, French, Spanish.

Each edition needs its own title/front matter, explanations, examples, exercises, answer key, glossary and back matter in its target language. Cross-language comparison activities must be rewritten as appropriate target-language exercises. Do not use automatic block splitting as the final editorial method.

The architecture and migration policy are in `docs/editorial/independent-language-editions.md`. Book 01 has three complete first-draft manuscripts at `content/books/01-language-foundations/{en,fr,es}/manuscript.md`, covering ten units each with localized explanations, examples, exercises, communicative tasks and answer guidance. PR #19 and its matrix workflow are merged; qualified review and release gates remain outstanding. The original multilingual manuscript remains preserved. Book 02 has a 1,238-line trilingual source on PR #1 (`feat/book-02-essential-vocabulary`) and three independent first-draft manuscripts now merged to `main` by PR #17. PR #17 also adds the matrix PDF workflow and layout safeguards; the original trilingual source remains preserved. See `docs/editorial/book-02/source-audit.md` and PR #9 for the migration record.

## 3. Gumroad store state

Store URL: https://edupdf.gumroad.com

Six unpublished product drafts:
| Book | Language | Price | Product URL |
|---|---|---:|---|
| 01 — Language Foundations | English | €5 | https://edupdf.gumroad.com/l/cawqiv |
| 01 — Language Foundations | French | €7 | https://edupdf.gumroad.com/l/liyoos |
| 01 — Language Foundations | Spanish | €5 | https://edupdf.gumroad.com/l/buayfx |
| 02 — Essential Vocabulary | English | €7 | https://edupdf.gumroad.com/l/pbeti |
| 02 — Essential Vocabulary | French | €5 | https://edupdf.gumroad.com/l/gtjaok |
| 02 — Essential Vocabulary | Spanish | €7 | https://edupdf.gumroad.com/l/ukzunh |

All six were verified with `published: false`. Product descriptions, summaries, Education category, tags and localized receipt messages were updated. A legacy draft named `EduBooks` also exists at https://edupdf.gumroad.com/l/bglxwl; leave it untouched pending review.

Important pricing ambiguity: the instruction said `same` (uniform pricing) while also providing six different amounts. The drafts were created with the six distinct values above. Confirm the intended pricing before publication; do not silently normalize the prices.

Six SVG cover masters are stored in `public/images/gumroad-covers/`. Gumroad's cover endpoint rejected SVG format. Convert each master to PNG/JPEG and upload via Gumroad product editor (or a verified image-upload route). Do not claim the covers are attached until the Gumroad product page shows them.

No book PDF has been attached. The `add_file` operation must only receive the approved final PDF for its matching language edition. Never attach a draft, sample, placeholder or review-candidate PDF.

Detailed store procedure: `docs/STORE-OPERATIONS.md`.

## 4. Website and technical architecture

- Astro 5 static site.
- GitHub Pages project-site base: `/edubooks`.
- Site origin: `https://gpldroid.github.io`.
- Public URL: `https://gpldroid.github.io/edubooks/`.
- Catalogue: `src/data/catalog.ts`.
- Shared layout/footer: `src/layouts/BaseLayout.astro`.
- Pages: `src/pages/`.
- Deployment: `.github/workflows/deploy.yml`.
- Legacy Book 01 source PDF build: `.github/workflows/book-01-pdf.yml`.
- Book 02 independent edition matrix build (PR #9): `.github/workflows/book-02-independent-editions.yml`.
- Book 01 A1 review-only sample preview (PR #18): `.github/workflows/english-starter-a1-preview.yml`.
- Book sources: `content/books/`.
- Production design files: `docs/production/`.

Requirements: Node.js 22+ (CI uses Node.js 24).

```bash
npm install
npm run dev
npm run build
npm run preview
```

Pages must use GitHub Actions as the deployment source. Do not add secrets to repository files.

## 5. Book production status

### Book 01 — Language Foundations
- Legacy source: `content/books/01-language-foundations/manuscript.md`; it contains mixed English, French and Spanish content.
- The independent EN/FR/ES files on `main` are complete first drafts, not approved final books. PR #19 is merged; answer-key reconciliation and independent editorial/pedagogical review remain outstanding.
- The current Book 01 PDF workflow still builds the legacy trilingual source. PR #4 produced a 28-page A4 review candidate with embedded fonts, but it is not three independent editions.
- PR #15 is merged; the manuscripts remain incomplete. After that, author all missing lessons, exercises, assessment material and answer keys before designing separate PDF workflows.
- Existing editorial report: `docs/book-01-editorial-review.md`. No language, pedagogical, rights or accessibility sign-off is complete.

### Book 02 — Essential Vocabulary
- PR #1 preserves the original integrated trilingual source and its legacy PDF workflow. It is still a draft.
- PR #9 creates three separate EN/FR/ES working manuscripts, each with 12 units, localized practice, answer checks, an integrated project, final review test, answer key and glossary.
- The PR #17 matrix CI passed for all three languages and generated review PDFs (EN 13 pages, FR 14 pages, ES 14 pages). Initial visual sampling found readable layouts, localized headings and embedded DejaVu Sans fonts, with no blank pages in the inspected samples. The Spanish editorial note continues onto a mostly empty final page; refine pagination. Full page-by-page proof, language editing, pedagogy, answer-key reconciliation and rights review remain incomplete.
- PR #17 is merged; the original trilingual source remains preserved by PR #1.

## 5A. Remaining work register

Use docs/REMAINING-WORK-REGISTER.md as the prioritized checklist for all unfinished work. Book 01 has complete first-draft manuscripts and technically validated PDF review candidates; Book 02 remains three technical review candidates. Full-page visual proof is deliberately editable and pending. No edition is approved for sale.

## 6. Release gates — each edition independently

1. Complete standalone manuscript and front/back matter.
2. Target-language editorial review by a qualified reviewer.
3. Pedagogical review against the approved learning outcomes.
4. Exercise/answer-key reconciliation.
5. Rights, permissions and attribution review.
6. PDF build and full visual/text/accessibility proof.
7. Final cover, author, edition, licence, price and refund policy approval.
8. Matching Gumroad draft has the correct language description, cover, price and final PDF.
9. Test checkout/delivery using an appropriate private/test process.
10. Explicit release authorization before changing `published` to true.

See `docs/EDITORIAL-RELEASE-CHECKLIST.md`.

## Book 02 — independent editions integration (2026-11-22)\n\nThe original trilingual source has been preserved on `main` (PR #1). Three separate first-draft manuscripts and the matrix PDF workflow are merged. Run #44974894348 passed all three jobs and uploaded review candidates. The first answer-key cross-check in PR #27 found two prompt/answer alignment issues, now corrected in the French Unit 10 and Spanish Unit 9 manuscripts. A known layout issue remains: the Spanish editorial note continues onto a mostly empty final page. Full-page visual proof is still required.\n\n## 7. Immediate next actions

1. Convert the six SVG cover masters to PNG/JPEG, upload each to its matching Gumroad draft and verify the product pages.
2. Resolve the pricing conflict: the selected policy was `same` (uniform price), while six different amounts were supplied and are currently configured. Confirm one common EUR price or explicitly retain the six amounts.
3. Book 01 first-draft lessons are complete and its first answer-key reconciliation is recorded. Obtain qualified independent language and pedagogical review, then complete rights, accessibility and full-page PDF proof.
4. Rebuild PR #14's A1 preview fix on a clean branch and confirm the dedicated PDF artifact; it is a legacy internal sample, not a catalogue edition.
5. Complete CI for PR #27, verify the internal-only Book 01 PDF workflow and the two Book 02 prompt corrections, then continue Book 02 editorial and visual review.
6. Confirm all EN/FR/ES matrix jobs and review artifacts on the replacement PR. Keep the full-page visual proof editable for a later pass; correct the known Spanish final-page spill before final export.
7. Obtain qualified English, French and Spanish editorial/pedagogical review, reconcile every answer key, and complete rights/accessibility checks for all six editions.
8. Update catalogue and attach approved PDFs to matching Gumroad drafts only after explicit owner approval; publish only after a separate explicit release authorization.

## 8. Safety and continuity

- Keep all six Gumroad products unpublished during production.
- Never publish placeholder descriptions, draft artwork or review PDFs as finished products.
- Never store tokens, buyer data, bank details or identity information in Git.
- Use small commits and verify CI after each structural change.
- When resuming in a new conversation, provide this handover, README and repository URL.

## 9. Key links

- Repository: https://github.com/gpldroid/edubooks
- Website: https://gpldroid.github.io/edubooks/
- Gumroad: https://edupdf.gumroad.com
- GitHub Actions: https://github.com/gpldroid/edubooks/actions
- PR #8: https://github.com/gpldroid/edubooks/pull/8
- PR #7: https://github.com/gpldroid/edubooks/pull/7
- Series outline: https://github.com/gpldroid/edubooks/blob/main/docs/series-01-detailed-contents.md
- Book 01 source: https://github.com/gpldroid/edubooks/blob/main/content/books/01-language-foundations/manuscript.md
