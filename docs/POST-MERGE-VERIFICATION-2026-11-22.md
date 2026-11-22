# Post-merge verification — 2026-11-22

**Repository:** https://github.com/gpldroid/edubooks  
**Main commit verified:** `f04657df21eb7350aafb06ef18c1f786856a1ad1` (PR #27 squash merge)  
**Website:** https://gpldroid.github.io/edubooks/

## Verification results

| Check | Run | Result |
|---|---:|---|
| Astro GitHub Pages build | [45045145911](https://github.com/gpldroid/edubooks/actions/runs/45045145911) | Passed |
| GitHub Pages deploy | [45045145911](https://github.com/gpldroid/edubooks/actions/runs/45045145911) | Passed |
| Book 01 internal-only PDF review build | [45045145899](https://github.com/gpldroid/edubooks/actions/runs/45045145899) | Passed |
| Legacy Book 01 PDF workflow after conversion to internal-only mode | [45045145880](https://github.com/gpldroid/edubooks/actions/runs/45045145880) | Passed |

The Book 01 workflow jobs completed successfully. The revised workflow has read-only repository permissions and uploads review artifacts rather than committing generated PDFs to `public/books/`.

## Scope and release boundary

- PR #27 is merged to `main`.
- The deployment job completed successfully; the public Astro site is deployed from the post-merge main branch.
- PR #27 did not add or replace files under `public/books/`. Existing files in that directory remain legacy public artifacts; they are not approved final editions.
- Book 02 EN/FR/ES review-candidate PDFs were built and validated in PR CI run [45044583560](https://github.com/gpldroid/edubooks/actions/runs/45044583560). The automated checks are technical checks only.
- The French Book 02 final page still has excess whitespace and needs a considered pagination/layout refinement; do not add filler content merely to fill the page.
- All six Gumroad products remain unpublished. No review artifact may be attached to a product. No edition is approved for commercial sale.

## Next production sequence

1. Conduct a documented preliminary editorial pass on the six independent manuscripts, keeping AI-assisted findings distinct from qualified human language and pedagogical sign-off.
2. Refine the Book 02 French PDF pagination and inspect every page of all three Book 02 review PDFs.
3. Complete qualified English, French and Spanish language review, then pedagogical, rights, accessibility and full-page visual gates for each edition.
4. Rebuild final proofs and record source commit, workflow run, output filename and SHA-256 for each edition.
5. Keep the catalogue empty and the six store drafts unpublished until the owner explicitly approves each edition and its commercial release.

**Decision:** Technical merge and website deployment are complete. Editorial approval, final PDF approval and commercial publication are not complete.
