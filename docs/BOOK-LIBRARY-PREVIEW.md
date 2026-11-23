# Book library and on-demand PDF preview

The EduBooks library is a static Astro catalogue containing six free language editions. Each published book has a dedicated page with a description, cover, edition selector, table of contents, an on-demand PDF sample dialog and a separate complete-PDF download action.

## Current collection

- Language Foundations — English, French and Spanish.
- Essential Vocabulary — English, French and Spanish.

## Reader journey

1. Open the [book library](https://gpldroid.github.io/edubooks/books/).
2. Search by title, language or learning topic.
3. Open a book edition.
4. Select **Preview PDF**. A large modal dialog opens over the current page.
5. Read the sample in the browser's built-in PDF viewer. If the browser does not render PDFs in an iframe, use the dialog's open-in-new-tab or download-sample fallback.
6. Close the dialog to return to the same book page, or select **Download PDF** to obtain the complete book.

## Preview behavior and implementation

- The dialog is part of the book detail page; there is no separate reader route or automatic PDF preview download.
- The iframe is rendered without a PDF source initially. The sample URL is assigned only in response to the visitor activating **Preview PDF**.
- The dialog uses the native HTML `<dialog>` element and `showModal()`, providing a modal interaction and a backdrop.
- On close, the iframe `src` and fallback link destinations are cleared so the embedded PDF session is unloaded.
- The dialog can be closed with its close control, the browser's native Escape behavior, or by activating the backdrop.
- The dialog is responsive: large on desktop and full-screen on compact mobile screens.
- The complete-book download remains a separate route and is not replaced by the sample preview.
- PDF toolbar features such as zoom, page navigation, print and download depend on the visitor's browser PDF viewer. The fallback links provide an alternate way to open or save the sample.

This is a browser-native PDF preview, not a custom PDF.js renderer. Browser and platform PDF support can vary; the fallback links are therefore part of the expected reader experience.

## Catalogue and assets

- Catalogue: `src/data/catalog.ts`
- Book cards: `src/components/books/BookCard.astro`
- Book detail, preview dialog and lifecycle: `src/components/books/BookPreview.astro`
- Detail route: `src/pages/books/[slug].astro`
- Complete-book download route: `src/pages/books/[slug]/download.astro`
- Covers: `public/covers/`
- Sample PDFs: `public/previews/`
- Complete PDFs: `public/books/`

Each published edition must reference an existing cover, sample and complete PDF. Preview and full-download paths are separate and must respect the GitHub Pages `/edubooks` base path.

## Regression coverage

The project regression suite checks that the preview dialog exists, that the iframe has no initial `src`, that the source is assigned on activation and that it is removed when the dialog closes. Playwright browser tests exercise the same-page open/close flow, verify the sample fallback links, and ensure the complete-book download remains available.

Run the project checks with:

```sh
npm ci
npm run check
npm test
npm run build
npm run test:e2e
```

The Playwright suite requires its configured browser installation and server setup.

## Search and semantic discovery

Book cards include localized titles and descriptions, category names, language identifiers and subject keywords in their searchable metadata. Page metadata should use a distinct title and description, relevant natural-language keywords, canonical URL and language alternates where appropriate. Internal links should connect the library, book detail pages, language variants and related titles.

## Editorial and accessibility status

Production checks validate PDF generation and technical properties. Human editorial review and accessibility assessment are recorded separately by the publisher. A tagged PDF is not automatically PDF/UA conformant or screen-reader accessible.
