# Experimental tagged-PDF production route

**Status:** Experimental; not an approved publication pipeline.

The existing Pandoc/XeLaTeX build produced searchable PDFs with embedded fonts but reported `Tagged: no`. This workflow tests a separate path: Pandoc converts each Markdown manuscript to DOCX using an A4 EduBooks reference template, inserts the matching owner-confirmed localized SVG cover, then LibreOffice exports a tagged PDF.

## Automated gates

For every Book 01/02 EN/FR/ES edition, the workflow:
- Builds a DOCX from the source manuscript with localized language metadata.
- Exports PDF using LibreOffice `UseTaggedPDF=true`.
- Requires Poppler to report `Tagged: yes`.
- Checks that detected fonts are embedded, text extraction is non-empty, page count is plausible, and a SHA-256 sidecar is produced.
- Uploads the resulting PDF and QA reports as internal GitHub Actions artifacts only.

## Important limitations

`Tagged: yes` confirms that the PDF declares tagged structure; it does not prove that the structure tree is semantically correct. This workflow does not yet validate PDF/UA, heading hierarchy, language spans, table semantics, alternate text, logical reading order, keyboard navigation or actual screen-reader behavior. DOCX conversion can also change the visual layout compared with the established XeLaTeX design.

Therefore:
- Do not copy these experimental PDFs to `public/books/` or `public/previews/`.
- Do not change any catalogue entry to `published`.
- Inspect every page visually and inspect the tag tree for each of the six editions.
- Run an independent PDF/UA/accessibility validator and record results.
- Complete qualified EN/FR/ES proofreading and pedagogical review, plus itemized third-party rights clearance.
- Obtain explicit owner approval for the exact final SHA-256 values.

If any edition fails the Tagged gate, treat the route as failed for that edition. Do not weaken or remove the gate to force a green build.
