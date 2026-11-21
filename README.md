# EduBooks

**Learn. Practice. Grow.**  
An independent digital educational publishing project by Imad Limrani.

## Technology

- Astro static site generator
- HTML/CSS with lightweight browser JavaScript
- English and Arabic interface with persisted language preference
- Canonical URLs, Open Graph metadata and WebSite structured data
- XML sitemap, robots.txt and custom 404 page
- Typed book catalogue, category taxonomy and static book detail template
- GitHub Actions build and deployment
- GitHub Pages hosting (project site)

## Project architecture

```text
edubooks/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .nojekyll
├── src/
│   ├── data/
│   │   └── catalog.ts       # Typed categories and book records
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── books/
│       │   ├── index.astro # Searchable, filterable library
│       │   └── [slug].astro # Static book detail template
│       ├── about.astro
│       ├── faq.astro
│       ├── privacy.astro
│       ├── terms.astro
│       └── 404.astro
├── astro.config.mjs
└── package.json
```

## Local development

Requires Node.js 22 or newer (the deployment workflow uses Node.js 24).

```bash
npm install
npm run dev
```

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

The generated static website is written to `dist/`.

## GitHub Pages configuration

The repository is configured as a GitHub **project site**:

- Repository: `gpldroid/edubooks`
- Site origin: `https://gpldroid.github.io`
- Astro base path: `/edubooks`
- Expected public URL: `https://gpldroid.github.io/edubooks/`
- Build output: `dist/`
- Deployment trigger: pushes to `main` or manual workflow dispatch

### One-time GitHub setting

In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. This repository-level setting must be selected once in GitHub.

After that, every push to `main` runs the workflow, builds Astro and deploys the static output. Monitor the run under the repository's **Actions** tab.

## Catalogue and publication status

The catalogue currently contains the learning-area taxonomy and an empty book list. The library page, search/filter controls and static book detail template are ready for real records. No sample books, fake prices, download links, checkout or payment processing have been added.

Only add a book when its content, cover and distribution rights are verified. Keep unpublished records in draft status until the product is reviewed and approved.

## Before commercial launch

- Verify the brand/trademark position in target markets.
- Publish a working customer-support contact channel.
- Complete seller identity and payout verification directly in the chosen payment provider account.
- Review final privacy, terms, product licence and refund information.
- Never commit bank details, identity documents, passwords, API keys, access tokens or private customer information.

## Payment note

Gumroad's public payout documentation lists Morocco with MAD local bank payouts. This is a country-level capability only; it does not confirm that a particular seller account, identity or bank account is approved. Confirm current fees, thresholds and eligibility in the account's own payment settings before relying on it.

## Ownership

EduBooks — an independent educational publishing project by Imad Limrani.


## Payment integration readiness

- Gumroad is the primary digital-product checkout and file-delivery platform.
- PayPal may be offered as an additional checkout option when an active payment link is created for a specific book.
- Product records can store the Gumroad product URL and PayPal payment URL. The product detail template displays only URLs explicitly assigned to that product.
- Never publish a purchase button until the product is approved, priced, uploaded to Gumroad, and the checkout URL has been checked.
- Keep buyer files and private credentials out of the Git repository. Use Gumroad's protected file delivery for paid PDFs.
- No PayPal payment links are currently recorded in the connected account. Existing Gumroad products must be checked for relevance before use; do not repurpose unrelated products.
