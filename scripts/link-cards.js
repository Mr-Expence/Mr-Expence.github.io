const LINK_CARD_ARROW_ICON = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

function createLinkCardItem(linkData = {}) {
  const item = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.className = 'social-link';
  anchor.href = linkData.link || '';

  if (linkData.link) {
    anchor.target = '_blank';
    anchor.rel = 'noreferrer noopener';
  }

  const icon = document.createElement('span');
  icon.className = 'social-link__icon';
  icon.innerHTML = linkData.icon || '';

  const text = document.createElement('span');
  text.className = 'social-link__text';

  const titleNode = document.createElement('p');
  titleNode.className = 'title-m';
  titleNode.textContent = linkData.title || '';

  const subtextNode = document.createElement('p');
  subtextNode.className = 'social-link__handle';
  subtextNode.textContent = linkData.subtext || '';

  text.append(titleNode, subtextNode);
  anchor.append(icon, text);
  anchor.insertAdjacentHTML('beforeend', LINK_CARD_ARROW_ICON);

  item.append(anchor);
  return item;
}

async function loadLinkCards() {
  try {
    const response = await fetch('/json/data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return Array.isArray(data.otherLinks) ? data.otherLinks : [];
  } catch (error) {
    return [];
  }
}

async function initLinkCards() {
  const socialList = document.querySelector('.social-list');
  if (!socialList) return;

  const linkCards = await loadLinkCards();
  if (linkCards.length === 0) return;

  socialList.innerHTML = '';
  linkCards.forEach((linkData) => {
    socialList.append(createLinkCardItem(linkData));
  });
}

document.addEventListener('DOMContentLoaded', initLinkCards);