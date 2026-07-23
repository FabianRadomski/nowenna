## ADDED Requirements

### Requirement: Display all fixed prayer sections
The system SHALL display all 7 steps of the daily novena structure: (1) Znak krzyża świętego, (2) Akt żalu with full text, (3) First 3 decades of the Rosary with full prayer texts (Ojcze Nasz, Zdrowaś Mario, Chwała Ojcu), (4) Daily reflection (variable per day), (5) Last 2 decades of the Rosary with full prayer texts, (6) Modlitwa do Maryi Rozwiązującej Węzły with full text, (7) Znak krzyża świętego.

#### Scenario: User opens any day
- **WHEN** the user views any day of the novena (1–9)
- **THEN** all 7 prayer steps are shown as collapsible sections with their full prayer texts

#### Scenario: Fixed sections remain the same across days
- **WHEN** the user switches between days
- **THEN** sections 1, 2, 3, 5, 6, and 7 SHALL contain the same prayer texts regardless of which day is selected

### Requirement: Display unique daily reflection
The system SHALL display the correct reflection text for each of the 9 days in section 4 (Rozważanie). Each day has a unique reflection prayer and a unique closing line.

#### Scenario: Day-specific reflection content
- **WHEN** the user views Day N (where N is 1–9)
- **THEN** section 4 SHALL display the reflection text specific to Day N, including the unique closing invocation

### Requirement: Include closing prayer and blessing
The system SHALL include the final prayer "Modlitwa do Maryi Rozwiązującej Węzły" (starting with "Dziewico Maryjo, Matko Pięknej Miłości...") and the closing blessing ("Na zakończenie nowenny przyjmij z pokorą i ufnością...") as part of section 6.

#### Scenario: Closing prayer displayed
- **WHEN** the user expands section 6 on any day
- **THEN** both the closing prayer and the blessing text SHALL be displayed in full
