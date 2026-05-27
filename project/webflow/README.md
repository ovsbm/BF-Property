# BF Property × Webflow build reference

The site will be built in Webflow using **Flowkit v2** conventions (the official Webflow framework, recommended default for new builds in 2026). This folder is the bridge between the locked BF Property design tokens and Flowkit's variable + class vocabulary.

## What's in here

| File | Purpose |
| --- | --- |
| `flowkit-tokens.css` | All BF tokens rewritten in Flowkit's naming convention — variables, utility classes, component classes. Drop-in CSS reference for the Webflow build. |
| `styleguide.html` | Live style guide page demonstrating every component with its Flowkit class name visible. Build this page **first** in Webflow as the source of truth. |

The refactored marketing site at `../ui_kits/website/index.html` uses these same class names so the HTML is essentially copy-and-paste into Webflow's HTML import.

---

## 1. Webflow Variable collections to set up

In **Style panel → Variables**, create three collections matching the values in `flowkit-tokens.css`:

### Colors

Primitives (raw palette — six locked colours, May 2026):

| Variable | Value |
| --- | --- |
| `color_parchment` | `#F8F6F2` |
| `color_cream` | `#F1EBDF` |
| `color_cream-warm` | `#E8E1D3` |
| `color_ink` | `#1A1A1A` |
| `color_red` | `#BD1E1E` |
| `color_red-hover` | `#D42424` |
| `color_oxblood` | `#2A0200` |
| `color_oxblood-hover` | `#4B0300` |

Semantics (alias the primitives — this is what components consume):

| Variable | Alias of | Role |
| --- | --- | --- |
| `background_primary` | `color_parchment` | **DEFAULT** page surface |
| `background_secondary` | `color_cream` | DIFFERENTIATION — sections and cards that need to stand apart |
| `background_tertiary` | `color_cream-warm` | deepest neutral, rare |
| `background_parchment` | `color_parchment` | explicit alias |
| `background_cream` | `color_cream` | explicit alias |
| `background_accent-primary` | `color_red` |  |
| `background_accent-secondary` | `color_oxblood` |  |
| `background_inverse` | `color_ink` |  |
| `text_primary` | `color_ink` |  |
| `text_secondary` | `color_ink` @ 60% alpha |  |
| `text_on-accent-primary` | `color_cream` |  |
| `text_on-accent-secondary` | `color_cream` |  |
| `text_on-inverse` | `color_cream` |  |
| `link` | `color_red` |  |
| `link-hover` | `color_red-hover` |  |
| `border_subtle` | `color_ink` @ 15% alpha |  |
| `border_strong` | `color_ink` |  |

> **Why semantic aliases matter.** Flowkit's `is-accent-primary` / `on-accent-secondary` combos resolve through these names. If you only set the primitives, the components won't know which colour to use as their accent.

### Sizes (T-shirt scale)

The single scale all spacing, gaps, padding, and radii sub-select from:

| Variable | Value | Maps to BF step |
| --- | --- | --- |
| `size_xxsmall` | `0.25rem` (4px) | 4 |
| `size_xsmall` | `0.5rem` (8px) | 8 |
| `size_small` | `1rem` (16px) | 16 |
| `size_medium` | `2rem` (32px) | 32 |
| `size_large` | `3rem` (48px) | 48 |
| `size_xlarge` | `5rem` (80px) | 80 |
| `size_xxlarge` | `8rem` (128px) | 128 — **default section padding** |

Container max-widths:

| Variable | Value | Use |
| --- | --- | --- |
| `container_small` | `40rem` (640px) | Editorial reading column |
| `container_medium` | `60rem` (960px) | Medium pages |
| `container_large` | `80rem` (1280px) | **Default** site container |
| `container_xlarge` | `90rem` (1440px) | Edge-leaning hero layouts |

Radii — **pill-leaning scale**. The brand has shifted away from strict square:

| Variable | Value | Status |
| --- | --- | --- |
| `radius_none` | `0` | Reserved — full-bleed sections, photo crops |
| `radius_small` | `8px` | Inline elements, chips |
| `radius_medium` | `16px` | **Cards** (default) |
| `radius_large` | `28px` | Compact pill buttons, soft hero cards |
| `radius_full` | `999px` | **DEFAULT** for buttons + tags (pill) |

