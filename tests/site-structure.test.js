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
    'src/pages/privacy.astro', 'src/pages/terms.astro', 'src/pages/contact.astro', 'src/pages/404.astro'
  ];
  for (const route of routes) assert.ok(existsSync(resolve(root, route)), 'Missing route: ' + route);
  assert.ok(existsSync(resolve(root, 'src/layouts/BaseLayout.astro')));
});

test('shared layout includes accessible mobile navigation and scroll actions', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  for (const token of ['MobileTabBar', 'ScrollControls', 'id="main"', 'class="skip-link"', 'data-scroll-top', 'data-scroll-bottom', 'prefers-reduced-motion']) {
    assert.ok(layout.includes(token), 'Missing layout feature: ' + token);
  }
});

test('responsive design covers mobile, tablet, desktop and large-screen breakpoints', () => {
  const css = read('src/styles/site.css');
  for (const width of [380, 760, 1024, 1440, 1920, 2560]) {
    assert.ok(css.includes('max-width: ' + width + 'px') || css.includes('min-width: ' + width + 'px'), 'Missing breakpoint ' + width + 'px');
  }
  for (const token of ['.mobile-tabbar', '.scroll-controls', 'prefers-reduced-motion', 'env(safe-area-inset-bottom)']) {
    assert.ok(css.includes(token), 'Missing responsive feature: ' + token);
  }
});

test('homepage language edition links are visually separated', () => {
  const css = read('src/styles/site.css');
  assert.ok(css.includes('.home-edition-links{display:flex'));
  assert.ok(css.includes('gap:8px'));
  assert.ok(css.includes('.home-edition-links a{'));
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
    assert.ok(catalog.includes(token), 'Missing catalogue contract: ' + token);
  }
  assert.ok(catalog.includes('published samplePageCount must be from 3 to 5'));
  assert.ok(catalog.includes('draft editions must not expose preview or download files'));
  assert.ok(catalog.includes("book.status !== 'draft' && book.status !== 'published'"));
});

test('published books open the complete PDF directly in the browser reader without an upload dialog', () => {
  const card = read('src/components/books/BookCard.astro');
  const detail = read('src/components/books/BookPreview.astro');
  const route = read('src/pages/books/[slug].astro');
  const download = read('src/pages/books/[slug]/download.astro');
  const catalog = read('src/data/catalog.ts');
  for (const token of ['data-en="Explore book"', 'free-access-label', 'data-en="Free PDF"']) assert.ok(card.includes(token), 'Missing review-only card action: ' + token);
  for (const token of ['Table of contents', 'Read book online', 'Download PDF', 'book.downloadPdf', 'target="_blank"', 'rel="noopener noreferrer"']) assert.ok(detail.includes(token), 'Missing direct PDF reader feature: ' + token);
  assert.ok(!detail.includes('<dialog'));
  assert.ok(!detail.includes('<iframe'));
  assert.ok(!detail.includes('data-pdf-frame'));
  assert.ok(!detail.includes('showModal()'));
  assert.ok(route.includes("book.status === 'published'"));
  assert.ok(detail.includes("book.status === 'published' && readerUrl"));
  assert.ok(!detail.includes('Editorial review in progress'));
  for (const token of ['downloadPdf', 'download', 'Download PDF']) assert.ok(download.includes(token), 'Missing direct free download feature: ' + token);
  assert.ok(!download.includes('setInterval'));
  assert.ok(catalog.includes('previewPdf:'));
  assert.ok(catalog.includes('sample.pdf'));
  assert.ok(catalog.includes('downloadPdf:'));
  for (const source of [card, detail, route, download]) for (const forbidden of ['gumroadUrl', 'paypalUrl', 'Buy with Gumroad', 'Pay with PayPal', 'Access digital file']) assert.ok(!source.includes(forbidden), 'Commercial control leaked into public template: ' + forbidden);
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
  assert.ok(catalog.includes('previewPdf:'));
  assert.ok(catalog.includes('sample.pdf'));
  assert.ok(catalog.includes('downloadPdf:'));
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
    'src/components/books/BookPreview.astro'
  ];
  for (const path of sourceFiles) {
    const source = read(path);
    assert.doesNotMatch(source, /TODO|FIXME|write logic here|add rest of code/i, 'Placeholder found in ' + path);
  }
});

test('book library uses a navigable category sidebar and responsive 3D grid', () => {
  const page = read('src/pages/books/index.astro');
  const card = read('src/components/books/BookCard.astro');
  for (const token of ['category-sidebar', 'category-nav', 'data-category-link', 'aria-current', 'visibleCategories', 'catalog-layout', 'book-grid']) {
    assert.ok(page.includes(token), 'Missing library layout feature: ' + token);
  }
  for (const token of ['perspective:', 'transform-style:preserve-3d', 'rotateX(', 'prefers-reduced-motion', '@media(max-width:760px)']) {
    assert.ok(page.includes(token) || card.includes(token), 'Missing 3D/responsive behavior: ' + token);
  }
  assert.ok(page.includes("window.addEventListener('popstate'"));
  assert.ok(page.includes('history.pushState'));
  assert.ok(!page.includes('category-chips'));
});

