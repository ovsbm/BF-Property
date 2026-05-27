# BF Property — Design System

> **Verbal signature** — We develop. You receive.
> **Hero line** — You bring the land. We bring the rest.

BF Property is a Canterbury-based direct-to-client contract developer. Twenty-two years of building under the legacy buildFIRST name. The company handles the entire residential development process for clients with capital — site sourcing, planning, consent, design coordination, build, and handover — turning land or existing property into income-producing units.

The brand sits in the white space between volume builders (who serve first-home buyers) and traditional developers (who build to sell). BF Property does development *for the client*.

---

## Audience

Older — 50s, 60s, beyond. Conservative. Hassle-averse. Unimpressed by sales pitches. Has seen a few building cycles. Reads with care. The whole system is tuned to that reader: generous spacing, large body type, plain NZ English, no charm-offensives, no premium positioning.

## Active surfaces

| Surface | Role | UI kit |
| --- | --- | --- |
| Marketing website | Primary credibility and lead capture | `ui_kits/website/` |
| Brochure & proposal deliverables | Sent to specific clients with capital | `ui_kits/brochure/` |
| Instagram & Facebook | Project documentation, low-volume | `ui_kits/social/` |

## Sources supplied

Everything in this system was built from the brief and the following uploaded assets. No codebase or Figma was provided — if one exists, attach it and we will reconcile.

- `uploads/BFLOGOV7.png` — V7 wordmark + monogram master, bright red on transparent
- `uploads/BFICONBWV7.png` — V7 monogram master, black on transparent
- `uploads/COLOUR PALETTE.png` — six-colour palette confirmation
- `uploads/Inter-VariableFont_opsz_wght.ttf` — Inter variable, upright
- `uploads/Inter-Italic-VariableFont_opsz_wght.ttf` — Inter variable, italic
- `uploads/12cbd070-…jpeg` — interior bathroom, completed project
- `uploads/9f826392-…jpeg` — street-level exterior, completed project, dusk
- `uploads/b87c5c8e-…jpeg` — exterior entry detail, completed project
- `uploads/91371ce4-…jpeg` — deck and rear façade, completed project, dusk

Copies are in `assets/` with descriptive filenames.

---

## Content fundamentals

The voice is a senior builder-developer explaining a project to a client old enough to have seen a few building cycles. Plainly, with substance, without effort to charm.

**Tone**
- Confident, understated, specific. Trust is earned through specificity, not adjectives.
- Plain NZ English. Active voice. One idea per sentence.
- Never first-person plural except where the brand itself is the subject (*We develop. You receive.*). Otherwise: name the work, name the outcome.
- No charm, no warmth-as-decoration, no premium positioning. The audience reads those as effort.

**Person & casing**
- *You* refers to the client (the capital holder). *We* refers to BF Property.
- Sentence case for body copy and most headlines. Title Case reserved for proper nouns and the wordmark.
- Uppercase reserved for the H6 eyebrow only, with `+0.1em` tracking.

**Sentence shape**
- Short. Periods, not commas, do the work.
- One idea per sentence. Two at most.
- No em-dashes in client-facing copy. Use a period or a colon.
- No exclamation marks anywhere in marketing copy.
- No question-mark headlines. State, don't ask.

**Numbers and proof**
- Use specifics. *Twenty-two years.* *Senior team on every project.* *Consent through handover.*
- Numerals for years, counts, and money. Spelled out only when the sentence opens with one and the number is small.

**Banned vocabulary** (do not generate copy containing these)
> unlock, potential, transform, elevate, discover, delivers, passionate, trusted (adj.), quality (adj.), professional (adj.), dedicated, experienced (adj.), solutions, offerings, dream home, dream property, journey (except literal travel), partner with you, family-owned, world-class, cutting-edge, innovative, seamless, holistic, empower, curated, handpicked.

**Default CTAs**
- *Start a conversation.* *Get in touch.* *Talk to us about a project.* *Request information.*
- Never: *Submit. Send. Discover. Get Started Today. Get a Free Quote.*