### Typography

| Variable | Value |
| --- | --- |
| `font_family-primary` | `Inter` |
| `font_weight-regular` | `400` |
| `font_weight-semibold` | `600` |
| `heading_h0` | `8rem` (128px) — campaign only |
| `heading_h1` | `5.625rem` (90px) |
| `heading_h2` | `2.8125rem` (45px) |
| `heading_h3` | `2rem` (32px) |
| `heading_h4` | `1.375rem` (22px) |
| `heading_h5` | `1rem` (16px) |
| `heading_h6` | `0.6875rem` (11px) |
| `text_xxlarge` | `2rem` (32px) |
| `text_xlarge` | `1.5rem` (24px) |
| `text_large` | `1.125rem` (18px) |
| `text_medium` | `1rem` (16px) |
| `text_small` | `0.875rem` (14px) |
| `line-height_tight` | `1.04` |
| `line-height_snug` | `1.3` |
| `line-height_body` | `1.6` |

---

## 2. Style tags first

Before adding any custom class, style the base HTML tags in **Site Settings → Project Settings → All H1 Headings / All Paragraphs / Body (All Pages)**:

| Tag | Style |
| --- | --- |
| `Body (All Pages)` | Inter 400, `text_medium`, `line-height_body`, background `background_primary`, color `text_primary` |
| `All H1 Headings` | Inter 400, `heading_h1`, `line-height_tight`, `-0.01em` tracking |
| `All H2 Headings` | Inter 400, `heading_h2`, `line-height_tight`, `-0.01em` tracking |
| `All H3 Headings` | Inter 400, `heading_h3`, `line-height_tight`, `-0.01em` tracking |
| `All H4 Headings` | Inter 400, `heading_h4`, `line-height_snug`, `-0.01em` tracking |
| `All H5 Headings` | Inter 400, `heading_h5`, `line-height_snug` |
| `All H6 Headings` | Inter 600, `heading_h6`, uppercase, `+0.1em` tracking, `text_secondary` |
| `All Paragraphs` | inherits Body |

With tags styled correctly, unstyled CMS content (blog posts, project descriptions) renders correctly without a single class.

> **Bold is allowed.** Inter 400 is the heading default, but bold (`600`–`700`) is a sanctioned option for statement headings, hero lines, and the verbal signature. Use a `heading-style_h*_bold` combo, or override `font-weight` on the specific element. Don't bold by default; bold deliberately.

---

## 3. Page structure

Every page uses this skeleton — the same one in `styleguide.html` and the website kit:

```
Body
├── a.skip-link (visually hidden until focused)
├── header.nav (tag: <header>)
│   └── nav (tag: <nav>) > nav_container
│       ├── nav_logo (tag: <a>, brand link)
│       ├── nav_links (tag: <ul> with nav_link items)
│       └── button (primary CTA)
│
├── main (tag: <main>, id="main")
│   ├── section (hero)
│   │   └── container (with `is-large`)
│   │       └── content
│   │
│   ├── section (process — flat parchment, like every other section)
│   │   └── container > content
│   │
│   ├── section (projects)
│   │   └── container > content
│   │
│   └ footer.footer (red — background_accent-primary)
│       └ container > footer_links
```

### Section variants in use

| Class | Surface | Used for |
| --- | --- | --- |
| `section` (default) | Parchment | Every section across the website |
| `section.is-secondary` | Cream | Reserved — use only where a card or band genuinely needs to stand apart |
| `section.is-tertiary` | Warm cream | Rare — deepest neutral |
| `section.is-accent-primary` | Bright red | Used by the footer surface; otherwise reserved |
| `section.is-accent-secondary` | Oxblood | Reserved — deep accent moment only |
| `section.is-inverse` | Ink | Reserved — high-contrast feature only |

### Container

`container` is `container_large` (1280px) by default. Add `is-small` (640px) for editorial reading columns.

---

## 4. Component class reference

### Button

