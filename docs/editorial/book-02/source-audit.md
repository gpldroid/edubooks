# Book 02 — Essential Vocabulary: source audit and edition status

**Status:** A complete trilingual working manuscript exists on draft PR #1. It is not merged to `main`, not split into three standalone language editions, and not approved for sale.

## Verified source

- Draft PR: https://github.com/gpldroid/edubooks/pull/1
- Branch: `feat/book-02-essential-vocabulary`
- Head commit: `d96a60a3c2d0aa06c4ab548c7798616b292438f7`
- Manuscript: `content/books/02-essential-vocabulary/manuscript.md` (PR branch only; 1,238 lines in the reviewed patch)
- Editorial report: `docs/book-02-editorial-review.md` (PR branch only)
- PDF workflow: `.github/workflows/book-02-pdf.yml` (PR branch only)
- Title page: `docs/production/book-02-titlepage.tex` (PR branch only)

The manuscript patch identifies itself as a first complete working manuscript and internal review candidate. It contains 12 units, vocabulary content in English, French and Spanish, language-comparison notes, guided practice, communicative tasks, a review test, answer key and appendices. This is meaningful source material; it is not yet three independent books.

## Unit inventory

| Unit | Source title | Required adaptation |
|---:|---|---|
| 1 | People, Family and Relationships | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 2 | Home and Everyday Objects | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 3 | Food and Meals | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 4 | Clothing and Shopping | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 5 | Daily Routines | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 6 | Town, Places and Directions | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 7 | Travel and Accommodation | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 8 | Work and Study | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 9 | The Body and Health | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 10 | Weather, Seasons and Leisure | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 11 | Feelings, Preferences and Opinions | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 12 | Build Your Vocabulary System | Rebuild examples, vocabulary presentation, exercises and answer key in target language |

## Required independent outputs

- `content/books/02-essential-vocabulary/en/manuscript.md`
- `content/books/02-essential-vocabulary/fr/manuscript.md`
- `content/books/02-essential-vocabulary/es/manuscript.md`

These files do not exist on `main` at the time of this audit. The source manuscript and production workflow are still in PR #1. Keep PR #1 open as a draft until the content and production changes have been reviewed. Do not merge it simply because a CI build passes.

## Editorial and production work still required

1. Review the complete trilingual manuscript against the approved Series 01 plan and editorial standards.
2. Check all vocabulary selections, definitions, collocations, register and regional variants.
3. Adapt and rewrite the content into three self-contained manuscripts. Avoid mechanical language-block splitting.
4. Rewrite all instructions, examples, exercises, review tests and answer explanations in the edition language.
5. Verify each exercise against its language-specific answer key.
6. Complete independent professional English, French and Spanish review.
7. Complete pedagogical, rights, accessibility and PDF proof reviews.
8. Generate and inspect separate locale-specific PDF review candidates.
9. Keep the matching Gumroad products unpublished until explicit release approval.

## CI evidence

For PR #1 head commit `d96a60a3c2d0aa06c4ab548c7798616b292438f7`, the recorded Astro build validation completed successfully (run #23). The Book 02 PDF workflow run #8 was cancelled; this is not a successful PDF build and does not establish manuscript or PDF approval.

## Release gate

- [ ] PR #1 manuscript reviewed and merged only when editorially accepted.
- [ ] Three standalone manuscripts complete.
- [ ] Independent professional language review per edition.
- [ ] Pedagogical and rights review per edition.
- [ ] Separate PDF proofs, text extraction and accessibility checks per edition.
- [ ] Explicit release approval.

**Conclusion:** source audit complete; writing/adaptation of the three independent editions is not complete. The trilingual manuscript is a working source and review candidate, not three finished books.
