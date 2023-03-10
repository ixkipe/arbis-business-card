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

export default portfolioCarousel;