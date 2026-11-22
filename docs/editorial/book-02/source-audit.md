# Book 02 — Essential Vocabulary: source audit and edition status

**Status:** Three independent first-draft manuscripts are merged to `main`. A first exercise-to-answer cross-check is complete; two prompt alignment corrections are on PR #27. No edition is approved for sale.

## Verified source and integration

- Original trilingual source preserved in the repository history and on `main`.
- Independent edition integration: [PR #17](https://github.com/gpldroid/edubooks/pull/17).
- Independent manuscripts:
  - `content/books/02-essential-vocabulary/en/manuscript.md` — approximately 2,762 words.
  - `content/books/02-essential-vocabulary/fr/manuscript.md` — approximately 3,106 words.
  - `content/books/02-essential-vocabulary/es/manuscript.md` — approximately 2,905 words.
- Production workflow: `.github/workflows/book-02-independent-editions.yml`.
- Matrix CI: [run #44986040328](https://github.com/gpldroid/edubooks/actions/runs/44986040328) passed all three language jobs and uploaded separate review candidates.

Each manuscript contains twelve units with a localized welcome, learning outcomes, vocabulary in context, language focus, guided practice, answer checks, communicative tasks and self-assessment. A glossary and editorial release note are included. These are working drafts, not finished educational products.

## Unit inventory

| Unit | English | French | Spanish |
|---:|---|---|---|
| 1 | People, Family and Relationships | Personnes, famille et relations | Personas, familia y relaciones |
| 2 | Home and Everyday Objects | La maison et les objets du quotidien | La casa y los objetos cotidianos |
| 3 | Food and Meals | Les aliments et les repas | La comida y las comidas |
| 4 | Clothing and Shopping | Les vêtements et les achats | La ropa y las compras |
| 5 | Daily Routines | Les activités quotidiennes | Las rutinas diarias |
| 6 | Town, Places and Directions | La ville, les lieux et les directions | La ciudad, los lugares y las indicaciones |
| 7 | Travel and Accommodation | Les voyages et l'hébergement | Los viajes y el alojamiento |
| 8 | Work and Study | Le travail et les études | El trabajo y los estudios |
| 9 | The Body and Basic Health Needs | Le corps et les besoins de santé courants | El cuerpo y las necesidades básicas de salud |
| 10 | Weather, Seasons and Leisure | La météo, les saisons et les loisirs | El tiempo, las estaciones y el ocio |
| 11 | Feelings, Preferences and Opinions | Les sentiments, les préférences et les opinions | Los sentimientos, las preferencias y las opiniones |
| 12 | Build Your Vocabulary System | Construire son système de vocabulaire | Crear tu sistema de vocabulario |

## First answer-key cross-check

A first prompt-to-answer crosswalk across all twelve units in EN/FR/ES is recorded in [answer-key-crosscheck-2026-11-22.md](answer-key-crosscheck-2026-11-22.md).

Two alignment issues and one page-layout issue were corrected on PR #27:
1. French Unit 10: the sentence now reads `Aujourd'hui, le temps est ____`, making both accepted answers (*beau* / *ensoleillé*) grammatical.
2. Spanish Unit 9: the body-part clue now specifies `cabeza`, matching the single supplied answer.
3. Spanish editorial note: shortened to reduce the orphaned continuation on the final PDF page; verify the regenerated PDF.

No other obvious prompt/key mismatch was identified in this first pass. Re-run the manuscript checks and PDF proof after PR #27 merges.

## Editorial and production work still required

1. Qualified English, French and Spanish language editing for naturalness, vocabulary frequency, collocations, register and regional usage.
2. Pedagogical review of the A1–A2 learning target, progression, unit balance, review test and assessment criteria.
3. Full review of vocabulary selection and accepted answer variants.
4. Rebuild and inspect the Spanish PDF after shortening the editorial note to prevent a widowed continuation on the final page.
5. Inspect every page of all three PDF proofs; verify page breaks, typography, headers, footers, tables, links and metadata.
6. Complete rights, attribution and licence checks for text, fonts and visual assets.
7. Complete accessibility review, including reading order, tagged structure and screen-reader behaviour.
8. Record reviewer names, dates, decisions, source commit, workflow run and SHA-256 for each approved edition.
9. Keep the matching Gumroad products unpublished until explicit release authorization.

## Release gate

- [x] Three independent EN/FR/ES first-draft manuscripts merged.
- [x] Twelve units in each edition.
- [x] Matrix PDF workflow has previously passed CI and uploaded review candidates.
- [x] First-pass exercise/answer-check crosswalk completed.
- [ ] PR #27 corrections pass CI and fresh PDF builds.
- [ ] Independent professional language review per edition.
- [ ] Pedagogical, rights and accessibility review per edition.
- [ ] Full-page PDF proof and documented sign-off.
- [ ] Explicit owner authorization before commercial release.

**Conclusion:** Book 02 is past the initial writing/integration stage, but remains a first-draft educational product. Technical builds and a first consistency check do not constitute native-level editing, pedagogical approval or release authorization.
