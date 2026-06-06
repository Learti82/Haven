# haven.

A premium real estate platform — *Compass / Rightmove, reimagined* with a warm, modern light aesthetic.

Built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

## Design language

| Token | Value |
| --- | --- |
| Background | Warm white `#FAFAF8` |
| Accent | Terracotta `#C4603A` |
| Text | Dark charcoal `#1C1C1C` |
| Headlines | Libre Baskerville (serif) |
| UI | Outfit (sans) |

Soft, warm shadows and clean serif headlines throughout.

## Sections

1. **Navbar** — serif logo, centered nav (Buy / Rent / Sell / Agents), Sign In + terracotta *List Property* button, mobile drawer.
2. **Hero search** — full-width warm gradient, headline, multi-field search bar (Location / Type / Price / Bedrooms) and quick-filter pills.
3. **Featured listings** — 6 property cards in a responsive 3-column grid with price badges, save hearts, bed/bath/sqft stats, agent avatar, and hover lift + image scale.
4. **Browse by Area** — animated Map / List toggle (Framer Motion). The map is a pure CSS/SVG placeholder with positioned pin markers; list view shows 8 compact listings.
5. **Why Haven** — three value-prop cards that animate in on scroll.
6. **Agent spotlight** — horizontally scrolling rail of 4 agent cards with rating stars.
7. **Market stats banner** — terracotta band with three headline stats.
8. **Newsletter CTA** — minimal centered subscribe form.
9. **Footer** — warm dark, multi-column grid.

## Tech highlights

- `useState` drives the map/list toggle and the saved-properties (heart) state.
- Framer Motion powers card hovers, scroll reveals, the toggle's shared-layout pill, and view transitions.
- Fully mobile responsive.
- Property/agent data lives in `src/data.js` (6 property objects + 8 area listings + 4 agents).

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```
