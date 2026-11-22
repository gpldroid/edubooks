# EduBooks — Asset rights audit (2026-11-22)

**Branch:** `release/final-six-editions-rights-audit`  
**Base:** `main` at `7fe0e7f9d37e4bf222ab6f58b25fc76f29ff71fc`  
**Decision:** Asset inspection started; no asset is approved for final publication solely by this technical inspection.

## Scope inspected

- Six catalogue covers in `public/covers/` (Book 01 EN/FR/ES and Book 02 EN/FR/ES).
- Six legacy-format SVG cover files in `public/images/gumroad-covers/`.
- PDF design system and shared XeLaTeX preamble.
- Book 01 and Book 02 PDF workflows.
- Six current learner-facing manuscripts (EN/FR/ES for each book).
- CSS typography declarations and the public asset tree.

## Findings

| Asset class | Repository evidence | Rights finding | Release status |
|---|---|---|---|
| Six current catalogue covers | Self-contained SVG source; vector shapes, gradients and text; no linked raster image or external resource found in inspected cover | Owner explicitly confirmed in this conversation on 2026-11-22 that they own the rights to use and distribute all six files on the website and embed them in the PDFs. This is an owner declaration; the six paths and permitted uses are now recorded below. | **Owner-confirmed; itemized record captured** |
| Six legacy Gumroad-format covers | Self-contained SVG files under `public/images/gumroad-covers/`; not part of the website-only release flow | These are legacy sales-oriented assets. Their creator/source and licence evidence are not recorded. Do not reuse or publish as part of this release without separate clearance. | **Exclude from release** |
| PDF fonts | Workflows install TeX Live font packages and pass `DejaVu Sans` as the PDF main font; QA confirms embedding in internal candidates | No font binary is committed. Exact installed package/version and corresponding DejaVu licence notice have not yet been captured in the release evidence. Embedding success is not a licence audit. | **Hold pending package/licence evidence** |
| SVG text font fallback | SVG files declare `Arial,sans-serif`; no font file is embedded or bundled | This is a font-family fallback declaration, not evidence of a distributed Arial font file. Confirm no separately supplied font asset is added before release. | **No bundled font identified** |
| Website CSS typography | CSS declares a system stack including DM Sans and Inter fallbacks; no local font binary was found in the public/source asset inventory | The inspected CSS declaration alone does not establish that a third-party font binary is distributed. Confirm no externally hosted font import or runtime font fetch is introduced elsewhere before final sign-off. | **Source review required** |
| Manuscript text and excerpts | Six independent manuscripts inspected for explicit URLs and source/attribution references; no external source URL or citation marker was found by the initial scan | This scan is not a full similarity/plagiarism review and cannot rule out unattributed paraphrase, quotations, trademarked examples or third-party material. The owner's text-rights declaration is recorded separately. | **Human source review required** |
| Icons and illustrations | No separate icon/font/image package or external illustration file was found in the scoped asset tree; cover SVGs are vector artwork | Absence of external files does not prove authorship of every inline vector or any content embedded elsewhere. | **Hold pending owner confirmation** |

## Concrete release controls

1. Keep all six catalogue entries as `draft`.
2. Do not copy internal PDF workflow artifacts into `public/books/` or `public/previews/`.
3. Do not restore historical PDFs or reuse the legacy Gumroad cover files.
4. Before release, record for each current cover: creator/rights holder, creation source/date, owner confirmation or licence, and permission for website display, PDF embedding and promotional preview.
5. Capture the exact DejaVu font package/version installed by CI and archive its licence/copyright notice with the release evidence.
6. Confirm whether any third-party font is fetched at runtime; if so, record its provider and licence or remove it.
7. Complete human review of manuscript excerpts, quotations, examples, named entities and any third-party source material.
8. Record reviewer, date, evidence and decision in the rights register; do not mark an item cleared on the basis of file presence or build success.

## What this audit does not certify

This is a repository/source inspection, not legal advice, a copyright ownership determination, a plagiarism report, a native-language proofread, a pedagogical approval, or an accessibility certification. No final publication permission is inferred from this audit.

## Owner confirmation recorded — 2026-11-22

The owner confirmed that they hold the rights to use and distribute the six current SVG covers under `public/covers/` on the EduBooks website and to embed them in the six PDF editions. This confirmation covers these exact six project cover files and these stated uses:

- `public/covers/language-foundations-en.svg`
- `public/covers/language-foundations-fr.svg`
- `public/covers/language-foundations-es.svg`
- `public/covers/essential-vocabulary-en.svg`
- `public/covers/essential-vocabulary-fr.svg`
- `public/covers/essential-vocabulary-es.svg`

The legacy files under `public/images/gumroad-covers/` remain excluded from this website release unless separately cleared.

## Remaining rights checks

- Complete itemized review of any third-party text, quotations, examples, icons or visual elements in the manuscripts and final PDF layouts. Owner's blanket declaration for the texts/materials is recorded in the rights register, but any third-party material must still have its source and permitted-use evidence checked.
- Capture the exact DejaVu font package/version installed by CI and archive its licence/copyright notice.
- Confirm whether any third-party font is fetched at runtime; if so, record its provider and licence or remove it.
