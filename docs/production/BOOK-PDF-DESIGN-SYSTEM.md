# EduBooks — Shared PDF Design System

## Purpose
Common print and digital-PDF specification for all six books in Multilingual Learning Series 01. Keep the visual system consistent while allowing each title its own accent colour and title-page subtitle.

## Page and typography
- A4 portrait; margins approximately 18 mm.
- DejaVu Sans through XeLaTeX for broad Latin-script coverage, including French and Spanish diacritics.
- Clear hierarchy: title, numbered unit, section, subsection, body and caption.
- Body text target: 10–11 pt; readable line spacing and paragraph separation.
- Navy #17324D for primary headings; teal #168C88 for secondary headings; muted grey for running furniture.
- Tables use consistent alignment, restrained rules and repeatable column widths.
- Clickable table of contents, PDF bookmarks, hyperlinks and selectable/searchable text.
- Running header identifies EduBooks and the current section; centered page number in footer.

## Front matter
1. Minimalist title page.
2. Publication and learning note.
3. Table of contents.
4. How to use the book and learning outcomes.
5. Main units.
6. Answer key, appendices and glossary.
7. Copyright, edition and source notes.

## Content rules
- English, French and Spanish remain equal learning languages and explanation languages.
- No Arabic-language UI or instructional edition in this series.
- Do not translate mechanically when grammar or idiom differs.
- Mark regional variation and formal/informal register where relevant.
- Every closed-ended exercise must have a checked answer.
- Open-ended activities need a model response, acceptable alternatives or a rubric.
- CEFR references describe approximate learning targets only; never imply official certification or endorsement.

## Release quality gates
- Editorial review and answer-key verification complete.
- Native-level review of English, French and Spanish recorded before claiming language-certified quality.
- Font embedding, accents, punctuation, tables, links, bookmarks and page breaks inspected.
- PDF text extraction succeeds and all ten units are present.
- Final PDF proof checked on desktop and mobile-sized screens.
- Cover, edition, author attribution, copyright and distribution licence approved.

## Applying the system
The workflow at .github/workflows/book-01-pdf.yml is the reference implementation. Future books should use the same preamble, page size, font, header/footer, table-of-contents and QA checks, changing only the title-page content and source manuscript. Keep book-specific title pages under docs/production/.
