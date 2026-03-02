# Wrap Studios

A production-ready static website built with Astro, Tailwind CSS, and TypeScript. Features multilingual support (EN/HU), light/dark theme, config-driven content, and automatic GitHub Pages deployment.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321/wrap
npm run build      # Output in ./dist/
npm run preview    # Preview production build
```

## Editing Content

All site content is managed through two places:

### 1. Site Config (`src/content/site.config.ts`)

Controls structured content: brand name, navigation, work items, team members, testimonials, and social links. Each field supports per-locale strings via `{ en: '...', hu: '...' }`.

**Adding a new case study:**

```ts
// Add to siteConfig.work array:
{
  slug: 'my-project',
  title: { en: 'My Project', hu: 'Projektem' },
  subtitle: { en: 'A brief tagline', hu: 'Rövid szlogen' },
  category: { en: 'Category', hu: 'Kategória' },
  description: { en: 'Full description...', hu: 'Teljes leírás...' },
  coverImage: '/images/work/my-project.svg',
  year: 2024,
  role: { en: 'Full Production', hu: 'Teljes gyártás' },
  metrics: [
    { label: { en: 'Views', hu: 'Megtekintés' }, value: '1.2M' },
  ],
}
```

Then add a cover image at `public/images/work/my-project.svg` (or any image format). The work index and detail pages are generated automatically.

### 2. Translation Files (`src/i18n/en.json`, `src/i18n/hu.json`)

Contains all UI strings (navigation labels, headings, button text, meta descriptions). Edit these to change any static text on the site.

## Contact Anti-Scraping

Email addresses are never rendered as raw strings in HTML. They are stored as `emailParts: ["user", "domain", "tld"]` in the site config and assembled client-side only when the user clicks "Copy Email".

## Theming

- **Light/Dark mode** with a toggle in the navbar
- Persists choice in `localStorage`
- Respects `prefers-color-scheme` on first visit
- CSS custom properties (`--theme-bg`, `--theme-text`, etc.) switch via `.light`/`.dark` class on `<html>`

## i18n

- English (default): no URL prefix (`/wrap/...`)
- Hungarian: `/wrap/hu/...`
- Language switcher in the navbar preserves the current page
- All strings in `src/i18n/{en,hu}.json`

## Deployment

### GitHub Pages (automatic)

The site deploys automatically on every push to `main` via `.github/workflows/deploy.yml`.

**Setup:**
1. Go to repo Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main`

The workflow installs deps, builds, and deploys using `actions/upload-pages-artifact` and `actions/deploy-pages`.

### SPA Fallback

`public/404.html` implements a redirect-to-index strategy so unknown paths on GitHub Pages don't hard-404. They redirect to the home page instead.

### Base Path

Configured for `/wrap/` in `astro.config.mjs`. Change `base` and `site` if deploying to a different repo name or custom domain.

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── content/
│   └── site.config.ts  # All structured content
├── i18n/
│   ├── en.json       # English translations
│   ├── hu.json       # Hungarian translations
│   └── utils.ts      # i18n helper functions
├── layouts/
│   └── BaseLayout.astro
├── pages/            # File-based routing
│   ├── index.astro
│   ├── work/
│   ├── about.astro
│   ├── contact.astro
│   └── hu/           # Hungarian routes
└── styles/
    └── global.css    # Tailwind + design tokens
```

## Tech Stack

- **Astro** — Static site generator
- **Tailwind CSS v4** — Utility-first styling
- **TypeScript** — Type safety
- **@astrojs/sitemap** — Auto-generated sitemap
