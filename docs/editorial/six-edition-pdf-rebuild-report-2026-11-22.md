# Six-edition PDF rebuild report — 2026-11-22

**Source commit:** `1392e156127d9fcd3ba6decaa3dcb6737c555f18`  
**Build type:** Internal review candidates; not approved final/public editions.  
**Book 01 workflow:** https://github.com/gpldroid/edubooks/actions/runs/45082953056  
**Book 02 workflow:** https://github.com/gpldroid/edubooks/actions/runs/45082952981  
**Astro / regression / responsive tests:** https://github.com/gpldroid/edubooks/actions/runs/45082953102

## Build results

All six language-matrix jobs completed successfully. Each produced a full internal PDF review candidate and a five-page sample artifact. All detected PDF fonts were embedded. The workflows archived the installed DejaVu package version and Debian copyright/licence notice.

| Edition | Pages | Extracted words | DejaVu package | PDF SHA-256 |
|---|---:|---:|---|---|
| Book 01 EN | 10 | 4,149 | fonts-dejavu-core 2.37-8build1 | `9b23e0f93ee3bf5b965c5844d993ef40c6af82e7fbe10af1f9ce2fcbf2027847` |
| Book 01 FR | 11 | 4,647 | fonts-dejavu-core 2.37-8build1 | `bd7880aaba38869aed63b8cf9fa3db740e328e1de7a4e0207b395a1cce4e9380` |
| Book 01 ES | 10 | 4,109 | fonts-dejavu-core 2.37-8build1 | `d2c23c2f19e598307d2e5793ead425789ee5a0f13c0ff2ba727614ed4096f7a5` |
| Book 02 EN | 13 | 2,780 | fonts-dejavu-core 2.37-8build1 | `70ff6adc809de6139686829dda068f21a408eb549ef6aebf7dd0a0fd10a710dc` |
| Book 02 FR | 14 | 3,224 | fonts-dejavu-core 2.37-8build1 | `ff1cc0b9db5c69967aa46381490a09bc4366e8b41289e5bf3dda9f82994c3d8c` |
| Book 02 ES | 13 | 2,735 | fonts-dejavu-core 2.37-8build1 | `9c3d253726a43fee305beb5911bdf451206f26b12560d9beec3b1f8f77342649` |

## Accessibility result — release blocker

All six current candidates report `Tagged: no`. Therefore:
- The PDFs are searchable/selectable and their fonts are embedded.
- They are **not** semantically tagged PDFs.
- No PDF/UA conformance or screen-reader accessibility claim is made.
- The files must not be published as final editions until semantic tagging, language metadata, reading-order verification, automated accessibility validation and manual screen-reader tests are completed.

## Release boundary

- Artifacts are retained in GitHub Actions only.
- No PDF or sample has been copied to `public/books/` or `public/previews/`.
- All six catalogue entries remain `draft`.
- These hashes identify the current internal review candidates only. They must not be used as final publication checksums unless the exact files pass all release gates and receive owner approval.
- Full-page visual proof and qualified human language/pedagogical sign-off remain open.

## Validation summary

- Book 01 independent EN/FR/ES build matrix: success.
- Book 02 independent EN/FR/ES build matrix: success.
- Astro and TypeScript checks: success.
- Project regression tests: success.
- Astro production build: success.
- Responsive Playwright browser tests: success.
