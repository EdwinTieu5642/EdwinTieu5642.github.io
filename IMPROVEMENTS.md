# Site Improvements

## Should fix
1. **`/projects` page is dead/embarrassing** — it's unlinked (nav uses `/#projects` anchor on the homepage instead) but still publicly reachable, and shows placeholder content (`"Project one"`, dead `github.com/` links). A recruiter or crawler could land on it. Either delete it or replace it with real content.
2. **No SEO basics** — no `sitemap.xml`, `robots.txt`, Open Graph/Twitter card tags, or JSON-LD `Person` schema. For a portfolio site meant to be found/shared (e.g. linked from LinkedIn), this is low-effort, high-value.
3. **No custom 404 page** — GitHub Pages will serve its default, generic 404.

## Worth doing
4. **Images aren't optimized** — `edwin.jpg` and `WebsiteBackground.jpg` sit raw in `public/` instead of going through Astro's `astro:assets` (`<Image />`), so responsive sizing, width/height (CLS prevention), and lazy loading are missing.
5. **Dead/duplicate CSS** — `.experience-date` is defined twice (second definition just sets `display: none`, so the visible date only comes from `.experience-location`); `.experience-bullets` is styled but never used in markup.
6. **Skill percentages feel arbitrary** — precise numbers like "92%", "86%" on a resume site can read as gimmicky/unverifiable to technical reviewers; a simpler tag/proficiency-tier style might land better. (Subjective — your call.)

## Minor
7. No favicon.ico fallback (only SVG) for older clients/social scrapers.
8. Nav toggle `<button>` has no `type="button"` (harmless here, but good hygiene).
