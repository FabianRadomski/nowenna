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

  // --- Initialize ---
  const initialDay = getDayFromHash();
  if (initialDay !== 1) {
    switchToDay(initialDay, false);
  }
})();
