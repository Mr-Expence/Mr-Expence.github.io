const footerHtml = `<footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <span class="nav__mark"><img src="/assets/Roundedfavicon/android-chrome-512x512.png"></span>
        <p>Currently learning how to code and use Unreal Engine. Creating Youtube Videos.</p>
      </div>
      <div>
        <p class="footer__heading">Explore</p>
        <div class="footer__links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/social">Social</a>
        </div>
      </div>
      <div>
        <p class="footer__heading">Connect</p>
        <div class="footer__links">
          <a href="/social">GitHub</a>
          <a href="/social">YouTube</a>
          <a href="/social">Modrinth</a>
        </div>
      </div>
    </div>
    <div class="container footer__bottom">
      <p>© <span data-year></span> Mr_Expence. All rights reserved.</p>
      <div class="appearance">
        <span class="label-mono">Appearance</span>
        <div class="appearance__switch">
          <button class="appearance__option" data-theme-set="light">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6" />
              <path
                d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4L17 17M7 7 5.6 5.6"
                stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            </svg>
            Light
          </button>
          <button class="appearance__option" data-theme-set="dark">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 14.5A8 8 0 1 1 9.5 4a6.4 6.4 0 0 0 10.5 10.5Z" stroke="currentColor" stroke-width="1.6"
                stroke-linejoin="round" />
            </svg>
            Dark
          </button>
        </div>
      </div>
    </div>
  </footer>`;

document.body.insertAdjacentHTML("beforeend", footerHtml);

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});