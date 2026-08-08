import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const url = 'file:///' + path.join(here, 'index.html').replace(/\\/g, '/');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.locator('#gallery').scrollIntoViewIfNeeded();
await page.waitForTimeout(1800);
const visible = await page.evaluate(() => {
  const tiles = [...document.querySelectorAll('.ig-tile')];
  return tiles.map(t => ({ cls: t.className.replace('ig-tile','').trim(), op: getComputedStyle(t).opacity }));
});
console.log(JSON.stringify(visible));
await page.locator('#gallery').screenshot({ path: path.join(here, 'qa', 'gallery.png') });
await page.locator('#promo').screenshot({ path: path.join(here, 'qa', 'promo.png') });
await browser.close();
console.log('done');
