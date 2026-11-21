# EduBooks

**Learn. Practice. Grow.**  
An independent digital educational publishing project by Imad Limrani.

## Phase 1 — Brand and website foundation

This repository contains the initial bilingual (English/Arabic) public-facing website and static-site foundation. It intentionally does not contain products, checkout links, customer accounts, downloads, analytics or payment credentials.

### Current structure

- `index.html` — bilingual landing page and planned learning categories
- `about.html` — project information and contact section
- `faq.html` — project FAQ
- `privacy.html` — initial privacy notice for the informational site
- `terms.html` — initial website terms
- `404.html` — branded not-found page
- `assets/css/style.css` — responsive visual system
- `assets/js/main.js` — language switcher and mobile navigation
- `assets/images/favicon.svg` — brand icon
- `_headers` — Cloudflare Pages security and cache headers

### Technology

- Static HTML, CSS and vanilla JavaScript
- No build command or package installation required
- English and Arabic interface switch
- Responsive layout and reduced-motion support
- Cloudflare Pages-compatible static output

### Deploy to Cloudflare Pages

1. Sign in to Cloudflare.
2. Open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Authorize GitHub and select `gpldroid/edubooks`.
4. Set production branch to `main`.
5. Select **No framework**.
6. Leave the build command empty.
7. Set the build output directory to `/` (repository root).
8. Save and deploy.

Cloudflare requires the account owner to authorize the GitHub integration and complete deployment from their dashboard.

### Commercial launch gates — not yet complete

- Verify the final brand/trademark position in target markets. The owner has chosen to retain the EduBooks name; this repository does not imply trademark registration or exclusive rights.
- Replace the placeholder contact email in `about.html` with a working address.
- Create and verify the Gumroad creator account and Moroccan bank payout details in the account dashboard.
- Confirm seller identity, address, bank account and payout eligibility.
- Review final privacy, terms, product licence and refund information before enabling sales.
- Add product catalogue and checkout links only after the above checks are complete.
- Connect a custom domain only after its purchase and DNS access are available.

### Payment note

Gumroad's official payout documentation lists Morocco with MAD local bank payouts. This is a documented country-level capability, not confirmation that this specific creator account, identity or bank account has passed verification. Gumroad's published standard payout threshold is USD 100; confirm the current threshold and account-specific requirements in Payment Settings.

### No secrets

Never commit bank details, identity documents, passwords, API keys, access tokens or private customer information to this repository.

## Ownership

EduBooks — an independent educational publishing project by Imad Limrani.
