import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const url = 'file:///' + path.join(here, 'index.html').replace(/\\/g, '/');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false });
await page.goto(url, { waitUntil: 'load' });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(here, 'qa', 'nojs.png'), fullPage: true });
await browser.close();
console.log('done');
