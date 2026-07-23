## ADDED Requirements

### Requirement: Akt skruchy prayer step
System SHALL display "2. Akt skruchy" as the second prayer step in each day of the novena with the specified prayer text.

#### Scenario: Displaying step 2 heading
- **WHEN** user opens any day of the novena (Day 1 through Day 9)
- **THEN** step 2 summary header SHALL read "2. Akt skruchy"

#### Scenario: Displaying step 2 text
- **WHEN** user opens step 2 details for any day of the novena
- **THEN** the prayer body SHALL contain the exact text: "Boże mój, bardzo żałuję, że Cię obraziłem, ponieważ Ty jesteś nieskończenie dobry i nie masz upodobania w grzechu. Zdecydowanie postanawiam, z pomocą Twojej świętej łaski, już więcej Cię nie obrażać i winy odpokutować."
