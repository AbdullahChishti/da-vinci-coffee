const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const pages = [
    { path: '/', name: 'home' },
    { path: '/menu', name: 'menu' },
    { path: '/philosophy', name: 'philosophy' }
  ];

  for (const { path, name } of pages) {
    await page.goto(`http://localhost:5173${path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: `/Users/abdullah/da-vinci-coffee/screenshot-${name}.png`,
      fullPage: true
    });
    console.log(`✓ Screenshot taken: ${name}`);
  }

  await browser.close();
  console.log('All screenshots saved!');
}

takeScreenshots().catch(console.error);
