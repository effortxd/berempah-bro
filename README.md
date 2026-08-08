# Berempah Bros — Brand Site

Multi-page brand website for [Berempah Bros](https://www.instagram.com/berempahbros/) — 16-spice ayam goreng berempah by MasterChef Singapore Season 2 winner Derek Cheong. Six stalls across two brands (Berempah Bros + Gepuk Guys).

## Files

- `index.html` — home (brand structure & copy per the official site doc)
- `story.html`, `menu.html`, `locations.html`, `careers.html`, `contact.html`, `news.html` — inner pages
- `assets/site.css` — shared stylesheet
- `deploy.html` — self-contained snapshot of the home page (photos + fonts inlined)
- `assets/` — brand photography, favicon, touch icon
- `audit.mjs`, `qa*.mjs` — Playwright test scripts (`npm i -D playwright`, then `node audit.mjs`)

## Before launch

Search the HTML for `PLACEHOLDER` comments:

1. Outlet No. 06 card — add the newest stall's address and hours
2. Instagram wall tiles — swap profile links for real post URLs
3. Catering tray cards — confirm contents with the kitchen
4. Crunch Club form — wire to a real mailing service (currently a demo)
5. Promo module — `PROMO` config lives in the last `<script>` block (currently the real BEREMPAH6 first-order code)

## GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. The site is `index.html`.