```html
<a href="#" class="button">Start a conversation</a>
<a href="#" class="button is-secondary">View projects</a>
<a href="#" class="button on-accent-secondary">Talk to us</a>  <!-- when inside oxblood section -->
<a href="#" class="button is-small">Read more</a>
```

| Combo | Effect |
| --- | --- |
| `button` (base) | Red bg, cream text — **the primary BF CTA** |
| `is-secondary` | Transparent bg, ink text, red wash on hover |
| `is-small` | Reduced padding + size |
| `on-accent-primary` | Cream bg, ink text — for use on red sections |
| `on-accent-secondary` | Cream bg, ink text — for use on oxblood sections |
| `on-inverse` | Cream bg, ink text — for use on ink sections |

### Card

**Contrast rule** — a card must contrast with the surface behind it, never blend:
- On a **neutral** surface (parchment / cream / warm cream) → use an **accent or inverse** card (`is-accent-primary`, `is-accent-secondary`, `is-inverse`).
- On an **accent or inverse** surface (red / oxblood / ink, including the footer) → use a **neutral** card (`card` default, `is-secondary`, `is-tertiary`).

```html
<!-- on neutral surface -->
<article class="card is-accent-primary">Red card</article>
<article class="card is-accent-secondary">Oxblood card</article>
<article class="card is-inverse">Ink card</article>

<!-- on accent/inverse surface -->
<article class="card">Parchment card</article>
<article class="card is-secondary">Cream card</article>
<article class="card is-tertiary">Warm cream card</article>

<article class="card is-small is-bordered">Tighter, with hairline</article>
```

### Nav

```html
<header class="nav">
  <nav class="nav_container" aria-label="Primary">
    <a href="/" class="nav_logo">…</a>
    <ul class="nav_links" role="list">
      <li><a href="/process" class="nav_link is-current">Process</a></li>
    </ul>
    <a href="/contact" class="button">Get in touch</a>
  </nav>
</header>
```

### Form

```html
<div class="form_field">
  <label for="email" class="form_label">Email</label>
  <input id="email" type="email" class="form_input" placeholder="you@example.co.nz">
</div>
```

Underline-only. No outer box. Focus state intensifies the underline.

### Eyebrow

```html
<div class="eyebrow"><span class="eyebrow_dot"></span> Section label</div>
```

When inside a coloured section, add the surface combo: `eyebrow on-accent-secondary`.

### Tag

```html
<span class="tag">In build</span>
<span class="tag is-accent-primary">Consented</span>
<span class="tag is-accent-secondary">Handed over</span>
<span class="tag is-outline">In design</span>
```

Tags use pill radius (`--radius_full: 999px`) — alongside buttons (also pill default). Cards use `--radius_medium` (16px). The brand has shifted toward soft, pill-leaning corners across the system; zero radius is reserved for full-bleed photography and architectural moments.

---

## 5. Combo class rules

Combo classes **only work stacked on a base class**. They never style on their own. The Flowkit prefixes BF Property uses:

| Prefix | Purpose | Examples |
| --- | --- | --- |
| `is-` | Variant of the base | `button is-secondary`, `section is-accent-secondary`, `tag is-outline` |
| `on-` | Which surface this element sits on | `button on-accent-secondary`, `text-link on-inverse` |
| `gap-` | Spacing inside a flex/grid | `gap_small`, `gap_medium`, `gap_large` |
| `ix-` | **Interaction hook** — never styles, only binds to Webflow Interactions | `ix_section-scroll-in`, `ix_button-tap` |

Responsive prefixes used: `tablet-`, `mobile-l-`, `mobile-`. Responsive postfixes on utilities: `_tablet`, `_mobile-l`, `_mobile`.

---

## 6. Interactions (`ix_*` hooks)

BF Property uses motion sparingly — durations 120ms / 180ms / 320ms with the standard easing curve. The Webflow interaction system needs `ix_*` classes as binding hooks. The minimum set:

| Class | Trigger | Effect |
| --- | --- | --- |
| `ix_nav-shrink` | Page scroll > 4px | Adds hairline border below nav |
| `ix_image-zoom-hover` | Hover on `.bf-project_image` | Image scales to `1.02` over `320ms` |
| `ix_button-tap` | Tap on `.button` | `translateY(1px)` on press |