**The swap test**
If "BF Property" can be swapped for "Joe Bloggs Construction" and the sentence still works, the sentence is wrong. Rewrite for specificity.

**Worked examples**

> ✅ You bring the land. We bring the rest.
> ✅ Twenty-two years of building in Canterbury. Senior team on every project.
> ✅ We handle consent through handover. You receive completed units.
> ✅ Three sites currently in build. Two in design.

> ❌ Unlock the potential of your land with our trusted team.
> ❌ Discover seamless solutions for your dream development journey.
> ❌ We're a passionate, family-owned business dedicated to quality.

**Emoji & decoration**
- No emoji. Anywhere.
- No decorative unicode (✓ ▸ ★). Use real glyphs or nothing.
- No emoticons in caption text.

---

## Visual foundations

**Surface ratio**
Pages are dominantly parchment. Cream provides differentiation — only on cards and a small number of grounding moments. Bright red does the emphasis work, and is also the footer surface. Oxblood is now a reserved deep-accent (rare). Ink is body copy.

**Colour system** (six locked colours, May 2026, see `colors_and_type.css`)
- Parchment `#F8F6F2` — **default page background**, lightest neutral
- Cream `#F1EBDF` — differentiation surface, used sparingly on cards
- Warm cream `#E8E1D3` — deepest neutral, used sparingly
- Ink `#1A1A1A` — body text
- Muted ink `rgba(26,26,26,0.6)` — captions, metadata
- Bright red `#BD1E1E` — active accent + **footer surface** (hover `#D42424`)
- Oxblood `#2A0200` — reserved deep accent (hover `#4B0300`)

**Type**
- Inter throughout. No other faces, ever.
- Default heading weight is Inter Regular `400`. Bold (`600`–`700`) is allowed where emphasis earns it — statement headings, hero lines, the verbal signature. Don't bold by default; bold deliberately.
- Body Inter Regular at `1.6` line height — non-negotiable. Older reader comfort.
- Heading tracking `-0.01em` for H0–H4. `0em` for H5. `+0.1em` uppercase for H6 eyebrows.
- Buttons and in-body emphasis use Inter Semibold `600`.
- See `colors_and_type.css` for the full scale.

**Corners**
- The system uses a **pill-leaning radius scale**. Buttons and tags default to full pill (`--bf-radius-pill: 999px`). Cards take a soft radius (`--bf-radius-md: 16px`). Inline chips and small elements use `--bf-radius-sm: 8px`. Compact pill buttons can use `--bf-radius-lg: 28px`.
- Zero radius (`--bf-radius-0`) is **reserved** for full-bleed photography crops, architectural moments, and any context where the building reads as a building.
- Resist drifting back to strict square on buttons, tags, and cards — the pill is now the brand's default.

**Spacing**
- 8px base. Scale: `4, 8, 12, 16, 20, 24, 28, 32, 48, 64, 80, 96, 112, 128`.
- Default section vertical padding `128px`. Generous spacing reads as confidence; resist the urge to compress.
- Container max `1280px`. Editorial reading column max `640px`.

**Layout rules**
- Asymmetric editorial grids over centred symmetry. Left-aligned text, left-aligned eyebrows. Right-aligned numerals only inside data tables.
- Sticky header is a single-row strip on parchment. No drop shadow. A `1px` ink-at-15% hairline on scroll.
- Image-and-text rows use a 5/7 or 6/6 split, never centred over the image.
- Hero blocks lead with a single H1 over a `640px` reading column. Imagery sits beside or below, never behind.

**Backgrounds**
- Solid parchment by default across every section. Cream only inside cards where they need to stand apart from the parchment surface. The footer is a solid red band.
- Full-bleed photography appears once or twice per page maximum and always at scale (the building reads as architecture, not stock).
- No gradients. No patterns. No textures. No noise overlays.
- No background blurs. Blur as a UI device is not part of this system.

