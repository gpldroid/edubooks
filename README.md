# EduBooks

**Learn. Practice. Grow.**  
An independent digital educational publishing project by Imad Limrani.

## Technology

- Astro static site generator
- HTML/CSS with lightweight browser JavaScript
- English and Arabic interface with persisted language preference
- Canonical URLs, Open Graph metadata and WebSite structured data
- XML sitemap, robots.txt and custom 404 page
- GitHub Actions build and deployment
- GitHub Pages hosting (project site)

## Project architecture

```text
edubooks/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Build and deploy on every push to main
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── .nojekyll
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro # Shared metadata, navigation and footer
│   └── pages/
│       ├── index.astro      # Home page
│       ├── about.astro
│       ├── faq.astro
│       ├── privacy.astro
│       └── terms.astro
├── astro.config.mjs
├── package.json
└── .gitignore
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

In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. This is a required GitHub Pages repository setting; the workflow cannot switch it automatically.

After that, every push to `main` runs the workflow, builds Astro and deploys the static output. Monitor the run under the repository's **Actions** tab.

## Content and launch status

The project foundation and informational pages are in place. Product listings, downloadable books, checkout, customer accounts and payment processing have intentionally not been enabled. Do not publish products until content rights, product quality, pricing, seller verification, payment eligibility, customer support and commercial policies have been checked.

Before a public commercial launch:

- Verify the brand/trademark position in target markets. Retaining the EduBooks name does not imply trademark registration or exclusive rights.
- Publish a working customer-support contact channel.
- Complete seller identity and payout verification directly in the chosen payment provider account.
- Review final privacy, terms, product licence and refund information.
- Add products only when their content and visual assets are original or properly licensed.
- Never commit bank details, identity documents, passwords, API keys, access tokens or private customer information.

## Payment note

Gumroad's public payout documentation lists Morocco with MAD local bank payouts. This is a country-level capability only; it does not confirm that a particular seller account, identity or bank account is approved. Confirm current fees, thresholds and eligibility in the account's own payment settings before relying on it.

## Ownership

EduBooks — an independent educational publishing project by Imad Limrani.
