# Book 02 — Editorial Review and Production Report

**Title:** Essential Vocabulary — Build Your Everyday English, French and Spanish  
**Source:** `content/books/02-essential-vocabulary/manuscript.md`  
**Series:** EduBooks Multilingual Learning Series 01  
**Target:** A1–A2 approximate learning target; not official CEFR certification  
**Languages:** English, French and Spanish  
**Status:** Three independent first-draft manuscripts / technical PDF review candidates — not approved for sale.

## Editorial basis and project compliance

This book follows the established project decisions and production references:
- `docs/PROJECT-HANDOVER.md`
- `docs/series-01-detailed-contents.md`
- `docs/production/BOOK-MANUSCRIPT-TEMPLATE.md`
- `docs/production/BOOK-PDF-DESIGN-SYSTEM.md`
- `docs/production/latex-preamble.tex`
- Book 01 manuscript and `docs/book-01-editorial-review.md`

The three learning and explanation languages remain English, French and Spanish. Arabic is not introduced into this series. The manuscript avoids claims of official CEFR certification or endorsement. The PDF workflow reuses the shared preamble, A4 page size, DejaVu Sans and the established navy/teal design system.

## Planned scope

- 12 units matching the approved Series 01 outline.
- Context-first vocabulary, functional expressions, collocations and language comparison.
- Guided practice, communicative tasks and self-checks in each unit.
- Integrated vocabulary portfolio project.
- Review test and answer key.
- Trilingual thematic reference, personal vocabulary tracker and glossary.

## Internal editorial review checklist

- [x] Twelve unit structures drafted.
- [x] All three languages represented throughout.
- [x] Contextual examples and practical functions included.
- [x] Collocations, word families, cognates and false friends included.
- [x] Review test and answer key drafted.
- [x] Learning outcomes and self-checks included.
- [ ] Verify French nouns/articles, agreement, register and idiom.
- [ ] Verify Spanish gender/articles, regional alternatives, agreement and idiom.
- [ ] Verify English naturalness, collocation and consistency.
- [ ] Independently verify translations and model answers.
- [ ] Review vocabulary selection and level progression with a qualified language educator.
- [ ] Record external dictionaries/corpora/reference sources used in final review.
- [ ] Inspect complete PDF proof on desktop and mobile.
- [ ] Verify contents, bookmarks, page breaks, font embedding and selectable text.
- [ ] Confirm cover, author attribution, copyright, licence and edition metadata.

## PDF production troubleshooting

- The first PDF build failed before validation because the Book 02 title-page source contained doubled LaTeX command escapes (for example, `\\begin` rather than `\begin`).
- The title-page commands have been corrected to standard single-backslash LaTeX syntax.
- The PDF workflow has also been adjusted to avoid redundant automatic section numbering alongside the manuscript's unit labels.
- A successful replacement build and artifact inspection are still required; no PDF proof is signed off yet.

## Reviewer sign-off

| Language / area | Reviewer | Date | Status | Notes |
|---|---|---|---|---|
| English | Pending | Pending | Not reviewed | |
| French | Pending | Pending | Not reviewed | |
| Spanish | Pending | Pending | Not reviewed | |
| Pedagogical / level review | Pending | Pending | Not reviewed | |
| PDF proof / accessibility | Pending | Pending | Not reviewed | |
| Rights and publication metadata | Pending | Pending | Not reviewed | |

## Release decision

**Current decision: review candidate only — not approved for sale.**

Publication requires independent language review in all three languages, pedagogical review, correction of issues, final PDF proof inspection, rights clearance and approval of author attribution, edition and licence. Do not describe the book as certified or professionally proofread until the corresponding reviews are actually completed.

## Independent-edition migration audit (2026-11-22)

The source structure has now been checked programmatically: 1,239 lines, 12 units, and the expected Discover, Guided practice, Communicate and Self-check sections in all 12 units (Unit 12 uses a numbered instructional structure). The source includes trilingual vocabulary tables and examples, but most instructions, grammar explanations, pronunciation notes, practice prompts, project directions, review-test prompts and answer-key commentary are primarily in English.

**Consequence:** extracting table columns alone would not create independent French and Spanish learner books. The three editions require target-language re-authoring and localized exercise/answer-key alignment. A migration plan is maintained at `docs/editorial/book-02/independent-editions-plan.md` on the working branch `work/book-02-independent-editions`.

No language, pedagogical, rights or accessibility review is being marked complete by this automated source audit. PR #1 remains Draft; no merge or commercial release is authorized.


## Independent monolingual drafts authored (2026-11-22)

Created three separate first-draft manuscripts:
- `content/books/02-essential-vocabulary/en/manuscript.md`
- `content/books/02-essential-vocabulary/fr/manuscript.md`
- `content/books/02-essential-vocabulary/es/manuscript.md`

Each has 12 units, target-language instructions and practice, unit-level answer checks, a portfolio project, a final review test and a corresponding answer key. This is a substantive editorial draft, not a reviewer-approved edition. Human reviewers must verify naturalness, grammar, level progression, regional usage and every answer before release.

Added the matrix PDF workflow `.github/workflows/book-02-independent-editions.yml` to build and validate one PDF per language and upload each as a review candidate. CI validation is technical only and does not certify editorial quality.
