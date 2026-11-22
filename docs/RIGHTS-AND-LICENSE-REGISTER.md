# EduBooks — Rights and licence register

**Status:** Open control register. This file is not a blanket licence or a declaration that all assets are cleared.

## Publication rule

No book edition may enter the public catalogue until rights and attribution have been checked for the complete edition and all accompanying assets. Technical build success does not establish copyright ownership or permission.

## Required evidence for each edition

| Material | Evidence required | Status |
|---|---|---|
| Manuscript text | Author/rights-holder confirmation and record of any third-party excerpts | Owner confirmation received 2026-11-22 for all six editions; third-party excerpts still require itemized source review |
| Illustrations and cover artwork | Creator, source, licence/permission and required attribution | Pending per asset |
| Fonts | Font family, source and licence compatible with PDF embedding and web use | Review required |
| Icons and interface assets | Source and applicable licence | Review required |
| External quotations or extracts | Exact source, permitted use, attribution and any limits | Pending per occurrence |
| PDF and preview files | Source manuscript commit, production run and checksum | Required at release |

## Asset register template

For each asset, record:
- Asset name and path.
- Creator or rights holder.
- Source URL or creation record.
- Licence or written permission and date.
- Attribution text, if required.
- Allowed uses (website, PDF, cover, preview, social sharing).
- Restrictions and expiry, if any.
- Reviewer and review date.

## Current release restrictions

- Draft catalogue entries may identify editions under review, but must remain clearly marked, noindex, and without preview/download files.
- An edition may change to `published` only after every release gate and owner authorization are documented.
- Internal PDF review candidates must remain GitHub Actions artifacts and must not be copied to `public/`.
- Historical PDFs removed from the public directory are not approved for reuse.
- Do not add a permissive repository-wide `LICENSE` until the owner has selected a licence and confirmed that every included file can be distributed under it.
- Third-party fonts, artwork, icons and quoted material must be documented independently.

## Approval record

The owner confirmed on 2026-11-22 that they hold copyright and distribution rights for the texts and materials used in all six editions and authorize preparation for free publication on EduBooks. This is recorded as an owner declaration in this internal register, not as learner-facing book content. It does not replace itemized asset/source records, independent review, accessibility and PDF proof, or edition-specific release approval.

## Additional owner confirmation — six catalogue covers (2026-11-22)

The owner explicitly confirmed that they hold the rights to use and distribute all six current catalogue covers in `public/covers/` on the EduBooks website and to embed them in the six PDF editions:

- `public/covers/language-foundations-en.svg`
- `public/covers/language-foundations-fr.svg`
- `public/covers/language-foundations-es.svg`
- `public/covers/essential-vocabulary-en.svg`
- `public/covers/essential-vocabulary-fr.svg`
- `public/covers/essential-vocabulary-es.svg`

This owner confirmation is recorded for the six named cover files and stated uses. It does not extend to legacy Gumroad covers, font packages, third-party excerpts or any other asset not named above. Legacy files under `public/images/gumroad-covers/` remain excluded from this website release unless separately cleared.
