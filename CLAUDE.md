# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Edwin Tieu's personal portfolio site, built with Astro (v7) and deployed as a GitHub Pages user site (`EdwinTieu5642.github.io`, served from the domain root — no `base` path needed).

## Commands

```
npm run dev       # start dev server
npm run build     # build to dist/
npm run preview   # preview the production build locally
npm run astro     # run the astro CLI directly (e.g. npm run astro check)
```

There is no test suite, linter, or formatter configured in this repo.

Requires Node >= 22.12.0 (see `package.json` engines).

## Architecture

- **Single-page site**: almost all content lives in `src/pages/index.astro` as stacked `<section>`s (hero, about, stats, projects, skills, experience, blog, contact). The header nav (`src/layouts/BaseLayout.astro`) links to these via same-page anchors (`/#projects`, `/#skills`, etc.), not separate routes.
- **`src/pages/projects.astro`** is a separate, unlinked route with placeholder content (fake project names/links). It predates the projects section that now lives on the homepage and has not been kept in sync — treat it as stale unless asked to update or remove it.
- **`src/layouts/BaseLayout.astro`** is the shared shell: `<head>` boilerplate/meta, sticky header with a hamburger nav (mobile toggle logic in an inline `<script>`), and footer. All pages wrap their content in this layout via `<slot />`.
- **Styling** is one global stylesheet (`src/styles/global.css`), no CSS modules/scoped styles or component library. Notable conventions:
  - CSS custom properties on `:root` for colors/fonts, with a `prefers-color-scheme: dark` override block.
  - `main` is constrained to `--max-width: 720px`, but individual homepage sections break out full-bleed with `margin: 0 calc(-50vw + 50%)` and then re-center their own content in an inner wrapper (typically `max-width: 960px`–`1100px`). Follow this pattern when adding new full-width sections rather than fighting `main`'s max-width.
  - Section background color is repeated per-section (`hsl(244, 47%, 6%)`) rather than a shared page background — sections are visually joined but styled independently.
  - Skill proficiency bars are inline-styled via a `data-width` attribute and animated on scroll into view using an `IntersectionObserver` (script at the bottom of `index.astro`).
- **Assets**: images (`edwin.jpg`, `WebsiteBackground.jpg`, `favicon.svg`) live in `public/` and are referenced by absolute path (`/edwin.jpg`), not through `astro:assets`/`<Image />`.
- **Deployment**: `.github/workflows/deploy.yml` builds on every push to `main` (`npm ci && npm run build`) and deploys `dist/` to GitHub Pages via `actions/deploy-pages`. No preview/staging environment.
