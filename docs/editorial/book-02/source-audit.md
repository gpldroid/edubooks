# Book 02 — Essential Vocabulary: source audit for independent editions

**Status:** Source audit only; no monolingual edition has been approved.

The open Book 02 pull request currently provides one integrated English/French/Spanish manuscript. Its opening material and vocabulary tables are multilingual, and it includes language-comparison notes and shared exercises. It must be adapted into three standalone editions before merging the book into the publication pipeline.

## Unit inventory from the current draft PR

| Unit | Source title | Required adaptation |
|---:|---|---|
| 1 | People, Family and Relationships | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 2 | Home and Everyday Objects | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 3 | Food and Meals | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 4 | Clothing and Shopping | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 5 | Daily Routines | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 6 | Town, Places and Directions | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 7 | Travel and Accommodation | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 8 | Work and Study | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 9 | The Body and Health | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 10 | Weather, Seasons and Leisure | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 11 | Feelings, Preferences and Opinions | Rebuild examples, vocabulary presentation, exercises and answer key in target language |
| 12 | Build Your Vocabulary System | Rebuild examples, vocabulary presentation, exercises and answer key in target language |

## Required independent outputs

- `content/books/02-essential-vocabulary/en/manuscript.md`
- `content/books/02-essential-vocabulary/fr/manuscript.md`
- `content/books/02-essential-vocabulary/es/manuscript.md`

## Required changes before production

- Replace trilingual vocabulary tables with target-language learner content. Other languages may appear only as clearly labelled target-language examples where pedagogically justified.
- Rewrite all instructions, review tests, tasks and answer explanations in the edition language.
- Validate articles, gender, plural forms, collocations, register and regional variants independently.
- Build an edition-specific answer key and check every exercise against it.
- Generate separate locale-specific PDF metadata and filenames.
- Keep all three editions unpublished and out of the public catalogue until independent reviews pass.

## Release gate

- [ ] Three standalone manuscripts complete.
- [ ] Independent professional language review per edition.
- [ ] Pedagogical and rights review per edition.
- [ ] PDF proof, text extraction and accessibility checks per edition.
- [ ] Explicit release approval.

**The existing multilingual manuscript is a working source, not three finished books.**