test('published library pages include contextual SEO metadata and live reader links', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  const home = read('src/pages/index.astro');
  const library = read('src/pages/books/index.astro');
  const detail = read('src/pages/books/[slug].astro');
  const preview = read('src/components/books/BookPreview.astro');
  for (const token of ['name="description"', 'rel="canonical"', 'hreflang', 'application/ld+json', '"@type":"WebPage"']) assert.ok(layout.includes(token));
  assert.ok(!layout.includes('name="keywords"'));
  for (const token of ['Free Educational Books', 'books/', 'language-foundations', 'essential-vocabulary']) assert.ok(home.toLowerCase().includes(token.toLowerCase()));
  assert.ok(library.includes('visibleCategories'));
  assert.ok(preview.includes('related-editions'));
  assert.ok(!library.includes('results-total'));
  assert.ok(!library.includes('category-count'));
  assert.ok(!home.includes('publication-index'));
  assert.ok(!home.includes('practice-number'));
});


test('mobile tab bar replaces Explore with a direct, accessible library search destination', () => {
  const nav = read('src/components/navigation/MobileTabBar.astro');
  const icon = read('src/components/ui/Icon3D.astro');
  const library = read('src/pages/books/index.astro');
  assert.ok(nav.includes("label: 'Search'"));
  assert.ok(nav.includes("route('books/#book-search')"));
  assert.ok(!nav.includes('label: "Explore"'));
  assert.ok(icon.includes('search:'));
  assert.ok(library.includes("window.location.hash==='#book-search'"));
});

test('FAQ explains direct browser PDF reading and links to key library routes', () => {
  const faq = read('src/pages/faq.astro');
  for (const token of ['Read book online', 'complete PDF directly', 'No file upload', 'Download PDF', 'books/', 'terms/', 'contact/', 'data-en=', 'data-fr=', 'data-es=']) {
    assert.ok(faq.includes(token), 'Missing FAQ content or internal link: ' + token);
  }
});

test('Contact is a first-class route and no longer depends on an About-page hash', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  const faq = read('src/pages/faq.astro');
  const about = read('src/pages/about.astro');
  const contact = read('src/pages/contact.astro');
  const sitemap = read('src/pages/sitemap.xml.ts');
  assert.ok(layout.includes('${base}contact/'));
  assert.ok(faq.includes('${base}contact/'));
  assert.ok(contact.includes('Contact the project'));
  assert.ok(!about.includes('id="contact"'));
  assert.ok(!layout.includes('about/#contact'));
  assert.ok(!faq.includes('about/#contact'));
  assert.ok(sitemap.includes("'contact/'"));
});


test('About page describes the ongoing editorial process without claiming completed manual review', () => {
  const about = read('src/pages/about.astro');
  assert.ok(about.includes('Ongoing improvements to accuracy, language quality and usability'));
  assert.ok(!about.includes('before publication'));
  assert.ok(about.includes('appropriate permission'));
});


test('sitemap lists canonical public routes and published editions only', () => {
  const sitemap = read('src/pages/sitemap.xml.ts');
  const robots = read('public/robots.txt');
  for (const token of ['books/', 'about/', 'faq/', 'privacy/', 'terms/', 'contact/', "book.status === 'published'", 'new Set', 'application/xml']) {
    assert.ok(sitemap.includes(token), 'Missing sitemap requirement: ' + token);
  }
  assert.ok(robots.includes('Sitemap: https://gpldroid.github.io/edubooks/sitemap.xml'));
  assert.ok(!sitemap.includes("book.status === 'draft'"));
});

test('shared SEO metadata avoids obsolete keyword stuffing and emits page-specific structured data', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  assert.ok(layout.includes('rel="canonical"'));
  assert.ok(layout.includes('application/ld+json'));
  assert.ok(layout.includes('"@type":"WebPage"'));
  assert.ok(!layout.includes('name="keywords"'));
});


test('published book detail pages emit their Book structured data', () => {
  const detail = read('src/pages/books/[slug].astro');
  assert.ok(detail.includes("'@type': 'Book'"));
  assert.ok(detail.includes('set:html={JSON.stringify(bookSchema)}'));
});

test('informational and legal pages share the editorial typography system', () => {
  for (const route of ['faq.astro', 'about.astro', 'terms.astro', 'privacy.astro']) {
    const page = read('src/pages/' + route);
    assert.ok(page.includes('editorial-content'), route + ' must use the shared editorial content class');
    assert.ok(page.includes("BaseLayout"), route + ' must use the shared site layout');
  }
  const contact = read('src/pages/contact.astro');
  assert.ok(contact.includes('editorial-contact-panel'), 'Contact route must use the shared editorial panel');
  assert.ok(contact.includes('Contact the project'));
  assert.ok(!read('src/pages/about.astro').includes('id="contact"'), 'Contact must not remain an About-page anchor');
  const css = read('src/styles/site.css');
  for (const token of ['.editorial-content', '.editorial-contact-panel', 'font-family: inherit', 'line-height: 1.85']) {
    assert.ok(css.includes(token), 'Missing editorial style token: ' + token);
  }
});
