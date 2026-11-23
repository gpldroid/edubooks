import { expect, test } from '@playwright/test';

const libraryPath = '/edubooks/books/';

test('book library lists six free PDF language editions', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(libraryPath);
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await expect(page.locator('.book-card')).toHaveCount(6);
  await expect(page.locator('.free-access-label')).toHaveCount(6);
  await expect(page.locator('.category-count, .results-total')).toHaveCount(0);
  await expect(page.locator('.edition-pill')).toHaveCount(6);
  await expect(page.getByRole('link', { name: /download pdf/i })).toHaveCount(0);
  await expect(page.getByText(/Language Foundations/i)).toHaveCount(3);
  await expect(page.getByText(/Essential Vocabulary/i)).toHaveCount(3);
});

test('library search and category controls remain usable with published editions', async ({ page }) => {
  await page.goto(libraryPath);
  const search = page.getByRole('searchbox', { name: 'Search the library' });
  await search.fill('grammar');
  await page.getByRole('link', { name: /Language learning/i }).click();
  await expect(page.locator('#no-results')).toBeVisible();
  await expect(page.locator('.empty-state')).toHaveCount(0);
  await search.fill('');
  await expect(page.locator('#no-results')).toBeHidden();
  await expect(page.locator('.book-card')).toHaveCount(6);
});

test('published edition opens its sample in an on-demand same-page PDF dialog', async ({ page }) => {
  await page.goto('/edubooks/books/language-foundations-en/');
  await expect(page.getByRole('heading', { name: 'Language Foundations' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /index/);
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(4);
  await expect(page.locator('.edition-switch a')).toHaveCount(3);
  const previewButton = page.getByRole('button', { name: 'Preview PDF' });
  await expect(previewButton).toHaveAttribute('aria-haspopup', 'dialog');
  const dialog = page.getByRole('dialog', { name: 'PDF preview' });
  await expect(dialog).toBeHidden();
  const frame = page.locator('[data-pdf-frame]');
  await expect(frame).not.toHaveAttribute('src', /.+/);
  await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveAttribute('href', /books\/language-foundations-en\/download\/$/);
  await expect(page.locator('.related-editions a')).toHaveCount(2);

  await previewButton.click();
  await expect(dialog).toBeVisible();
  await expect(frame).toHaveAttribute('src', /language-foundations-en-sample\.pdf$/);
  await expect(page.locator('[data-pdf-open]')).toHaveAttribute('href', /language-foundations-en-sample\.pdf$/);
  await expect(page.locator('[data-pdf-download]')).toHaveAttribute('href', /language-foundations-en-sample\.pdf$/);

  await page.getByRole('button', { name: /close/i }).click();
  await expect(dialog).toBeHidden();
  await expect(frame).not.toHaveAttribute('src', /.+/);
});

test('book library contains no purchase, checkout or Gumroad links', async ({ page }) => {
  await page.goto(libraryPath);
  await expect(page.locator('a[href*="gumroad"], a[href*="paypal"]')).toHaveCount(0);
  await expect(page.getByText(/Buy with Gumroad|Pay with PayPal|Purchase now|Checkout/i)).toHaveCount(0);
});

test('book library does not overflow on compact and desktop viewports', async ({ page }) => {
  for (const width of [320, 390, 768, 1366, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(libraryPath);
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth
    }));
    expect(dimensions.document, 'Horizontal overflow at ' + width + 'px').toBeLessThanOrEqual(dimensions.viewport + 1);
  }
});

test('homepage links directly to all six language editions without decorative card numbering', async ({ page }) => {
  await page.goto('/edubooks/');
  await expect(page.locator('.home-edition-links a')).toHaveCount(6);
  await expect(page.locator('.publication-index, .practice-number')).toHaveCount(0);
  await expect(page.locator('.hero a.button-3d')).toHaveAttribute('href', '/edubooks/books/');
});

test('mobile tab bar Search opens the catalogue and focuses its search field', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/edubooks/');
  const searchTab = page.locator('.mobile-tabbar a[data-tab-key="search"]');
  await expect(searchTab).toBeVisible();
  await expect(searchTab).toHaveAttribute('href', '/edubooks/books/#book-search');
  await searchTab.click();
  await expect(page).toHaveURL(/\/edubooks\/books\/#book-search$/);
  await expect(page.getByRole('searchbox', { name: 'Search the library' })).toBeFocused();
});

test('generated sitemap contains public routes and all published editions but no drafts', async ({ page }) => {
  const response = await page.goto('/edubooks/sitemap.xml');
  expect(response?.status()).toBe(200);
  expect(response?.headers()['content-type']).toContain('application/xml');
  const xml = await response?.text();
  expect(xml).toContain('https://gpldroid.github.io/edubooks/books/');
  expect(xml).toContain('https://gpldroid.github.io/edubooks/faq/');
  for (const slug of [
    'language-foundations-en', 'language-foundations-fr', 'language-foundations-es',
    'essential-vocabulary-en', 'essential-vocabulary-fr', 'essential-vocabulary-es'
  ]) expect(xml).toContain(`/books/${slug}/`);
  expect(xml).not.toContain('english-starter-a1');
});

test('FAQ internal links resolve to existing public pages', async ({ page }) => {
  await page.goto('/edubooks/faq/');
  for (const href of ['/edubooks/books/', '/edubooks/terms/', '/edubooks/about/#contact']) {
    const link = page.locator(`a[href="${href}"]`).first();
    await expect(link).toBeVisible();
  }
});
