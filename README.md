# Berempah Bros — Brand Site

Single-file brand website for [Berempah Bros](https://www.instagram.com/berempahbros/) — 16-spice ayam goreng berempah by MasterChef Singapore Season 2 winner Derek Cheong. Six stalls across two brands (Berempah Bros + Gepuk Guys).

## Files

- `index.html` — the site (loads photos from `assets/`, fonts from Google Fonts)
- `deploy.html` — fully self-contained build (all photos + fonts inlined; works offline, drop it on any static host)
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
