# EduBooks — Project Handover and Continuation Guide

Last updated: 2026-11-21  
Repository: https://github.com/gpldroid/edubooks  
Live site: https://gpldroid.github.io/edubooks/

## 1. Project identity and decisions
- Brand: EduBooks.
- Positioning: independent digital educational publishing project.
- Brand identity: personal.
- Sales model: both direct digital product sales and marketplace checkout.
- Initial series: multilingual educational books.
- Learning audience: all audiences and levels, with each book defining its own level.
- Learning languages: English, French and Spanish.
- Explanation languages: English, French and Spanish.
- Arabic is not part of the website or this series.
- Hosting: GitHub Pages; Cloudflare setup intentionally deferred.
- Website framework: Astro static output.
- Repository: gpldroid/edubooks.

## 2. Current technical architecture
- Astro 5 static site.
- GitHub Pages project-site base path: /edubooks.
- Site origin: https://gpldroid.github.io.
- Expected website: https://gpldroid.github.io/edubooks/.
- Catalogue data: src/data/catalog.ts.
- Shared layout: src/layouts/BaseLayout.astro.
- Pages: src/pages/.
- Deployment workflow: .github/workflows/deploy.yml.
- Book manuscript sources: content/books/.
- Series planning: docs/series-01-detailed-contents.md.
- PDF build workflow: .github/workflows/book-01-pdf.yml.
- Shared PDF design system: docs/production/BOOK-PDF-DESIGN-SYSTEM.md.

## 3. Current book production status

### Book 01 — Language Foundations
- Source: content/books/01-language-foundations/manuscript.md.
- Ten units, exercises, answer key, project, appendices and glossary are present.
- Status: complete first full draft / editorial production candidate.
- A PDF proof has successfully built in GitHub Actions.
- The PDF is currently an Actions artifact, not a permanent public download.
- Do not list it for sale until final language review, proof inspection, rights check and commercial metadata are complete.
- Internal editorial report: docs/book-01-editorial-review.md.

### Books 02–06
- Detailed contents exist in docs/series-01-detailed-contents.md.
- Book 02 proposed title: Essential Vocabulary.
- Book 02 is now in parallel first-draft production on `work/book-02-independent-editions`; do not treat it as approved or sale-ready.

## 4. Build and deployment
Requirements: Node.js 22+ (workflow currently uses Node.js 24).

Local commands:
\`\`\`bash
npm install
npm run dev
npm run build
npm run preview
\`\`\`

GitHub Pages must use Settings → Pages → Build and deployment → Source: GitHub Actions.

Workflows:
- Site deployment: https://github.com/gpldroid/edubooks/actions/workflows/deploy.yml
- Book 01 PDF: https://github.com/gpldroid/edubooks/actions/workflows/book-01-pdf.yml

A successful site build and deployment was verified on 2026-11-21. The URL base-path expression in src/layouts/BaseLayout.astro was corrected in commit da96ecc.

## 5. PDF production
Run the PDF workflow manually from GitHub Actions or update the Book 01 manuscript. Download the artifact named edubooks-book-01-language-foundations-review-candidate from the successful run. Actions artifacts expire; the workflow retention period is 90 days. Do not treat the artifact as a permanent sales file.

The shared design files are in docs/production/. Use the manuscript template for all future books. The generated PDF is searchable and text-based; review its typography, page breaks, tables, contents links, accents and bookmarks before release.

## 6. Payment and sales
- Gumroad is the intended primary checkout and protected digital-file delivery service.
- PayPal may be an additional option only when a valid product-specific payment link is configured and tested.
- Do not store API keys, buyer data, identity documents, bank details or credentials in Git.
- Morocco payout eligibility must be verified in the seller's own provider dashboard; country-level documentation does not guarantee individual account approval.
- Do not publish purchase buttons until the PDF, price, licence, refund terms and checkout have been checked.

## 7. Immediate next steps
1. Run the PDF workflow and download the latest review candidate.
2. Inspect the complete PDF on desktop and mobile.
3. Complete English, French and Spanish native-level review; record reviewer/date and corrections.
4. Correct the manuscript and rebuild the PDF.
5. Approve cover, author attribution, copyright, licence, edition and price.
6. Update catalogue data only after product approval.
7. Begin Book 02 — Essential Vocabulary using the shared manuscript and PDF templates.

## 8. Security and continuity
- Keep all secrets in GitHub Actions secrets or provider dashboards, never in committed files.
- Commit manuscript sources and production templates; keep buyer-specific or confidential files outside the repository.
- Make changes in small commits and verify Actions after each production change.
- If continuing in a new ChatGPT conversation, provide this handover document and the repository URL.

## 9. Important links
- Repository: https://github.com/gpldroid/edubooks
- Live site: https://gpldroid.github.io/edubooks/
- Actions: https://github.com/gpldroid/edubooks/actions
- Series index: https://github.com/gpldroid/edubooks/blob/main/docs/series-01-detailed-contents.md
- Book 01 manuscript: https://github.com/gpldroid/edubooks/blob/main/content/books/01-language-foundations/manuscript.md
- Book 01 review: https://github.com/gpldroid/edubooks/blob/main/docs/book-01-editorial-review.md


## Book 02 — current independent-edition status (2026-11-22)

Three independent first-draft manuscripts exist under `content/books/02-essential-vocabulary/{en,fr,es}/manuscript.md`. Each covers the 12 planned topics and includes localized practice, 12 unit answer checks, an integrated project, a monolingual final review test and answer key. The French and Spanish editions received an additional localization pass to remove untranslated template sections and the final tests were separated by language. The dedicated matrix workflow now performs language-specific structure checks and builds one PDF per language.

The initial complete CI run passed for EN/FR/ES and produced three PDF candidates. Visual proof exposed a TOC overflow and untranslated default labels in FR/ES; the manuscript and PDF workflow were corrected to localize unit headings, TOC metadata and navigation, and a French plural-pronoun mismatch was corrected in Unit 4. A fresh CI run on the final commit is required, followed by visual proof of those latest artifacts. **Do not mark Book 02 complete yet.** Qualified independent language and pedagogical review, correction of reviewer findings, rights/metadata clearance and explicit release approval remain mandatory. Keep all Gumroad products unpublished. The original trilingual source remains preserved as the reference source. PR #9 tracks the independent-edition work and remains Draft.
