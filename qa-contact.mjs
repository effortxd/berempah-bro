import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const url = 'file:///' + path.join(here, 'contact.html').split(path.sep).join('/');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
await page.goto(url);
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(here, 'qa', 'contact.png'), fullPage: true });
await browser.close();
console.log('shot done');
