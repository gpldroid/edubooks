# Gumroad Store Operations

Store: https://edupdf.gumroad.com

## Product inventory

| Product | Price (current draft) | Product URL |
|---|---:|---|
| Book 01 — Language Foundations (English) | €5 | https://edupdf.gumroad.com/l/cawqiv |
| Book 01 — Language Foundations (French) | €7 | https://edupdf.gumroad.com/l/liyoos |
| Book 01 — Language Foundations (Spanish) | €5 | https://edupdf.gumroad.com/l/buayfx |
| Book 02 — Essential Vocabulary (English) | €7 | https://edupdf.gumroad.com/l/pbeti |
| Book 02 — Essential Vocabulary (French) | €5 | https://edupdf.gumroad.com/l/gtjaok |
| Book 02 — Essential Vocabulary (Spanish) | €7 | https://edupdf.gumroad.com/l/ukzunh |

## Current state

- Six digital product drafts have localized names/descriptions/summaries and basic metadata.
- All six are unpublished.
- The legacy product draft `EduBooks` remains untouched: https://edupdf.gumroad.com/l/bglxwl.
- No final PDFs are attached.
- SVG cover source files live in `public/images/gumroad-covers/`; the Gumroad cover endpoint rejected SVG. Convert to PNG/JPEG and verify successful upload on each product.
- Do not change a product's publication state as part of routine editing.

## Price decision needs confirmation

The original instruction selected a uniform price ("same") but also provided six different prices: 5, 7, 5, 7, 5, 7. The products currently reflect the six different amounts in EUR. Ask the owner to confirm whether to retain these amounts or set one common amount for all six. Never infer the intended uniform price.

## Adding a cover

1. Convert the corresponding SVG to PNG or JPEG (recommended 1200 × 1600).
2. Open the matching product editor in Gumroad.
3. Upload the correct language-specific image as the first/main cover.
4. Save without publishing.
5. Reopen the product and confirm the cover is visible and matches the language.
6. Record verification date and product link.

## Adding a final book file

Only use a final approved PDF for the matching edition. Do not attach source manuscripts, draft PDFs, sample content or review-candidate artifacts.

1. Complete `docs/EDITORIAL-RELEASE-CHECKLIST.md` for the edition.
2. Verify the PDF filename, language, title, page count and checksum.
3. Open the matching Gumroad product editor and upload the final PDF as the customer deliverable.
4. Confirm the displayed file name and preview.
5. Keep product unpublished until all six product/site details and release decisions are reviewed.
6. Never attach one language's PDF to another language product.

## Product publishing safety

- Keep all products unpublished until explicit release authorization.
- Verify EUR pricing, product description, cover, PDF, licence, refund terms and checkout.
- Verify payout settings and seller eligibility in the account itself.
- Never store Gumroad access tokens or buyer information in this repository.
