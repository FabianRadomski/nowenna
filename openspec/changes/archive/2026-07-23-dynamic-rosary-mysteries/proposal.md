## Why

Obecnie aplikacja Nowenny (strona statyczna) wyświetla generyczną instrukcję dla punktu 3 ("Odmów trzy pierwsze dziesiątki...") i punktu 5 ("Odmów dwie ostatnie dziesiątki..."). Użytkownik musi sam pamiętać, jakie są tajemnice różańca na dany dzień tygodnia, i samemu je odmawiać. 
Wprowadzenie dynamicznego wyświetlania odpowiednich tajemnic na podstawie bieżącego dnia tygodnia (np. Radosne w poniedziałek, Bolesne we wtorek itd.) znacznie ułatwi modlitwę, czyniąc aplikację bardziej kompletną i przyjazną dla użytkownika.

## What Changes

- Usunięcie statycznych, generycznych instrukcji odmawiania różańca w punktach 3 i 5 w pliku `index.html`.
- Wprowadzenie struktury znaczników (np. unikalnych klas lub identyfikatorów) w miejscach, w których do tej pory były generyczne instrukcje, aby umożliwić wstrzykiwanie tekstu przez JavaScript.
- Dodanie bazy tekstów z tajemnicami (Radosne, Światła, Bolesne, Chwalebne) do pliku `script.js`.
- Implementacja logiki w `script.js`, która sprawdza bieżący dzień tygodnia przy pomocy `new Date().getDay()` i na tej podstawie wybiera właściwe tajemnice.
- Dynamiczne renderowanie modlitwy: pierwsze trzy tajemnice wędrują do punktu 3, a dwie ostatnie do punktu 5 we wszystkich sekcjach dni nowenny.

## Capabilities

### New Capabilities
- `dynamic-mysteries`: Możliwość automatycznego i dynamicznego wstrzykiwania tekstów odpowiednich tajemnic różańca w oparciu o aktualny dzień tygodnia (czas lokalny użytkownika).

### Modified Capabilities
- Brak

## Impact

- `index.html`: Modyfikacja znaczników `<p>` i innych elementów zawierających modlitwę w punktach 3 i 5 w celu umożliwienia DOM manipulacji.
- `script.js`: Dodanie obiektu przechowującego treści tajemnic oraz funkcji odpowiedzialnej za zaktualizowanie DOM zaraz po załadowaniu skryptu/strony.
- Aplikacja pozostaje w pełni działająca jako strona statyczna serwowana na GitHub Pages bez konieczności utrzymywania backendu.
