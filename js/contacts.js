/**
 * 
 * @param {{phone: string, email: string, misc: [{type: string, value: string}]}} contacts 
 */
function createContactsFooter(contacts) {
  let contactsFooter = document.getElementById('contactsFooter');

  contactsFooter.appendChild(ghostAnchorPhoneEmail(true, contacts.phone));
  contactsFooter.appendChild(ghostAnchorPhoneEmail(false, contacts.email));

  let socialField = document.createElement('div');
  socialField.className = 'field has-addons';
  contactsFooter.appendChild(socialField);

  (contacts.misc || []).forEach(contact => {
    socialField.appendChild(ghostAnchorMisc(contact.type, contact.value));
  });
}

/**
 * 
 * @param {boolean} isPhone
 * @param {string} link
 */
function ghostAnchorPhoneEmail(isPhone, link) {
  let result = document.createElement('a');
  result.className = 'button is-ghost';
  result.href = isPhone ? 'tel:' + link : 'mailto:' + link;

  let iconContainer = document.createElement('span');
  iconContainer.className = 'icon is-small';

  let icon = document.createElement('i');
  icon.className = isPhone ? 'fa-solid fa-phone' : 'fa-solid fa-envelope';

  result.appendChild(iconContainer);
  iconContainer.appendChild(icon);
  
  let text = document.createElement('span');
  text.innerText = link;
  result.appendChild(text);

  return result;
}

/**
 * 
 * @param {string} type 
 * @param {string} link 
 */
function ghostAnchorMisc(type, link) {
  let result = document.createElement('p');
  result.className = 'control';

  let linkAnchor = document.createElement('a');
  linkAnchor.className = 'button is-ghost';
  linkAnchor.href = link;
  linkAnchor.target = '_blank';
  result.appendChild(linkAnchor);

  let iconContainer = document.createElement('span');
  iconContainer.className = 'icon is-small';
  linkAnchor.appendChild(iconContainer);

  let icon = document.createElement('i');
  switch (type) {
    case 'telegram':
      icon.className = 'fa-brands fa-telegram';
      break;
    case 'vk':
      icon.className = 'fa-brands fa-vk';
      break;
    case 'instagram':
      icon.className = 'fa-brands fa-instagram';
      break;
    default:
      icon.className = 'fa-solid fa-circle-question';
      break;
  }
  iconContainer.appendChild(icon);

  return result;
}