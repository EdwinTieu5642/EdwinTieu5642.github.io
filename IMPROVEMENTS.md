# Site Improvements

## Done
- ~~**Images aren't optimized**~~ — moved to `src/assets/` and served through `astro:assets`. Hero background 1826 KB → 65 KB, profile photo 58 KB → 19 KB (WebP), photo has width/height + lazy loading.
- ~~**Dead/duplicate experience CSS**~~ — removed hidden `.experience-date` spans/rules and unused `.experience-bullets`.
- ~~**Dependency vulnerabilities**~~ — `npm audit fix` cleared 7 of 10; the remaining 3 (critical in `astro`, plus `esbuild`/`sharp`) required upgrading Astro 6 → 7.3.5. `npm audit` now reports 0; build, image optimization, and page scripts verified.

## Should fix
1. **`/projects` page is dead/embarrassing** — it's unlinked (nav uses the `/#projects` anchor on the homepage) but still publicly reachable, and shows placeholder content (`"Project one"`, dead `github.com/` links). Delete it or replace it with real content.
2. **No SEO basics** — no `sitemap.xml`, `robots.txt`, Open Graph/Twitter card tags, or JSON-LD `Person` schema. Without OG tags, sharing the site on LinkedIn gives no preview card.
3. **No custom 404 page** — GitHub Pages serves its generic default.
5. **Hidden mobile nav links are still keyboard-focusable** — the collapsed menu uses `max-height: 0; overflow: hidden`, which hides links visually but leaves them in the tab order, so keyboard users tab through invisible links. Use `visibility: hidden` (or `inert`) while closed. Escape-to-close would also help.

## Worth doing
6. **Non-clickable project cards look clickable** — only the ArchiWalk card is a link, but `.project-card:hover` lifts and highlights all three. Either link the other two (paper, repo, write-up) or limit the hover effect to `a.project-card`.
7. **Pin the Node version** — Astro 6 requires Node ≥ 22.12.0 and won't start on older versions (this happened locally with v20). Add an `.nvmrc` containing `22.12.0` so nvm and CI agree.
8. **Preload the hero image** — it's the largest thing above the fold, but because it's a CSS background set through a custom property, the browser can't find it until CSS is parsed. A `<link rel="preload" as="image">` in the head would speed up first paint. BaseLayout needs a `head` slot for this.
9. **Respect `prefers-reduced-motion`** — the pulsing availability dot, animated skill bars, and hover lift transforms all run regardless of the user's OS motion setting.
10. **Visible focus styles** — there are no `:focus-visible` styles, so the default outline is hard to see on the dark background. Add a skip-to-content link too.
11. **Skill percentages feel arbitrary** — precise numbers like "92%" can read as gimmicky or unverifiable to technical reviewers; tags or proficiency tiers may land better. (Subjective, your call.) Also, with JavaScript disabled the bars stay at 0 width.
12. **Thin description on current role** — the Northrop Grumman engineer entry is one short sentence, while the internships below it have detailed, metric-backed descriptions. The most recent role should probably be the strongest.

## Code health
13. **Repeated section CSS** — `.projects`, `.skills`, `.experience`, `.blog` each have near-identical `-title`/`-subtitle` blocks, and `hsl(244, …)` colors are hardcoded ~20 times. Shared `.section` classes and color tokens on `:root` would shrink `global.css` a lot. The existing `prefers-color-scheme: dark` block is mostly dead since sections hardcode their colors.
14. **Leftover duplicate/unused CSS** — `.project-card:hover` is declared twice; `.project-icon-emoji` and `.intro-text h1` aren't used. (The `.blog-card` styles are unused too, but will be needed once posts exist.)
15. **Layout fights itself** — `main` is capped at 720px, but every section breaks out with `margin: 0 calc(-50vw + 50%)`, which is why `body` needs `overflow-x: hidden`. Dropping the `main` max-width and letting each section center its own content would remove the hack.
16. **Content lives in markup** — projects, skills, and experience are hand-written HTML. Moving them into data arrays (or an Astro content collection, which the blog will need anyway) would make updates a one-line change.
17. **Mobile hero height** — `min-height: calc(100vh - 4rem)` jumps as mobile browser toolbars show/hide; `100svh` avoids this.

## Minor
18. No `favicon.ico` fallback (only SVG) for older clients and social scrapers.
19. Nav toggle `<button>` has no `type="button"`.
