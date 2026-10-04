// @ts-check
import { defineConfig } from 'astro/config';

// User site (repo named <username>.github.io) served from the custom domain set
// in the repo's GitHub Pages settings — serves from the domain root, so no
// `base` is needed. `site` drives the canonical/OG URLs, JSON-LD, and sitemap.
export default defineConfig({
  site: 'https://edwintieu.com',
});
