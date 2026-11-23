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
  for (const token of ['export type BookTocItem', 'toc: BookTocItem[]', 'previewPdf?: string', 'samplePageCount?: number', 'downloadPdf?: string', 'validateBookCatalog']) {
    assert.ok(catalog.includes(token), `Missing catalogue contract: ${token}`);
  }
  assert.ok(catalog.includes('published samplePageCount must be from 3 to 5'));
  assert.ok(catalog.includes('draft editions must not expose preview or download files'));
  assert.ok(catalog.includes("book.status !== 'draft' && book.status !== 'published'"));
});

test('public book pages provide free browser PDF preview and direct full-PDF download', () => {
  const card = read('src/components/books/BookCard.astro');
  const detail = read('src/components/books/BookPreview.astro');
  const route = read('src/pages/books/[slug].astro');
  const download = read('src/pages/books/[slug]/download.astro');
  const catalog = read('src/data/catalog.ts');
  for (const token of ['data-en="Explore book"', 'review-status', 'data-en="Free PDF"']) assert.ok(card.includes(token), `Missing review-only card action: ${token}`);
  for (const token of ['Table of contents', 'Preview PDF', 'Download PDF', 'book.previewPdf', 'download/']) assert.ok(detail.includes(token), `Missing free PDF reader feature: ${token}`);
  assert.ok(detail.includes('PdfViewer'));
  assert.ok(route.includes("book.status === 'published'"));
  assert.ok(detail.includes("book.status === 'published' && book.previewPdf"));
  assert.ok(!detail.includes('Editorial review in progress'));
  for (const token of ['downloadPdf', 'download', 'Download PDF']) assert.ok(download.includes(token), `Missing direct free download feature: ${token}`);
  assert.ok(!download.includes('setInterval'));
  assert.ok(catalog.includes("book.downloadPdf.startsWith('/books/')"));
  assert.ok(catalog.includes("book.previewPdf.startsWith('/previews/')"));
  for (const source of [card, detail, route, download]) {
    for (const forbidden of ['gumroadUrl', 'paypalUrl', 'Buy with Gumroad', 'Pay with PayPal', 'Access digital file']) {
      assert.ok(!source.includes(forbidden), `Commercial control leaked into public template: ${forbidden}`);
    }
  }
});

test('inner-page typography refinements explicitly exclude the homepage', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  const css = read('src/styles/site.css');
  assert.ok(layout.includes("'home-page' : 'inner-page'"));
  assert.ok(css.includes('body.inner-page .page-hero h1'));
  assert.ok(css.includes('body.inner-page .content-section h2'));
  assert.ok(!css.includes('body.home-page'));
});

test('six free language editions are explicitly published with bounded PDF samples', () => {
  const catalog = read('src/data/catalog.ts');
  assert.ok(catalog.includes("...editions(foundationsBase, 'language-foundations')"));
  assert.ok(catalog.includes("...editions(vocabularyBase, 'essential-vocabulary')"));
  assert.ok(catalog.includes("(['en', 'fr', 'es'] as const)"));
  assert.equal((catalog.match(/status: 'published',/g) ?? []).length, 2);
  assert.ok(catalog.includes("previewPdf: `/previews/${bookSlug}-${language}-sample.pdf`"));
  assert.ok(catalog.includes("downloadPdf: `/books/${bookSlug}-${language}.pdf`"));
  assert.ok(catalog.includes('published samplePageCount must be from 3 to 5'));
  const detail = read('src/pages/books/[slug].astro');
  const sitemap = read('src/pages/sitemap.xml.ts');
  assert.ok(detail.includes("book.status === 'published'"));
  assert.ok(sitemap.includes("book.status === 'published'"));
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

test('book library uses a navigable category sidebar and responsive 3D grid', () => {
  const page = read('src/pages/books/index.astro');
  const card = read('src/components/books/BookCard.astro');
  for (const token of ['category-sidebar', 'category-nav', 'data-category-link', 'aria-current', 'visibleCategories', 'catalog-layout', 'book-grid']) {
    assert.ok(page.includes(token), `Missing library layout feature: ${token}`);
  }
  for (const token of ['perspective:', 'transform-style:preserve-3d', 'rotateX(', 'prefers-reduced-motion', '@media(max-width:760px)']) {
    assert.ok(page.includes(token) || card.includes(token), `Missing 3D/responsive behavior: ${token}`);
  }
  assert.ok(page.includes('window.addEventListener(\'popstate\''));
  assert.ok(page.includes('history.pushState'));
  assert.ok(!page.includes('category-chips'));
});


test('published library pages include contextual SEO metadata and live reader links', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  const home = read('src/pages/index.astro');
  const library = read('src/pages/books/index.astro');
  const detail = read('src/pages/books/[slug].astro');
  const preview = read('src/components/books/BookPreview.astro');
  for (const token of ['name="keywords"', 'rel="canonical"', 'hreflang', 'application/ld+json']) assert.ok(layout.includes(token));
  for (const token of ['Free Educational Books', 'books/', 'language-foundations', 'essential-vocabulary']) assert.ok(home.toLowerCase().includes(token.toLowerCase()));
  assert.ok(library.includes('visibleCategories'));
  assert.ok(preview.includes('PdfViewer'));
  assert.ok(preview.includes('related-editions'));
  assert.ok(!library.includes('results-total'));
  assert.ok(!library.includes('category-count'));
  assert.ok(!home.includes('publication-index'));
  assert.ok(!home.includes('practice-number'));
});
