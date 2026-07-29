const FALLBACK_PROJECT_DETAILS = [
  {
    "id": "hollow-signal",
    "title": "Hollow Signal",
    "category": "games",
    "categoryLabel": "Game",
    "year": "2026",
    "description": "A top-down pursuit game built in Godot 4, with agent-driven police AI, layered parallax city blocks, and a scoring system tuned around risk versus getaway speed.",
    "details": "Hollow Signal started as a NavigationAgent2D experiment and grew into a full pursuit loop. Police cars path-find through a hand-built city grid, react to line of sight, and escalate from a single patrol car to a full roadblock once the player's heat level climbs. The scoring system rewards close calls over clean getaways, so grazing a roadblock is worth more than avoiding it entirely.",
    "tags": ["Godot 4", "GDScript", "NavigationAgent2D"],
    "stats": { "downloads": "2.1k", "likes": "180" },
    "github": "#",
    "download": "#"
  },
  {
    "id": "shulker-ui",
    "title": "Shulker UI",
    "category": "packs",
    "categoryLabel": "Resource Pack",
    "year": "2025",
    "description": "A minimal inventory and menu overhaul that keeps every default control in its familiar place while refining spacing, contrast, and iconography.",
    "details": "Shulker UI rebuilds every vanilla menu texture at 2x resolution without moving a single button. The goal was a pack that survives a game update without breaking muscle memory: inventories, furnaces, and enchanting tables all keep their original layout, just with cleaner borders, consistent corner radii, and higher-contrast slot outlines for low-light play.",
    "tags": ["Minecraft", "Resource Pack", "UI"],
    "stats": { "downloads": "48.6k", "likes": "1.2k" },
    "github": "#",
    "download": "https://modrinth.com/resourcepack/shulker-ui"
  },
  {
    "id": "flaming-swords",
    "title": "Flaming Swords",
    "category": "packs",
    "categoryLabel": "Resource Pack",
    "year": "2024",
    "description": "Animated weapon textures with a consistent burn-in silhouette across every vanilla sword, built for readability at survival distances.",
    "details": "Every vanilla sword gets a matching animated burn cycle, frame-timed so the flame silhouette stays readable from across a room rather than dissolving into noise. Built entirely in Blockbench, with a shared animation rig reused across all six sword types so future material additions only need new base textures, not a new animation pass.",
    "tags": ["Minecraft", "Blockbench", "Animation"],
    "stats": { "downloads": "112k", "likes": "3.4k" },
    "github": "#",
    "download": "https://modrinth.com/resourcepack/flaming-swords"
  },
  {
    "id": "pack-uploader",
    "title": "Pack Uploader",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2025",
    "description": "A single-file HTML front end wrapped around a Node CLI, publishing packs to Modrinth, CurseForge, and Planet Minecraft from one form.",
    "details": "Wraps ewanhowell5195's publishing CLI in a single static HTML form, so one submit fans out to all three storefronts with matching changelogs and version metadata. No build step required; the whole tool is one file that shells out to the CLI on submit.",
    "tags": ["Node.js", "HTML", "CLI"],
    "stats": { "downloads": "3.9k", "likes": "97" },
    "github": "#",
    "download": "#"
  },
  {
    "id": "grindset",
    "title": "GrindSet",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2025",
    "description": "A Python-built workout generator shipped as an installable PWA, favouring short deterministic routines over endless configuration.",
    "details": "GrindSet generates a fixed-length routine from a small rule set rather than a large configuration surface, on the theory that fewer decisions means the workout actually happens. Packaged as an installable PWA via a Python build script, deployed on Netlify.",
    "tags": ["Python", "PWA", "Netlify"],
    "stats": { "downloads": "1.4k", "likes": "62" },
    "github": "https://github.com/Mr-Expence/grindset",
    "download": "#"
  },
  {
    "id": "codeforces-picker",
    "title": "Codeforces Picker",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2026",
    "description": "An embedded widget that pulls a rating-matched problem from the Codeforces API on every page load, for a steady stream of deliberate practice.",
    "details": "A small embeddable widget that calls the Codeforces API on load, filters by a configurable rating band, and surfaces one unsolved problem at a time. Built to sit inside a VitePress site as a daily practice nudge rather than a full training platform.",
    "tags": ["VitePress", "API", "JavaScript"],
    "stats": { "downloads": "620", "likes": "41" },
    "github": "#",
    "download": "#"
  },
  {
    "id": "bounty",
    "title": "Bounty",
    "category": "games",
    "categoryLabel": "Game",
    "year": "2026",
    "description": "An arcade car chase prototype exploring explosion effects, kill-score chaining, and a win screen sequence built on Maaack's Godot template.",
    "details": "Built on top of Maaack's Godot Minimal Game Template to inherit pause menus and scene transitions for free, letting the prototype focus purely on feel: explosion particle timing, kill-score chaining, and a win screen that reads the run's stats back to the player.",
    "tags": ["Godot 4", "Game Feel", "Prototype"],
    "stats": { "downloads": "310", "likes": "28" },
    "github": "https://github.com/Mr-Expence/Bounty",
    "download": "#"
  },
  {
    "id": "mcmeta-editor",
    "title": "pack.mcmeta Editor",
    "category": "tools",
    "categoryLabel": "Tool",
    "year": "2024",
    "description": "A browser-based form for generating valid pack.mcmeta files across Minecraft versions, removing the guesswork around pack format numbers.",
    "details": "A small browser form that maps a target Minecraft version to its correct pack_format integer and generates a valid pack.mcmeta file on the spot, so nobody has to keep the format-number wiki page bookmarked.",
    "tags": ["JavaScript", "Web Tool"],
    "stats": { "downloads": "5.2k", "likes": "134" },
    "github": "#",
    "download": "#"
  }
];