**Photography**
- Architectural, wide, considered. BF Property projects only.
- Natural light. Dusk and dawn welcomed. Warm grading.
- Subject is the building. People appear only in team and process imagery, never as "happy buyers" or family-on-lawn.
- No stock. Ever.
- Treatment: full colour. No B&W filter, no duotone, no grain overlay. The native warmth of the Canterbury light at golden hour is the look.
- Image corners are square. Captions sit beneath, left-aligned, muted ink, `14px`.

**Borders and rules**
- Hairlines `1px solid rgba(26,26,26,0.15)`. Used for table rows, form underlines, section separators.
- No double borders, no inner borders.

**Shadows**
- None. The system has no shadow tokens by default. Flat fills + pill-leaning corners.
- If a component genuinely needs lift (a dropdown menu, a date picker overlay), use a single hairline border in ink-at-15%, not a shadow.

**Transparency and blur**
- Used only on muted ink (`60%` body secondary, `20%` placeholder, `15%` rules).
- No glassmorphism. No translucent panels. No backdrop blur.

**Cards** (see component preview cards)
- Default padding `32px`, small `24px`. Radius `--bf-radius-md` (16px) — cards have a soft radius.
- **Contrast rule** — cards must contrast with their surface, never blend with it:
  - On a **neutral** surface (parchment, cream, warm cream), use an **accent or inverse** card (red, oxblood, or ink).
  - On an **accent or inverse** surface (red, oxblood, ink, the footer), use a **neutral** card (parchment, cream, or warm cream).
  - Same-on-same (e.g. a parchment card on a parchment section) is not a card — it is a void. Don't ship it.
- Variants:
  - **Primary** — parchment bg, ink text (used on accent/inverse surfaces).
  - **Secondary** — cream bg, ink text (used on accent/inverse surfaces).
  - **Tertiary** — warm cream bg, ink text (rare; used on accent/inverse surfaces).
  - **Accent Primary** — bright red bg, cream text (used on neutral surfaces).
  - **Accent Secondary** — oxblood bg, cream text (used on neutral surfaces).
  - **Inverse** — ink bg, cream text (used on neutral surfaces).
- No border on the card itself unless it sits on a same-colour surface, then a `1px` ink-at-15% hairline.

**Buttons**
- **Primary** — bright red bg, cream text, **pill** (`--bf-radius-pill`), padding `1em / 1.5em`, hover bg `#D42424`.
- **Secondary** — transparent bg, ink text, no border, pill, same padding. Hover: red-wash `rgba(189,30,30,0.10)` bg appears.
- No tertiary outline button. The two-button system is intentional.
- Buttons always use Inter Semibold `600`. Letter spacing `0em`.

**Form inputs**
- Underline only — never boxed. Transparent bg, `1px solid ink` bottom border.
- Padding `16px / 16px`. Font Inter `16px`.
- Placeholder: muted ink at `20%` opacity.
- Focus: border intensifies (full ink). No focus ring colour shift.
- Radius `0` (no border to apply it to — underline only).

**Motion**
- Conservative. Used sparingly to confirm an interaction, not to entertain.
- Easing: `cubic-bezier(0.4, 0.0, 0.2, 1)`.
- Durations: `120ms` fast (hover), `180ms` base (state change), `320ms` slow (panel slide).
- No bounce, no spring, no parallax, no auto-scroll, no reveal-on-scroll. The audience reads on their own time.

**Hover states**
- Buttons: see above.
- Links: colour shifts from `#BD1E1E` → `#D42424`. The 1px under-rule stays.
- Cards (when interactive): a `1px` red hairline appears at the bottom edge. No lift, no shadow, no scale.

**Press states**
- A 1px translate-y down (`transform: translateY(1px)`). No colour change. No shrink.

**Focus states**
- Solid `2px` red outline, offset `2px`. Square. Visible on tab only (`:focus-visible`).

---

## Iconography

BF Property does not lean on iconography. The brand reads through type, photography, colour, and generous space. Icons are a structural concession, not a decorative one.

**Approach**
- Icons appear only where they earn their place: navigation breadcrumbs, form field state, social media links in the footer, and table-row meta.
- No emoji. No unicode icons. No decorative pictograms.
- Logos and the BF monogram are the only branded marks in the system.

