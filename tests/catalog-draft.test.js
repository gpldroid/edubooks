import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

test('catalogue exposes six free editions in EN, FR and ES', () => {
  const catalog = read('src/data/catalog.ts');
  assert.ok(catalog.includes("editions(foundationsBase, 'language-foundations')"));
  assert.ok(catalog.includes("editions(vocabularyBase, 'essential-vocabulary')"));
  assert.ok(catalog.includes("(['en', 'fr', 'es'] as const)"));
  assert.equal((catalog.match(/status: 'published',/g) ?? []).length, 2);
  assert.ok(catalog.includes("previewPdf: `/previews/${bookSlug}-${language}-sample.pdf`"));
  assert.ok(catalog.includes("downloadPdf: `/books/${bookSlug}-${language}.pdf`"));
});

test('every published edition has a localized free-PDF cover asset', () => {
  for (const title of ['language-foundations', 'essential-vocabulary']) {
    for (const language of ['en', 'fr', 'es']) {
      const path = `public/covers/${title}-${language}.svg`;
      assert.ok(existsSync(path), `Missing cover: ${path}`);
      const svg = read(path);
      assert.match(svg, /FREE PDF EDITION/);
      assert.match(svg, /Free browser preview and download/);
      assert.doesNotMatch(svg, /PREPARED FOR REVIEW|Not approved for public distribution/);
    }
  }
});

test('published catalogue editions expose both preview and full PDF paths', () => {
  const catalog = read('src/data/catalog.ts');
  const detail = read('src/components/books/BookPreview.astro');
  const download = read('src/pages/books/[slug]/download.astro');
  assert.match(catalog, /published editions require a safe PDF preview/);
  assert.match(catalog, /published editions require a full PDF/);
  assert.match(detail, /Preview PDF/);
  assert.match(detail, /Download PDF/);
  assert.ok(download.includes('book.downloadPdf'));
  assert.match(download, /Download PDF/);
});
