# EduBooks — Current work register

**Updated:** 2026-11-23  
**Publication model:** Free website-only library with on-demand in-page PDF sample dialogs and direct full-PDF downloads.

## Published collection

- [x] Language Foundations — EN / FR / ES.
- [x] Essential Vocabulary — EN / FR / ES.
- [x] Generate a complete PDF and a separate five-page sample for every edition.
- [x] Publish the six editions in the Astro catalogue.
- [x] Provide edition-specific detail pages and language-switch links.
- [x] Provide same-page PDF sample dialogs; load the sample only after activation and unload it on close.
- [x] Keep complete-PDF downloads separate from sample previews.
- [x] Provide fallback links to open or download the sample when embedded PDF rendering is unavailable.
- [x] Remove sales, checkout and external-store flows from the public product experience.
- [x] Update the homepage, library copy, README and project documentation to describe the free PDF experience.
- [x] Align all six authoritative manuscript publication notices with the live free website distribution model. These notices explicitly distinguish publication availability from human review or accessibility certification.

## Website quality and discoverability

- [x] Refresh public page titles, descriptions and keyword metadata.
- [x] Connect book pages through language variants and contextual internal links.
- [x] Filter empty learning categories from the visible library navigation.
- [x] Remove decorative numbering and catalogue-count badges from cards and page sections.
- [x] Align shared typography across informational, library, book and download pages.
- [x] Document the native HTML dialog, lazy iframe assignment, cleanup behavior and browser PDF support limitations.
- [ ] Verify every internal URL, canonical URL, hreflang alternate and PDF path after the latest production deployment.
- [ ] Review search snippets and structured data in search-engine tools after recrawl.

## Release validation

- [x] Add regression coverage for initial no-source state, user-triggered preview loading and source cleanup on close.
- [x] Add Playwright coverage for same-page dialog open/close, preview fallback links and the separate full-book download.
- [ ] Confirm all required GitHub Actions checks pass for the final pull-request head.
- [ ] Merge the approved change and verify the GitHub Pages deployment succeeds.
- [ ] Smoke-test the live preview and complete-book downloads on desktop and mobile browsers.

## Publisher-led human review

- [ ] Complete human editorial and language review for each of the six editions.
- [ ] Record the reviewer, date, scope and findings for every edition.
- [ ] Complete the publisher's accessibility assessment for each PDF and the reading experience.
- [ ] Record the actual accessibility scope and findings; do not claim PDF/UA or screen-reader conformance without evidence.
- [ ] Correct any content, pagination, navigation or accessibility issues found and regenerate affected PDFs.
- [ ] Add public review statements only after the publisher has completed and confirmed them.

## Next content-development phase

- [ ] Build a unit-by-unit enhancement plan for Language Foundations and Essential Vocabulary without silently changing their learning-level promises.
- [ ] Prioritize practical examples, natural dialogues, differentiated exercises, answer explanations and review activities.
- [ ] Apply content changes consistently across English, French and Spanish as independently localized editions, not literal translations.
- [ ] Run a complete answer-key reconciliation and qualified human review after each content revision.
- [ ] Prepare the next title only after the publisher confirms the first collection's content and review priorities.

## Ongoing maintenance

- [ ] Keep source manuscripts, catalogue metadata, cover assets, sample PDFs and full PDFs synchronized.
- [ ] Verify the live website and all six PDF downloads after each release.
- [ ] Preserve the free website-only model; do not restore Gumroad, PayPal or paid distribution.
- [ ] Preserve the English, French and Spanish language scope unless the publisher changes it.