That is the **entire** motion system. No section-scroll-in. No parallax. No reveal-on-scroll. The audience reads on their own time.

`@media (prefers-reduced-motion: reduce)` is already in the CSS — Webflow Interactions respect this automatically when "Respect reduced-motion preferences" is toggled on in interaction settings.

---

## 7. Accessibility checklist for the Webflow build

This is the WCAG 2.2 AA bar the Audit panel checks against. Every page should pass.

- [ ] `<html lang="en-NZ">` set in Site Settings.
- [ ] **One** `<h1>` per page. Use `heading-style_h2` to visually demote without changing the tag.
- [ ] Heading hierarchy never skips a level (h1 → h2 → h3).
- [ ] Skip link present as the first focusable element (see `.skip-link` in `flowkit-tokens.css`).
- [ ] `<main>` wraps page content. `<nav>` wraps the navbar. `<footer>` wraps the footer.
- [ ] All `<img>` have meaningful `alt` text (project name, not "image of"); decorative images set `alt=""`.
- [ ] All `<a>` and `<button>` have descriptive labels — not "Read more", "Click here". `Start a conversation`. `View Halswell project`. `Open Riccarton case study`.
- [ ] All interactive elements have `:focus-visible` styles (already in CSS — 2px red outline, 2px offset).
- [ ] Body text contrast: ink on parchment is `#1A1A1A` / `#F8F6F2` — **16.2:1**, well above 4.5:1.
- [ ] Ink on cream `#1A1A1A` / `#F1EBDF` — **15.9:1**, well above 4.5:1.
- [ ] Red on parchment: `#BD1E1E` / `#F8F6F2` — **5.7:1**, passes for normal text.
- [ ] Red on cream: `#BD1E1E` / `#F1EBDF` is **5.6:1** — passes for normal text.
- [ ] Cream on oxblood: `#F1EBDF` / `#2A0200` is **16.5:1** — passes.
- [ ] Tap targets ≥ 44×44px. The default button is comfortably over this; check icon-only links.
- [ ] No motion above ~10% of the viewport. No autoplay video with sound.
- [ ] Forms have visible labels (placeholder is **not** a label).
- [ ] Site is usable at 200% zoom without horizontal scroll.

---

## 8. SEO setup

Per-page in **Page Settings → SEO**:

- Meta title < 60 chars. Pattern: `[Page] · BF Property — Christchurch contract developer`.
- Meta description < 160 chars. Plain English, no banned vocabulary.
- Open Graph image: project hero photo, not the logo.
- URL slug: lowercase, hyphenated, descriptive. `/projects/halswell-three-unit` not `/proj?id=14`.

Global:

- [ ] Sitemap submitted to Google Search Console after launch.
- [ ] `.webflow.io` staging subdomain has indexing **disabled**.
- [ ] Global canonical tag set.
- [ ] SSL enabled.
- [ ] LocalBusiness schema with NAP (Christchurch office, consistent across Google Business Profile).

---

## 9. Class-naming sanity check

Before saving a new class in Webflow, ask:

1. Does the name describe **purpose**, not appearance? `card_meta`, not `card_grey-text`.
2. Would Margaret Holdsworth (the target client) understand it if she opened the Webflow panel? (`featured-projects_grid` is good; `fpg-3` is not.)
3. Does it follow Flowkit v2 — component_part with `_`, utility property_value with `_`, combo `is-`/`on-` prefixes?
4. Is it general enough to reuse? `project_image` reuses across projects; `halswell-project_image` doesn't.
5. If it's a combo, does it start with `is-`, `on-`, `gap-`, or `ix-`?

## 10. Webflow Library / Shared Library

When the site is built once, push the foundation as a **Shared Library** in the BF Property workspace so future micro-sites (campaign pages, project sub-sites) install the same variables, components, and class system in one click.

Maintain a separate **style guide site** (this `styleguide.html` is the starting point) as the source library. Use Design Approvals when pushing updates. Communicate breaking changes before publishing.
