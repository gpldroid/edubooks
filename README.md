# EduBooks

**Learn. Practice. Grow.**

EduBooks is a free digital library of practical educational books and PDF workbooks. Readers can explore each title, read a sample in the browser and download the complete PDF directly from the website.

- **Website:** https://gpldroid.github.io/edubooks/
- **Library:** https://gpldroid.github.io/edubooks/books/
- **Repository:** https://github.com/gpldroid/edubooks
- **Publisher:** Imad Limrani
- **Languages:** English, French and Spanish
- **Distribution:** Free access through the EduBooks website only
- **Formats:** Browser PDF preview and complete PDF download

## Published collection

| Title | English | Français | Español |
|---|---|---|---|
| Language Foundations | [Book page](https://gpldroid.github.io/edubooks/books/language-foundations-en/) | [Book page](https://gpldroid.github.io/edubooks/books/language-foundations-fr/) | [Book page](https://gpldroid.github.io/edubooks/books/language-foundations-es/) |
| Essential Vocabulary | [Book page](https://gpldroid.github.io/edubooks/books/essential-vocabulary-en/) | [Book page](https://gpldroid.github.io/edubooks/books/essential-vocabulary-fr/) | [Book page](https://gpldroid.github.io/edubooks/books/essential-vocabulary-es/) |

Each edition has its own book page, five-page PDF sample and complete downloadable PDF. All six editions are listed in the public library.

## Reader experience

1. Browse the [EduBooks library](https://gpldroid.github.io/edubooks/books/).
2. Choose a title and language edition.
3. Read the sample PDF directly on the book page.
4. Download the complete PDF free of charge.

No account, subscription, checkout or payment is required. EduBooks does not distribute books through Gumroad or PayPal.

## Editorial and accessibility information

The six PDFs are generated from the repository's authoritative English, French and Spanish manuscripts. Automated production checks cover PDF output, embedded fonts, extractable text, document structure and file checksums.

Human editorial review and accessibility assessment are handled separately. Technical PDF tagging is not, by itself, evidence of PDF/UA conformance or screen-reader usability. No human review or accessibility certification is claimed unless it is explicitly recorded by the publisher.

## Project records

- [Project handover](docs/PROJECT-HANDOVER.md)
- [Website publishing model](docs/SITE-ONLY-PUBLISHING-MODEL.md)
- [Book library and PDF details](docs/BOOK-LIBRARY-PREVIEW.md)
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
- `src/components/books/` — book cards, details and PDF reader
- `.github/workflows/` — automated PDF production, quality checks and GitHub Pages deployment

## Publishing principles

- Free website-only access; no sales or payment integrations.
- English, French and Spanish are the supported website and book languages.
- Each language edition is a complete, independent publication.
- Keep the source manuscripts and publication history intact.
- Do not claim human editorial approval, accessibility certification or formal CEFR certification without documented evidence.
- Keep secrets and private account information out of the repository.

© 2026 EduBooks · An independent educational publishing project by Imad Limrani.
