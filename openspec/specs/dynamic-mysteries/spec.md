## Purpose
TBD: Handles dynamic injection of rosary mysteries based on the current day of the week.

## Requirements

### Requirement: Dynamic Rosary Mysteries Injection
The system SHALL inject the correct mysteries of the rosary into the prayer steps (point 3 and 5) based on the current day of the week, immediately upon page load.

#### Scenario: User visits the page on a Monday
- **WHEN** the user opens the novena page on a Monday
- **THEN** the system injects the Joyful Mysteries (Tajemnice radosne) into points 3 and 5 across all days.

#### Scenario: User visits the page on a Tuesday
- **WHEN** the user opens the novena page on a Tuesday
- **THEN** the system injects the Sorrowful Mysteries (Tajemnice bolesne) into points 3 and 5 across all days.

#### Scenario: User visits the page on a Wednesday
- **WHEN** the user opens the novena page on a Wednesday
- **THEN** the system injects the Glorious Mysteries (Tajemnice chwalebne) into points 3 and 5 across all days.

#### Scenario: User visits the page on a Thursday
- **WHEN** the user opens the novena page on a Thursday
- **THEN** the system injects the Luminous Mysteries (Tajemnice światła) into points 3 and 5 across all days.

#### Scenario: User visits the page on a Friday
- **WHEN** the user opens the novena page on a Friday
- **THEN** the system injects the Sorrowful Mysteries (Tajemnice bolesne) into points 3 and 5 across all days.

#### Scenario: User visits the page on a Saturday
- **WHEN** the user opens the novena page on a Saturday
- **THEN** the system injects the Joyful Mysteries (Tajemnice radosne) into points 3 and 5 across all days.

#### Scenario: User visits the page on a Sunday
- **WHEN** the user opens the novena page on a Sunday
- **THEN** the system injects the Glorious Mysteries (Tajemnice chwalebne) into points 3 and 5 across all days.

### Requirement: Distribution of Mysteries
The system SHALL split the day's mysteries such that the first 3 mysteries are in point 3, and the remaining 2 are in point 5.

#### Scenario: Distribution of Joyful Mysteries
- **WHEN** the Joyful Mysteries are active
- **THEN** point 3 displays mysteries 1-3 (Zwiastowanie, Nawiedzenie, Narodzenie) and point 5 displays mysteries 4-5 (Ofiarowanie, Odnalezienie).
