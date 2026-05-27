# Website UI kit

Marketing website for BF Property, built to mirror the R&B Build site coverage in BF Property's voice. Uses **Flowkit v2** conventions so the markup is essentially copy-and-paste into Webflow's HTML import.

## Page inventory

| Page | Path | Purpose |
| --- | --- | --- |
| Home | `index.html` | Hero, process, projects, signature, contact |
| About | `about.html` | Story, we-are/we-are-not, team (placeholder bios), trust strip |
| Contact | `contact.html` | Full lead-qualifying form + what-happens-next |
| FAQ | `faq.html` | 11 questions drafted from the brief, accordion |
| Sell us your land | `sell-your-land.html` | Three paths + free land assessment form |
| Privacy | `privacy.html` | Placeholder policy |
| Terms | `terms.html` | Placeholder terms |
| 404 | `404.html` | Custom not-found page |
| Services index | `services/index.html` | All eight services + decision guide |
| Design &amp; Build | `services/design-and-build.html` | Core BF service |
| Multi-unit &amp; townhouses | `services/multi-unit-townhouses.html` | Most common BF project type |
| Medium-density | `services/medium-density.html` | 5&ndash;12 unit developments |
| Subdividing | `services/subdividing.html` | Subdivide + build |
| Custom design | `services/custom-design.html` | One-of-one homes with an architect |
| Knock-down-and-rebuild | `services/knock-down-rebuild.html` | Replace + densify on same title |
| House and land | `services/house-and-land.html` | BF-sourced packages |
| Projects index | `projects/index.html` | Filterable grid + archive list |
| Project · Halswell | `projects/halswell-three-unit.html` | Sample case study (handed over) |
| Project · Riccarton | `projects/riccarton-duplex.html` | Sample case study (in build) |
| Project · Linwood | `projects/linwood-terrace.html` | Sample case study (consented) |
| Journal index | `journal/index.html` | Long-form post listing |
| Journal · Market notes | `journal/what-changed-in-canterbury-2026.html` | Sample post |
| Journal · Worked example | `journal/subdivide-then-sell-vs-subdivide-then-build.html` | Sample post |

**Total: 23 pages.**

## Architecture

| File | Role |
| --- | --- |
| `_chrome.js` | Shared header / nav / footer / sticky CTA. Injected on every page. Pages declare their depth via `<script ... data-root="" defer>` (top-level) or `data-root=".."` (sub-page). |
| `_chrome-source.html` | Canonical markup of what `_chrome.js` injects, for the Webflow team to copy into Webflow's symbol/component. *(see below)* |
| `_page.css` | All page-level component styles &mdash; hero, process, project, journal, faq, etc. Loaded by every page after `flowkit-tokens.css`. |
| `index-v1-handrolled.html` | Original hand-rolled `.bf-*` version, kept for reference. The Flowkit-aligned files are the canonical ones. |

## How a page is composed

Every page has this minimal structure:

```html
<!doctype html>
<html lang="en-NZ">
<head>
  <!-- title, description, OG meta -->
  <link rel="stylesheet" href="../../webflow/flowkit-tokens.css">
  <link rel="stylesheet" href="_page.css">
  <script src="https://unpkg.com/lucide@latest" defer></script>
  <script src="_chrome.js" data-root="" defer></script>
</head>
<body data-screen-label="...">
  <main id="main">
    <!-- the actual content sections -->
  </main>
</body>
</html>
```

`_chrome.js` injects the skip link, header, footer, and sticky CTA on load. Sub-page paths (`services/`, `projects/`, `journal/`) set `data-root=".."` so the chrome links resolve correctly.

## The always-visible CTA

Two surfaces:

1. **Header `Get in touch` button** &mdash; sticky at the top of every page. Never goes away.
2. **Sticky bottom-right CTA pill** &mdash; appears after 600px of scroll, dismissible per-session. Soft prompt to start a conversation without nagging.

## The lead-qualifying form

Lives on `contact.html` and a slightly different version on `sell-your-land.html`. Both ask qualifying questions designed for the BF audience:

- About you &mdash; decision-maker, trust/joint
- About the site &mdash; have it, looking, owner type
- About the build &mdash; budget range, timing, scope
- Anything else worth knowing &mdash; freeform

The contact-page version is calibrated to filter serious enquiries; the sell-your-land version is calibrated to elicit enough information to write a free written feasibility note.

## Sections it contains (each is a reusable Webflow block)

