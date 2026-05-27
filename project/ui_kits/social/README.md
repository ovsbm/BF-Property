# Social UI kit

Instagram and Facebook templates for BF Property. Designed for the existing audience (older, hassle-averse) — not the algorithm. No stickers, no emoji, no "look what we made" hype copy.

## What's in here

- `index.html` — board of all templates at scale, with captions.

## Formats covered

| Format | Pixel size | Aspect | Templates |
| --- | --- | --- | --- |
| IG in-feed portrait | 1080×1350 | 4/5 | type quote, project photo + overlay, red stat, carousel cover |
| IG square | 1080×1080 | 1/1 | oxblood type update, detail photo, client note |
| IG story | 1080×1920 | 9/16 | photo + project tag, red CTA, carousel step |
| Facebook link preview | OG image | — | Open Graph card from a website post |

## Tile system

Every social tile shares this anatomy:

- **Head row** — eyebrow (`6px red dot` + uppercase 11px) on the left, `BF` monogram on the right.
- **Body** — type, photo, or stat. Centred or bottom-aligned depending on weight.
- **Foot row** — metadata or pagination, never CTAs from the banned list.

Colours map to mood:
- **Cream** — verbal signature, calm.
- **Red** — stat or single CTA.
- **Oxblood** — project update with weight, milestone announcements.
- **Photo + overlay** — completed work or in-build detail.

## Caption tone (paste into the IG composer)

Keep captions to one or two short paragraphs, then a single line of facts.

> Three-unit townhouse in Halswell, handed over March 2025. Brick and lightweight cladding, brushed brass tapware, travertine bathrooms. Body corporate established at settlement.
>
> Margaret and David found the site. We did the rest.

Avoid:
- Emoji.
- Question-mark headlines ("Looking for a developer?").
- Banned vocabulary (see root README).
- More than three hashtags. If used, all lower-case, no campaign tags. `#christchurch #canterburybuild #bfproperty`.

## Not yet built

- Profile avatar + bio template
- Reel cover (would reuse story 9/16 template)
- Carousel internal pages (1080×1350 with consistent step format)

These can be added by copying the relevant tile and extending.
