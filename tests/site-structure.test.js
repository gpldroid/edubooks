import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), 'utf8');

test('Astro project configuration preserves GitHub Pages project-site routing', () => {
  const config = read('astro.config.mjs');
  assert.match(config, /site:\s*['"]https:\/\/gpldroid\.github\.io['"]/);
  assert.match(config, /base:\s*['"]\/edubooks['"]/);
  assert.match(config, /output:\s*['"]static['"]/);
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
  assert.match(css, /\.mobile-tabbar/);
  assert.match(css, /\.scroll-controls/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
});

test('the three independent Book 02 language manuscripts remain present', () => {
  for (const language of ['en', 'fr', 'es']) {
    const path = `content/books/02-essential-vocabulary/${language}/manuscript.md`;
    assert.ok(existsSync(resolve(root, path)), `Missing Book 02 ${language} manuscript`);
    assert.ok(read(path).trim().length > 5000, `Book 02 ${language} manuscript unexpectedly short`);
  }
});

test('application source contains no unfinished implementation placeholders', () => {
  const sourceFiles = [
    'src/layouts/BaseLayout.astro',
    'src/components/navigation/MobileTabBar.astro',
    'src/components/ui/ScrollControls.astro',
    'src/components/ui/Icon3D.astro'
  ];
  for (const path of sourceFiles) {
    const source = read(path);
    assert.doesNotMatch(source, /TODO|FIXME|write logic here|add rest of code/i, `Placeholder found in ${path}`);
  }
});
