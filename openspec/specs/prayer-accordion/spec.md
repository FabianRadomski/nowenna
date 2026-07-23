# Capability: Prayer Accordion

## Purpose
TBD

## Requirements

### Requirement: Collapsible prayer sections using accordion
The system SHALL render each of the 7 prayer steps as a collapsible accordion section using native `<details>/<summary>` HTML elements. All sections SHALL be collapsed by default.

#### Scenario: All sections collapsed on load
- **WHEN** the user loads the page or switches to a new day
- **THEN** all 7 prayer step sections SHALL be in the collapsed state

#### Scenario: User expands a section
- **WHEN** the user clicks on a collapsed section's header
- **THEN** that section SHALL expand to reveal its full prayer text

#### Scenario: User collapses an expanded section
- **WHEN** the user clicks on an expanded section's header
- **THEN** that section SHALL collapse, hiding its prayer text

#### Scenario: Multiple sections can be open
- **WHEN** the user expands section 2 while section 4 is already expanded
- **THEN** both sections 2 and 4 SHALL remain expanded simultaneously

### Requirement: Accessible accordion interactions
The accordion sections SHALL be keyboard-accessible and work with screen readers via native `<details>/<summary>` semantics.

#### Scenario: Keyboard navigation
- **WHEN** the user focuses a summary element and presses Enter or Space
- **THEN** the corresponding section SHALL toggle between expanded and collapsed states

### Requirement: Responsive layout
The page SHALL be usable and readable on devices from 320px to 1440px viewport width. Content SHALL be centered with a maximum width for readability on large screens.

#### Scenario: Mobile viewport
- **WHEN** the viewport width is 320px–480px
- **THEN** the layout SHALL use full width with appropriate padding, and all interactive elements SHALL be easily tappable (minimum 44px touch target)

#### Scenario: Desktop viewport
- **WHEN** the viewport width exceeds 768px
- **THEN** the content area SHALL be centered with a maximum width to maintain comfortable line lengths for reading
