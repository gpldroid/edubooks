# EduBooks — Project handover

**Updated:** 2026-11-22  
**Repository:** https://github.com/gpldroid/edubooks  
**Website:** https://gpldroid.github.io/edubooks/

## 1. Current owner decision

EduBooks is a **free PDF library distributed only through its website**. Readers preview PDFs in the browser and download complete PDFs directly from EduBooks. There will be no sales, paid downloads, checkout, subscriptions, Gumroad or PayPal integration.

Do not revive old store setup or pricing instructions. Existing Gumroad drafts are historical account state only; do not modify, attach files to or publish them.

The catalogue is intentionally empty. No edition is approved for public release yet. Three historical, unapproved Book 01 PDFs have been removed from the deployable `public/books/` directory. Do not restore or reuse them without a new documented review.

Read [the site-only publishing model](SITE-ONLY-PUBLISHING-MODEL.md) before changing publication code.

## 2. Collection architecture

The first collection contains two titles, each in three independent monolingual editions:

| Book | English | French | Spanish |
|---|---|---|---|
| 01 — Language Foundations | 10 units | 10 units | 10 units |
| 02 — Essential Vocabulary | 12 units | 12 units | 12 units |

Learning and explanation languages are English, French and Spanish. Arabic is outside the scope of the website and these books. Preserve the original source manuscripts; the six localized manuscripts are working drafts for their respective editions.

## 3. Technical state

- Astro 5 static site, deployed through GitHub Pages.
- Site base path: `/edubooks`.
- PR #27: Book 01 PDF workflow changed to read-only internal review artifacts; it no longer commits generated PDFs into `public/books/`.
- PR #28: post-merge verification report.
- Post-PR #27 deployment and internal workflow verification passed: [Pages run #45045145911](https://github.com/gpldroid/edubooks/actions/runs/45045145911), [Book 01 review run #45045145899](https://github.com/gpldroid/edubooks/actions/runs/45045145899), [internal-only legacy workflow run #45045145880](https://github.com/gpldroid/edubooks/actions/runs/45045145880).
- Book 02 EN/FR/ES review PDFs passed technical matrix checks in [run #45044583560](https://github.com/gpldroid/edubooks/actions/runs/45044583560).
- Public catalogue in `src/data/catalog.ts` is empty. Do not add entries until approved full PDF, sample PDF and cover exist and are verified.
- Existing Book 01 PDFs in `public/books/` are legacy public artifacts; no approval is recorded for their use.
- No approved final PDF or preview is registered in the catalogue.

## 4. Manuscript and PDF status

### Book 01 — Language Foundations
- Drafts: `content/books/01-language-foundations/{en,fr,es}/manuscript.md`.
- Ten units per edition.
- First-pass answer-key cross-check: `docs/editorial/book-01/answer-key-reconciliation-2026-11-22.md`.
- French Unit 3 answer key corrected in PR #26; regenerated French proof: `docs/editorial/book-01/pdf-proof-2026-11-22.md`.
- Qualified language/pedagogical review, rights, accessibility and full-page visual proof remain open.

### Book 02 — Essential Vocabulary
- Drafts: `content/books/02-essential-vocabulary/{en,fr,es}/manuscript.md`.
- Twelve units per edition, plus integrated project, final test, answer key and glossary.
- First-pass cross-check: `docs/editorial/book-02/answer-key-crosscheck-2026-11-22.md`.
- French Unit 10 and Spanish Unit 9 prompt/answer corrections merged in PR #27.
- French PDF last page has excessive whitespace; refine pagination without filler. Inspect every page in all three editions.
- Qualified language/pedagogical review, rights, accessibility and full-page visual proof remain open.

Review candidates from GitHub Actions are internal-only and must not be placed in `public/`.

## 5. Website publication workflow

For each edition independently:
1. Complete language and pedagogical review.
2. Complete rights, accessibility and full-page visual checks.
3. Build final complete PDF and separate sample/preview PDF.
4. Verify metadata, page count, text extraction, embedded fonts, links/bookmarks, file size and SHA-256.
5. Add approved files under `public/books/` and `public/previews/` through a reviewed pull request.
6. Add the matching cover and catalogue record only after all referenced files exist.
7. Provide **Preview PDF** (browser) and **Download PDF** (direct download) actions.
8. Merge after CI, deploy to Pages and verify both public URLs.
9. Record owner approval and deployment evidence.

Publish editions gradually; one approved edition need not wait for the other five.

## 6. Priority next work

1. Remove residual store/purchase language from public pages and metadata.
2. Finish editorial and pedagogical review of Book 01 EN/FR/ES and Book 02 EN/FR/ES.
3. Improve Book 02 French PDF pagination and conduct full-page proofs.
4. Prepare approved sample and full PDFs for each edition.
5. Populate the catalogue one approved edition at a time.

## 7. Development commands

```bash
npm ci
npm run dev
npm run check
npm test
npm run build
npm run preview
```

Use Node.js 22+ (CI uses Node.js 24). For responsive tests: `npx playwright install chromium`, then `npm run test:e2e`.

## 8. Policy and security

- No selling, paid downloads, store integration or payment processing.
- Keep secrets, access tokens and private account data out of Git.
- Do not claim official CEFR certification.
- Do not publish review candidates or unapproved legacy PDFs as final editions.
- Technical CI success does not replace qualified human review or owner release approval.
