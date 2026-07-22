## Context

Greenfield static website for the Novena to Our Lady Undoer of Knots (Nowenna do Matki Bożej Rozwiązującej Węzły). All prayer content is sourced from stacja7.pl. The site is used by 2 people (user and friend) praying together, sharing links to specific days. No backend, no build tools, no framework — vanilla HTML/CSS/JS served as static files.

## Goals / Non-Goals

**Goals:**
- Distraction-free prayer experience with all texts in one place
- Instant day switching via manual selector and URL hash
- Mobile-first, responsive design with minimal aesthetic
- All prayer sections collapsible, all collapsed by default
- Self-contained — no external dependencies beyond a Google Font

**Non-Goals:**
- User accounts, authentication, or any backend
- Automatic day tracking or saved progress
- Multi-language support
- Notifications or reminders
- Dark mode (keep it simple for v1)

## Decisions

### 1. Single HTML file with separate CSS/JS

**Decision**: Three files — `index.html`, `index.css`, `script.js`.

**Rationale**: Clean separation of concerns while keeping it dead simple. No bundler, no build step. Any static host works. A single HTML file would be too large given the volume of prayer text.

**Alternatives considered**:
- Single HTML file with inline CSS/JS — too unwieldy with 9 days of prayer content
- Framework (React/Vue) — massive overkill for static content with simple interactivity

### 2. Prayer content embedded in HTML, not fetched

**Decision**: All 9 days of prayer text are hardcoded in `index.html` as hidden day containers (one `<article>` per day). JavaScript shows/hides the active day.

**Rationale**: No loading states, works offline, no fetch failures. The total content is maybe 15–20KB of text — trivial.

**Alternatives considered**:
- JSON data file + JS templating — adds complexity for no real benefit
- Separate HTML pages per day — breaks the single-page accordion UX

### 3. URL hash routing for day selection

**Decision**: Use `#day/N` format (e.g., `#day/4`). On page load, read the hash. On day change, update the hash. Listen for `hashchange` to support browser back/forward.

**Rationale**: Simplest shareable link mechanism. No server-side routing needed. Friend receives link → opens at correct day.

### 4. Accordion with `<details>/<summary>` elements

**Decision**: Use native HTML `<details>` and `<summary>` elements for the collapsible prayer sections.

**Rationale**: Built-in browser accessibility (keyboard, screen readers), no JS needed for open/close behavior. Can be styled with CSS. All collapsed by default is the native behavior (no `open` attribute).

**Alternatives considered**:
- Custom JS accordion — more code, more accessibility work, no benefit
- CSS-only accordion with `:target` or checkbox hack — fragile, less accessible

### 5. Minimal color palette and Inter font

**Decision**: Warm white background (#FAFAF8), near-black text (#2C2C2C), muted slate accent (#6B7B8D) for interactive elements, warm gray borders (#E0DDD8). Inter font from Google Fonts with system sans-serif fallback.

**Rationale**: Minimal but not cold. The warm whites and grays feel more like paper than a tech product. Inter is highly legible at body text sizes — important for reading prayers.

### 6. Day content structure

**Decision**: Each day is an `<article data-day="N">` containing 7 `<details>` elements (one per prayer step). Only the active day's article is displayed (`display: block` vs `none`).

**Rationale**: Simple DOM structure. No dynamic rendering. Day switching is just toggling `display` on articles and updating the day selector UI.

## Risks / Trade-offs

- **Large initial HTML** → All 9 days are in the DOM at once (~20KB of text). Mitigation: This is trivially small for modern browsers. No performance concern.
- **No offline support beyond browser cache** → If the user has no connection and hasn't cached the page, it won't load. Mitigation: Could add a service worker later, but not needed for v1.
- **Polish-only content hardcoded** → Adding another language would mean duplicating all HTML. Mitigation: Out of scope per non-goals. If needed later, could extract to JSON.
- **`<details>` styling inconsistencies** → Minor visual differences across browsers for the disclosure triangle. Mitigation: Custom-style the `<summary>` element to override browser defaults.
