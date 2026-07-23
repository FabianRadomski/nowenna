// ============================================
// Nowenna — Day Navigation
// ============================================

(function () {
  'use strict';

  const TOTAL_DAYS = 9;

  // --- DOM References ---
  const dayButtons = document.querySelectorAll('.day-btn');
  const dayContents = document.querySelectorAll('.day-content');
  const prevButtons = document.querySelectorAll('.nav-prev');
  const nextButtons = document.querySelectorAll('.nav-next');

  // --- Core: Switch to a given day ---
  function switchToDay(dayNumber, updateHash = true) {
    // Clamp to valid range
    if (dayNumber < 1 || dayNumber > TOTAL_DAYS) {
      dayNumber = 1;
    }

    // Update day selector buttons
    dayButtons.forEach(btn => {
      const isActive = parseInt(btn.dataset.day, 10) === dayNumber;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    // Show/hide day content
    dayContents.forEach(content => {
      const isActive = parseInt(content.dataset.day, 10) === dayNumber;
      content.classList.toggle('active', isActive);

      // Collapse all <details> in the day we're leaving
      if (!isActive) {
        content.querySelectorAll('details[open]').forEach(d => {
          d.removeAttribute('open');
        });
      }
    });

    // Also collapse all <details> in the newly active day
    const activeContent = document.querySelector(`.day-content[data-day="${dayNumber}"]`);
    if (activeContent) {
      activeContent.querySelectorAll('details[open]').forEach(d => {
        d.removeAttribute('open');
      });
    }

    // Update URL hash
    if (updateHash) {
      history.pushState(null, '', `#day/${dayNumber}`);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Parse day from URL hash ---
  function getDayFromHash() {
    const hash = window.location.hash;
    const match = hash.match(/^#day\/(\d+)$/);
    if (match) {
      const day = parseInt(match[1], 10);
      if (day >= 1 && day <= TOTAL_DAYS) {
        return day;
      }
    }
    return 1; // Default to day 1
  }

  // --- Get currently active day ---
  function getCurrentDay() {
    const activeBtn = document.querySelector('.day-btn.active');
    return activeBtn ? parseInt(activeBtn.dataset.day, 10) : 1;
  }

  // --- Event Listeners ---

  // Day selector buttons
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const day = parseInt(btn.dataset.day, 10);
      switchToDay(day);
    });
  });

  // Prev/Next buttons
  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDay = getCurrentDay();
      if (currentDay > 1) {
        switchToDay(currentDay - 1);
      }
    });
  });

  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDay = getCurrentDay();
      if (currentDay < TOTAL_DAYS) {
        switchToDay(currentDay + 1);
      }
    });
  });

  // Browser back/forward
  window.addEventListener('hashchange', () => {
    const day = getDayFromHash();
    switchToDay(day, false); // Don't push state again
  });

  // --- Dynamic Rosary Mysteries ---
  const mysteries = {
    radosne: {
      title: "Tajemnice radosne",
      list: [
        "Zwiastowanie Najświętszej Maryi Pannie.",
        "Nawiedzenie świętej Elżbiety.",
        "Narodzenie Pana Jezusa.",
        "Ofiarowanie Jezusa w Świątyni.",
        "Odnalezienie Jezusa w Świątyni."
      ]
    },
    swiatla: {
      title: "Tajemnice światła",
      list: [
        "Chrzest Pana Jezusa w Jordanie.",
        "Objawienie się Pana Jezusa w Kanie Galilejskiej.",
        "Głoszenie królestwa Bożego i wzywanie do nawrócenia.",
        "Przemienienie Pańskie na górze Tabor.",
        "Ustanowienie Eucharystii."
      ]
    },
    bolesne: {
      title: "Tajemnice bolesne",
      list: [
        "Modlitwa Pana Jezusa w Ogrójcu.",
        "Biczowanie Pana Jezusa.",
        "Cierniem ukoronowanie Pana Jezusa.",
        "Droga krzyżowa Pana Jezusa.",
        "Ukrzyżowanie i śmierć Pana Jezusa."
      ]
    },
    chwalebne: {
      title: "Tajemnice chwalebne",
      list: [
        "Zmartwychwstanie Pana Jezusa.",
        "Wniebowstąpienie Pana Jezusa.",
        "Zesłanie Ducha Świętego.",
        "Wniebowzięcie Najświętszej Maryi Panny.",
        "Ukoronowanie Maryi na Królową Nieba i Ziemi."
      ]
    }
  };

  function getMysteriesForToday() {
    const day = new Date().getDay();
    const map = {
      0: mysteries.chwalebne,
      1: mysteries.radosne,
      2: mysteries.bolesne,
      3: mysteries.chwalebne,
      4: mysteries.swiatla,
      5: mysteries.bolesne,
      6: mysteries.radosne
    };
    return map[day] || mysteries.radosne;
  }

  function generateMysteryHTML(title, titleArray, isLastPart) {
    const commonPrayers = `
      <p class="prayer-section-title">Ojcze Nasz</p>
      <p>Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.</p>

      <p class="prayer-section-title">Zdrowaś Maryjo</p>
      <p>Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.</p>

      <p class="prayer-section-title">Chwała Ojcu</p>
      <p>Chwała Ojcu i Synowi, i Duchowi Świętemu, jak była na początku, teraz i zawsze, i na wieki wieków. Amen.</p>

      <p class="prayer-section-title">O mój Jezu</p>
      <p>O mój Jezu, przebacz nam nasze grzechy, zachowaj nas od ognia piekielnego, zaprowadź wszystkie dusze do nieba i dopomóż szczególnie tym, którzy najbardziej potrzebują Twojego miłosierdzia.</p>
    `;

    return `
      <p class="prayer-instruction">${isLastPart ? "Odmów dwie ostatnie dziesiątki różańca rozważając następujące tajemnice:" : "Odmów trzy pierwsze dziesiątki różańca rozważając następujące tajemnice:"}</p>
      <p style="margin-top: 1rem; font-weight: bold; font-style: italic;">${title}:</p>
      <ul style="margin-bottom: 1rem; list-style-type: decimal; margin-left: 1.5rem;">
        ${titleArray.map(t => `<li><strong>${t}</strong></li>`).join('')}
      </ul>
      ${commonPrayers}
    `;
  }

  function initDynamicMysteries() {
    const todayMysteries = getMysteriesForToday();
    const firstPart = todayMysteries.list.slice(0, 3);
    const secondPart = todayMysteries.list.slice(3, 5);

    const part1HTML = generateMysteryHTML(todayMysteries.title, firstPart, false);
    const part2HTML = generateMysteryHTML(todayMysteries.title, secondPart, true);

    document.querySelectorAll('.rosary-part-1').forEach(el => {
      el.innerHTML = part1HTML;
    });

    document.querySelectorAll('.rosary-part-2').forEach(el => {
      el.innerHTML = part2HTML;
    });
  }

  // --- Initialize ---
  initDynamicMysteries();
  const initialDay = getDayFromHash();
  if (initialDay !== 1) {
    switchToDay(initialDay, false);
  }
})();
