/**
 * 
 * @param {[{picture: string, heading: string, text: string}]} portfolio 
 */
function portfolioCarousel(portfolio) {
  // let result = document.createElement('section');
  // result.className = 'section';
  // result.id = 'portfolioContent';

  let container = document.createElement('div');
  container.className = 'container is-clipped';

  let slider = document.createElement('div');
  slider.className = 'slider';
  slider.id = 'bulmaPortfolioSlider';
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

  return container;
}

/**
 * 
 * @param {[{date: string, event: string}]} timelineEvents 
 */
function createTimeline(timelineEvents) {
  let eduTimeline = document.getElementById('eduTimeline');

  // code for populating the timeline with events
  timelineEvents.forEach(timelineEvent => {
    if (timelineEvent.event == 'separator') {
      eduTimeline.appendChild(timelineYearSeparator(timelineEvent.date, true));
    }
    else {
      eduTimeline.appendChild(timelineContent(timelineEvent.date, timelineEvent.event));
    }
  });

  eduTimeline.appendChild(timelineFinish());
}

function timelineFinish() {
  let result = document.createElement('header');
  result.className = 'timeline-header';

  let text = document.createElement('span');
  text.className = 'tag is-info is-medium';

  let icon = document.createElement('i');
  icon.className = 'fa-solid fa-flag-checkered';
  text.appendChild(icon);

  result.appendChild(text);
  return result;
}

/**
 * 
 * @param {string} year 
 * @param {boolean} isSmall
 */
function timelineYearSeparator(year, isSmall) {
  let result = document.createElement('header');
  result.className = 'timeline-header';

  let text = document.createElement('span');
  text.className = isSmall ? 'tag is-info' : 'tag is-info is-medium';
  text.innerText = year;

  result.appendChild(text);
  return result;
}

/**
 * 
 * @param {string} date 
 * @param {string} event 
 */
function timelineContent(date, event) {
  let result = document.createElement('div');
  result.className = 'timeline-item';

  let marker = document.createElement('div');
  marker.className = 'timeline-marker is-info';
  result.appendChild(marker);

  let content = document.createElement('div');
  content.className = 'timeline-content';
  result.appendChild(content);

  let heading = document.createElement('h6');
  heading.className = 'heading is-size-6';
  heading.innerText = date;
  content.appendChild(heading);

  let text = document.createElement('p');
  text.innerText = event;
  content.appendChild(text);

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

const education = [
  {
    "date": "2012",
    "event": "separator"
  },
  {
    "date": "Июнь 2012",
    "event": "Закончил школу №35 города Архангельска"
  },
  {
    "date": "Сентябрь 2012",
    "event": "Поступил на обучение в Институт филологии и межкультурной коммуникации САФУ им. М.В. Ломоносова по специальности \"45.03.02 Лингвистика\""
  },
  {
    "date": "2015",
    "event": "separator"
  },
  {
    "date": "Январь 2015 - Июнь 2015",
    "event": "Проходил стажировку в городе Тромсё, Норвегия по программе \"Норвежская культура, литература и обществознание\""
  },
  {
    "date": "2016",
    "event": "separator"
  },
  {
    "date": "Июнь 2016",
    "event": "Закончил обучение в САФУ по программе бакалавриата \"45.03.02 Лингвистика\""
  },
  {
    "date": "2020",
    "event": "separator"
  },
  {
    "date": "Июль 2020",
    "event": "Прошёл профессиональную переподготовку по программе \"Преподавание английского языка\""
  }
];

const portfolioContents = [
  {
    picture: "https://dummyimage.com/1366x768",
    heading: "Разработка интеграции Asterisk и amoCRM",
    text: "Написал программу на C#, выполняющую логгирование звонков: запрашивает информацию о звонках из БД (MySQL) и отправляет их по API в amoCRM"
  },
  {
    picture: "https://dummyimage.com/1366x768",
    heading: "Сделал вот эту визитку",
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
      console.log(tab == 'portfolio');
      console.log(document.getElementById('portfolioContent').contains(myBulmaCarousel));
      
      myBulmaCarousel.remove();
      console.log(document.getElementById('portfolioContent').contains(myBulmaCarousel));
    }
  });
}

function displayContent(tab) {
  document.getElementById(tab + 'Header').removeAttribute('hidden');
  document.getElementById(tab + 'Content').removeAttribute('hidden');

  if (tab == 'portfolio' && !(document.getElementById('portfolioContent').contains(myBulmaCarousel))) {
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

  createTimeline(education);

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