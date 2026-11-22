# Editorial readiness review — 2026-11-22

**Scope:** Six independent manuscripts in the first EduBooks collection.  
**Distribution policy:** Free publication on the EduBooks website only, with an in-browser PDF sample and a direct full-PDF download.  
**Decision:** No edition is approved for public release by this review.

## Work completed in this pass

- Re-read the Book 01 EN/FR/ES manuscript structure and checked the exercise/answer-key examples in Units 7 and 9 against their prompts.
- Re-read the Book 02 EN/FR/ES editorial status sections and the existing source-audit and answer-key cross-check records.
- Confirmed the six manuscripts have independent target-language learner-facing content; Book 01 has ten units per language and Book 02 has twelve units per language.
- Verified that `src/data/catalog.ts` contains six separate draft entries: Book 01 EN/FR/ES and Book 02 EN/FR/ES. None is marked published.
- Verified that `public/books/` and `public/previews/` are absent on `main`; no public PDF downloads or samples are present.
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

## Current internal PDF proof — 2026-11-22

The independent build workflows completed successfully against source commit `5c2a8b3d01e640740bca08c13f8f9f67e295e707`:

- [Book 01 PDF review workflow](https://github.com/gpldroid/edubooks/actions/runs/45072796211) — all three language PDFs and all three five-page internal samples uploaded.
- [Book 02 PDF review workflow](https://github.com/gpldroid/edubooks/actions/runs/45072796209) — all three language PDFs and all three five-page internal samples uploaded.
- [Astro build validation](https://github.com/gpldroid/edubooks/actions/runs/45072796192) — successful.

| Edition | Pages | Extracted words | PDF size | SHA-256 |
|---|---:|---:|---:|---|
| Book 01 EN | 10 | 4,149 | 79,974 B | `1f18d1872219e82fc6633963eeacd26077530c7645daa53070a42ad06e9e6cfc` |
| Book 01 FR | 11 | 4,647 | 85,199 B | `b0999bc827db46e5a53c949f150f7fcb49d09fba616be0d566a97e980abe1ece` |
| Book 01 ES | 10 | 4,109 | 80,842 B | `e710f50439efa3503148c3067878167c37daf03ce9ed82401e791db6c26e0e6f` |
| Book 02 EN | 13 | 2,781 | 65,225 B | `f0614d341a9876c6a06c89453affaf9d6331ef4155956ef03f6116dde7eb9a5e` |
| Book 02 FR | 14 | 3,224 | 68,367 B | `c0787cc08df881d1996b570ce647c4000cb2e4eb3589da80b6ee8a3d99449348` |
| Book 02 ES | 13 | 2,735 | 65,982 B | `10b01016936c1acb0d0791b76f8935111aa9e68302b3f24439dbb2b49b41f4ca` |

Each internal sample contains exactly five pages. PDF text extraction and embedded-font checks passed. Visual contact-sheet review found no blank pages or obvious clipping in the inspected outputs. However, Book 01 French page 11 and Book 02 French page 14 retain substantial lower-page whitespace and should receive a final layout decision.

**Accessibility limitation:** all six candidates report `Tagged: no` in `pdfinfo`. They are not tagged PDFs, and no screen-reader reading-order or PDF/UA verification has been completed. Do not claim accessible-PDF or PDF/UA conformance.

The owner declaration is retained in the internal rights register, not inserted into learner-facing manuscript pages. All six PDFs and six samples remain workflow artifacts only; none has been copied into the public site.

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

No `public/books/` directory exists on the current `main` branch. Do not restore historical PDF artifacts from prior commits. Generate new review candidates from the current manuscripts and keep them as internal workflow artifacts until all release gates are satisfied.

## Current catalogue and publication status

- `src/data/catalog.ts` contains six draft entries and no published editions.
- No public sample PDFs or full PDFs are registered; `public/books/` and `public/previews/` do not exist on `main`.
- All six editions remain unpublished. Internal review artifacts from GitHub Actions must never be linked as public download URLs.

## Evidence to add before release

For each edition, add a signed review record containing reviewer role/name, date, findings and resolution; rights evidence; accessibility/visual proof; source commit; workflow run; final and sample PDF filenames, page counts and SHA-256; owner approval; and verified public preview/download URLs.

**Final decision:** This pass improved status accuracy and completed targeted consistency checks, but does not manufacture professional human sign-off. Keep all six editions unpublished until the mandatory release blockers above are evidenced.
