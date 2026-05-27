---
name: bf-property-design
description: Use this skill to generate well-branded interfaces and assets for BF Property, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Verbal signature** — *We develop. You receive.*
- **Hero line** — *You bring the land. We bring the rest.*
- **Default surface** — Parchment `#F8F6F2`. Cream `#F1EBDF` for differentiation only. No absolute white anywhere.
- **Default heading weight** — Inter Regular `400`. Bold (`600`–`700`) allowed where emphasis earns it; don't bold by default.
- **Default corner radius** — Pill (`--bf-radius-pill: 999px`) for buttons and tags. 16px for cards. Zero is reserved for full-bleed sections.
- **Default body line-height** — `1.6`. Non-negotiable.
- **Default CTA copy** — *Start a conversation.* / *Get in touch.*

## Files in this skill

| Path | Purpose |
| --- | --- |
| `README.md` | Full brand system — content rules, visual foundations, iconography, file index |
| `colors_and_type.css` | Drop-in CSS custom properties + base element styles |
| `fonts/` | Inter variable upright + italic |
| `assets/` | Logo + project photography |
| `preview/` | Atomic design system cards (one concept per file) |
| `ui_kits/website/` | Marketing site homepage |
| `ui_kits/brochure/` | A4 proposal / brochure template |
| `ui_kits/social/` | Instagram + Facebook tile templates |

## Banned vocabulary — never generate copy containing

unlock, potential, transform, elevate, discover, delivers, passionate, trusted (adj.), quality (adj.), professional (adj.), dedicated, experienced (adj.), solutions, offerings, dream home, dream property, journey, partner with you, family-owned, world-class, cutting-edge, innovative, seamless, holistic, empower, curated, handpicked. No em-dashes in client-facing copy. No exclamation marks in marketing. No question-mark headlines.

## The swap test

If "BF Property" can be swapped for "Joe Bloggs Construction" and the sentence still works, the sentence is wrong. Rewrite for specificity.
