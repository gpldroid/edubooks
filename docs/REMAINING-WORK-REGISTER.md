## Verified technical and editorial update — 2026-11-22

- [x] Merge PR #25 and verify mobile library fix, regression suite, Astro build and responsive Playwright.
- [x] Merge PR #26 and verify the corrected French Book 01 Unit 3 answer in the regenerated PDF; see run [#45035163849](https://github.com/gpldroid/edubooks/actions/runs/45035163849).
- [x] Cross-check all ten Book 01 unit practice/answer-key sections in EN/FR/ES; record the scope and limits in `docs/editorial/book-01/answer-key-reconciliation-2026-11-22.md`.
- [x] Complete first-pass cross-check of all twelve Book 02 unit answer-check sections in EN/FR/ES; two prompt fixes (FR U10, ES U9) are on PR #27.
- [x] Restore the three pre-existing public PDF blobs after legacy workflow run #45035693412 refreshed them; restoration commit: `20d1c51572e224a75397982ab4933e694a8fb9c7`.
- [ ] Merge PR #27 only after Astro, manuscript checks and internal-only PDF artifact builds pass. It removes public PDF commits and grants the workflow read-only repository permissions.
- [ ] Verify the latest main-branch Pages deployment after PR #27 and the restoration commit.
- [ ] Keep Gumroad products unpublished; do not attach any review artifact.

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
- [x] Author first full-draft content for all ten units in EN/FR/ES, including explanations, examples, exercises, communication tasks and success criteria (PR #19 merged; matrix CI passed in run #45034306841).
- [x] Complete first-draft authoring of original explanations, examples, exercises, communicative tasks and measurable success criteria for all ten units; professional language and pedagogy review remains open.
- [x] Add an integrated beginner profile project and unit-aligned answer guidance in each target language (PR #19; pending CI and review).
- [x] Complete first-pass exercise/answer-key cross-check for all ten units in EN/FR/ES; see the reconciliation report. Qualified reviewers must still verify naturalness and pedagogical acceptance criteria.
- [ ] Establish consistent target-language variety, terminology, spelling and beginner-level progression.
- [x] Add and verify the three-language independent PDF matrix workflow (PR #19; run #45034306841 passed all EN/FR/ES jobs and uploaded artifacts).

### P1 — Book 02: Essential Vocabulary (EN / FR / ES)
- [ ] Conduct full editorial review of every unit in each language; automated language checks are not a substitute.
- [x] Complete first-pass prompt/answer-check crosswalk for all 12 units in EN/FR/ES; two clear alignment issues corrected on PR #27. Re-run checks after merge and retain qualified language review.
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

**Current decision:** Book 01 has complete first-draft content, a first-pass answer-key reconciliation and a corrected French PDF proof. Book 02 has three independent working manuscripts and a first-pass answer-key cross-check; two prompt/answer alignment corrections are under CI in PR #27. The Book 01 PDF workflow is being changed to internal artifacts only because its previous main-branch workflow automatically committed review builds to `public/books/`. The legacy public files were restored to their prior blobs. Qualified language and pedagogical review, rights/accessibility checks and full-page visual proof remain outstanding for all editions. None is release-ready or authorized for sale.
