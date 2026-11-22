import { expect, test } from '@playwright/test';

const libraryPath = '/edubooks/books/';

test('book library explains publication status and does not expose draft manuscripts', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(libraryPath);
  await expect(page.getByRole('heading', { name: 'The library is being prepared' })).toBeVisible();
  await expect(page.getByText(/editorial and quality review/i)).toBeVisible();
  await expect(page.locator('.book-card')).toHaveCount(0);
  await expect(page.getByText(/Language Foundations/i)).toHaveCount(0);
  await expect(page.getByText(/Essential Vocabulary/i)).toHaveCount(0);
});

test('library search and category controls remain usable without published books', async ({ page }) => {
  await page.goto(libraryPath);
  await page.getByRole('searchbox', { name: 'Search the library' }).fill('grammar');
  await page.getByLabel('Learning area').selectOption('language-learning');
  await expect(page.locator('.empty-state')).toBeVisible();
  await expect(page.locator('#no-results')).toBeHidden();
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
