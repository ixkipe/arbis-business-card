/**
 * 
 * @param {[{picture: string, heading: string, text: string}]} portfolio 
 */
function portfolioCarousel(portfolio) {
  let result = document.createElement('section');
  result.className = 'section';
  result.id = 'portfolioContent';

  let container = document.createElement('div');
  container.className = 'container is-clipped';
  result.appendChild(container);

  let slider = document.createElement('div');
  slider.className = 'slider';
  container.appendChild(slider);
  
  portfolio.forEach(item => {
    let card = document.createElement('div');
    card.className = 'card';
    slider.appendChild(card);

    let cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);

    let figure = document.createElement('figure');
    figure.className = 'image is-16by9';
    cardImage.appendChild(figure);

    let pic = document.createElement('img');
    pic.src = item.picture;
    figure.appendChild(pic);

    let cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    card.appendChild(cardContent);

    let heading = document.createElement('p');
    heading.className = 'title';
    heading.innerText = item.heading;
    cardContent.appendChild(heading);

    let text = document.createElement('p');
    text.className = 'subtitle';
    text.innerText = item.text;
    cardContent.appendChild(text);
  });

  return result;
}

const tabs = [
  'greetings',
  'profile',
  'education',
  'portfolio'
];

const colors = [
  'is-info',
  'is-light',
  'is-link'
];

const portfolioContents = [
  {
    picture: "https://dummyimage.com/1366x768",
    heading: "Разработка интеграции Asterisk и amoCRM",
    text: "Написал программу на C#, выполняющую логгирование звонков: запрашивает информацию о звонках из БД (MySQL) и отправляет их по API в amoCRM"
  },
  {
    picture: "https://dummyimage.com/1366x768",
    heading: "Сделал вот это портфолио",
    text: "sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text"
  },
  {
    picture: "https://dummyimage.com/1024x768",
    heading: "Ещё че-то там сделал",
    text: "Таким образом укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Не следует, однако забывать, что укрепление и развитие структуры позволяет выполнять важные задания по разработке модели развития."
  }
]

const myBulmaCarousel = portfolioCarousel(portfolioContents);

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
    document.getElementById(tab + 'Content').setAttribute('hidden', true);
    document.getElementById(tab + 'Header').setAttribute('hidden', true);

    if (tab == 'portfolio' && document.getElementById('portfolioContent').contains(myBulmaCarousel)) {
      document.getElementById('portfolioContent').removeChild(myBulmaCarousel);
    }
  });
}

function displayContent(tab) {
  document.getElementById(tab + 'Header').removeAttribute('hidden');
  document.getElementById(tab + 'Content').removeAttribute('hidden');

  if (tab == 'portfolio') {
    document.getElementById(tab + 'Content').appendChild(myBulmaCarousel);
  }
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