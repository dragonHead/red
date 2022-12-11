import { test } from '@playwright/test';

test('Page Screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');
  await page.screenshot({ path: `example.png` });
});
