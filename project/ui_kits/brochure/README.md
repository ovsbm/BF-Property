# Brochure / proposal UI kit

Print-style proposal document for individual clients. A4 pages stacked vertically, intended to be saved as PDF and sent in response to a serious enquiry.

## What's in here

- `index.html` — six-page proposal for a fictional Halswell three-unit development.

## Page types it covers

| Page | Purpose | Notes |
| --- | --- | --- |
| Cover | Hero proposal title, client reference, site basics | Cream surface, oversized H1 with single red accent word |
| Summary | What we build / what you receive | Three-number strip + two-column scope |
| Reference build | A previous BF Property completion as proof | Full-bleed image top half, caption bottom half |
| Scope &amp; fee | Indicative cost table with totals | Underline-rule table, ink hairlines, right-aligned numerals |
| Timeline | Six-phase programme | Oxblood page — the gravity moment of the document |
| Next steps | Two options + signature block | Cream + red accent cards |

## Conventions

- A4 at 96dpi (794 × 1123px) per page. Print-ready.
- Each page has the same header strip (logo + meta) and footer strip (note + page number) — both bound by an ink-15% hairline.
- One-paragraph leads sit at 22px / 1.5 leading, max 600px wide.
- Numbers in tables are `font-variant-numeric: tabular-nums` and right-aligned.
- One *oxblood* page per proposal — a deliberate gravity moment inside the proposal document. (On the website, the equivalent role is now carried by the red footer; brochures keep oxblood for the printed page.)
- No charts, no diagrams. If a programme needs to be shown, it's a horizontal six-cell grid, not a Gantt chart.

## Adding more pages

Duplicate any `<article class="page">` block. The chrome (head / foot) and tokens come from the linked CSS — just write the content.
