# EduBooks — Website-only PDF publishing model

**Publication policy:** All books are free and distributed only through the EduBooks website. Each language edition has an information page, an in-browser PDF sample and a direct download of the complete PDF.

## Distribution

- Free public access; no checkout, subscriptions, paid downloads or payment integrations.
- No Gumroad or PayPal links, product feeds, buttons or delivery dependencies.
- English, French and Spanish are the only website and publication languages for the initial collection.
- Two titles are published as six independent monolingual editions.

## Published reader experience

1. The [book library](https://gpldroid.github.io/edubooks/books/) lists all six editions.
2. Each card opens its edition-specific detail page.
3. The detail page presents the book description, language, learning level, cover and contents.
4. The sample PDF is embedded in the page and can also be opened in a separate browser tab.
5. The complete PDF is available through the direct download action.
6. Related language editions link to each other.

## Public paths

- Full PDFs: `/edubooks/books/<book-slug>.pdf`
- Five-page samples: `/edubooks/previews/<book-slug>-sample.pdf`
- Edition pages: `/edubooks/books/<book-slug>/`
- Download pages: `/edubooks/books/<book-slug>/download/`

The Astro `base` path must remain `/edubooks`. Use the configured base path for internal links and assets; do not hard-code root-relative site URLs that omit it.

## Technical safeguards

- The production workflow generates all six full PDFs and six separate samples from the authoritative manuscripts.
- The catalogue validates metadata and safe public paths.
- The static-site build fails when a published cover or PDF asset is missing.
- Never expose GitHub Actions review artifacts as public download links.
- PDF samples are intended for reading convenience, not DRM; visitors may be able to save or print public PDF files.

## Human review and accessibility

Human language/editorial review and accessibility assessment are separate publisher responsibilities. Automated checks and tagged-PDF metadata do not prove PDF/UA conformance or screen-reader usability. Record reviewer details, review scope, dates and findings only after the publisher has completed and confirmed the work.

## Current release

As of 2026-11-23, all six language editions are included in the public catalogue and the production workflow generates their sample and complete PDF files. The publisher will add human-review and accessibility statements only after those reviews are completed.
