const tabs = [
  'greetings',
  'profile',
  'education',
  'portfolio',
  'contacts'
];

const colors = [
  'is-info',
  'is-light',
  'is-link'
];

function openImageModal() {
  openModal(document.getElementById('imageModal'));
}

function makeEachTabInactive() {
  tabs.forEach(tab => {
    document.getElementById(tab).classList.remove('is-active');
  });
}

function makeEachContentItemInactive() {
  tabs.forEach(tab => {
    document.getElementById(tab + 'Content').classList.add('is-hidden');
    document.getElementById(tab + 'Header').classList.add('is-hidden');
  });
}

function displayContent(tab) {
  document.getElementById(tab + 'Content').classList.remove('is-hidden');
  document.getElementById(tab + 'Header').classList.remove('is-hidden');
}

function assignColorToHero(index) {
  let contentHero = document.getElementById('mainContent');
  
  colors.forEach(color => {
    if (contentHero.classList.contains(color)) {
      contentHero.classList.remove(color);
    }
  });

  contentHero.classList.add(colors[index]);
}

// Functions to open and close a modal
function openModal($el) {
  $el.classList.add('is-active');
}

function closeModal($el) {
  $el.classList.remove('is-active');
}

function closeAllModals() {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('profilePic').onclick = () => openImageModal();

  tabs.forEach(tab => {
    let currentTab = document.getElementById(tab);

    currentTab.onclick = () => {
      makeEachTabInactive();
      currentTab.classList.add('is-active');
      
      makeEachContentItemInactive();
      displayContent(tab);
      assignColorToHero(tab == 'education' ? 2 : tab == 'profile' || tab == 'portfolio' ? 1 : 0);
    }
  });

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});