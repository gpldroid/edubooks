# EduBooks — Project Handover and Continuation Guide

Last updated: 2026-11-21  
Repository: https://github.com/gpldroid/edubooks  
Website: https://gpldroid.github.io/edubooks/  
Store: https://edupdf.gumroad.com

## 1. Read this first

The project is not commercially launched. The six language-specific Gumroad products are unpublished drafts only. No approved final PDF editions are attached. The next developer/editor must preserve that state.

GitHub changes merged to `main`:
- [PR #8 — footer store link, six SVG cover masters, README and handover updates](https://github.com/gpldroid/edubooks/pull/8).
- [PR #7 — independent language-edition architecture, Book 01 EN/FR/ES draft manuscripts, Book 01 source inventory and Book 02 source audit](https://github.com/gpldroid/edubooks/pull/7).
- The footer now points to `https://edupdf.gumroad.com`.
- Astro build validation passed on PR #8 before its documentation-only follow-up commits. Re-run the site build/deploy workflow after the merged commits.

## 2. Approved publishing model

Two titles, each as three separate, monolingual learner books:
1. Book 01 — Language Foundations: English, French, Spanish.
2. Book 02 — Essential Vocabulary: English, French, Spanish.

Each edition needs its own title/front matter, explanations, examples, exercises, answer key, glossary and back matter in its target language. Cross-language comparison activities must be rewritten as appropriate target-language exercises. Do not use automatic block splitting as the final editorial method.

The architecture and migration policy are in `docs/editorial/independent-language-editions.md`. Book 01 has draft manuscripts at `content/books/01-language-foundations/{en,fr,es}/manuscript.md` and a migration inventory at `docs/editorial/book-01/source-inventory.md`. The original multilingual manuscript remains preserved. Book 02 has a source audit at `docs/editorial/book-02/source-audit.md`; its three separate manuscripts still need to be authored.

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
- PDF build: `.github/workflows/book-01-pdf.yml`.
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
- Legacy source: `content/books/01-language-foundations/manuscript.md`.
- It contains mixed English, French and Spanish content.
- It is not yet three complete, independently reviewed editions.
- Preserve source and perform a content inventory before extraction/re-authoring.
- Existing editorial report: `docs/book-01-editorial-review.md`.
- PDF workflow produces a review candidate only; it does not approve publication.

### Book 02 — Essential Vocabulary
- Audit the manuscript and current PR/source branch before claiming completeness.
- Build English, French and Spanish editions independently.
- Keep exercises and answer keys aligned after localization.

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
3. Continue Book 01 EN/FR/ES manuscripts, filling all missing units, exercises, answer keys and end matter; complete qualified language and pedagogical reviews.
4. Author Book 02 EN/FR/ES manuscripts from the source audit and verify each vocabulary entry, example, exercise and answer key.
5. Add per-edition PDF workflows/build configuration and generate six review candidates.
6. Proofread and approve all six editions; complete rights, accessibility and commercial checks.
7. Update website catalogue and attach approved PDFs to the matching Gumroad drafts.
8. Publish only after explicit release authorization.

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
