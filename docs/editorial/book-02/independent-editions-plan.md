# Book 02 — Independent Edition Production Plan

**Working branch:** `work/book-02-independent-editions`  
**Parent source:** `feat/book-02-essential-vocabulary` at `27bc3d958cc4a7d48423bce5d1971d4569b787a8`  
**Status:** Production audit and migration plan — not a manuscript and not approved for release.

## 1. Verified source structure

The source manuscript contains 1,239 lines and 12 units:

1. People, Family and Relationships
2. Home and Everyday Objects
3. Food and Meals
4. Clothing and Shopping
5. Daily Routines
6. Town, Places and Directions
7. Travel and Accommodation
8. Work and Study
9. Health and Basic Needs
10. Weather and Leisure
11. Feelings, Preferences and Opinions
12. Build Your Vocabulary System

All 12 units contain Discover, Guided practice, Communicate and Self-check sections. Unit 12 uses a numbered instructional structure rather than the earlier unit's section headings. The source also contains a trilingual integrated project, review test, answer key, thematic reference, portfolio template and glossary.

The source includes parallel English/French/Spanish Discover examples and vocabulary tables. However, most instructions, grammar explanations, pronunciation notes, practice prompts, project directions, assessment rubric, review test and answer-key commentary are authored primarily in English. A simple table-column split would therefore leave substantial English-only learner-facing content in the French and Spanish editions.

## 2. Required independent edition structure

Create these separate deliverables only after the content has been adapted:

- `content/books/02-essential-vocabulary/en/manuscript.md`
- `content/books/02-essential-vocabulary/fr/manuscript.md`
- `content/books/02-essential-vocabulary/es/manuscript.md`

Each must be a complete monolingual learner book, not a translation column or excerpt. Each edition must include localized front matter, learning outcomes, all 12 units, target-language instructions and explanations, examples, exercises, communicative tasks, integrated project, assessment rubric, review test, answer key, glossary and back matter.

Cross-language comparison activities in the source must be rewritten as target-language learning activities. They must not be copied unchanged into a monolingual edition.

## 3. Migration rules

1. Preserve the original trilingual source unchanged as the audit/reference source.
2. Use the matching language column as vocabulary evidence, not as a finished target-language lesson.
3. Re-author every instruction and explanation in the target language.
4. Replace translation-across-three-languages questions with meaningful monolingual tasks.
5. Rebuild each answer key from its localized exercises; never carry over an answer unless the prompt and expected answer still match.
6. Resolve regional variants consistently and explain accepted alternatives in the target language.
7. Keep the A1–A2 target explicitly approximate; make no official CEFR certification claim.
8. Mark all generated work as draft until qualified reviewers complete independent review.

## 4. Release gates per edition

- [ ] Complete monolingual manuscript with all 12 units and front/back matter.
- [ ] Exercise-to-answer-key reconciliation.
- [ ] Qualified target-language editorial review.
- [ ] Qualified pedagogical and level-progression review.
- [ ] Rights, attribution and publication metadata review.
- [ ] Dedicated PDF build and text validation.
- [ ] Full PDF visual, pagination, font, bookmark and accessibility proof.
- [ ] Explicit release approval.

## 5. Current decision

Three separate first-draft manuscripts now exist, one per language. They are not yet approved editions. No reviewer sign-off is inferred from automated checks. The existing trilingual PDF is not a substitute for the three independent editions. Keep PR #9 in Draft state, do not merge to `main`, and keep all Gumroad products unpublished.


## 6. First independent manuscript drafts authored

Three separate monolingual working drafts have been created:

- `content/books/02-essential-vocabulary/en/manuscript.md`
- `content/books/02-essential-vocabulary/fr/manuscript.md`
- `content/books/02-essential-vocabulary/es/manuscript.md`

Each draft contains the same 12-topic progression, localized front matter, target-language instructions, vocabulary selection, language focus, guided practice, unit-level answer checks, communicative tasks, self-checks, an integrated portfolio project, a final review test, a final answer key, a vocabulary record and a glossary.

These are substantive first drafts, not certified translations and not final editorially approved books. The answer checks are aligned to the exercises included in each draft. Open tasks are assessed with stated criteria. Qualified language and pedagogical reviewers must still check idiomaticity, grammar, level, regional choices and answer validity.

## 7. Automated PDF pipeline

Added `.github/workflows/book-02-independent-editions.yml`. It runs a separate matrix job for EN, FR and ES; checks that each manuscript contains 12 unit headings and required project/test/answer-key/release sections; builds an individual XeLaTeX PDF; extracts text; checks page count and unit presence; and uploads each PDF as a review-candidate artifact.

A green workflow means the technical build and automated structural/language-section checks passed. It does not prove idiomaticity or answer correctness and does not replace human editorial approval.

## 8. Editorial alignment pass (2026-11-22)

The first audit found English headings, learner-facing checklists and trilingual final-review questions remaining in the French and Spanish drafts. These were rewritten into language-specific front matter, unit navigation, self-checks, assessment rubrics, final tests, answer keys, glossaries and release notes. The English final test was also made English-only. A final scan confirms 12 units and 12 unit answer-check sections per edition. Cross-language comparison remains only where it is itself the learning objective (the false-friend examples in Unit 12).

The PDF workflow was repaired after a malformed validation edit caused a workflow run to fail before creating jobs. A successful baseline run built all three PDFs and completed manuscript, PDF extraction, page-count and unit-presence checks. Visual inspection then identified three layout/localization defects in the candidates: the French and Spanish table of contents spilled onto the first unit page, the generated Contents label remained English, and unit headings used the English word “Unit”. The source and pipeline were corrected: localized unit labels (Unité/Unidad), localized Pandoc language metadata, a one-level TOC, a French plural-pronoun correction in Unit 4, and additional checks against untranslated front matter and TOC labels. A new run on the final commit is required before replacing the previous artifacts as current review candidates.


The legacy `.github/workflows/book-02-pdf.yml` workflow for the former combined trilingual manuscript has been retired on this branch. Only the independent-edition matrix workflow should produce Book 02 review candidates.

The final-review prompt/key checks were added after the French final test exposed two cloze wording issues; those prompts now match their answer-key completions. An incremental workflow-file edit then introduced malformed YAML and a run failed before creating jobs. The entire workflow was rewritten from a clean source, the legacy push trigger was removed to prevent duplicate matrix installations, and concurrency is now shared across the PR workflow. The current PR validation run is #44971077152; it has started the three edition jobs but is still installing the PDF toolchain. Do not call this run green until all three jobs and artifacts complete.