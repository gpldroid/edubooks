import { expect, test } from '@playwright/test';

const libraryPath = '/edubooks/books/';

test('book library lists six free PDF language editions', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(libraryPath);
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await expect(page.locator('.book-card')).toHaveCount(6);
  await expect(page.locator('.review-status')).toHaveCount(6);
  await expect(page.locator('.category-count, .results-total')).toHaveCount(0);
  await expect(page.getByText('Free PDF')).toHaveCount(6);
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

test('published edition detail exposes indexable preview and download actions', async ({ page }) => {
  await page.goto('/edubooks/books/language-foundations-en/');
  await expect(page.getByRole('heading', { name: 'Language Foundations' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /index/);
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(4);
  await expect(page.locator('.edition-switch a')).toHaveCount(3);
  await expect(page.getByRole('link', { name: 'Preview PDF' })).toHaveAttribute('href', /language-foundations-en-sample\.pdf$/);
  await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveAttribute('href', /books\/language-foundations-en\/download\/$/);
  await expect(page.getByText('Editorial review in progress')).toHaveCount(0);

  await page.goto('/edubooks/books/language-foundations-en/download/');
  await expect(page.getByRole('heading', { name: 'Download your free PDF.' })).toBeVisible();
  await expect(page.locator('a[download]')).toHaveAttribute('href', /books\/language-foundations-en\.pdf$/);
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
    expect(dimensions.document, `Horizontal overflow at ${width}px`).toBeLessThanOrEqual(dimensions.viewport + 1);
  }
});


test('homepage links directly to all six language editions without decorative card numbering', async ({ page }) => {
  await page.goto('/edubooks/');
  await expect(page.locator('.home-edition-links a')).toHaveCount(6);
  await expect(page.locator('.publication-index, .practice-number')).toHaveCount(0);
  await expect(page.getByRole('link', { name: /Browse all books|Explore learning areas/i })).toBeVisible();
});
