import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), 'utf8');

test('Astro project configuration preserves GitHub Pages project-site routing', () => {
  const config = read('astro.config.mjs');
  assert.ok(config.includes("site: 'https://gpldroid.github.io'"));
  assert.ok(config.includes("base: '/edubooks'"));
  assert.ok(config.includes("output: 'static'"));
});

test('all public routes and the shared layout exist', () => {
  const routes = [
    'src/pages/index.astro', 'src/pages/about.astro', 'src/pages/faq.astro',
    'src/pages/books/index.astro', 'src/pages/books/[slug].astro',
    'src/pages/privacy.astro', 'src/pages/terms.astro', 'src/pages/404.astro'
  ];
  for (const route of routes) assert.ok(existsSync(resolve(root, route)), `Missing route: ${route}`);
  assert.ok(existsSync(resolve(root, 'src/layouts/BaseLayout.astro')));
});

test('shared layout includes accessible mobile navigation and scroll actions', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  for (const token of ['MobileTabBar', 'ScrollControls', 'id="main"', 'class="skip-link"', 'data-scroll-top', 'data-scroll-bottom', 'prefers-reduced-motion']) {
    assert.ok(layout.includes(token), `Missing layout feature: ${token}`);
  }
});

test('responsive design covers mobile, tablet, desktop and large-screen breakpoints', () => {
  const css = read('src/styles/site.css');
  for (const width of [380, 760, 1024, 1440, 1920, 2560]) {
    assert.ok(css.includes(`max-width: ${width}px`) || css.includes(`min-width: ${width}px`), `Missing breakpoint ${width}px`);
  }
  for (const token of ['.mobile-tabbar', '.scroll-controls', 'prefers-reduced-motion', 'env(safe-area-inset-bottom)']) {
    assert.ok(css.includes(token), `Missing responsive feature: ${token}`);
  }
});

test('catalogue fields and localized category descriptions are consistent', () => {
  const catalog = read('src/data/catalog.ts');
  const home = read('src/pages/index.astro');
  for (const token of ['descriptionEn: string', 'descriptionFr: string', 'descriptionEs: string']) assert.ok(catalog.includes(token));
  for (const token of ['category.descriptionEn', 'category.descriptionFr', 'category.descriptionEs']) assert.ok(home.includes(token));
});

test('book library requires localized metadata, a TOC and a bounded PDF sample', () => {
  const catalog = read('src/data/catalog.ts');
  for (const token of ['export type BookTocItem', 'toc: BookTocItem[]', 'previewPdf: string', 'samplePageCount: number', 'validateBookCatalog']) {
    assert.ok(catalog.includes(token), `Missing catalogue contract: ${token}`);
  }
  assert.ok(catalog.includes('book.samplePageCount < 3 || book.samplePageCount > 5'));
  assert.ok(catalog.includes("book.status !== 'draft' && book.status !== 'published'"));
});

test('public book pages provide an in-page PDF preview and never render checkout controls', () => {
  const card = read('src/components/books/BookCard.astro');
  const detail = read('src/components/books/BookPreview.astro');
  const viewer = read('src/components/books/PdfViewer.astro');
  const route = read('src/pages/books/[slug].astro');
  for (const [source, token] of [[card, 'Read description &amp; preview'], [detail, 'Table of contents'], [detail, 'PdfViewer'], [viewer, '<iframe'], [viewer, 'Open PDF in new tab']]) {
    assert.ok(source.includes(token), `Missing preview feature: ${token}`);
  }
  assert.ok(route.includes("book.status === 'published'"));
  for (const source of [card, detail, viewer, route]) {
    for (const forbidden of ['gumroadUrl', 'paypalUrl', 'downloadUrl', 'Buy with Gumroad', 'Pay with PayPal', 'Access digital file']) {
      assert.ok(!source.includes(forbidden), `Commercial control leaked into public template: ${forbidden}`);
    }
  }
});

test('draft manuscripts are not automatically promoted into the public catalogue', () => {
  const catalog = read('src/data/catalog.ts');
  assert.ok(catalog.includes('export const books: Book[] = [];'));
  assert.ok(!catalog.includes("status: 'published'"));
});

test('application source contains no unfinished implementation placeholders', () => {
  const sourceFiles = [
    'src/components/navigation/MobileTabBar.astro', 'src/components/ui/ScrollControls.astro',
    'src/components/ui/Icon3D.astro', 'src/components/books/BookCard.astro',
    'src/components/books/BookPreview.astro', 'src/components/books/PdfViewer.astro'
  ];
  for (const path of sourceFiles) {
    const source = read(path);
    assert.doesNotMatch(source, /TODO|FIXME|write logic here|add rest of code/i, `Placeholder found in ${path}`);
  }
});
