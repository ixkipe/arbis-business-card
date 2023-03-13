/**
 * 
 * @param {[{date: string, event: string}]} timelineEvents 
 */
function createTimeline(timelineEvents) {
  let eduTimeline = document.getElementById('eduTimeline');

  // code for populating the timeline with events
  timelineEvents.forEach(timelineEvent => {
    if (timelineEvent.event == 'separator') {
      eduTimeline.appendChild(timelineYearSeparator(timelineEvent.date));
    }
    else {
      eduTimeline.appendChild(timelineContent(timelineEvent.date, timelineEvent.event));
    }
  });
}

/**
 * 
 * @param {string} year 
 */
function timelineYearSeparator(year) {
  let result = document.createElement('header');
  result.className = 'timeline-header';

  let text = document.createElement('span');
  text.className = 'tag is-info';
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