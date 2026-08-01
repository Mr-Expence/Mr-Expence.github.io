const html = `<header class="nav">
    <div class="container nav__inner">
      <a class="nav__brand" href="/">
        <span class="nav__mark"><img src="/assets/Roundedfavicon/android-chrome-512x512.png"></span>
        Mr_Expence
      </a>
      <nav class="nav__links" aria-label="Primary">
        <a class="nav__link" href="/">Home</a>
        <a class="nav__link" href="/projects">Projects</a>
        <a class="nav__link" href="/social">Social</a>
        <a class="nav__link" href="/codeforces">Codeforces</a>
        <a class="nav__link" href="/personal-links">Personal Links</a>
      </nav>
      <label class="nav__search">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6" />
          <path d="m21 21-4.3-4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
        <input type="search" placeholder="Search projects...">
      </label>
      <div class="nav__actions">
        <button class="icon-btn theme-toggle" data-theme-toggle aria-label="Toggle dark mode">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6" />
            <path
              d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4L17 17M7 7 5.6 5.6"
              stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" style="color: black" xmlns="http://www.w3.org/2000/svg"
            style="display:none">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.4 6.4 0 0 0 10.5 10.5Z" stroke="currentColor" stroke-width="1.6"
              stroke-linejoin="round" />
          </svg>
        </button>
        <button class="icon-btn nav__menu-btn" data-menu-toggle aria-label="Toggle menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
    <div class="container">
      <nav class="nav__mobile" data-mobile-nav aria-label="Mobile">
        <a class="nav__link" href="/">Home</a>
        <a class="nav__link" href="/projects">Projects</a>
        <a class="nav__link" href="/social">Social</a>
        <a class="nav__link" href="/codeforces">Codeforces</a>
        <a class="nav__link" href="/personal-links">Personal Links</a>
      </nav>
    </div>
  </header>`;

document.body.insertAdjacentHTML("afterbegin", html);

function normalizePath(path) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function markCurrentNavLink() {
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".nav__link").forEach((link) => {
    const linkPath = normalizePath(new URL(link.href).pathname);

    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

markCurrentNavLink();