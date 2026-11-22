import { expect, test } from '@playwright/test';

const homePath = '/edubooks/';

test('does not create horizontal overflow at target device widths', async ({ page }, testInfo) => {
  const widths = [320, 360, 390, 430, 768, 1024, 1280, 1366, 1440, 1920, 2560];

  for (const width of widths) {
    await page.setViewportSize({ width, height: width >= 1920 ? 1080 : 900 });
    await page.goto(homePath);
    await page.evaluate(() => document.fonts.ready);
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth
    }));
    expect(
      dimensions.document,
      `Horizontal overflow at viewport width ${width}px: ${JSON.stringify(dimensions)}`
    ).toBeLessThanOrEqual(dimensions.viewport + 1);
    if ([390, 768, 1366, 1920, 2560].includes(width)) {
      await page.screenshot({
        path: testInfo.outputPath(`responsive-${width}.png`),
        fullPage: true,
        animations: 'disabled'
      });
    }
  }
});

test('shows the five-item mobile tab bar only on compact layouts', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homePath);
  const tabBar = page.locator('[data-mobile-tabbar]');
  await expect(tabBar).toBeVisible();
  await expect(tabBar.locator('a')).toHaveCount(5);
  await expect(tabBar.locator('[aria-current="page"]')).toContainText('Home');
  await expect(tabBar.locator('.icon-3d')).toHaveCount(5);

  await page.setViewportSize({ width: 1024, height: 900 });
  await expect(tabBar).toBeHidden();
});

test('mobile menu opens, closes with Escape, and exposes its state', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homePath);
  const toggle = page.locator('.menu-toggle');
  const nav = page.locator('#primary-nav');

  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await expect(nav).toHaveClass(/open/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(toggle).toHaveAttribute('aria-label', 'Close navigation');

  await page.keyboard.press('Escape');
  await expect(nav).not.toHaveClass(/open/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('scroll controls move to page top and bottom accessibly', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homePath);
  const controls = page.locator('[data-scroll-controls]');
  const top = page.locator('[data-scroll-top]');
  const bottom = page.locator('[data-scroll-bottom]');

  await expect(top).toBeHidden();
  await page.evaluate(() => window.scrollTo(0, 420));
  await expect(controls).toHaveClass(/is-visible/);
  await expect(top).toBeVisible();
  await bottom.click();
  await expect(bottom).toBeHidden();
  await top.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(10);
});

test('reduced-motion preference disables smooth page scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homePath);
  const behavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(behavior).toBe('auto');
});


test('mobile language selector is positioned above scroll controls', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homePath);
  await page.evaluate(() => window.scrollTo(0, 420));
  const language = page.locator('[data-language-widget]');
  const controls = page.locator('[data-scroll-controls]');
  await expect(language).toBeVisible();
  await expect(controls).toHaveClass(/is-visible/);
  const languageBox = await language.boundingBox();
  const controlsBox = await controls.boundingBox();
  expect(languageBox).not.toBeNull();
  expect(controlsBox).not.toBeNull();
  expect(languageBox!.y + languageBox!.height).toBeLessThan(controlsBox!.y);
});

test('mobile tab routes are unique and remain inside the configured site base', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homePath);
  const hrefs = await page.locator('[data-mobile-tabbar] a').evaluateAll((links) =>
    links.map((link) => (link as HTMLAnchorElement).getAttribute('href'))
  );
  expect(hrefs).toEqual([
    '/edubooks/',
    '/edubooks/#categories',
    '/edubooks/books/',
    '/edubooks/faq/',
    '/edubooks/about/'
  ]);
  expect(new Set(hrefs).size).toBe(hrefs.length);
  expect(hrefs.every((href) => href?.startsWith('/edubooks/') && !href.startsWith('/edubooks/edubooks/'))).toBe(true);
});

test('footer social icons keep fixed touch targets and wrap without overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto(homePath);
  const icons = page.locator('.social-icons .social-icon');
  await expect(icons).toHaveCount(7);
  const dimensions = await icons.first().evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { width: rect.width, height: rect.height, display: getComputedStyle(element).display };
  });
  expect(dimensions.width).toBe(43);
  expect(dimensions.height).toBe(43);
  expect(dimensions.display).toBe('inline-grid');
});
