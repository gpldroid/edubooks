# EduBooks — Independent language editions production plan

**Status:** Approved architecture; migration in progress  
**Decision:** Each title is published as three separate monolingual learner books: English, French and Spanish.  
**Scope:** Book 01 — Language Foundations; Book 02 — Essential Vocabulary.  
**Release rule:** All six editions remain unpublished and unavailable for purchase until their own editorial, pedagogical, rights, PDF and accessibility gates pass.

## 1. Required publication outputs

| Book | English edition | French edition | Spanish edition |
|---|---|---|---|
| 01 — Language Foundations | language-foundations-en | fondements-des-langues-fr | fundamentos-del-idioma-es |
| 02 — Essential Vocabulary | essential-vocabulary-en | vocabulaire-essentiel-fr | vocabulario-esencial-es |

Each edition is a complete standalone book. Its learner-facing prose, instructions, examples, exercises, answer key, glossary and front/back matter must be in its target language. Shared pedagogical concepts and learning outcomes may be aligned, but the text must be naturally authored or professionally adapted for that language rather than mechanically translated.

## 2. Repository structure

Target structure:

```text
content/books/
  01-language-foundations/
    source-multilingual/                 # preserved source; migration reference only
    en/manuscript.md
    fr/manuscript.md
    es/manuscript.md
  02-essential-vocabulary/
    en/manuscript.md
    fr/manuscript.md
    es/manuscript.md
docs/editorial/
  independent-language-editions.md
  book-01/
    en-review.md
    fr-review.md
    es-review.md
  book-02/
    en-review.md
    fr-review.md
    es-review.md
```

The existing Book 01 multilingual manuscript must be preserved as the migration source until all three editions have been reconciled and approved. Do not delete or overwrite it during extraction.

## 3. Migration rules

1. Inventory every heading, paragraph, table, exercise, answer, rubric, glossary entry and appendix in the source manuscript.
2. Assign each source segment to English, French, Spanish, shared non-linguistic material, or editorial decision required.
3. Split parallel material into the correct language edition. Rebuild mixed-language tables as monolingual tables with translated labels and instructions.
4. Rewrite cross-language exercises that currently ask learners to compare English, French and Spanish. Replace them with target-language practice appropriate to that edition; preserve the learning objective, not the multilingual wording.
5. Remove instructions that tell a reader to switch to another language or compare three versions.
6. Review all examples for idiomatic usage, register, regional consistency, spelling, accents and punctuation.
7. Create a complete language-specific answer key. Never copy an answer key without checking that it matches the revised exercise.
8. Keep CEFR references cautious and consistent: learning targets only, not certification or endorsement claims.
9. Preserve privacy-aware guidance and check rights/licences for all text, images, fonts and other assets.
10. Record reviewer, date, scope, findings and sign-off separately for every edition.

## 4. Editorial acceptance gates — each edition independently

- [ ] Complete standalone title, subtitle, copyright/edition and publication notes.
- [ ] All planned units and appendices present.
- [ ] No learner-facing content in either of the other two languages, except clearly identified proper names or language examples required by the lesson.
- [ ] Instructions and examples are idiomatic and consistent in the target language.
- [ ] Exercises, scoring guidance and answer key reconcile exactly.
- [ ] Independent qualified language review completed.
- [ ] Pedagogical review completed against the approved learning outcomes.
- [ ] Rights and attribution review completed.
- [ ] PDF proof checked for text extraction, fonts, links, contents, page breaks, headers, page numbers and accessibility.
- [ ] Final editorial approval recorded.

## 5. Production and catalogue policy

Build six PDFs independently from six manuscript inputs. Use explicit locale-specific metadata, title pages, keywords and output filenames. CI must fail if a manuscript is missing, contains unresolved editorial placeholders, fails minimum content checks, or contains unexpected foreign-language instructional sections.

Do not add any of the six editions to the public catalogue, enable checkout, publish Gumroad products, or expose downloadable sale files before all relevant release gates pass. Draft and review artifacts are not sale-ready products.

## 6. Current source assessment

- Book 01 currently exists as one integrated English/French/Spanish manuscript. Its unit headings, explanations, tables, exercises and answer keys contain mixed-language material. It cannot safely be split by simply copying blocks under language headings; several sections require editorial rewriting and exercise redesign.
- Book 02's manuscript is not present on main at the time this plan was prepared; its open draft PR must be reviewed and migrated to the same six-edition architecture before merge.
- Existing multilingual manuscripts and PDF artifacts are review sources only. They are not evidence that six independent editions exist.

## 7. Implementation sequence

1. Approve and preserve this architecture and migration manifest.
2. Complete the Book 01 source inventory and create the three independent manuscript files.
3. Reconcile all ten units, projects, answer keys and appendices in each language.
4. Build and review three independent Book 01 PDFs.
5. Audit Book 02 source and migrate it into three independent editions using the same controls.
6. Build and review three independent Book 02 PDFs.
7. Update the website catalogue only after all six release decisions are recorded.
8. Create six separate Gumroad product drafts only after editorial approval; publish only with explicit release authorization.

**No edition is considered complete merely because a file exists or a PDF build passes.**