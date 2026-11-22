# EduBooks technical audit and execution log — 2026-11-22

## Scope
Repository: https://github.com/gpldroid/edubooks  
Default branch: `main`  
Deployment: Astro 5 on GitHub Pages at https://gpldroid.github.io/edubooks/

## Verified baseline
- The latest verified Pages deployment on main completed successfully (run 45033763790, commit 34277ab).
- The library catalogue is intentionally empty. This is a release safeguard, not a missing-data accident: no book has completed all editorial, pedagogical, rights, accessibility and full-PDF proof gates.
- Three Book 01 PDFs exist in `public/books/`, but they are generated review candidates, not approved commercial files.
- Six SVG cover masters exist. Gumroad rejected SVG uploads; accepted PNG/JPEG covers and successful attachment remain unverified.
- Six Gumroad product drafts remain unpublished. No PDFs are attached. PayPal remains optional and unverified.
- The site currently uses a category sidebar and category links, not the former select control.

## Findings
1. The latest responsive browser run 45033104719 passed 10 tests and failed 2:
   - The category test referenced a removed select control.
   - At 320px, the document width reached 560px.
2. The existing Book 01 independent-edition workflow builds three review PDFs but did not generate a separate short sample artifact.
3. The book catalogue must remain empty until the preview files, cover formats, localized metadata and release evidence are verified. Draft manuscripts must not appear as published products.

## Changes prepared in PR #25
- Constrain the library grid, sidebar, category navigation and result area to the available viewport width.
- Keep mobile category scrolling within the category navigation region.
- Update the Playwright test to click the current accessible category link.
- Extend the Book 01 PDF workflow to create and upload a five-page internal sample for each language edition. These are CI artifacts only; they are not copied into the public site and are not sale files.

PR: https://github.com/gpldroid/edubooks/pull/25

## Release safeguards
- Do not populate published catalogue entries from unapproved manuscripts.
- Do not expose full review PDFs in the public `public/books/` directory as downloadable products.
- Do not attach review candidates or sample previews to Gumroad.
- Do not publish Gumroad drafts or configure a parallel PayPal checkout without explicit release approval.
- Keep the original multilingual source manuscripts unchanged.

## Remaining execution
- Wait for PR #25 Astro validation and responsive browser tests.
- Inspect all three Book 01 generated PDFs page-by-page; the five-page samples are for quick review, not a replacement for full proof.
- Complete qualified language review for English, French and Spanish, then pedagogical, answer-key, rights and accessibility checks.
- Convert six cover masters to PNG/JPEG and visually verify each one.
- After each edition passes its release checklist, add its verified metadata and preview asset to the catalogue; only then consider publication.
- Resolve the conflicting pricing instruction (uniform pricing versus six different draft amounts) before commercial release.
