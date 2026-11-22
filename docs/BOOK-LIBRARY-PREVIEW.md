# Book library and PDF preview workflow

The public library is a static Astro catalogue. Only entries with `status: 'published'` are rendered. Draft manuscripts and editorial source files are never discovered or published automatically.

## Add a book edition

1. Complete the editorial, pedagogical, rights and accessibility gates in [the release checklist](EDITORIAL-RELEASE-CHECKLIST.md).
2. Create a cover asset under `public/images/book-covers/` (or use another reviewed root-relative public image path).
3. Create a **separate preview PDF** under `public/previews/<book-slug>/<language>.pdf`.
4. The preview PDF must contain, in order:
   - the approved book cover;
   - the public-facing book description;
   - the complete table of contents;
   - exactly 3–5 approved sample pages from the book.
5. Add the edition to `books` in `src/data/catalog.ts`, including English, French and Spanish UI metadata, localized TOC titles, the preview PDF path and `samplePageCount`.
6. Set `status: 'published'` only after the edition and preview have been explicitly approved for public website publication.

The build validates required metadata, safe asset paths, TOC localization and the 3–5 sample-page declaration. It also fails if a published book's cover or preview PDF is missing from `public/`.

## Preview file safety

- Never point `previewPdf` to a full-book PDF, manuscript source, or commercial delivery file.
- Do not place full books in `public/`; everything there is publicly accessible on GitHub Pages.
- A PDF embedded in a public page is not protected: visitors may be able to save or print it using their browser. The viewer is for convenient reading, not DRM.
- The library templates intentionally do not render Gumroad, PayPal, checkout, purchase, or full-book download links. Commercial fields in the type are legacy editorial metadata only and must not be used in public templates.

## Local verification

```bash
npm ci
npm run check
npm test
npm run build
npm run test:e2e
```
