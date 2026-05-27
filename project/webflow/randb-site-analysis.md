# R&B Build — site map analysis

Source: `/Users/.../www.randb.nz/` (WordPress export, May 2026)

## Page inventory

### Top-level
- Home (`/`)
- About (`/about`)
- Contact (`/contact`)
- FAQ (`/faq`)
- Sell Us Your Property (`/sell-your-land`)
- Display Home (`/display-home`) — the physical showhome in Christchurch

### Service offerings (each is a marketing landing page)
- Custom Design (`/custom-design`)
- Design and Build (`/design-and-build`)
- Knock Down and Rebuild (`/knock-down-and-rebuild`)
- House and Land (`/houseandland`)
- Multi Units and Townhouses (`/multi-units-and-townhouses`)
- Medium Density Developments (`/medium-density-developments`)
- Architectural Hill Builds (`/architectural-hill-builds`)
- Subdividing (`/subdividing`)
- Interior Design (`/interior-design`)
- Cashmere Estate Ridgeline (`/cashmere-estate-ridgeline`) — a specific subdivision

### Projects
- Projects index (`/projects`)
- ~75 individual project case studies, each on its own page
- Filter / archive pages by project type:
  - Architectural Builds (3 pages)
  - Featured (2 pages)
  - Hill Build
  - Multi Unit Developments (2 pages)
  - New Build (4 pages)
  - R&B Showhomes
  - RBA Projects (2 pages) — separate brand for design
  - Residential

## Audience mismatch with BF Property

R&B serves first-home buyers, owner-occupiers, AND developers. Several offerings are first-home-buyer territory and don't fit BF's "clients with capital, income-producing units" positioning:

| R&B offering | Fits BF? | Notes |
| --- | --- | --- |
| Custom Design | Probably | BF coordinates architecture |
| Design and Build | **Yes** | This is essentially BF's core model |
| Knock Down and Rebuild | Maybe | Site work, could be a BF service |
| House and Land | **No** | First-home buyer territory |
| Display Home / Showhome | **No** | Volume-builder convention |
| Multi Units and Townhouses | **Yes** | BF's bread and butter |
| Medium Density Developments | **Yes** | Strong BF fit |
| Architectural Hill Builds | Maybe | Niche, geographic |
| Subdividing | **Yes** | Site sourcing / consent territory |
| Interior Design | Probably **No** | BF "coordinates" design, doesn't deliver it |
| Sell Us Your Property | **Yes** | Maps to "site sourcing" in BF brief |

## Recommended BF sitemap (proposed, awaiting confirmation)

```
/                              Home
/about                         About — team, story, 22 years
/process                       Process — site → consent → build → handover (existing)
/services
  /design-and-build            Design & Build (full development)
  /multi-unit-townhouses       Multi-unit & townhouse developments
  /medium-density              Medium-density developments
  /subdividing                 Subdivision consenting & build
  /site-sourcing               (replaces R&B's "Sell Us Your Property")
/projects                      Project index, filterable
/projects/[slug]               Project case study template
/faq                           FAQ — common client questions
/contact                       Contact
```

That's ~10 pages vs R&B's ~15 — leaner because BF doesn't sell to first-home buyers, doesn't run a showhome, and doesn't deliver interior design.

## Open decisions for the user

1. Does BF want service-category landing pages at all, or one unified "What we do" page? R&B uses 9 separate pages.
2. How many real BF projects exist to populate the projects index?
3. Is there an FAQ document or should the FAQs be drafted from scratch?
4. Is there a team page with photos / bios?
