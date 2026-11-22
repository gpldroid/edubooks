# Experimental tagged PDF rebuild — six editions — 2026-11-22

**Workflow:** https://github.com/gpldroid/edubooks/actions/runs/45085658742  
**Source commit:** `4cfa9980a531afb5716dc76dcfac3c6df77888e0`  
**Production route:** Pandoc Markdown → DOCX with A4 reference template → owner-confirmed localized SVG cover → LibreOffice tagged-PDF export.  
**Status:** Internal experimental review artifacts only. Not approved for public distribution.

## Automated build results

All six matrix jobs succeeded. Every PDF:
- Reports `Tagged: yes` in Poppler `pdfinfo`.
- Uses A4 page dimensions.
- Has all detected fonts embedded according to `pdffonts`.
- Passed non-empty text extraction and minimum page-count checks.
- Has a SHA-256 sidecar.
- Includes its matching owner-confirmed localized SVG cover as page 1.

| Edition | Pages | Tagged | Paper | SHA-256 |
|---|---:|---|---|---|
| Book 01 EN | 12 | yes | A4 | `2ffedb8d41517450a9fecd000dec3d822f8f9f6822deed0dcfcb516df25915ce` |
| Book 01 FR | 13 | yes | A4 | `c142e4810e1ae8f848b938c14df7ab0bf8ddaee93f118558ce12b95a9cd99d2c` |
| Book 01 ES | 12 | yes | A4 | `f4b74b923620c55fa37c8e8d1a4f96dd65f51b9285bbafbaa50377c1315e7991` |
| Book 02 EN | 17 | yes | A4 | `58952724eaacd8c5d64134deae96d4971823fb4a9f2ec9dca2b14bc3f1c9ad95` |
| Book 02 FR | 17 | yes | A4 | `219a4a0e7c7b34bc5ac7f012be8c658c881a6b0ba4090d8191db06b045d69b7f` |
| Book 02 ES | 16 | yes | A4 | `24ce4db51ea4431f962edf113348168a1d71cab75532efe6145070f85973e42f` |

The Book 02 personal vocabulary record was changed from an over-wide multi-column table to printable record fields, and the section now starts on a fresh page. A rendered review of representative pages confirmed that the previous narrow-column wrapping was corrected.

## What `Tagged: yes` does and does not mean

This is a meaningful technical improvement over the previous XeLaTeX output, which reported `Tagged: no`. It confirms that a tagged structure is present, but it does **not** certify that the structure tree is semantically correct or that the document conforms to PDF/UA.

Still outstanding:
- Inspect the complete tag tree for correct heading/list/table/link semantics, language metadata and logical reading order.
- Run an independent PDF/UA validator and archive its report.
- Test keyboard navigation and perform manual screen-reader testing in EN, FR and ES.
- Complete qualified native-language editing and independent pedagogical review for all six editions.
- Complete itemized third-party source/quotation/asset clearance.
- Complete full-page visual review of every page in all six PDFs and correct any remaining pagination/layout defects.
- Replace or approve the current cover wording, which visibly says **“Prepared for review / Not approved for public distribution.”**
- The manuscripts themselves identify the editions as working drafts. They must remain drafts until the review gates and owner approval are complete.

## Publication boundary

- All PDFs are uploaded as GitHub Actions artifacts with 90-day retention.
- No PDF or sample is copied to `public/books/` or `public/previews/`.
- No catalogue record is changed to `published`.
- Do not use these hashes as final-publication checksums. Any content, design, tagging or accessibility correction requires a fresh build and new checksums.
- No public book download is enabled by this workflow.

## Related checks

- Tagged six-edition matrix: https://github.com/gpldroid/edubooks/actions/runs/45085658742
- Astro validation: https://github.com/gpldroid/edubooks/actions/runs/45085658748
- Book 01 legacy PDF workflow: https://github.com/gpldroid/edubooks/actions/runs/45085658706
- Book 02 legacy PDF workflow: https://github.com/gpldroid/edubooks/actions/runs/45085658784
