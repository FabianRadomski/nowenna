## ADDED Requirements

### Requirement: Day selector with numbered buttons
The system SHALL display 9 numbered buttons (1–9) allowing the user to manually select which day of the novena to view. The currently selected day button SHALL be visually distinct from the others.

#### Scenario: User selects a day
- **WHEN** the user clicks day button N
- **THEN** the page SHALL display the prayer content for Day N and visually highlight button N as selected

#### Scenario: Default day on fresh load
- **WHEN** the user loads the page without a URL hash
- **THEN** Day 1 SHALL be displayed and button 1 SHALL be highlighted

### Requirement: Previous and Next navigation
The system SHALL display Previous and Next navigation controls below the prayer content to move between adjacent days.

#### Scenario: Navigate to next day
- **WHEN** the user is on Day N (where N < 9) and clicks Next
- **THEN** the page SHALL display Day N+1

#### Scenario: Navigate to previous day
- **WHEN** the user is on Day N (where N > 1) and clicks Previous
- **THEN** the page SHALL display Day N-1

#### Scenario: First day has no Previous
- **WHEN** the user is on Day 1
- **THEN** the Previous button SHALL be hidden or disabled

#### Scenario: Last day has no Next
- **WHEN** the user is on Day 9
- **THEN** the Next button SHALL be hidden or disabled

### Requirement: URL hash routing for shareable links
The system SHALL use URL hash format `#day/N` to represent the current day. The hash SHALL update when the day changes, and the page SHALL read the hash on load to display the correct day.

#### Scenario: Share link to specific day
- **WHEN** a user shares the URL `https://example.com/#day/4` with another person
- **THEN** the recipient's browser SHALL load the page showing Day 4

#### Scenario: Hash updates on day change
- **WHEN** the user switches from Day 2 to Day 5
- **THEN** the URL hash SHALL update to `#day/5`

#### Scenario: Browser back/forward navigation
- **WHEN** the user navigates between days and then presses the browser Back button
- **THEN** the page SHALL display the previously viewed day

#### Scenario: Invalid hash
- **WHEN** the page loads with an invalid hash (e.g., `#day/0`, `#day/15`, `#foo`)
- **THEN** the page SHALL default to Day 1
