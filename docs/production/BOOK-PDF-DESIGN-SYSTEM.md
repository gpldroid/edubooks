# EduBooks — Shared PDF Design System

## Purpose
A consistent print/digital-PDF system for all six standalone books in Multilingual Learning Series 01. The visual identity is shared; each book and language edition has localized front matter, examples, navigation labels and back matter.

## Edition architecture
- Six independent, monolingual editions: Book 01 EN/FR/ES and Book 02 EN/FR/ES.
- Do not place three-language explanations or language-comparison exercises inside a monolingual edition unless the learning objective explicitly requires a short, pedagogically justified comparison.
- Localize the title, subtitle, welcome, instructions, learning outcomes, unit names, answer key, glossary and publication note.
- Preserve natural target-language grammar, regional notes and register distinctions. Never rely on mechanical translation as final editing.

## Page and typography
- A4 portrait; margins approximately 18 mm.
- DejaVu Sans through XeLaTeX for broad Latin-script coverage, including French and Spanish diacritics.
- Clear hierarchy: title, numbered unit, section, subsection, body and caption.
- Body text target: 10–11 pt; readable line spacing and paragraph separation.
- Navy #17324D for primary headings; teal #168C88 for secondary headings; muted grey for running furniture.
- Tables use consistent alignment, restrained rules and repeatable column widths.
- Include a clickable table of contents, PDF bookmarks, hyperlinks and selectable/searchable text.
- Keep headings with opening content; avoid orphaned headings, clipped text, empty pages and excessive whitespace.
- Running header identifies EduBooks and the current section; centered page number in footer.

## Front matter and back matter
1. Localized minimalist title page.
2. Publication and learning note.
3. Localized table of contents.
4. Welcome, how to use the book and learning outcomes.
5. Main units.
6. Integrated project and assessment.
7. Answer key, appendices and glossary.
8. Copyright, edition metadata and source/licence notes.

## Content and assessment rules
- Every edition teaches and explains in its own target language.
- Examples and tasks must be natural for the stated level and audience.
- Mark regional variation and formal/informal register where relevant.
- Every closed-ended exercise must have a verified answer-key entry.
- Open-ended activities need model responses, acceptable alternatives or a rubric.
- Privacy-safe fictional information must be allowed for personal-profile activities.
- CEFR references describe approximate learning targets only; never imply official certification or endorsement.

## Technical QA gates
- Build each language edition independently.
- Verify page size, page count, font embedding, diacritics, punctuation, tables, links, bookmarks and page breaks.
- Confirm selectable/searchable text and extraction of all unit headings and answer-key sections.
- Inspect every page at full resolution and review the PDF on desktop and mobile-sized screens.
- Check semantic structure, reading order and tagged-PDF/screen-reader accessibility; do not claim accessibility compliance without evidence.
- Record output filename, source commit, workflow run and SHA-256 checksum.

## Release quality gates
- Qualified target-language editing and pedagogical review are recorded for each edition.
- Rights and attribution are cleared for all text, images, fonts and assets.
- Full-page visual proof and accessibility review are complete.
- Final metadata, cover, preview and release checklist are approved.
- A successful technical build is not editorial, pedagogical, rights or commercial approval.

## Applying the system
Use `.github/workflows/publish-book-01-pdfs.yml` as the internal-only Book 01 PDF review workflow after PR #27 is merged. It must build into temporary review storage and upload GitHub Actions artifacts only; it must not commit PDFs to `public/books/`. Use `.github/workflows/book-02-independent-editions.yml` for Book 02 review builds. Keep book-specific title-page and layout resources under `docs/production/`.


## Accessibility release gate — mandatory

The current Pandoc/XeLaTeX workflows produce searchable PDFs with embedded DejaVu fonts, but the latest technical QA reports identify `Tagged: no`. Searchable text and embedded fonts do not create a semantic structure tree.

A final PDF must not be described as accessible or PDF/UA-conformant until:
- The PDF has a semantic structure tree with correct document language and title metadata.
- Headings, paragraphs, lists, tables, links and meaningful graphics are correctly tagged.
- Reading order is verified independently of visual order.
- Decorative elements are artifacts and meaningful images have appropriate alternative text.
- Keyboard navigation, link annotations and text extraction are checked.
- An appropriate automated PDF accessibility checker is run and its report archived.
- A manual screen-reader test is recorded for each language edition.

Do not attempt to satisfy this gate by merely changing the PDF metadata or setting a tagged flag. If the current XeLaTeX route cannot produce reliable tags, select a tagged-PDF-capable production route and validate the resulting structure tree. Keep the six editions in draft until this is complete.

## AI-assisted review boundary

AI review may identify likely language, structure, consistency and exercise issues. It is a preliminary quality-control input only. A qualified target-language editor and an independent language-teaching reviewer must validate the manuscript and record their own decisions. AI must not be named as a professional reviewer or used to claim certification.
