# Editorial, Accessibility and Ongoing Quality Checklist

Complete this checklist separately for each of the six editions. The six current PDFs are already published as free website downloads. This checklist records the publisher's ongoing human editorial, pedagogical, rights and accessibility review; it does not imply that those reviews or certifications have already been completed. Record evidence for every completed item. If a critical defect is found, correct the source and regenerate the affected PDF and sample.

## Edition identity
- [ ] Correct book title and target language (EN, FR or ES).
- [ ] Complete standalone title page, copyright, edition and publication metadata.
- [ ] Consistent language variety, spelling, register and terminology.
- [ ] All learner-facing instructions and explanations are in the target language.

## Editorial and pedagogical approval
- [ ] All planned units and appendices are present.
- [ ] Qualified target-language review completed and recorded.
- [ ] AI-assisted editorial review findings have been resolved or explicitly accepted by the human reviewer.
- [ ] Human reviewer has checked AI suggestions against the source and documented corrections; AI output is not treated as sign-off.
- [ ] Pedagogical review completed and recorded.
- [ ] AI-assisted pedagogical review completed as a preliminary check; human reviewer has independently validated learning outcomes, progression, exercises and assessment.
- [ ] Learning outcomes and level claims are accurate and appropriately qualified.
- [ ] Examples are idiomatic, culturally suitable and correct.
- [ ] Exercises are understandable and answerable in the target language.
- [ ] Answer key reconciles with every closed-ended exercise.
- [ ] Open-ended activities include model responses, acceptable alternatives or a rubric.
- [ ] Glossary and terminology are consistent.
- [ ] No unresolved placeholders, TODOs or editorial comments remain.

## Rights and attribution
- [ ] Text, images, fonts and other assets have documented rights/permissions.
- [ ] Attribution and licence information is complete.
- [ ] No unlicensed third-party material is included.

## PDF production and accessibility
- [ ] Final PDF metadata, title and language are correct.
- [ ] PDF text is selectable/searchable and extraction is readable.
- [ ] Fonts are embedded; accents and special characters render correctly.
- [ ] Exact font package/version and licence notice are archived with the build evidence.
- [ ] Headings, reading order, contrast and links are accessible.
- [ ] Contents, bookmarks, page numbers, headers and page breaks are checked.
- [ ] Every page has been inspected at full resolution.
- [ ] PDF has been checked on desktop and mobile-sized screens.
- [ ] PDF contains semantic tags for document language, headings, paragraphs, lists, tables, links and meaningful images.
- [ ] Logical reading order and alt text are verified.
- [ ] PDF passes an appropriate accessibility checker and manual screen-reader test.
- [ ] Accessibility/tagged-PDF status is documented; do not claim compliance without evidence.

## Current public assets and reader experience
- [ ] The published complete PDF exists under `public/books/` and matches the current catalogue record.
- [ ] The separate five-page sample exists under `public/previews/` and matches the current edition.
- [ ] Correct language-specific cover exists.
- [ ] Preview opens in the browser from the public EduBooks URL.
- [ ] Download retrieves the complete PDF from the public EduBooks URL.
- [ ] Both URLs work with the GitHub Pages `/edubooks` base path.
- [ ] Catalogue metadata matches the exact edition and language.
- [ ] No checkout, price, payment or store link is present.

## Build and release evidence
- [ ] `npm run check` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] Responsive browser tests pass where configured.
- [ ] Source commit and successful PDF build run are recorded.
- [ ] Full PDF and preview PDF filenames, page counts and SHA-256 checksums are recorded.
- [ ] SHA-256 sidecars match the exact artifacts approved by the owner.
- [ ] Public preview and download URLs are verified after deployment.
- [ ] Record the publisher's original authorization for website publication; any later replacement or withdrawal must also be recorded.

## Release record
- Edition ID:
- Language:
- Language reviewer / role / date:
- Pedagogical reviewer / role / date:
- Rights review:
- Accessibility and visual proof:
- Source commit / PDF workflow run:
- Final PDF filename / page count / SHA-256:
- Preview PDF filename / page count / SHA-256:
- Public preview URL:
- Public download URL:
- Owner authorization / date:
- Deployment run / publication date:

**Do not describe human review or accessibility certification as complete while its evidence is missing.** The six existing public editions remain available as free PDFs while the publisher completes this review. If a serious error or accessibility barrier is identified, record the affected edition and corrective action.
