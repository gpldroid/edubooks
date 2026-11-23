# Book library and PDF reader

The EduBooks library is a static Astro catalogue containing six free language editions. Each book has a dedicated page with a description, cover, edition selector, table of contents, embedded sample PDF and complete-PDF download action.

## Current collection

- Language Foundations — English, French and Spanish.
- Essential Vocabulary — English, French and Spanish.

## Reader journey

1. Open the [book library](https://gpldroid.github.io/edubooks/books/).
2. Search by title, language or learning topic.
3. Open a book edition.
4. Read its sample in the embedded PDF viewer or open the sample in a new tab.
5. Download the complete PDF from the book page.

## Catalogue and assets

- Catalogue: `src/data/catalog.ts`
- Book cards: `src/components/books/BookCard.astro`
- Book detail and PDF preview: `src/components/books/BookPreview.astro`
- PDF viewer: `src/components/books/PdfViewer.astro`
- Detail route: `src/pages/books/[slug].astro`
- Download route: `src/pages/books/[slug]/download.astro`
- Covers: `public/covers/`
- Sample PDFs: `public/previews/`
- Complete PDFs: `public/books/`

Each published edition must reference an existing cover, sample and complete PDF. Preview and full-download paths are separate and must respect the GitHub Pages `/edubooks` base path.

## Search and semantic discovery

Book cards include localized titles and descriptions, category names, language identifiers and subject keywords in their searchable metadata. Page metadata should use a distinct title and description, relevant natural-language keywords, canonical URL and language alternates where appropriate. Internal links should connect the library, book detail pages, language variants and related titles.

## Editorial and accessibility status

Production checks validate PDF generation and technical properties. Human editorial review and accessibility assessment are recorded separately by the publisher. A tagged PDF is not automatically PDF/UA conformant or screen-reader accessible.
