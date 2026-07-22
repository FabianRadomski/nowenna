## 1. Foundation — CSS Design System

- [x] 1.1 Create `index.css` with CSS custom properties (color palette, typography, spacing), base reset, and Inter font import
- [x] 1.2 Style the page layout — centered content container with max-width, responsive padding
- [x] 1.3 Style the day selector buttons (numbered 1–9, active/hover states)
- [x] 1.4 Style `<details>/<summary>` accordion sections (custom chevron indicator, border separators, expand/collapse transitions)
- [x] 1.5 Style the prev/next day navigation controls
- [x] 1.6 Style the page header/title area

## 2. HTML Structure and Prayer Content

- [x] 2.1 Create `index.html` with document head (meta tags, font link, CSS link), page header with novena title, day selector nav, and main content area
- [x] 2.2 Build the Day 1 article as the template: 7 `<details>` sections with full prayer texts for Znak krzyża, Akt żalu, 3 pierwsze dziesiątki różańca (with Ojcze Nasz, Zdrowaś Mario, Chwała Ojcu texts), daily reflection, 2 ostatnie dziesiątki różańca, Modlitwa do Maryi RW, final Znak krzyża
- [x] 2.3 Duplicate the Day 1 template for Days 2–9, replacing the daily reflection section with each day's unique rozważanie text
- [x] 2.4 Add prev/next navigation below the prayer content
- [x] 2.5 Add the closing prayer (Modlitwa do Maryi Rozwiązującej Węzły) and blessing text to section 6 of each day

## 3. JavaScript — Day Navigation

- [x] 3.1 Create `script.js` with day switching logic: show/hide `<article data-day="N">` elements, update active button styling
- [x] 3.2 Implement URL hash routing — read `#day/N` on load, update hash on day change, handle `hashchange` event for browser back/forward
- [x] 3.3 Implement prev/next button logic (disable at Day 1 / Day 9 boundaries)
- [x] 3.4 Collapse all `<details>` elements when switching days
- [x] 3.5 Handle edge cases: invalid hash values default to Day 1, scroll to top on day switch

## 4. Polish and Verification

- [x] 4.1 Test responsive layout at 320px, 480px, 768px, and 1440px viewports
- [x] 4.2 Verify all 9 days display correct unique reflection text
- [x] 4.3 Verify shareable links work (`#day/1` through `#day/9`)
- [x] 4.4 Verify keyboard accessibility (Tab through day buttons, Enter/Space on accordion summaries)
- [x] 4.5 Run the site with a local server and do a final visual review
