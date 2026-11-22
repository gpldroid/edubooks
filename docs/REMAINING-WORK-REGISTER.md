## Verified technical update — 2026-11-22

- [x] Merge PR #22: separate information-only Preview and timed Download routes; inner-page typography is scoped separately from the homepage.
- [x] Run [PDF publishing #44996350390](https://github.com/gpldroid/edubooks/actions/runs/44996350390): EN/FR/ES Book 01 PDFs built, validated and committed to `public/books/`.
- [x] Confirm the three files exist on GitHub: EN 79,833 bytes; FR 84,973 bytes; ES 80,334 bytes.
- [x] Run [Pages deployment #44996350403](https://github.com/gpldroid/edubooks/actions/runs/44996350403): build and deploy succeeded for commit `38dd982`.
- [ ] Deploy again from a commit that includes bot commit `838acdc`; the successful Pages run above predates the PDF commit, so the current Pages artifact is not yet confirmed to contain the PDFs.
- [ ] Create and validate 3–5-page preview PDFs for each Book 01 language and add them under `public/previews/`.
- [ ] Verify all three SVG cover masters and convert/approve production cover formats before catalogue publication.
- [ ] Add Book 01 EN/FR/ES catalogue records only after descriptions, localized TOCs, level, page counts, cover paths and preview PDF paths have been verified.
- [ ] Keep catalogue publication status at draft until documented editorial, pedagogical, rights, accessibility and full-page visual review is complete.
- [ ] Update stale historical status notes in this register/handover when each stage is completed.

# EduBooks — Remaining Work Register

**Updated:** 2026-11-22  
**Repository:** https://github.com/gpldroid/edubooks  
**Commercial state:** Sales and product publication are deferred. Keep all six Gumroad products unpublished.

This register is the operational source of truth for unfinished work. CI success is recorded separately from editorial approval, visual proof and commercial readiness.

## Completed technical integrations

- [x] Merge PR #17: independent Book 02 EN/FR/ES working manuscripts, matrix PDF workflow and layout safeguards.
- [x] Verify Book 02 matrix run #44986040328: all three language jobs succeeded and uploaded three review-candidate artifacts.
- [x] Merge PR #18: four-page English Starter A1 internal preview workflow.
- [x] Verify A1 preview run #44986069717: PDF build, validation and artifact upload succeeded.
- [x] Confirm Astro build validation and legacy Book 01 PDF workflow succeeded in the same CI cycle.
- [x] Update README and project handover after merges.

## Work remaining — priority order

### P0 — Protect project state and reproducibility
- [ ] Re-run Astro validation and GitHub Pages deployment from the latest main documentation commits; confirm the public site still builds and deploys.
- [ ] Verify the deployment workflow, Pages configuration and public routes after the latest merges.
- [ ] Keep all Gumroad products unpublished; do not attach any review artifact.
- [ ] Preserve the original multilingual source manuscripts unchanged.

### P1 — Book 01: Language Foundations (EN / FR / ES)
- [x] Author first full-draft content for all ten units in EN/FR/ES, including explanations, examples, exercises, communication tasks and success criteria (PR #19; pending CI and review).
- [ ] Author original explanations, model dialogues, examples, graded exercises, communicative tasks and measurable success criteria for all ten units.
- [x] Add an integrated beginner profile project and unit-aligned answer guidance in each target language (PR #19; pending CI and review).
- [ ] Build each answer key only after its exercises are stable; reconcile every closed-answer item and define criteria for open responses.
- [ ] Establish consistent target-language variety, terminology, spelling and beginner-level progression.
- [x] Add a three-language independent PDF matrix workflow (PR #19; first run still needs to be triggered and verified after workflow becomes available on main).

### P1 — Book 02: Essential Vocabulary (EN / FR / ES)
- [ ] Conduct full editorial review of every unit in each language; automated language checks are not a substitute.
- [ ] Verify every exercise and answer-key item against the final prompt, including accepted variants.
- [ ] Review grammar, idiomaticity, register, regional vocabulary and level progression.
- [ ] Fix the known Spanish editorial note spilling onto a mostly empty final page.
- [ ] Inspect every page of all three PDFs, not only sampled pages; verify contents, page breaks, typography, headers, footers and links.

### P2 — Shared quality and compliance gates (all six editions)
- [ ] Obtain qualified target-language review for English, French and Spanish; record reviewer and date.
- [ ] Obtain pedagogical review and verify learning outcomes and level claims; do not imply official CEFR certification.
- [ ] Complete rights and attribution audit for text, images, fonts and other assets.
- [ ] Complete accessibility review: selectable text, logical reading order, headings, contrast, links and bookmarks.
- [ ] Produce final PDF proof per edition and record filename, commit/run and SHA-256 checksum.
- [ ] Complete and sign docs/EDITORIAL-RELEASE-CHECKLIST.md separately for each edition.

### P3 — Visual design (intentionally editable)
- [ ] Perform full-page visual proof after content is stable.
- [ ] Adjust typography, margins, spacing, pagination, tables and page-break rules as needed.
- [ ] Rebuild and re-check each affected PDF after every visual correction.
- [ ] Convert the six SVG cover masters to accepted PNG/JPEG formats and verify each upload on its matching unpublished Gumroad draft.
- [ ] Do not treat a cover mock-up or upload attempt as an attached/approved cover.

### P4 — Store preparation (deferred; no publication)
- [ ] Resolve the pricing-policy conflict: a uniform-price instruction conflicts with six distinct draft prices.
- [ ] Verify product title, language, description, cover, licence, refund terms and matching final PDF for each draft.
- [ ] Verify checkout and delivery only after final files and terms are approved.
- [ ] Obtain explicit owner authorization before attaching final files or publishing any product.
- [ ] PayPal remains optional and must not be configured as a parallel checkout without a verified product-specific flow.

## Status definitions

| Status | Meaning |
|---|---|
| Technical CI passed | Automated build/structure/output checks passed. |
| Working manuscript | Content exists but still needs editorial and pedagogical review. |
| Visual proof pending | Full-page layout has not been approved; design remains editable. |
| Editorially approved | Qualified language and pedagogical review is documented. |
| Release-ready | All editorial, rights, accessibility and final-PDF gates are evidenced. |
| Commercially released | Owner explicitly authorized publication and the live product was verified. |

**Current decision:** Book 02 has technical review candidates only. Book 01 now has complete first-draft content for all ten units in EN/FR/ES in draft PR #19; it is not yet CI-validated or editorially approved. None of the six editions is release-ready or authorized for sale.
