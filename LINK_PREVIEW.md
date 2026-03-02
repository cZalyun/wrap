# Link Preview Support — Wrap Studios

All public pages now emit fully populated Open Graph and Twitter Card meta tags
in the server-rendered HTML `<head>`, so chat apps (Messenger, WhatsApp, iMessage,
Telegram, Slack, LinkedIn, X/Twitter) can render preview cards without executing
JavaScript.

---

## Configuration

Central config lives in **`src/lib/seo.ts`**:

| Export | Purpose |
|---|---|
| `SITE_BASE_URL` | Fully-qualified production URL (no trailing `/`) |
| `DEFAULT_OG_IMAGE_PATH` | Site-relative path to the fallback 1200×630 share image |
| `OG_IMAGE_WIDTH / HEIGHT` | Declared image dimensions (1200 × 630) |
| `absoluteUrl(path)` | Converts a site-relative path to an absolute URL |
| `resolveOgImage(path?)` | Returns an absolute URL; SVGs automatically fall back to the default image |
| `truncateDescription(text)` | Clamps descriptions to ≤ 155 characters |
| `buildWorkDescription(cat, year, subtitle)` | Builds a rich work-detail description |

**Update `SITE_BASE_URL`** when you move to a custom domain (e.g. `https://wrapstudios.com`).

---

## Pages covered

| Route | Title | Description | OG Image |
|---|---|---|---|
| `/` (EN home) | Wrap Studios \| … tagline | Default site description | `og-default.jpg` |
| `/hu/` (HU home) | Wrap Studios \| … tagline | HU site description | `og-default.jpg` |
| `/work` | Our Work. \| Wrap Studios | "A curated selection…" | `og-default.jpg` |
| `/hu/work` | Munkáink. \| Wrap Studios | "Válogatás filmes…" | `og-default.jpg` |
| `/work/[slug]` | {Title} \| Wrap Studios | "Brand Film · 2024 — {subtitle}" | Work `ogImage` → `coverImage` → default |
| `/hu/work/[slug]` | {Cím} \| Wrap Studios | "{Kategória} · {Év} — {alcím}" | same fallback chain |
| `/about` | About Us. \| Wrap Studios | "Founded by filmmakers…" | `og-default.jpg` |
| `/hu/about` | Rólunk. \| Wrap Studios | "Filmes alkotók alapították…" | `og-default.jpg` |
| `/contact` | Let's Talk. \| Wrap Studios | "Got something in mind?…" | `og-default.jpg` |
| `/hu/contact` | Beszéljünk. \| Wrap Studios | "Van valami az eszedben?…" | `og-default.jpg` |

---

## Default OG image

`public/images/og-default.jpg` must be a **real JPEG/PNG at 1200 × 630 px**.
The current file is a placeholder (12 bytes). Generate a proper one:

```bash
# Install canvas once (dev-only)
npm install --save-dev canvas

# Generate the image
node scripts/generate-og-default.mjs
```

Or replace the file manually with your own branded 1200 × 630 JPEG.

> **SVG images are never used as OG images.** `resolveOgImage()` detects `.svg`
> extensions and substitutes `og-default.jpg` automatically.

---

## Per-work share images

Add an `ogImage` field to any `WorkItem` in `src/content/site.config.ts` to
override the default with a dedicated 1200 × 630 share card:

```ts
{
  slug: 'aurora-campaign',
  // ...
  ogImage: '/images/work/aurora-og.jpg',   // ← add this
}
```

Without `ogImage`, the system falls back to `coverImage` (SVG → default), then
to `og-default.jpg`.

---

## Tags emitted per page

