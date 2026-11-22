# EduBooks — Rights and licence register

**Status:** Open control register. This file is not a blanket licence or a declaration that all assets are cleared.

## Publication rule

No book edition may enter the public catalogue until rights and attribution have been checked for the complete edition and all accompanying assets. Technical build success does not establish copyright ownership or permission.

## Required evidence for each edition

| Material | Evidence required | Status |
|---|---|---|
| Manuscript text | Author/rights-holder confirmation and record of any third-party excerpts | Pending per edition |
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

- The public catalogue must remain empty until the relevant edition passes every release gate.
- Internal PDF review candidates must remain GitHub Actions artifacts and must not be copied to `public/`.
- Historical PDFs removed from the public directory are not approved for reuse.
- Do not add a permissive repository-wide `LICENSE` until the owner has selected a licence and confirmed that every included file can be distributed under it.
- Third-party fonts, artwork, icons and quoted material must be documented independently.

## Approval record

No edition-level rights approval is recorded by this register. Complete and attach evidence before any public release. Owner sign-off is a separate required gate.
