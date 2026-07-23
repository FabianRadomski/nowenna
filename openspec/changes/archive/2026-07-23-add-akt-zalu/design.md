## Context

Obecnie plik `index.html` zawiera powtórzoną strukturę modlitewną dla każdego z 9 dni nowenny. W każdym dniu krok 2 to `<details class="prayer-step"><summary>2. Akt żalu</summary><div class="prayer-body"><p>Ach, żałuję za me złości, jedynie dla Twej miłości. Bądź miłościw mnie grzesznemu, do poprawy dążącemu.</p></div></details>`.

## Goals / Non-Goals

**Goals:**
- Podmienić nazwę drugiego kroku we wszystkich 9 dniach na `2. Akt skruchy`.
- Podmienić treść drugiego kroku we wszystkich 9 dniach na podany tekst aktu skruchy: „Boże mój, bardzo żałuję, że Cię obraziłem, ponieważ Ty jesteś nieskończenie dobry i nie masz upodobania w grzechu. Zdecydowanie postanawiam, z pomocą Twojej świętej łaski, już więcej Cię nie obrażać i winy odpokutować.”

**Non-Goals:**
- Modyfikacja pozostałych kroków modlitewnych, stylów CSS lub skryptu JS.

## Decisions

- Direct HTML Update: Zmiana zostanie wprowadzona bezpośrednio w `index.html` dla każdego z 9 dni nowenny, dbając o zachowanie jednolitego formatowania i struktury DOM.

## Risks / Trade-offs

- [Risk] Pominięcie któregoś z dni podczas podmiany w HTML → Użycie precyzyjnej podmiany dla wszystkich 9 powtórzeń.
