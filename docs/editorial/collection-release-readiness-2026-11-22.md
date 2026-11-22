# Editorial readiness review — 2026-11-22

**Scope:** Six independent manuscripts in the first EduBooks collection.  
**Distribution policy:** Free publication on the EduBooks website only, with an in-browser PDF sample and a direct full-PDF download.  
**Decision:** No edition is approved for public release by this review.

## Work completed in this pass

- Re-read the Book 01 EN/FR/ES manuscript structure and checked the exercise/answer-key examples in Units 7 and 9 against their prompts.
- Re-read the Book 02 EN/FR/ES editorial status sections and the existing source-audit and answer-key cross-check records.
- Confirmed the six manuscripts have independent target-language learner-facing content; Book 01 has ten units per language and Book 02 has twelve units per language.
- Confirmed the public catalogue is empty. The repository tree contains three legacy Book 01 PDFs under `public/books/`, but no approved sample PDFs under `public/previews/`.
- Updated the six manuscript release notices so they describe the actual website-only publication gate rather than the retired sales model.
- This branch changes manuscript source files and is intended to trigger the independent PDF review workflows. The resulting PDFs are internal review candidates only.

## Findings and current evidence

### Book 01 — Language Foundations

| Edition | Manuscript | First-pass answer reconciliation | Technical PDF evidence | Release decision |
|---|---|---|---|---|
| English | 10 units present | Recorded complete | Prior 10-page proof; fresh proof required after this branch | Not approved |
| French | 10 units present | Recorded complete; Unit 3 key correction documented | Prior corrected 11-page proof; fresh proof required | Not approved |
| Spanish | 10 units present | Recorded complete | Prior 10-page proof; fresh proof required | Not approved |

The recorded technical proof confirms selectable text and embedded DejaVu Sans fonts in the earlier candidate PDFs. It does not certify detailed proofreading, tagged-PDF structure, semantic reading order, screen-reader output, full-resolution typography, rights or pedagogy.

Targeted prompt/key examples reviewed in this pass:
- English Unit 7 and Unit 9 answer entries match the prompts and expected grammar.
- French Unit 7 question formation and Unit 9 negation examples align with the recorded answers.
- Spanish Unit 7 interrogatives and Unit 9 negative sentence align with the recorded answers.

These spot checks are not a substitute for a complete independent linguistic proofread of all units.

### Book 02 — Essential Vocabulary

| Edition | Manuscript | Existing answer cross-check | Known production issue | Release decision |
|---|---|---|---|---|
| English | 12 units present | Recorded first pass | Fresh PDF proof and full-page inspection required | Not approved |
| French | 12 units present | Recorded first pass; Unit 10 prompt corrected | Prior final-page whitespace/pagination concern | Not approved |
| Spanish | 12 units present | Recorded first pass; Unit 9 prompt corrected | Fresh PDF proof and full-page inspection required | Not approved |

The prior answer-key cross-check records the French Unit 10 weather-cloze correction and Spanish Unit 9 body-part prompt correction. The previous workflow notes also identify localized contents/unit heading defects that were corrected in source/pipeline; a fresh three-language build is still needed to verify the current output.

## Mandatory release blockers for every edition

1. **Independent language review:** a qualified reviewer must verify idiom, spelling, grammar, regional consistency, terminology and learner-facing clarity in the target language.
2. **Pedagogical review:** a language-teaching reviewer must assess level claims, progression, learning outcomes, task validity, assessment criteria and answer-key alternatives.
3. **Rights and attribution:** document permissions/licences for text, illustrations, fonts and all other assets.
4. **PDF proof:** inspect every page at reading resolution; verify no clipping, awkward breaks, widows/orphans, blank pages, missing glyphs or inconsistent typography.
5. **Accessibility:** verify document language, headings, reading order, links, contrast, tagging and screen-reader behaviour. Do not claim PDF/UA or WCAG conformance without evidence.
6. **Production files:** create a complete final PDF and a distinct 3–5-page sample PDF from the approved source. Record page counts, metadata, file sizes and SHA-256 checksums.
7. **Website assets:** confirm an approved cover, complete PDF under `public/books/` and sample under `public/previews/`.
8. **Owner release authorization:** record explicit approval for each language edition before adding it to `src/data/catalog.ts`.

## Legacy PDF handling

The three files currently under `public/books/` are legacy artifacts, not approved final editions. They must not be linked from the catalogue as final downloads until reviewed and replaced with newly approved output. Do not delete them as part of this review without a separate repository cleanup decision.

## Current catalogue and publication status

- `src/data/catalog.ts` remains intentionally empty.
- No approved sample PDFs are registered.
- No edition is marked as website-published.
- Existing review artifacts from GitHub Actions must remain internal and must never be linked as public download URLs.

## Evidence to add before release

For each edition, add a signed review record containing reviewer role/name, date, findings and resolution; rights evidence; accessibility/visual proof; source commit; workflow run; final and sample PDF filenames, page counts and SHA-256; owner approval; and verified public preview/download URLs.

**Final decision:** This pass improved status accuracy and completed targeted consistency checks, but does not manufacture professional human sign-off. Keep all six editions unpublished until the mandatory release blockers above are evidenced.
