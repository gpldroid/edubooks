import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

test('catalogue defines both titles in EN, FR and ES', () => {
  const catalog = read('src/data/catalog.ts');
  assert.match(catalog, /editions\(foundationsBase, 'language-foundations'\)/);
  assert.match(catalog, /editions\(vocabularyBase, 'essential-vocabulary'\)/);
  assert.match(catalog, /\['en', 'fr', 'es'\] as const/);
  assert.equal((catalog.match(/status: 'draft'/g) ?? []).length, 2);
});

test('every review-only language edition has a clearly marked cover asset', () => {
  const languages = ['en', 'fr', 'es'];
  const titles = ['language-foundations', 'essential-vocabulary'];
  for (const title of titles) {
    for (const language of languages) {
      const path = `public/covers/${title}-${language}.svg`;
      assert.ok(existsSync(path), `Missing cover: ${path}`);
      const svg = read(path);
      assert.match(svg, /PREPARED FOR REVIEW/);
      assert.match(svg, /Not approved for public distribution/);
    }
  }
});

test('draft catalogue entries cannot expose PDF files or download actions', () => {
  const catalog = read('src/data/catalog.ts');
  const card = read('src/components/books/BookCard.astro');
  const detail = read('src/components/books/BookPreview.astro');
  const download = read('src/pages/books/[slug]/download.astro');
  assert.match(catalog, /draft editions must not expose preview or download files/);
  assert.match(card, /review-status/);
  assert.doesNotMatch(card, /downloadUrl/);
  assert.match(detail, /book\.status === 'published' && book\.previewPdf/);
  assert.match(detail, /Editorial review in progress/);
  assert.match(download, /books\.filter\(\(book\) => book\.status === 'published'\)/);
});

test('draft detail pages are noindex and are excluded from the sitemap', () => {
  const detail = read('src/pages/books/[slug].astro');
  const layout = read('src/layouts/BaseLayout.astro');
  const sitemap = read('src/pages/sitemap.xml.ts');
  assert.match(detail, /noindex,follow/);
  assert.match(detail, /hreflang|alternates/);
  assert.match(layout, /rel="alternate" hreflang=/);
  assert.match(sitemap, /book\.status === 'published'/);
});
