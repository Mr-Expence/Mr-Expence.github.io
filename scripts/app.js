const FALLBACK_PROJECTS = [
  {
    "id": "hollow-signal",
    "title": "Hollow Signal",
    "category": "games",
    "categoryLabel": "Game",
    "year": "2026",
    "index": "01",
    "description": "A top-down pursuit game built in Godot 4, with agent-driven police AI, layered parallax city blocks, and a scoring system tuned around risk versus getaway speed.",
    "tags": ["Godot 4", "GDScript", "NavigationAgent2D"],
    "stats": { "downloads": "2.1k", "likes": "180" },
    "featured": true,
    "link": "project.html?id=hollow-signal",
    "banner": "assets/projects/hollow-signal-banner.jpg",
    "logo": "assets/projects/hollow-signal-logo.png"
  },
  {
    "id": "shulker-ui",
    "title": "Shulker UI",
    "category": "packs",
    "categoryLabel": "Resource Pack",
    "year": "2025",
    "index": "02",
    "description": "A minimal inventory and menu overhaul that keeps every default control in its familiar place while refining spacing, contrast, and iconography.",
    "tags": ["Minecraft", "Resource Pack", "UI"],
    "stats": { "downloads": "48.6k", "likes": "1.2k" },
    "featured": true,
    "link": "project.html?id=shulker-ui",
    "banner": "assets/projects/shulker-ui-banner.jpg",
    "logo": "assets/projects/shulker-ui-logo.png"
  },
  {
    "id": "flaming-swords",
    "title": "Flaming Swords",
    "category": "packs",
    "categoryLabel": "Resource Pack",
    "year": "2024",
    "index": "03",
    "description": "Animated weapon textures with a consistent burn-in silhouette across every vanilla sword, built for readability at survival distances.",
    "tags": ["Minecraft", "Blockbench", "Animation"],
    "stats": { "downloads": "112k", "likes": "3.4k" },
    "featured": true,
    "link": "/projects/flaming-swords.html",
    "banner": "assets/projects/flaming-swords-banner.jpg",
    "logo": "assets/projects/flaming-swords-logo.png"
  },
  {
    "id": "pack-uploader",
    "title": "Pack Uploader",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2025",
    "index": "04",
    "description": "A single-file HTML front end wrapped around a Node CLI, publishing packs to Modrinth, CurseForge, and Planet Minecraft from one form.",
    "tags": ["Node.js", "HTML", "CLI"],
    "stats": { "downloads": "3.9k", "likes": "97" },
    "featured": false,
    "link": "project.html?id=pack-uploader",
    "banner": "assets/projects/pack-uploader-banner.jpg",
    "logo": "assets/projects/pack-uploader-logo.png"
  },
  {
    "id": "grindset",
    "title": "GrindSet",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2025",
    "index": "05",
    "description": "A Python-built workout generator shipped as an installable PWA, favouring short deterministic routines over endless configuration.",
    "tags": ["Python", "PWA", "Netlify"],
    "stats": { "downloads": "1.4k", "likes": "62" },
    "featured": false,
    "link": "project.html?id=grindset",
    "banner": "assets/projects/grindset-banner.jpg",
    "logo": "assets/projects/grindset-logo.png"
  },
  {
    "id": "codeforces-picker",
    "title": "Codeforces Picker",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2026",
    "index": "06",
    "description": "An embedded widget that pulls a rating-matched problem from the Codeforces API on every page load, for a steady stream of deliberate practice.",
    "tags": ["VitePress", "API", "JavaScript"],
    "stats": { "downloads": "620", "likes": "41" },
    "featured": false,
    "link": "project.html?id=codeforces-picker",
    "banner": "assets/projects/codeforces-picker-banner.jpg",
    "logo": "assets/projects/codeforces-picker-logo.png"
  }
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

function renderCard(project) {
  return `
    <article class="card card--category-${project.category}">
      <div class="card__thumb">
        <img src="${project.banner}" alt="${project.title} header image" loading="lazy">
      </div>
      <img class="card__avatar" src="${project.logo}" alt="${project.title} logo">
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

function getSearchInput() {
  return document.querySelector('.nav__search input');
}

function matchesSearch(project, query) {
  if (!query) return true;
  const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

let allProjects = [];
let activeCategory = 'all';

function applyProjectFilters() {
  const container = document.querySelector('[data-projects-grid]');
  if (!container) return;
  const searchInput = getSearchInput();
  const query = searchInput ? searchInput.value.trim() : '';
  const visible = allProjects.filter(
    (p) => (activeCategory === 'all' || p.category === activeCategory) && matchesSearch(p, query)
  );
  if (visible.length === 0) {
    renderEmptyState(container);
  } else {
    container.innerHTML = visible.map(renderCard).join('');
  }
}

async function initProjectsGrid() {
  const container = document.querySelector('[data-projects-grid]');
  if (!container) return;
  allProjects = await loadProjects();
  const chips = document.querySelectorAll('[data-filter-chip]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeCategory = chip.getAttribute('data-filter-chip');
      applyProjectFilters();
    });
  });

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('search');
  const searchInput = getSearchInput();
  if (initialQuery && searchInput) {
    searchInput.value = initialQuery;
  }

  applyProjectFilters();
}

function initNavSearch() {
  const input = getSearchInput();
  if (!input) return;

  const onProjectsGrid = document.querySelector('[data-projects-grid]');

  if (onProjectsGrid) {
    input.addEventListener('input', () => applyProjectFilters());
  }

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    if (onProjectsGrid) {
      applyProjectFilters();
      return;
    }

    const query = input.value.trim();
    window.location.href = query
      ? `projects?search=${encodeURIComponent(query)}`
      : 'projects';
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initMobileNav();
  initFooterYear();
  initFeaturedGrid();
  await initProjectsGrid();
  initNavSearch();
});