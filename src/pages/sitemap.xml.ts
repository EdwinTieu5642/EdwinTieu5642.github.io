import type { APIRoute } from "astro";

// The site is a single page, so the sitemap is hand-rolled rather than pulling
// in @astrojs/sitemap. Add new routes here.
const routes = ["/"];

export const GET: APIRoute = ({ site }) => {
  const urls = routes
    .map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
