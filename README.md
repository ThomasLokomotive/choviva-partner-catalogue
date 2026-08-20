# ChoViva Producer Catalogue — public directory site

A static, self-contained website listing ChoViva producer partners and their
finished products, with search, category filters, a "vegan only" filter, and
Google Analytics 4 (GA4) usage tracking.

## What's in here

```
choviva-partner-catalogue/
├── index.html         # the whole page (structure + content)
├── css/style.css       # styling
├── js/data.js          # producer & product data (edit this to update the catalogue)
├── js/app.js           # search/filter logic + GA4 event tracking
├── images/             # product photos (referenced from js/data.js)
└── README.md           # this file
```

Product images live in `images/` and are referenced per product in
`js/data.js` via the `img` field. To swap or add a product photo, drop the
file in `images/` and point that product's `img` at it.

No build step, no framework, no server-side code required — it's plain
HTML/CSS/JS and can be hosted anywhere that serves static files.

## What was deliberately left out

This site is a **redacted, public-facing version** of the internal Q3 2026
Partner Catalogue. It intentionally excludes:

- Partner contact people / email addresses
- Private-label availability per region
- Regional delivery matrices
- Producer street addresses

Only producer names, categories, product focus, public websites (where
known), product names/sizes, and vegan flags are included — the kind of
information already visible on-shelf via product packaging.

If you ever need to publish additional detail from the internal catalogue,
please re-confirm with whoever owns partner relationships first — some of
that information is confidential business detail, not just formatting.

## 1. Set up Google Analytics (GA4)

The site ships with a **placeholder** GA4 Measurement ID (`G-XXXXXXXXXX`) in
two places inside `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

To wire up real tracking:

1. In Google Analytics, create (or open) a GA4 property for this site:
   Admin → Create Property → follow the setup wizard → add a **Web** data
   stream with this site's eventual URL.
2. Copy the **Measurement ID** shown for that data stream (format
   `G-XXXXXXXXXX`).
3. In `index.html`, replace **both** occurrences of `G-XXXXXXXXXX` with your
   real Measurement ID.
4. Deploy (see below) and confirm traffic shows up under GA4 → Reports →
   Realtime after you load the page.

### What's tracked out of the box

- Standard page views (automatic, via `gtag`)
- `catalogue_search` — fires (debounced) when someone types a search query
- `catalogue_filter` — fires when someone changes the category chip or
  toggles "Vegan only"
- `outbound_click` — fires when someone clicks through to a producer's
  public website

You can see/extend these in `js/app.js` (`trackEvent(...)` calls) and build
GA4 Explorations or a simple Looker Studio report on top of them.

## 2. Deploy it

Because this is a plain static site, any of the following work. Pick
whichever fits your existing hosting setup:

### Option A — Netlify (drag-and-drop, easiest)
1. Go to https://app.netlify.com/drop
2. Drag the whole `choviva-partner-catalogue` folder onto the page.
3. Netlify gives you a live URL immediately. You can add a custom domain
   afterwards under Site settings → Domain management.

### Option B — GitHub Pages
1. Create a new GitHub repo and push this folder's contents to it.
2. Repo → Settings → Pages → Source: deploy from the `main` branch, root
   folder.
3. GitHub gives you a `https://<org>.github.io/<repo>/` URL (or wire up a
   custom domain under the same settings page).

### Option C — Any existing web server / internal hosting
Copy the folder contents to the web root (or a subfolder) of any server
that can serve static files (nginx, Apache, an S3 bucket with static
hosting, an internal CDN, etc.) — nothing else is required.

## 3. Updating the catalogue later

All producer/product content lives in `js/data.js` as a plain JavaScript
array. To add, remove, or edit a producer or product, edit that file
directly — no build step needed, just re-deploy the updated files.

## 4. A note on scope

This directory is intentionally a *lightweight, public-safe* view of the
partner ecosystem. For anything beyond it — private-label deals, contract
terms, delivery details, or specific contact routing — that lives in the
internal catalogue and should stay there.
