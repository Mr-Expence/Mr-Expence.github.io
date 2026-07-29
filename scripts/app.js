const FALLBACK_PROJECTS = [
  
];

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.querySelectorAll('[data-theme-set]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-theme-set') === theme);
  });
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(initial);

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  });

  document.querySelectorAll('[data-theme-set]').forEach((btn) => {
    btn.addEventListener('click', () => applyTheme(btn.getAttribute('data-theme-set')));
  });
}

function initMobileNav() {
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (!menuBtn || !mobileNav) return;
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

function initFooterYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

async function loadProjects() {
  try {
    const response = await fetch('/json/data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return Array.isArray(data.projects) ? data.projects : FALLBACK_PROJECTS;
  } catch (error) {
    return FALLBACK_PROJECTS;
  }
}

const ARROW_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const DOWNLOAD_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const STAR_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 9.9l6-.9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';

function monogramFor(title) {
  return title.trim().charAt(0).toUpperCase();
}

function renderCard(project) {
  return `
    <article class="card card--category-${project.category}">
      <div class="card__thumb">
        <span class="card__index">FIG. ${project.index}</span>
      </div>
      <span class="card__avatar">${monogramFor(project.title)}</span>
      <div class="card__body">
        <h3 class="title-l">${project.title}</h3>
        <div class="card__meta">
          <span>${project.categoryLabel}</span>
          <span class="dot"></span>
          <span>${project.year}</span>
        </div>
        <p class="body-m">${project.description}</p>
        <div class="card__stats">
          <span>${DOWNLOAD_ICON}${project.stats.downloads}</span>
          <span>${STAR_ICON}${project.stats.likes}</span>
        </div>
        <div class="card__tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a class="card__link" href="${project.link}">
          View project ${ARROW_ICON}
        </a>
      </div>
    </article>
  `;
}

function renderEmptyState(container) {
  container.innerHTML = '<p class="empty-state">No projects match this filter yet.</p>';
}

async function initFeaturedGrid() {
  const container = document.querySelector('[data-featured-grid]');
  if (!container) return;
  const projects = await loadProjects();
  const featured = projects.filter((project) => project.featured);
  container.innerHTML = featured.map(renderCard).join('');
}

async function initProjectsGrid() {
  const container = document.querySelector('[data-projects-grid]');
  if (!container) return;
  const projects = await loadProjects();
  const chips = document.querySelectorAll('[data-filter-chip]');

  function apply(filter) {
    const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
    if (visible.length === 0) {
      renderEmptyState(container);
    } else {
      container.innerHTML = visible.map(renderCard).join('');
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      apply(chip.getAttribute('data-filter-chip'));
    });
  });

  apply('all');
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initFooterYear();
  initFeaturedGrid();
  initProjectsGrid();
});