const BACK_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const DOWNLOAD_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const GITHUB_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const DOWNLOAD_STAT_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const STAR_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 9.9l6-.9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';

function monogramFor(title) {
  return title.trim().charAt(0).toUpperCase();
}

function hasLink(url) {
  return Boolean(url) && url !== '#';
}

async function loadProjectDetails() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return Array.isArray(data.projects) ? data.projects : FALLBACK_PROJECT_DETAILS;
  } catch (error) {
    return FALLBACK_PROJECT_DETAILS;
  }
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="detail-not-found">
      <h1 class="headline-l">Project not found</h1>
      <p>This project may have been renamed, removed, or the link is out of date.</p>
      <a class="btn btn--filled" href="projects.html">${BACK_ICON} All projects</a>
    </div>
  `;
}

function renderProject(container, project) {
  document.title = `${project.title} — Mr_Expence`;

  container.innerHTML = `
    <a class="back-link" href="projects.html">${BACK_ICON} All projects</a>

    <div class="detail-banner detail-banner--${project.category}">
      <span class="detail-banner__badge">${project.categoryLabel}</span>
    </div>

    <div class="detail-header">
      <span class="detail-avatar">${monogramFor(project.title)}</span>
      <div class="detail-header__text">
        <h1 class="display-m">${project.title}</h1>
        <div class="detail-meta">
          <span>${project.categoryLabel}</span>
          <span class="dot"></span>
          <span>${project.year}</span>
        </div>
      </div>
    </div>

    <p class="body-l" style="max-width:70ch;margin-bottom:var(--space-6);">${project.description}</p>

    <div class="detail-actions">
      ${hasLink(project.download) ? `<a class="btn btn--filled" href="${project.download}" target="_blank" rel="noopener">${DOWNLOAD_ICON} Download</a>` : ''}
      ${hasLink(project.github) ? `<a class="btn btn--outlined" href="${project.github}" target="_blank" rel="noopener">${GITHUB_ICON} View on GitHub</a>` : ''}
      ${!hasLink(project.download) && !hasLink(project.github) ? `<span class="body-m">No public link yet — check back soon.</span>` : ''}
    </div>

    <div class="detail-layout">
      <div class="detail-content">
        <div>
          <h2 class="title-l" style="margin-bottom:var(--space-3);">About this project</h2>
          <p class="body-m">${project.details}</p>
        </div>
        <div class="card__tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>

      <aside class="detail-panel">
        <div class="detail-panel__row">
          <span>Category</span>
          <span>${project.categoryLabel}</span>
        </div>
        <div class="detail-panel__row">
          <span>Released</span>
          <span>${project.year}</span>
        </div>
        <div class="detail-panel__row">
          <span>${DOWNLOAD_STAT_ICON} Downloads</span>
          <span>${project.stats.downloads}</span>
        </div>
        <div class="detail-panel__row">
          <span>${STAR_ICON} Likes</span>
          <span>${project.stats.likes}</span>
        </div>
      </aside>
    </div>
  `;
}

async function initProjectDetail() {
  const container = document.querySelector('[data-project-detail]');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const projects = await loadProjectDetails();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    renderNotFound(container);
    return;
  }

  renderProject(container, project);
}

document.addEventListener('DOMContentLoaded', initProjectDetail);