**Icon system** — *substitution flagged*
- The codebase did not include an icon set. We've defaulted to **Lucide** (loaded via CDN as `lucide@latest`) because its stroke weight (`1.5px`), square line caps, and square join style are consistent with the brand's geometry.
- Stroke `1.5px`, ink colour, square line caps. No fills.
- Default size `20px`. Inline with `16px` body, use `18px`.
- **Please confirm or supply preferred set.** Heroicons (outline) is the closest stylistic alternative.

**Logos**
- `assets/logo-bf-property-red.png` — V7 wordmark + monogram, BF Red. Use on parchment, cream, or warm cream.
- `assets/logo-bf-property-cream.png` — V7 wordmark in cream. Use on red, oxblood, ink.
- `assets/logo-bf-property-oxblood.png` — V7 wordmark in oxblood. Use on cream / warm cream where a darker mark is preferred.
- `assets/logo-bf-property-ink.png` — V7 wordmark in ink. Single-colour usage.
- `assets/monogram-{red,cream,oxblood,ink}.png` — monogram-only marks for favicon, app icon, social avatar, profile mark.
- `assets/logo-bf-property-currentcolor.svg` — SVG wordmark, takes the inherited `color`. Use for arbitrary recolouring.

**Photography in lieu of iconography**
- Where a section needs a visual anchor, the answer is almost always a small architectural photograph, not an icon.

---

## Webflow build

The marketing site will be built in Webflow using **Flowkit v2** (the official Webflow framework, recommended default for 2026 builds). The token system, components, and class naming have been mapped one-to-one.

- `webflow/README.md` — full Flowkit v2 build reference: variable collections to set up, tag styles, page structure, component classes, combo conventions, interaction hooks, accessibility checklist, SEO setup
- `webflow/flowkit-tokens.css` — drop-in CSS exposing every BF token under Flowkit's naming convention (`background_accent-secondary`, `size_xxlarge`, `button.on-accent-secondary`, etc.)
- `webflow/styleguide.html` — the page to build **first** in Webflow. Every component is shown live with its Flowkit class name beside it.
- `ui_kits/website/index.html` — the homepage refactored to use Flowkit class names + full semantic HTML + WCAG 2.2 AA — essentially copy-and-paste into Webflow's HTML import.

## File index

```
README.md                 ← you are here
SKILL.md                  ← Claude Skills entry point
colors_and_type.css       ← BF tokens (‘bf-*’ namespace) + base styles
webflow/
  README.md               ← Flowkit v2 build reference for BF Property
  flowkit-tokens.css      ← BF tokens in Flowkit naming (‘background_*’, ‘size_*’)
  styleguide.html         ← live style guide — build this first in Webflow
fonts/                    ← Inter variable + italic
assets/                   ← logo, project photography, brand marks
preview/                  ← Design System tab cards (typography, colors, spacing, components, brand)
ui_kits/
  website/                ← Marketing website kit (Flowkit-aligned homepage)
  brochure/               ← Brochure / proposal print-style kit
  social/                 ← Instagram + Facebook post templates
```

## Quick start (for another agent or designer)

1. Read this file end to end.
2. Open `colors_and_type.css` and use the tokens. Do not invent colours.
3. Default surface is **parchment**. Cream is the differentiation surface. Default heading weight is `400`. Default radius is **pill** (`--bf-radius-pill`) for buttons and tags; **16px** for cards.
4. Check copy against the banned-vocabulary list and the swap test before shipping.
5. When stuck on a CTA, the default is *Start a conversation.*

## Open questions for the user

- **Icon set** — confirm Lucide as the working set, or supply a preferred replacement.
- **Sub-brand or product naming** — does the company use any internal project codes or sub-brands (e.g. *BF Townhomes*, *BF Sites*) we should reserve type treatments for?
- **Proposal / brochure deliverables** — do existing documents exist to recreate against? The brochure kit here is built from first principles using the brand rules.
- **Social grid** — do you have a preferred caption length, hashtag policy, and posting cadence we should bake into the social kit?
