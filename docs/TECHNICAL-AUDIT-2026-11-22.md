# EduBooks technical audit and execution log — 2026-11-22

## Scope
Repository: https://github.com/gpldroid/edubooks  
Default branch: `main`  
Deployment: Astro 5 on GitHub Pages at https://gpldroid.github.io/edubooks/

## Current verified baseline

- Main includes PR #25 (mobile library fix) and PR #26 (French Book 01 answer-key correction and PDF proof report).
- Main commit `20d1c51572e224a75397982ab4933e694a8fb9c7` restores the exact three pre-existing PDF blobs under `public/books/` after a legacy workflow refreshed them. The files remain legacy artifacts and are not approved final editions.
- The Pages deployment for the restored main commit succeeded in [run #45035926637](https://github.com/gpldroid/edubooks/actions/runs/45035926637).
- The public catalogue `src/data/catalog.ts` remains intentionally empty.
- Six Gumroad product drafts remain unpublished and have no approved final PDFs attached. PayPal remains optional and unverified.
- PR #27 is open. It changes the Book 01 PDF workflow to read-only internal review artifacts, corrects two Book 02 exercise prompts, adds a final-page density check and refreshes the production documentation.

## Verified work

### Site stability
PR #25 fixed the mobile library overflow and aligned the Playwright category test with accessible category links. Astro validation, regression tests, production build and responsive browser tests passed in run #45034301714.

### Book 01 — Language Foundations
- All ten units have independent EN/FR/ES first-draft manuscripts.
- The first exercise-to-answer cross-check for all ten units in all three languages is recorded in `docs/editorial/book-01/answer-key-reconciliation-2026-11-22.md`.
- PR #26 corrected the French Unit 3 answer-key mismatch.
- The regenerated French PDF in run #45035163849 was inspected: 11 A4 pages, 136,249 bytes, 4,661 extracted words, embedded DejaVu Sans regular/bold/italic fonts, and the corrected answer is present.
- The other two editions were regenerated in the same matrix run; they remain technical review candidates.
- Full language editing, pedagogical review, rights, accessibility and full-resolution page proof remain open.

### Book 02 — Essential Vocabulary
- Three independent first-draft manuscripts (EN/FR/ES) are on main, with twelve units each.
- A first-pass cross-check of all twelve exercise/answer sections per language is documented in `docs/editorial/book-02/answer-key-crosscheck-2026-11-22.md`.
- PR #27 corrects French Unit 10 wording, clarifies the Spanish Unit 9 body-part clue and shortens the Spanish editorial note to avoid a widowed final-page continuation.
- Existing Book 02 review PDFs are older artifacts. Fresh proofs must be produced after the PR #27 corrections and inspected page-by-page.
- A known Spanish final-page layout issue is under a CI density guard; verify the regenerated proof.

## Important PDF workflow event and safeguard

Merging PR #26 triggered the legacy workflow run [#45035693412](https://github.com/gpldroid/edubooks/actions/runs/45035693412). It rebuilt and committed PDFs to `public/books/`. This was not a commercial release, and no Gumroad product was published. The prior public PDF blobs were restored in commit `20d1c51572e224a75397982ab4933e694a8fb9c7`.

PR #27 replaces the automatic public commit with:
- `contents: read` permissions only.
- Temporary output under `build/review/books/`.
- Separate EN/FR/ES GitHub Actions review artifacts.
- Extracted text and SHA-256 manifest artifacts.
- Pull-request CI so the PDF matrix can be checked before merge.
- No `git add`, commit or push to `public/books/`.

Do not treat the legacy files currently in `public/books/` as approved final books or attach them to Gumroad. The catalogue remains empty.

## Release safeguards

- Do not populate the published catalogue from unapproved manuscripts.
- Do not attach review PDFs or samples to Gumroad.
- Keep all six Gumroad drafts unpublished.
- Do not configure PayPal checkout until a verified product-specific flow and explicit release authorization exist.
- Preserve the original multilingual source manuscripts.

## Remaining execution

1. Finish PR #27 CI; verify Book 01 internal-only PDF artifacts and Book 02 EN/FR/ES proofs.
2. Merge PR #27 only if all required checks pass and no public PDF files are changed.
3. Verify main Pages deployment and confirm the legacy PDF blobs are unchanged.
4. Complete qualified target-language and pedagogical review for each edition.
5. Complete rights, attribution, accessibility and full-resolution PDF proof.
6. Fix any remaining pagination issues and apply the shared monolingual manuscript/PDF design system.
7. Convert the six SVG cover masters to approved PNG/JPEG production assets only after design approval.
8. Add catalogue metadata and previews only after each edition passes its release checklist.
9. Resolve the pricing conflict (uniform-price instruction versus six distinct draft amounts) before commercial release.
10. Obtain explicit owner authorization before attaching final files or publishing any Gumroad product.