| Block | Webflow class anatomy |
| --- | --- |
| Header / nav | `header.nav > nav_container > (nav_logo, ul.nav_links > li > a.nav_link, a.button)` |
| Hero | `section > container > (eyebrow + hero_grid)` |
| Page hero (inner pages) | `section.page-hero > container > (eyebrow + page-hero_grid)` |
| Full-bleed image | `div.hero_image > img` |
| Process | `section.is-secondary > container > (process_head, ol.process_steps > li.process_step)` |
| Services grid | `ul.service-grid > li > a.service-card` |
| Projects grid | `div.projects_grid > article.project > (project_link > project_image-wrap, tag, h3, project_meta)` |
| Project case study spec | `aside.project-spec > dl > div > (dt, dd)` |
| Gallery | `div.gallery_grid > figure.gallery_item > (img, figcaption)` |
| Project filters | `div.project-filters > button.project-filter[.is-active] > span` |
| Archive list | `div.archive_list > div.archive_row > (archive_year, archive_name, archive_when)` |
| About we-are/we-are-not | `div.comparison_grid > div.comparison_col > (h3, ul.comparison_list)` |
| Team | `div.team_grid > article.team_card > (team_card-image-placeholder, h3, team_card-role, p)` |
| FAQ accordion | `div.faq_list > details.faq_item > (summary.faq_summary, div.faq_a)` |
| Lead-qualifying form | `div.lead-form_grid > (form.lead-form, aside.lead-form_aside)` |
| Signature band | `section > container > signature_grid` (flat parchment) |
| Contact strip | `section > container > contact_grid > (form.contact_form, aside.contact_aside)` |
| Footer | `footer.footer > container > (footer_cta, divider, footer_grid, footer_base)` |
| Sticky CTA pill | `aside.bf-sticky-cta > .bf-sticky-cta_inner > (copy, button, close)` |

## Recreating in Webflow

1. Set up the three variable collections per `/webflow/README.md` &sect; 1.
2. Style HTML tags (Body, H1&ndash;H6, All Paragraphs) per &sect; 2.
3. Build `/webflow/styleguide.html` as a Style Guide page in Webflow first &mdash; it covers every component.
4. Build the **header** and **footer** as a Webflow symbol &mdash; everything in `_chrome.js`.
5. Build the **hero**, **process**, **services**, **projects**, **contact**, **journal** sections as Webflow components.
6. Compose each page by dropping the relevant components in.
7. Push the foundation as a Shared Library when the homepage is signed off.

## Recommendations for the Webflow build

Beyond what's mirrored from R&B Build, these are standard 2026 best-practice additions for a class-leading marketing site:

- **Webflow Variables for all design tokens** &mdash; never hardcoded values. See `webflow/README.md`.
- **Page-level meta** set per page in Page Settings, not globally.
- **Open Graph image per page** &mdash; use the project hero photo for project pages, the BF building shot for company pages, the logo for utility pages.
- **Custom 404** &mdash; included at `404.html`. Set as the custom 404 in Webflow Site Settings.
- **Sitemap submission** to Google Search Console after launch.
- **Disable indexing on the `.webflow.io` staging subdomain** to avoid duplicate-content penalties.
- **Schema markup** &mdash; `LocalBusiness` on all pages, `Article` on journal posts, optional `RealEstateListing` on project case studies if you want them in Google's rich results.
- **Webflow Audit Panel** run on every page before publish &mdash; zero critical issues is the bar.
- **Lighthouse audit** &mdash; aim for &ge; 90 across Performance, Accessibility, Best Practices, SEO.
- **Webflow Optimize** for A/B testing CTA copy on the contact form (we recommend testing *Start a conversation* vs *Request a feasibility* over a 30-day window once traffic is meaningful).
- **Form submissions** routed to a real inbox &mdash; not the default Webflow form notifications. Tie into your CRM if you have one, or to a shared `hello@` mailbox if not.
- **Cookie consent** &mdash; only needed if you eventually add analytics. The current site doesn't.
- **Shared Library** &mdash; once the homepage and one service page are signed off, push the foundation as a workspace Library so any future micro-site (campaign landing, project sub-site) installs the system in one click.

## Not yet built (open as separate HTML files in this folder)

- Project archive detail pages beyond the three sample case studies
- Additional journal posts as the team writes them
- A campaign / lead-magnet landing template (e.g. *Free feasibility week*) if you start running ads
