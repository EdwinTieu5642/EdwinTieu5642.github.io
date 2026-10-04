# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Edwin Tieu's personal portfolio site, built with Astro (v7) and deployed as a GitHub Pages user site (`EdwinTieu5642.github.io`) on the custom domain `https://edwintieu.com` (set in the repo's Pages settings), served from the domain root — no `base` path needed.

## Commands

```
npm run dev       # start dev server
npm run build     # build to dist/
npm run preview   # preview the production build locally
npm run check     # type-check .astro/.ts files (astro check); CI runs this before building
npm run astro     # run the astro CLI directly
```

There is no test suite, linter, or formatter configured in this repo. `@astrojs/check` only supports TypeScript 5–6, so `typescript` is pinned to `^6` — don't bump it to 7 until `@astrojs/check` supports it.

Requires Node >= 22.12.0 (see `package.json` engines).

## Architecture

- **Single-page site**: `src/pages/index.astro` renders the homepage as stacked `<section>`s (hero, about, stats, projects, skills, experience, blog, contact). The header nav (`src/layouts/BaseLayout.astro`) links to these via same-page anchors (`/#projects`, `/#skills`, etc.), not separate routes.
- **Content lives in `src/data/`** as typed arrays, and `index.astro` maps over them: `projects.ts`, `skills.ts`, `experience.ts`, `socials.ts` (used by both the hero icon buttons and the Contact links). To add or edit a project/skill/job, edit the data file, not the markup. Inline SVG icons are defined once in `src/data/icons.ts` and rendered with `src/components/Icon.astro`.
- **`src/layouts/BaseLayout.astro`** is the shared shell: `<head>` meta (description, canonical, Open Graph/Twitter tags with a 1200×630 crop of the hero moon background as the link-preview image), sticky header with a hamburger nav (mobile toggle logic in an inline `<script>`), and footer. It also adds a `js` class to `<html>` via an inline script so CSS can distinguish JS-enabled visitors, and exposes a `head` named slot (`<Fragment slot="head">`) for page-specific `<head>` tags — `index.astro` uses it for the hero image preload and the schema.org `Person` JSON-LD. The layout script also highlights the nav link for the section in view (`aria-current="location"`) via an `IntersectionObserver`; it keys off section `id`s matching the nav `href`s, so keep those in sync. All pages wrap their content in this layout via `<slot />`.
- **`src/pages/sitemap.xml.ts` / `robots.txt.ts`** are static endpoints built from `site` in `astro.config.mjs`. The sitemap's route list is hand-maintained — add any new page to it.
- **Styling** is one global stylesheet (`src/styles/global.css`), no CSS modules/scoped styles or component library. Notable conventions:
  - The site is dark-only (`color-scheme: dark`). All colors are custom properties on `:root` (`--bg-page`, `--bg-card`, `--border-card`, `--accent-cyan`, …); use them rather than hard-coding `hsl(244, …)` values.
  - `main` is constrained to `--max-width: 720px`, but homepage sections use the shared `.section` class, which breaks out full-bleed with `margin: 0 calc(-50vw + 50%)` and paints `--bg-page`; each section re-centers its own content in an inner wrapper (typically `max-width: 960px`–`1100px`). Use `.section` + `.section-title` / `.section-subtitle` for new sections rather than fighting `main`'s max-width.
  - Cards share `.card` (surface, border, radius, padding), `.card-hover` (lift-on-hover), `.card-header` (icon + `h3` row), and `.card-grid` (3 columns, 1 below 800px).
  - Skill bar widths come from an inline `--level` custom property. With JS, `.js .skills:not(.in-view)` holds them at 0 until an `IntersectionObserver` (bottom of `index.astro`) adds `in-view`; without JS they render at full value.
  - Anchor targets get `scroll-margin-top` to clear the sticky header, and a `prefers-reduced-motion` block disables animations/transitions.
- **Assets**: photos (`edwin.jpg`, `WebsiteBackground.jpg`) live in `src/assets/` and go through `astro:assets` (`<Image />` / `getImage()`) for resizing and WebP. Only `favicon.svg` is in `public/`.
- **Deployment**: `.github/workflows/deploy.yml` builds on every push to `main` (`npm ci && npm run check && npm run build`) and deploys `dist/` to GitHub Pages via `actions/deploy-pages`. No preview/staging environment.
