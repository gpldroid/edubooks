# EduBooks — Project Handover and Continuation Guide

Last updated: 2026-11-22  
Repository: https://github.com/gpldroid/edubooks  
Website: https://gpldroid.github.io/edubooks/  
Store: https://edupdf.gumroad.com

## 1. Read this first

The project is not commercially launched. The six language-specific Gumroad products are unpublished drafts only. No approved final PDF editions are attached. The next developer/editor must preserve that state.

GitHub changes merged to `main`:
- [PR #8 — footer store link, six SVG cover masters, README and handover updates](https://github.com/gpldroid/edubooks/pull/8).
- [PR #7 — independent language-edition architecture, Book 01 EN/FR/ES draft manuscripts, Book 01 source inventory and Book 02 source audit](https://github.com/gpldroid/edubooks/pull/7).
- [PR #13 — mobile UI and PDF preview improvements](https://github.com/gpldroid/edubooks/pull/13).
- The footer now points to `https://edupdf.gumroad.com`.
- Astro build validation passed on PR #8 before its documentation-only follow-up commits. Re-run the site build/deploy workflow after the merged commits.

## 1A. Current pull-request and review state (2026-11-22)

- PR #13 is merged (mobile UI/PDF preview).
- PR #12 is closed without merge; its four-page A1 sample preview failed only because the workflow required at least five pages.
- PR #14 is the replacement draft. It changes the minimum to four pages and adds a fix-branch push trigger. The exact Pandoc/XeLaTeX build passed locally: A4, four pages, 638 extracted words and all required text checks. Astro validation passed; the dedicated GitHub Actions artifact upload remains unconfirmed. The preview contains Arabic support text and is a legacy internal sample, not one of the six approved editions.
- PR #15 is a draft repairing the corrupted Book 01 EN/FR/ES outline formatting and French/Spanish boilerplate. It does not complete the books.
- PR #9 is a draft with three Book 02 manuscripts and three successful CI PDF builds. It is stacked on PR #1.
- PR #4 is a successful legacy trilingual Book 01 PDF build, not a set of independent editions.
- PR #1 is the draft integrated trilingual Book 02 source used as PR #9's base.
- PR #16 updates this README and handover with the verified status and initial PDF QA findings.
- No draft PR has been merged as part of this review. All Gumroad products remain unpublished, and no PDF is approved for attachment or sale.

## 2. Approved publishing model

Two titles, each as three separate, monolingual learner books:
1. Book 01 — Language Foundations: English, French, Spanish.
2. Book 02 — Essential Vocabulary: English, French, Spanish.

Each edition needs its own title/front matter, explanations, examples, exercises, answer key, glossary and back matter in its target language. Cross-language comparison activities must be rewritten as appropriate target-language exercises. Do not use automatic block splitting as the final editorial method.

The architecture and migration policy are in `docs/editorial/independent-language-editions.md`. Book 01 has three outline-stage manuscripts at `content/books/01-language-foundations/{en,fr,es}/manuscript.md`. Their current main-branch files were found to have every character split onto its own line; PR #15 repairs that formatting and localizes French/Spanish metadata and boilerplate. Even after that repair, these remain outlines and need full lesson authoring. The original multilingual manuscript remains preserved. Book 02 has a 1,238-line trilingual source on PR #1 (`feat/book-02-essential-vocabulary`) and three independent first-draft manuscripts on PR #9 (`work/book-02-independent-editions`). PR #9 is stacked on PR #1's branch and should not be merged independently without reconciling that dependency. See `docs/editorial/book-02/source-audit.md` and PR #9 for the migration record.

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
- Book 01 A1 review-only sample preview (PR #14): `.github/workflows/english-starter-a1-preview.yml`.
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
- The independent EN/FR/ES files on `main` are outline-stage drafts, not complete books. A source-format defect split their body into single-character lines; PR #15 repairs this and localizes French/Spanish front matter and status text.
- The current Book 01 PDF workflow still builds the legacy trilingual source. PR #4 produced a 28-page A4 review candidate with embedded fonts, but it is not three independent editions.
- PR #15 must pass review before merge. After that, author all missing lessons, exercises, assessment material and answer keys before designing separate PDF workflows.
- Existing editorial report: `docs/book-01-editorial-review.md`. No language, pedagogical, rights or accessibility sign-off is complete.

### Book 02 — Essential Vocabulary
- PR #1 preserves the original integrated trilingual source and its legacy PDF workflow. It is still a draft.
- PR #9 creates three separate EN/FR/ES working manuscripts, each with 12 units, localized practice, answer checks, an integrated project, final review test, answer key and glossary.
- The PR #9 matrix CI passed for all three languages and generated review PDFs (EN 13 pages, FR 14 pages, ES 14 pages). Initial visual sampling found readable layouts, localized headings and embedded DejaVu Sans fonts, with no blank pages in the inspected samples. The Spanish editorial note continues onto a mostly empty final page; refine pagination. Full page-by-page proof, language editing, pedagogy, answer-key reconciliation and rights review remain incomplete.
- PR #9 is based on PR #1's branch; preserve this dependency and do not merge out of order.

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

## 7. Immediate next actions

1. Convert the six SVG cover masters to PNG/JPEG, upload each to its matching Gumroad draft and verify the product pages.
2. Resolve the pricing conflict: the selected policy was `same` (uniform price), while six different amounts were supplied and are currently configured. Confirm one common EUR price or explicitly retain the six amounts.
3. Review and merge PR #15 only after confirming the reconstructed Book 01 markdown reads correctly; then author complete EN/FR/ES lessons, exercises and answer keys.
4. Run the dedicated A1 preview workflow on PR #14 and verify the four-page PDF artifact before considering that fix complete.
5. Review PR #9's three Book 02 manuscripts and PDFs in full; obtain qualified English, French and Spanish review, verify every answer key and resolve its PR #1 base dependency.
6. Create separate Book 01 PDF workflows only after the three manuscripts are complete; do not treat PR #4's legacy trilingual PDF as a standalone edition.
7. Complete full PDF proof, accessibility and rights checks for all six editions.
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