```html
<!-- Every public page -->
<title>Aurora Campaign | Wrap Studios</title>
<meta name="description" content="Brand Film · 2024 — A cinematic journey through light and motion" />
<link rel="canonical" href="https://czaunpeterbence.github.io/wrap/work/aurora-campaign" />

<!-- Open Graph -->
<meta property="og:type"              content="article" />
<meta property="og:title"             content="Aurora Campaign | Wrap Studios" />
<meta property="og:description"       content="Brand Film · 2024 — A cinematic journey through light and motion" />
<meta property="og:image"             content="https://czaunpeterbence.github.io/wrap/images/og-default.jpg" />
<meta property="og:image:width"       content="1200" />
<meta property="og:image:height"      content="630" />
<meta property="og:image:alt"         content="Aurora Campaign | Wrap Studios" />
<meta property="og:url"               content="https://czaunpeterbence.github.io/wrap/work/aurora-campaign" />
<meta property="og:site_name"         content="Wrap Studios" />
<meta property="og:locale"            content="en_US" />
<meta property="og:locale:alternate"  content="hu_HU" />

<!-- Twitter / X -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="Aurora Campaign | Wrap Studios" />
<meta name="twitter:description" content="Brand Film · 2024 — A cinematic journey through light and motion" />
<meta name="twitter:image"       content="https://czaunpeterbence.github.io/wrap/images/og-default.jpg" />
<meta name="twitter:image:alt"   content="Aurora Campaign | Wrap Studios" />
```

---

## Quick verification

### 1 — curl (fastest)

```bash
SITE="https://czaunpeterbence.github.io/wrap"

# Home page
curl -s "$SITE/" | grep -E 'og:|twitter:|canonical'

# Work detail
curl -s "$SITE/work/aurora-campaign" | grep -E 'og:|twitter:|canonical'

# Confirm OG image returns 200 and correct content-type
curl -sI "$SITE/images/og-default.jpg" | grep -E 'HTTP|content-type'
```

Expected output for the image check:
```
HTTP/2 200
content-type: image/jpeg
```

### 2 — Platform debuggers (after deploy)

| Platform | Tool URL |
|---|---|
| Facebook / Messenger | https://developers.facebook.com/tools/debug/ |
| LinkedIn | https://www.linkedin.com/post-inspector/ |
| Twitter / X | https://cards-dev.twitter.com/validator |
| Slack | Paste URL in a message, Slack fetches automatically |
| Telegram | `@WebpageBot` — send it your URL |

### 3 — Local dev

```bash
npm run dev
# Then in another terminal:
curl -s "http://localhost:4321/wrap/" | grep 'og:image'
```

Note: during `astro dev`, `Astro.url.origin` resolves to `http://localhost:4321`,
so OG image URLs will point to localhost. This is expected and only affects local
previews. **Built output (`astro build`) uses the production URLs from `site` config.**

---

## Cache invalidation

Link previews are aggressively cached by platforms:

| Platform | Cache TTL |
|---|---|
| Facebook / Messenger | ~30 days — use the [Sharing Debugger](https://developers.facebook.com/tools/debug/) "Scrape Again" button |
| LinkedIn | ~7 days — use [Post Inspector](https://www.linkedin.com/post-inspector/) "Inspect" |
| Twitter / X | ~7 days — use [Card Validator](https://cards-dev.twitter.com/validator) |
| WhatsApp | No official tool; append `?v=2` to the URL temporarily to force a re-fetch |
| iMessage | No invalidation tool; change the URL or wait for cache to expire (~24 h) |
| Telegram | No official tool; use `@WebpageBot` to refresh |
| Slack | Unfurls are cached per-workspace; admins can clear the cache in workspace settings |

### Testing cache-busting without changing the real URL

Append a dummy query param when sharing in testing:
```
https://czaunpeterbence.github.io/wrap/work/aurora-campaign?v=1
```
Remove the param before the final share; it does not affect Astro static routing.

---

## noindex pages

Any page that should not appear in preview cards (admin, staging, private) can
pass `noindex` to `BaseLayout`:

```astro
<BaseLayout noindex={true} locale="en">
```

This emits `<meta name="robots" content="noindex, nofollow" />` and omits all
OG / Twitter tags entirely.

---

## Switching to a custom domain

1. Update `SITE_BASE_URL` in `src/lib/seo.ts`.
2. Update `site` in `astro.config.mjs`.
3. Remove or set `base: '/'` in `astro.config.mjs` if the site is at the root.
4. Rebuild and deploy: `npm run build`.
5. Re-scrape using the platform debugger tools listed above.
