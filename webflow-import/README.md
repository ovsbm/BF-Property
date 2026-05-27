# BF Property — Webflow import blocks

All 23 pages of the BF Property marketing site, pre-formatted for pasting into Webflow.

## File map

| File | Page |
|------|------|
| `index.html` | Homepage |
| `about.html` | About |
| `contact.html` | Contact (lead-qualifying form) |
| `faq.html` | FAQ |
| `sell-your-land.html` | Sell us your land |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms |
| `404.html` | Custom 404 |
| `services/index.html` | Services overview |
| `services/design-and-build.html` | Design & Build |
| `services/custom-design.html` | Custom design |
| `services/multi-unit-townhouses.html` | Multi-unit & townhouse |
| `services/medium-density.html` | Medium-density developments |
| `services/subdividing.html` | Subdividing |
| `services/knock-down-rebuild.html` | Knock-down-and-rebuild |
| `services/house-and-land.html` | House and land |
| `projects/index.html` | Projects archive |
| `projects/halswell-three-unit.html` | Project · Halswell |
| `projects/riccarton-duplex.html` | Project · Riccarton |
| `projects/linwood-terrace.html` | Project · Linwood |
| `journal/index.html` | Journal index |
| `journal/what-changed-in-canterbury-2026.html` | Journal · Market notes |
| `journal/subdivide-then-sell-vs-subdivide-then-build.html` | Journal · Worked example |

`_chrome-source.html` — canonical nav + footer markup to build as a Webflow symbol.

## Webflow build sequence

Follow `project/webflow/README.md` for the full step-by-step. Short version:

### 1. Set up variables

In **Style panel → Variables**, create three collections:

- **Colors** — all primitives and semantic aliases from `project/webflow/flowkit-tokens.css`
- **Sizes** — the T-shirt scale (`size_xxsmall` through `size_xxlarge`) + container widths + radii
- **Typography** — heading scale, body scale, line heights, tracking values

### 2. Style HTML tags

Set Body, H1–H6, All Paragraphs to match the base styles in `project/webflow/flowkit-tokens.css`.

Inter variable font is at `project/fonts/`. Upload both `Inter-VariableFont_opsz_wght.ttf` and
`Inter-Italic-VariableFont_opsz_wght.ttf` to Webflow's font manager.

### 3. Build the style guide page first

Open `project/webflow/styleguide.html` and build every component shown there as a Webflow
component before touching any content page. This gives you a live reference.

### 4. Build nav + footer as a symbol

Open `_chrome-source.html`. Build the header and footer exactly as shown and save as a
Webflow Symbol. Every page uses it.

Add the page CSS to the site's `<head>` via **Site Settings → Custom Code**:

```html
<link rel="stylesheet" href="[your-site-url]/page.css">
<script src="https://unpkg.com/lucide@latest" defer></script>
```

### 5. Import page content

For each page:

1. Create the page in Webflow with the correct slug.
2. Drop the nav + footer symbols.
3. Between them, add an **HTML Embed** block.
4. Paste the contents of the matching `.html` file from this folder into the embed.
5. Check the page renders correctly against the static preview in `site/`.

### 6. Upload assets

Upload everything from `project/assets/` to Webflow's asset manager. Match filenames
exactly so the HTML embed `src` paths resolve correctly, or do a find-and-replace on the
Webflow CDN URLs after uploading.

## Static preview

The `site/` directory at the repo root is a fully working static preview of the same site.
Open `site/index.html` in a browser (or serve it with any static file server) to check any
page before importing it into Webflow.

```bash
# Quick local preview
npx serve site
# or
python3 -m http.server 8080 --directory site
```
