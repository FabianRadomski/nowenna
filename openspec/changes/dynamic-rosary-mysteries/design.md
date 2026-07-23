## Context

Aplikacja Nowenny to prosta, jednostronicowa, w pełni statyczna aplikacja (HTML, CSS, JS) hostowana na GitHub Pages. Użytkownik przegląda poszczególne dni nowenny (1-9). Każdego dnia odmawiany jest różaniec, podzielony na dwie części: punkt 3 (pierwsze 3 dziesiątki) i punkt 5 (ostatnie 2 dziesiątki).
Obecnie w HTML są zaszyte jedynie ogólne instrukcje modlitwy, a nie konkretne tajemnice przypisane do danego dnia tygodnia. Chcemy zautomatyzować ten proces, wykorzystując logikę w JavaScript.

## Goals / Non-Goals

**Goals:**
- Zastąpienie generycznych instrukcji w HTML tekstami konkretnych tajemnic różańcowych, zależnymi od bieżącego dnia tygodnia (tzw. dzisiaj - oparte na dacie urządzenia użytkownika).
- Logika musi być w 100% po stronie klienta (JavaScript) - aplikacja ma pozostać serwowana statycznie.
- Uniknięcie pisania na sztywno wszystkich tajemnic we wszystkich 9 dniach (co zaoszczędzi wiele kodu HTML).

**Non-Goals:**
- Nie dodajemy backendu ani bazy danych.
- Nie dodajemy przełącznika "wymuszenia" innego dnia tygodnia (w tej propozycji polegamy wyłącznie na systemowym dniu).
- Nie implementujemy zapisywania, kiedy użytkownik zaczął Nowennę i dynamicznego wyliczania postępu dnia w kalendarzu. Skupiamy się tylko na aktualnym ("dzisiejszym") dniu tygodnia.

## Decisions

1. **Wzorzec DOM Manipulacji**: 
   - Zamiast pełnych tekstów tajemnic w HTML, w pliku `index.html` zostawimy znaczniki-kontenery, np. `<div class="rosary-part-1"></div>` w punkcie 3 i `<div class="rosary-part-2"></div>` w punkcie 5. Będą one obecne dla każdego z 9 dni.
   - *Rationale*: Bardzo prosty sposób, aby skrypt w `script.js` mógł zlokalizować, gdzie ma wstrzyknąć dynamicznie zbudowany kod HTML (za pomocą `document.querySelectorAll`).
2. **Przechowywanie danych (Tajemnic)**: 
   - W pliku `script.js` dodamy stałą (object/dictionary) zawierającą wszystkie nazwy tajemnic, podzielone na kategorie, oraz mapowanie `DayOfWeek (0-6) -> Kategoria`.
   - *Rationale*: Utrzymuje dane w prostym, łatwo edytowalnym formacie JSON-podobnym bez potrzeby zaciągania zewnętrznych plików lub zależności.
3. **Czas i Data**:
   - `new Date().getDay()` zostanie użyte jako źródło prawdy. Metoda ta zwraca lokalny dzień (0=niedziela, 1=poniedziałek, itd.).
   - *Rationale*: Wystarczające, w pełni offline, nie wymaga API.

## Risks / Trade-offs

- *Risk*: Użytkownik chce przeczytać (lub pomodlić się) z wyprzedzeniem za dzień "jutrzejszy", więc tajemnice, które zobaczy, będą należeć do dzisiejszego dnia.
- *Mitigation*: Zgodzono się, że opcja dostosowania do *aktualnego* dnia przy uruchomieniu aplikacji jest najbardziej użyteczna i pokrywa podstawowy przypadek użycia aplikacji (modlitwa w danym momencie). W przyszłości można łatwo dodać UI do wyboru ("dzisiaj/jutro/ręczny wybór") bez burzenia tego rozwiązania.
