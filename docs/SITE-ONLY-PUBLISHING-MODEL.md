# EduBooks — Website-only PDF publishing model

**Owner decision:** Publish books on the EduBooks website only. Each approved edition offers an in-browser PDF preview and a direct PDF download. All books are free.

## Product and distribution policy
- No sale, paid download, subscription, checkout, donation gate or payment integration.
- No Gumroad or PayPal links, buttons, product feeds or delivery dependencies.
- Gumroad drafts and prior pricing notes are historical only. Do not modify or publish them.
- The website is the canonical public library and the only distribution channel.
- Website interface and book languages: English, French and Spanish.
- The first collection consists of two books, each with three independent language editions (EN, FR, ES).

## Public reader experience
For each published edition:
1. Library card opens a book information page.
2. Information page shows description, language, level, cover and table of contents.
3. **Preview PDF** opens the approved sample PDF in the browser.
4. **Download PDF** downloads the approved complete PDF directly from EduBooks.
5. Both links must respect Astro's `/edubooks` GitHub Pages base path.

Suggested filenames (conventions only; not proof of existing files):
- `public/previews/edubooks-book-01-en-preview.pdf`
- `public/books/edubooks-book-01-en.pdf`

## Release states
1. Manuscript draft — editable, not public.
2. Internal PDF review candidate — CI artifact only, not public.
3. Editorially approved — qualified language and pedagogical reviews recorded.
4. Production-approved — rights, accessibility and full-page visual proof complete; final and preview PDFs verified.
5. Website-published — explicit owner approval; catalogue entry references existing public files and correct cover.

A successful build does not constitute editorial approval.

## PDF and catalogue safeguards
- Keep `src/data/catalog.ts` empty until an edition is genuinely ready.
- A published catalogue record must point to an existing cover, preview PDF and full downloadable PDF.
- Keep preview and full-download paths separate.
- Validate language, metadata, file existence, size, page count and SHA-256 during release.
- Preview PDFs must be clearly identified samples containing only intended sample pages.
- Never link GitHub Actions review artifacts from public pages.
- Three historical, unapproved Book 01 PDFs have been removed from the deployable `public/books/` directory; do not restore or reuse them without a new documented review.

## Build and deployment
- Authoritative manuscripts: `content/books/<book-id>/<language>/manuscript.md`.
- Matrix workflows build internal review artifacts only.
- Approved final and preview files are added to `public/books/` and `public/previews/` through a reviewed pull request.
- Astro catalogue validation must fail if a published entry references a missing asset.
- Deploy from the approved main-branch commit and verify both public PDF URLs on desktop and mobile.

## Per-edition release evidence
Record book ID, language, qualified language reviewer/date, pedagogical reviewer/date, rights review, accessibility and visual proof, source commit, workflow run, final and preview filenames/page counts/SHA-256, public URLs, owner authorization and publication date.

## Current state
As of 2026-11-22, the catalogue is empty and no edition is approved for public distribution. Book 01 legacy PDFs remain in `public/books/` but are unapproved. Book 02 PDFs are internal GitHub Actions review artifacts. All six manuscripts remain in editorial production.
