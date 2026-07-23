## Why

We're praying the Novena to Our Lady Undoer of Knots (Nowenna do Matki Bożej Rozwiązującej Węzły) with a friend and need a clean, shareable website that presents all nine days of prayers in one place. The source material (stacja7.pl) is buried in ads and article boilerplate — we want a focused, distraction-free prayer companion that makes it easy to navigate between days and always know which day you're on.

## What Changes

- Build a static single-page website with all 9 days of the novena
- Include full prayer texts for every part of the daily structure (Akt żalu, Rosary prayers, the day-specific reflection, and the closing prayer to Mary)
- Collapsible accordion sections for each prayer step — all collapsed by default
- Manual day selector (1–9 buttons) with URL hash routing (`#day/4`) for shareable links
- Previous/Next navigation between days
- Minimal, modern aesthetic — clean typography, generous whitespace, muted color palette
- Mobile-responsive design

## Capabilities

### New Capabilities
- `novena-content`: All prayer texts for the 9-day novena structure — fixed sections (sign of the cross, act of contrition, rosary decades, closing prayer) and variable daily reflections
- `day-navigation`: Manual day selection via numbered buttons, prev/next navigation, and URL hash routing for shareable links
- `prayer-accordion`: Collapsible accordion UI for each prayer step, all collapsed by default, expanding on click

### Modified Capabilities
<!-- No existing capabilities to modify — this is a greenfield project -->

## Impact

- **New files**: `index.html`, `index.css`, `script.js` in project root
- **No backend**: Entirely static — hostable on GitHub Pages, Netlify, or any static host
- **No dependencies**: Vanilla HTML/CSS/JS, no build step, no framework
- **Content source**: All prayer texts extracted from https://stacja7.pl/maryja/nowenna-do-matki-bozej-rozwiazujacej-wezly-jak-ja-odmawiac/
