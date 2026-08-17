# Roadmap & handover

Written for the Berempah Bros team. Ordered by business value per unit of effort,
not by technical interest.

---

## Timeline at a glance

> **Do this first — the site is currently offline.** The repo is public again, but
> GitHub Pages needs re-enabling: **Settings → Pages → Deploy from branch →
> `gh-pages` / root**. Until then the URL returns 404.

| When | Focus | Who | Effort |
|------|-------|-----|--------|
| **This week** | Bring the site back online; activate forms; turn on GA4; claim Search Console + Business Profiles; send the missing content (6th outlet, IG links, catering sign-off) | Client | ~1 hour |
| **Week 1–2** | Drop in supplied content; turn CI on; custom domain; move Crunch Club to a real mailing list | Dev | ~2 days |
| **Weeks 3–4** | Outlet-specific promotions (data layer already supports it) | Dev | 2–3 days |
| **Month 2 — decision point** | Review two weeks of real GA4 data before committing the next build | Both | — |
| **Month 2–3** | Grow: loyalty stamp-card pilot → Oddle loyalty module → evaluate direct ordering (cheapest first) | Both | scoped by data |
| **Optional / later** | Installable PWA (~30 min); push notifications (skip); custom loyalty backend (only if pilot outgrown) | Dev | as needed |
| **At handover** | Transfer repo to a brand GitHub org, brand-owned accounts, 2FA, branch protection | Both | ongoing |

---

## Now live (this phase)

| Capability | What it does for the business |
|---|---|
| Central data file + build | A price is right in one place, everywhere. No more hunting through pages |
| Content dashboard (`/admin/`) | Non-technical staff change menu, outlets, promos and analytics settings; publishes itself |
| Per-outlet pages + local SEO | Each stall can rank for "ayam berempah <neighbourhood>" and appear in map results |
| Conversion tracking | Order clicks, directions, calls, promo clicks, enquiries and signups are measurable |
| Structured catering enquiries | Date, headcount, outlet and occasion arrive together instead of a DM thread |
| Automated test + CI | A broken link, price format or mobile overflow blocks the deploy |
| Runbooks in docs/ | Adding an outlet, changing the menu or shipping a change is a written step-by-step |

---

## Priority 1 — switch on what's already built (client actions, ~1 hour total)

These need accounts, not engineering. Highest value for the least work.

0. **Bring the site back online.** The repo is public but GitHub Pages is off —
   re-enable it (Settings → Pages → `gh-pages` / root). Nothing else matters
   while the URL 404s.
1. **Activate the forms.** One click in the FormSubmit email sitting in
   `berempahbros.general@gmail.com`. Until then contact, catering and Crunch Club
   submissions don't deliver. *This is the single highest-value action outstanding.*
2. **Create the GA4 property**, paste the Measurement ID into the dashboard's
   Settings tab, save. Tracking starts immediately — the events are already wired.
3. **Google Search Console + Business Profile.** Submit the sitemap; claim each
   stall's Business Profile and link it to its outlet page. For a hawker brand,
   Google Maps is a bigger discovery channel than the website itself.
4. **Confirm the 6th outlet's address** so the placeholder card can go.

## Priority 2 — customer database done properly (1–2 days)

Crunch Club signups currently arrive as emails. That works, but it isn't a list
you can send a campaign to.

- Move signups to **MailerLite or Mailchimp** (free to ~1,000 contacts). The form
  swaps to their endpoint — a one-attribute change plus consent copy.
- Value: a "new outlet opening" or "duck confit is back" email to a few hundred
  past customers costs nothing and drives immediate orders. This is the cheapest
  repeat-business lever available.
- Prerequisite: someone owns the sending calendar. A list nobody emails is worth nothing.

## Priority 3 — outlet-specific promotions (2–3 days)

The data layer already supports it; the UI doesn't yet.

- Add `outlets: ["sengkang"]` to a promo entry → it shows only on that outlet's
  page and to visitors who came from that stall's QR code.
- Value: opening specials, slow-day offers, and stall-level A/B tests without
  touching the rest of the site. Directly measurable through the existing
  `promo_click` event with the outlet attached.

## Priority 4 — loyalty / rewards (2–4 weeks, needs a decision first)

The honest assessment: **a full custom loyalty system is the wrong first move.**
It requires accounts, a database, staff training at the counter, and someone
running it — for a hawker stall with a 3-minute queue.

Two realistic paths, cheapest first:

- **Stamp-card via the existing list** (days): QR at the counter → signup → an
  email code after N orders, tracked manually at first. Tests whether customers
  actually want it before anything is built.
- **Oddle's own loyalty module** (if their plan includes it): the brand already
  takes orders through Oddle, so purchase data lives there. Integrating with the
  system that holds the transactions beats building a parallel one.

Build custom only if both are outgrown. When that day comes it needs a backend
(Supabase or similar), and the site stops being purely static — a real step up in
running cost and maintenance.

## Priority 5 — direct ordering / pickup (evaluate, don't assume)

Tempting, but Oddle already handles menu, payments, delivery zones, and the
promo engine. Rebuilding that means owning PCI-adjacent payment flows, refunds
and support.

Recommended: **keep Oddle as the transaction layer**, and spend the effort on the
funnel *into* it (which the analytics now measures). Revisit only if Oddle's
commission genuinely exceeds the cost of running your own stack.

## Priority 6 — PWA / push notifications

Installable + offline is ~30 minutes of work (it was built and rolled back — the
commit is in history at `9fcc7c4`). Push notifications need a push service, and
on iPhone only reach users who install the site to their home screen.

Recommendation: **skip push.** For this audience Instagram reaches more people
with less friction. Add the installable/offline layer if the QR-at-counter flow
becomes a real habit.

---

## Ownership & handover checklist

To transfer to Berempah Bros ownership with the developer staying on as collaborator:

**Repository**
1. GitHub → repo **Settings → General → Transfer ownership** to the Berempah Bros
   account or organisation (an org is better — it survives staff changes).
2. Re-add the developer under **Settings → Collaborators** (Write access).
3. Turn on **branch protection** for `main`: require the CI check to pass.
4. Confirm **Pages** still points at the right branch after transfer.

**Accounts to create under a brand-owned email (not a personal one)**
| Account | Purpose |
|---|---|
| GitHub org | Code + deployment |
| Google Analytics 4 | Traffic and conversions |
| Google Search Console | Search performance, sitemap |
| Google Business Profile | Per-stall map listings |
| Mailing service | Crunch Club list |
| Domain registrar | The domain itself — **register in the brand's name** |
| DigitalOcean (optional) | Hosting, if moving off Pages |

**Access hygiene:** 2FA on the GitHub and Google accounts. The brand Gmail is
now printed on a public site — treat it as production infrastructure.

**Assets:** brand photography and the Meaty Bliss font come from the brand's own
packages. Confirm the font licence covers web embedding before a wide campaign.

---

## What I'd do next, in one line

Activate the forms and GA4 this week, claim the Google Business Profiles, and let
two weeks of real conversion data decide whether loyalty, outlet promos or
direct ordering gets built next — rather than guessing now.
