import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), 'utf8');

test('Astro project configuration preserves GitHub Pages project-site routing', () => {
  const config = read('astro.config.mjs');
  assert.match(config, /site:\\s*['"]https:\\/\\/gpldroid\\.github\\.io['"]/);
  assert.match(config, /base:\\s*['"]\\/edubooks['"]/);
  assert.match(config, /output:\\s*['"]static['"]/);
});

test('all public routes and the shared layout exist', () => {
  const routes = [
    'src/pages/index.astro',
    'src/pages/about.astro',
    'src/pages/faq.astro',
    'src/pages/books/index.astro',
    'src/pages/books/[slug].astro',
    'src/pages/privacy.astro',
    'src/pages/terms.astro',
    'src/pages/404.astro'
  ];
  for (const route of routes) assert.ok(existsSync(resolve(root, route)), `Missing route: ${route}`);
  assert.ok(existsSync(resolve(root, 'src/layouts/BaseLayout.astro')));
});

test('shared layout includes accessible mobile navigation and scroll actions', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  assert.match(layout, /MobileTabBar/);
  assert.match(layout, /ScrollControls/);
  assert.match(layout, /id="main"/);
  assert.match(layout, /class="skip-link"/);
  assert.match(layout, /data-scroll-top/);
  assert.match(layout, /data-scroll-bottom/);
  assert.match(layout, /prefers-reduced-motion/);
});

test('responsive design covers mobile, tablet, desktop and large-screen breakpoints', () => {
  const css = read('src/styles/site.css');
  for (const width of [380, 760, 1024, 1440, 1920, 2560]) {
    assert.ok(css.includes(`max-width: ${width}px`) || css.includes(`min-width: ${width}px`), `Missing breakpoint ${width}px`);
  }
  assert.match(css, /\\.mobile-tabbar/);
  assert.match(css, /\\.scroll-controls/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /env\\(safe-area-inset-bottom\\)/);
});

test('catalogue fields and localized category descriptions are consistent', () => {
  const catalog = read('src/data/catalog.ts');
  const home = read('src/pages/index.astro');
  assert.match(catalog, /descriptionEn:\\s*string/);
  assert.match(catalog, /descriptionFr:\\s*string/);
  assert.match(catalog, /descriptionEs:\\s*string/);
  assert.match(home, /category\\.descriptionEn/);
  assert.match(home, /category\\.descriptionFr/);
  assert.match(home, /category\\.descriptionEs/);
});

test('book library requires a localized description, cover, TOC and a bounded PDF sample', () => {
  const catalog = read('src/data/catalog.ts');
  assert.match(catalog, /export type BookTocItem/);
  assert.match(catalog, /toc:\\s*BookTocItem\\[\\]/);
  assert.match(catalog, /previewPdf:\\s*string/);
  assert.match(catalog, /samplePageCount:\\s*number/);
  assert.match(catalog, /samplePageCount < 3 \\|\\| book.samplePageCount > 5/);
  assert.match(catalog, /status === 'published'/);
  assert.match(catalog, /validateBookCatalog/);
});

test('public book pages provide an in-page PDF preview and never render checkout controls', () => {
  const card = read('src/components/books/BookCard.astro');
  const detail = read('src/components/books/BookPreview.astro');
  const viewer = read('src/components/books/PdfViewer.astro');
  const route = read('src/pages/books/[slug].astro');
  assert.match(card, /Read description &amp; preview/);
  assert.match(detail, /Table of contents/);
  assert.match(detail, /PdfViewer/);
  assert.match(viewer, /<iframe/);
  assert.match(viewer, /Open PDF in new tab/);
  assert.match(route, /status === 'published'/);
  for (const source of [card, detail, viewer, route]) {
    assert.doesNotMatch(source, /gumroadUrl|paypalUrl|downloadUrl|Buy with Gumroad|Pay with PayPal|Access digital file/);
  }
});

test('draft manuscripts are not automatically promoted into the public catalogue', () => {
  const catalog = read('src/data/catalog.ts');
  assert.match(catalog, /export const books: Book\\[\\] = \\[\\];/);
  assert.doesNotMatch(catalog, /status:\\s*'published'/);
});

test('application source contains no unfinished implementation placeholders', () => {
  const sourceFiles = [
    'src/components/navigation/MobileTabBar.astro',
    'src/components/ui/ScrollControls.astro',
    'src/components/ui/Icon3D.astro',
    'src/components/books/BookCard.astro',
    'src/components/books/BookPreview.astro',
    'src/components/books/PdfViewer.astro'
  ];
  for (const path of sourceFiles) {
    const source = read(path);
    assert.doesNotMatch(source, /TODO|FIXME|write logic here|add rest of code/i, `Placeholder found in ${path}`);
  }
});
