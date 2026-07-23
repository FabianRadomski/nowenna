## 1. Modyfikacje HTML (index.html)

- [x] 1.1 We wszystkich 9 dniach (sekcje `data-day="1"` do `data-day="9"`) zamień zawartość w `<details>` dla Punktu 3 ("3. Trzy pierwsze dziesiątki różańca") na pusty kontener `<div class="rosary-part-1"></div>`. Zachowaj `<summary>`.
- [x] 1.2 We wszystkich 9 dniach zamień zawartość w `<details>` dla Punktu 5 ("5. Dwie ostatnie dziesiątki różańca") na pusty kontener `<div class="rosary-part-2"></div>`. Zachowaj `<summary>`.

## 2. Baza danych tajemnic (script.js)

- [x] 2.1 Zdefiniuj obiekt w JS zawierający teksty wszystkich 4 kategorii tajemnic (Radosne, Światła, Bolesne, Chwalebne).
- [x] 2.2 Dodaj logikę określającą aktualny dzień tygodnia przy pomocy `new Date().getDay()` i powiąż odpowiedni dzień (0-6) z konkretną kategorią tajemnic.

## 3. Logika i wstrzykiwanie do DOM (script.js)

- [x] 3.1 Napisz funkcję pomocniczą generującą kod HTML dla danej listy tajemnic (zawierającą nagłówki tajemnic oraz standardowe modlitwy: Ojcze Nasz, Zdrowaś Mario x10 - u nas jako jedna instrukcja - Chwała Ojcu, O mój Jezu).
- [x] 3.2 Napisz funkcję inicjalizującą, która dzieli wybraną kategorię tajemnic: tajemnice 1-3 dla Punktu 3 oraz tajemnice 4-5 dla Punktu 5.
- [x] 3.3 Znajdź wszystkie elementy `.rosary-part-1` i wstrzyknij wygenerowany HTML z pierwszymi 3 tajemnicami.
- [x] 3.4 Znajdź wszystkie elementy `.rosary-part-2` i wstrzyknij wygenerowany HTML z ostatnimi 2 tajemnicami.
- [x] 3.5 Wywołaj funkcję inicjalizującą różańca tuż po załadowaniu skryptu (np. w istniejącej funkcji IIFE).
