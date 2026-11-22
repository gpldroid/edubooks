# EduBooks Responsive UI and Build-Stability Audit

> **Historical audit snapshot — superseded on 2026-11-22.** This document records an earlier project state and must not be used as the current release checklist. The active distribution policy is the free, website-only PDF library described in [SITE-ONLY-PUBLISHING-MODEL.md](SITE-ONLY-PUBLISHING-MODEL.md). The current catalogue remains empty; unapproved legacy PDFs have been removed from the deployable public directory. See [PROJECT-HANDOVER.md](PROJECT-HANDOVER.md) and [REMAINING-WORK-REGISTER.md](REMAINING-WORK-REGISTER.md) for current status.

**Scope:** Astro site source on `main`, responsive design, navigation, typography, browser behavior, and build validation.  
**Implementation branch:** `feat/responsive-3d-ui-audit`  
**Pull request:** [#10 — Responsive Astro UI, typography and project stability audit](https://github.com/gpldroid/edubooks/pull/10)

## Findings and corrective work

| Finding | Impact | Action |
|---|---|---|
| Global navigation, page chrome and a large global stylesheet were concentrated in `BaseLayout.astro`. | Harder to maintain and safely extend responsive behavior. | Extracted reusable navigation and scroll components; moved legacy CSS and the new responsive layer into separate stylesheets. |
| Fluid typography and device-specific layout rules were incomplete. | Risk of cramped text, oversized sections, or poor use of large screens. | Added fluid type scales, content-width tokens, spacing tokens, and breakpoint rules for compact phones through 2560px displays. |
| The mobile navigation had no persistent bottom quick-navigation pattern. | More friction on small touch devices. | Added a five-item fixed mobile tab bar with active-route state, safe-area padding, language-aware labels, and 3D SVG icons. |
| Long pages had no dedicated page-edge controls. | More scrolling effort on mobile and remote-controlled displays. | Added scroll-to-top and scroll-to-bottom buttons with state-aware visibility and reduced-motion handling. |
| Browser scripts used untyped DOM queries. | Type diagnostics could not protect event handlers and element properties. | Added Astro diagnostics and explicit DOM element types; fixed the existing category description field mismatch on the home page. |
| The project lacked regression tests for core routes and responsive UI behavior. | Layout or route regressions could reach deployment undetected. | Added Node regression tests and Playwright Chromium tests for viewport overflow, mobile navigation, scroll controls, and reduced motion. |
| The repository did not have a committed npm dependency lockfile. | Dependency resolution could drift between builds. | The review workflow generates and commits the lockfile to the isolated review branch; final workflow will use `npm ci` after the lockfile is present. |

## Responsive design targets

| Device class | Test widths |
|---|---:|
| Small phones | 320, 360, 390, 430 px |
| Tablets | 768, 1024 px |
| Laptops | 1280, 1366, 1440 px |
| Desktop / ultrawide | 1920 px |
| Smart TV / large display | 2560 px |

The layout uses CSS breakpoints and fluid values rather than device-specific user-agent detection. Large-screen rules increase readable content width and target size; compact layouts use the bottom tab bar and safe-area spacing. TV support is a large-screen and keyboard-focus optimization, not a claim of certification on every TV browser or remote.

## Interaction and accessibility safeguards

- Semantic `nav`, `button`, and link elements with accessible labels.
- Visible keyboard focus and Escape/outside-click dismissal for the mobile menu.
- `aria-expanded` and `aria-current` state on navigation controls.
- Reduced-motion support for CSS transitions and programmatic scrolling.
- Safe-area insets for mobile devices with display cutouts and home indicators.
- CSS-only depth and icon effects; no additional animation framework.

## Build and validation gates

The pull-request workflow runs:

1. `npm run check` — Astro and TypeScript diagnostics.
2. `npm test` — project structure and regression checks.
3. `npm run build` — production static build.
4. Playwright Chromium viewport and interaction tests.

A successful Chromium viewport suite is not a substitute for testing on physical iOS/Android devices, tablet browsers, and actual Smart TV browsers. Those device checks remain a release QA task.

## Existing product-release dependency

The source catalogue currently exports an empty `books` array and the Books page intentionally displays its preparation message. This is not a build failure; it is a content/release dependency. Before a commercial launch, approved book metadata, cover assets, pricing, checkout URLs and published status must be entered only after editorial, rights, PDF and accessibility approval. Do not publish draft products as a shortcut.

## Release state

This work is isolated in a Draft pull request targeting `main`. Do not merge or deploy it until the latest CI run is green and the visual/device review is accepted. This UI audit does not approve Book 01 or Book 02 content and does not authorize publishing any Gumroad product.
