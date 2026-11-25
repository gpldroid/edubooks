# EduBooks

**Learn. Practice. Grow.**

EduBooks is a free digital library of practical educational books and PDF workbooks. Visitors can explore each title, open a sample in a large PDF reading dialog on the same page, and download the complete PDF free of charge.

- **Website:** https://gpldroid.github.io/edubooks/
- **Library:** https://gpldroid.github.io/edubooks/books/
- **Repository:** https://github.com/gpldroid/edubooks
- **Publisher:** Imad Limrani
- **Languages:** English, French and Spanish
- **Distribution:** Free access through the EduBooks website only
- **Formats:** On-demand in-page PDF sample preview and complete PDF download

## Published collection

| Title | English | Français | Español |
|---|---|---|---|
| Language Foundations | [Book page](https://gpldroid.github.io/edubooks/books/language-foundations-en/) | [Book page](https://gpldroid.github.io/edubooks/books/language-foundations-fr/) | [Book page](https://gpldroid.github.io/edubooks/books/language-foundations-es/) |
| Essential Vocabulary | [Book page](https://gpldroid.github.io/edubooks/books/essential-vocabulary-en/) | [Book page](https://gpldroid.github.io/edubooks/books/essential-vocabulary-fr/) | [Book page](https://gpldroid.github.io/edubooks/books/essential-vocabulary-es/) |

Each edition has its own book page, five-page PDF sample and complete downloadable PDF. All six editions are listed in the public library.

## Reader experience

1. Browse the [EduBooks library](https://gpldroid.github.io/edubooks/books/).
2. Choose a title and language edition.
3. Select **Preview PDF** to open the sample in a large dialog without leaving the book page.
4. Read using the PDF controls provided by the browser. If inline PDF rendering is unavailable, use the dialog's fallback links to open or download the sample.
5. Select **Download PDF** to download the complete book.

The sample PDF is loaded only after the visitor opens the preview. Closing the dialog removes the iframe source, ending the embedded document session. The preview is not rendered or downloaded automatically on initial page load. The full-book download remains a separate action.

No account, subscription, checkout or payment is required. EduBooks does not distribute books through Gumroad or PayPal.

## Editorial and accessibility information

The six PDFs are generated from the repository's authoritative English, French and Spanish manuscripts. Automated production checks cover PDF output, embedded fonts, extractable text, document structure and file checksums.

Human editorial review and accessibility assessment are handled separately. Technical PDF tagging is not, by itself, evidence of PDF/UA conformance or screen-reader usability. No human review or accessibility certification is claimed unless it is explicitly recorded by the publisher.

## Deployment configuration

The Astro configuration supports multiple static hosting platforms from the same source tree:

- **GitHub Pages:** the workflow explicitly sets `ASTRO_SITE=https://gpldroid.github.io` and `ASTRO_BASE_PATH=/edubooks`, preserving the project-site URL.
- **Vercel:** automatically detects `VERCEL_URL` or `VERCEL_PROJECT_PRODUCTION_URL` and uses the domain root (`/`).
- **Netlify:** uses its `URL` environment variable and the domain root.
- **Cloudflare Pages:** detects `CF_PAGES_URL` and uses the domain root.
- **Render:** detects `RENDER_EXTERNAL_URL` and uses the domain root.
- **Other hosts:** default to the domain root. Set `ASTRO_SITE` and, if needed, `ASTRO_BASE_PATH` as build environment variables for a custom domain or subpath.

Explicit `ASTRO_SITE` and `ASTRO_BASE_PATH` values take precedence over automatic detection. Vercel and other hosts still need to be connected to this GitHub repository and configured to run `npm run build` with `dist` as the output directory.

## Project records

- [Project handover](docs/PROJECT-HANDOVER.md)
- [Website publishing model](docs/SITE-ONLY-PUBLISHING-MODEL.md)
- [Book library and PDF preview](docs/BOOK-LIBRARY-PREVIEW.md)
- [Editorial release checklist](docs/EDITORIAL-RELEASE-CHECKLIST.md)
- [Rights and licence register](docs/RIGHTS-AND-LICENSE-REGISTER.md)
- [Current work register](docs/REMAINING-WORK-REGISTER.md)

## Repository overview

- `content/books/` — source manuscripts for the six language editions
- `public/covers/` — public book-cover artwork
- `public/previews/` — generated sample PDFs
- `public/books/` — generated complete PDFs
- `src/data/catalog.ts` — book, language, category and PDF metadata
- `src/pages/` — public website pages
- `src/components/books/BookCard.astro` — library cards
- `src/components/books/BookPreview.astro` — book details, on-demand PDF dialog and preview lifecycle
- `.github/workflows/` — automated PDF production, quality checks and GitHub Pages deployment

## Publishing principles

- Free website-only access; no sales or payment integrations.
- English, French and Spanish are the supported website and book languages.
- Each language edition is a complete, independent publication.
- Keep the source manuscripts and publication history intact.
- Do not claim human editorial approval, accessibility certification or formal CEFR certification without documented evidence.
- Keep secrets and private account information out of the repository.

© 2026 EduBooks · An independent educational publishing project by Imad Limrani.
