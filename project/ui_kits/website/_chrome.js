/* =========================================================
   BF Property — site chrome
   ---------------------------------------------------------
   Shared nav, footer, sticky CTA — injected into every page
   so each page file contains only its unique content.

   For the Webflow build team:
   • _chrome-source.html shows the canonical markup that this
     script injects. Copy that into Webflow's symbol/component.
   ========================================================= */

(function () {
  // ---- Helpers ----
  const $ = (sel, root = document) => root.querySelector(sel);
  const here = (location.pathname.replace(/index\.html?$/, '')) || '/';

  // ---- Path prefix (per-page, declared on the script tag) ----
  // <script src="_chrome.js" data-root="" defer></script>          // top-level page
  // <script src="../_chrome.js" data-root=".." defer></script>     // sub-page (services/, projects/, journal/)
  const scriptEl = document.currentScript ||
    Array.from(document.scripts).find(s => /_chrome\.js(\?|$)/.test(s.src));
  // Path from the current page back to project root.
  // Top-level page (ui_kits/website/index.html) needs `../../` to reach project root.
  // Sub-page (ui_kits/website/services/x.html) needs `../../../`.
  const root = (scriptEl?.dataset.root ?? '').replace(/\/$/, '');
  const linkPrefix = root ? root + '/' : '';                 // page → website root + href
  const assetPrefix = '../../' + (root ? root + '/' : '');   // page → project root (assets/, webflow/)

  function rel(href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return href;
    if (href.startsWith('../')) {
      // Asset path written relative to top-level page; rewrite for sub-pages.
      return root ? root + '/' + href : href;
    }
    return linkPrefix + href;
  }

  const isCurrent = (href) => {
    const target = (linkPrefix + href).replace(/index\.html?$/, '');
    const norm = here.replace(/index\.html?$/, '');
    // Match by ending segment
    if (target === '' || target === '/') {
      return /\/(ui_kits\/website\/?)$/.test(norm) || norm.endsWith('/website/');
    }
    return norm.endsWith(target.replace(/^\.\//, '').replace(/^\.\.\//, '').replace(/\.html$/, '/').replace(/\.html$/, ''));
  };
  const current = (href) => isCurrent(href) ? ' is-current' : '';

  // ---- Service menu ----
  const services = [
    { href: 'services/design-and-build.html',         label: 'Design &amp; Build' },
    { href: 'services/custom-design.html',            label: 'Custom design' },
    { href: 'services/multi-unit-townhouses.html',    label: 'Multi-unit &amp; townhouse' },
    { href: 'services/medium-density.html',           label: 'Medium-density developments' },
    { href: 'services/subdividing.html',              label: 'Subdividing' },
    { href: 'services/knock-down-rebuild.html',       label: 'Knock-down-and-rebuild' },
    { href: 'services/house-and-land.html',           label: 'House and land' },
    { href: 'sell-your-land.html',                    label: 'Sell us your land' },
  ];

  // ---- Top nav ----
  const navHtml = `
    <a href="#main" class="skip-link">Skip to main content</a>

    <header class="nav" id="site-nav">
      <div class="nav_container">
        <a href="${rel('index.html')}" class="nav_logo" aria-label="BF Property home">
          <img src="${assetPrefix}assets/logo-bf-property-red.svg" alt="BF Property" width="108" height="42">
        </a>

        <nav aria-label="Primary" class="primary-nav">
          <ul class="nav_links" role="list">
            <li><a href="${rel('index.html')}" class="nav_link${current('index.html')}">Home</a></li>
            <li class="has-menu">
              <a href="${rel('services/index.html')}" class="nav_link${current('services/index.html') || (here.includes('/website/services/') ? ' is-current' : '')}" aria-haspopup="true" aria-expanded="false">Services <i data-lucide="chevron-down" class="nav_chevron" aria-hidden="true"></i></a>
              <div class="nav_menu" role="menu">
                <ul class="nav_menu-list" role="list">
                  ${services.map(s => `<li><a href="${rel(s.href)}" class="nav_menu-link" role="menuitem">${s.label}</a></li>`).join('')}
                </ul>
              </div>
            </li>
            <li><a href="${rel('projects/index.html')}" class="nav_link${current('projects/index.html') || (here.includes('/website/projects/') ? ' is-current' : '')}">Projects</a></li>
            <li><a href="${rel('about.html')}" class="nav_link${current('about.html')}">About</a></li>
            <li><a href="${rel('journal/index.html')}" class="nav_link${current('journal/index.html') || (here.includes('/website/journal/') ? ' is-current' : '')}">Journal</a></li>
            <li><a href="${rel('faq.html')}" class="nav_link${current('faq.html')}">FAQ</a></li>
          </ul>
        </nav>

        <a href="${rel('contact.html')}" class="button" data-cta="primary">Get in touch</a>
      </div>
    </header>
  `;

  // ---- Footer ----
  const footerHtml = `
    <footer class="footer">
      <div class="container footer_container">

        <div class="footer_cta">
          <h2 class="footer_cta-heading">Tell us about the site,<br>or what you'd like to build.</h2>
          <a href="${rel('contact.html')}" class="button on-accent-primary">Start a conversation <i data-lucide="arrow-right" class="button_icon" aria-hidden="true"></i></a>
        </div>

        <hr class="divider on-accent-primary footer_divider" aria-hidden="true">

        <div class="footer_grid">
          <div>
            <div class="footer_brand-mark">BF Property</div>
            <p class="footer_brand-tagline">Canterbury-based direct-to-client contract developer. We develop. You receive.</p>
            <p class="footer_brand-tagline" style="margin-top: 0.75rem; opacity: 0.55;">Trading brand of buildFIRST. Twenty-two years building in Canterbury.</p>
          </div>

          <nav aria-label="Services">
            <h6>Services</h6>
            <ul class="footer_list" role="list">
              ${services.slice(0, 6).map(s => `<li><a href="${rel(s.href)}" class="footer_link">${s.label}</a></li>`).join('')}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h6>Company</h6>
            <ul class="footer_list" role="list">
              <li><a href="${rel('about.html')}" class="footer_link">About</a></li>
              <li><a href="${rel('projects/index.html')}" class="footer_link">Projects</a></li>
              <li><a href="${rel('journal/index.html')}" class="footer_link">Journal</a></li>
              <li><a href="${rel('faq.html')}" class="footer_link">FAQ</a></li>
              <li><a href="${rel('sell-your-land.html')}" class="footer_link">Sell us your land</a></li>
            </ul>
          </nav>

          <nav aria-label="Contact">
            <h6>Get in touch</h6>
            <ul class="footer_list" role="list">
              <li><a href="${rel('contact.html')}" class="footer_link">Start a conversation</a></li>
              <li><a href="mailto:justin@buildfirst.co.nz" class="footer_link">justin@buildfirst.co.nz</a></li>
              <li><a href="tel:021899345" class="footer_link">021 899 345</a></li>
              <li class="footer_address" style="opacity:0.7; line-height: 1.5;">183 Weston Road,<br>St Albans, Christchurch 8052</li>
              <li class="footer_socials">
                <a href="#" class="footer_link" rel="noopener">Instagram</a>
                <span aria-hidden="true" class="footer_socials-sep">&middot;</span>
                <a href="#" class="footer_link" rel="noopener">Facebook</a>
                <span aria-hidden="true" class="footer_socials-sep">&middot;</span>
                <a href="#" class="footer_link" rel="noopener">LinkedIn</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer_base">
        <div>&copy; 2026 BF Property. Master Builders &middot; Licensed Building Practitioner.</div>
        <div class="footer_base-links">
          <a href="${rel('privacy.html')}" class="footer_link">Privacy</a>
          <a href="${rel('terms.html')}" class="footer_link">Terms</a>
          <span>St Albans, Christchurch</span>
        </div>
      </div>
    </footer>
  `;

  // ---- Sticky bottom CTA (dismissible) ----
  const ctaHtml = `
    <aside class="bf-sticky-cta" role="complementary" aria-label="Quick contact" hidden>
      <div class="bf-sticky-cta_inner">
        <div class="bf-sticky-cta_copy">
          <strong>Have a site or an idea?</strong>
          <span>Start a conversation. No sales pitch.</span>
        </div>
        <a href="${rel('contact.html')}" class="button is-small">Get in touch <i data-lucide="arrow-right" class="button_icon" aria-hidden="true"></i></a>
        <button type="button" class="bf-sticky-cta_close" aria-label="Dismiss">&times;</button>
      </div>
    </aside>
  `;

  // ---- Inline chrome styles ----
  const chromeCss = `
    .primary-nav .nav_links { list-style: none; padding: 0; margin: 0; }
    .primary-nav .has-menu { position: relative; }
    .primary-nav .nav_chevron {
      width: 0.875rem; height: 0.875rem; vertical-align: -2px; margin-left: 2px;
      transition: transform var(--duration_fast) var(--easing_standard);
    }
    .primary-nav .has-menu:hover .nav_chevron,
    .primary-nav .has-menu:focus-within .nav_chevron { transform: rotate(180deg); }
    .primary-nav .nav_menu {
      position: absolute; top: 100%; left: -1rem;
      background: var(--background_primary);
      border: 1px solid var(--border_subtle);
      min-width: 18rem; padding: 0.75rem 0;
      opacity: 0; visibility: hidden; transform: translateY(4px);
      transition: opacity var(--duration_fast) var(--easing_standard),
                  transform var(--duration_fast) var(--easing_standard),
                  visibility 0s linear var(--duration_fast);
      z-index: 60;
    }
    .primary-nav .has-menu:hover .nav_menu,
    .primary-nav .has-menu:focus-within .nav_menu,
    .primary-nav .nav_menu:hover {
      opacity: 1; visibility: visible; transform: translateY(0); transition-delay: 0s;
    }
    .primary-nav .nav_menu-list { list-style: none; padding: 0; margin: 0; }
    .primary-nav .nav_menu-link {
      display: block; padding: 0.5rem 1.25rem;
      color: var(--text_primary); text-decoration: none; border: 0;
      font-size: 0.9375rem; line-height: 1.4;
      transition: background var(--duration_fast) var(--easing_standard),
                  color var(--duration_fast) var(--easing_standard);
    }
    .primary-nav .nav_menu-link:hover { background: var(--color_red-wash); color: var(--color_red); }
    .primary-nav .nav_menu-link:focus-visible { outline: 2px solid var(--color_red); outline-offset: -2px; }

    /* Mobile nav (basic) */
    .nav_mobile-toggle { display: none; }
    @media (max-width: 900px) {
      .nav_mobile-toggle {
        display: inline-flex; align-items: center; justify-content: center;
        width: 2.5rem; height: 2.5rem;
        background: transparent; border: 0; color: var(--text_primary); cursor: pointer;
      }
      .primary-nav { display: none; }
      .primary-nav.is-open {
        display: flex; flex-direction: column;
        position: absolute; top: 100%; left: 0; right: 0;
        background: var(--background_primary);
        border-top: 1px solid var(--border_subtle);
        padding: 1rem 2rem 1.5rem;
      }
      .primary-nav.is-open .nav_links { display: flex; flex-direction: column; gap: 0.75rem; }
      .primary-nav.is-open .nav_menu {
        position: static; opacity: 1; visibility: visible; transform: none;
        border: 0; padding: 0 0 0 1rem;
        background: transparent;
      }
    }

    /* Footer extras */
    .footer_container { display: flex; flex-direction: column; gap: var(--size_large); }
    .footer_cta {
      display: flex; justify-content: space-between; align-items: end; gap: var(--size_medium);
      flex-wrap: wrap;
    }
    .footer_cta-heading {
      font-size: var(--heading_h2); line-height: var(--line-height_tight);
      letter-spacing: var(--letter-spacing_tight); color: var(--color_cream);
      max-width: 30rem; margin: 0;
    }
    .footer_divider { margin: 0; }
    /* Footer socials */
    .footer_socials { display: flex; gap: 0.75rem; align-items: center; padding-top: 0.5rem; flex-wrap: wrap; }
    .footer_socials-sep { color: var(--color_cream-20); }

    /* Nav logo sizing — SVG */
    .nav_logo, .nav_logo img { height: 2.25rem; }
    .nav_logo img { width: auto; display: block; }
    .footer_base-links { display: flex; gap: 1.5rem; align-items: center; }

    /* Sticky CTA */
    .bf-sticky-cta {
      position: fixed; right: 1.5rem; bottom: 1.5rem; z-index: 90;
      max-width: 22rem;
      background: var(--background_inverse); color: var(--text_on-inverse);
      padding: 0.875rem 1rem 0.875rem 1.125rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      border-left: 3px solid var(--color_red);
      transform: translateY(8px); opacity: 0;
      transition: transform var(--duration_slow) var(--easing_standard), opacity var(--duration_slow) var(--easing_standard);
    }
    .bf-sticky-cta.is-visible { transform: translateY(0); opacity: 1; }
    .bf-sticky-cta_inner { display: flex; align-items: center; gap: 0.875rem; }
    .bf-sticky-cta_copy { font-size: 0.8125rem; line-height: 1.3; display: flex; flex-direction: column; gap: 2px; }
    .bf-sticky-cta_copy strong { font-weight: var(--font_weight-semibold); color: var(--color_cream); font-size: 0.875rem; }
    .bf-sticky-cta_copy span { color: var(--color_cream-70); }
    .bf-sticky-cta .button { padding: 0.625em 0.875em; font-size: 0.8125rem; white-space: nowrap; }
    .bf-sticky-cta_close {
      background: transparent; border: 0; color: var(--color_cream-70);
      width: 1.5rem; height: 1.5rem; font-size: 1.25rem; line-height: 1; cursor: pointer;
      flex-shrink: 0;
    }
    .bf-sticky-cta_close:hover { color: var(--color_cream); }
    @media (max-width: 600px) { .bf-sticky-cta { left: 1rem; right: 1rem; max-width: none; } }

    @media (prefers-reduced-motion: reduce) {
      .bf-sticky-cta { transition: none; }
    }
  `;

  // ---- Resolve relative paths ----
  // (defined above)

  // ---- Inject ----
  function inject() {
    // Style block
    const styleEl = document.createElement('style');
    styleEl.id = 'bf-chrome-css';
    styleEl.textContent = chromeCss;
    document.head.appendChild(styleEl);

    // Nav + skip link — prepend
    const navHost = document.createElement('div');
    navHost.innerHTML = navHtml;
    document.body.prepend(...navHost.childNodes);

    // Footer — append
    const footerHost = document.createElement('div');
    footerHost.innerHTML = footerHtml;
    document.body.append(...footerHost.childNodes);

    // Sticky CTA — append
    const ctaHost = document.createElement('div');
    ctaHost.innerHTML = ctaHtml;
    document.body.append(...ctaHost.childNodes);

    // Wire interactions
    const nav = $('#site-nav');
    addEventListener('scroll', () => nav?.classList.toggle('is-scrolled', scrollY > 4), { passive: true });

    // Sticky CTA — show after 800px scroll, persist dismiss in sessionStorage
    const sticky = $('.bf-sticky-cta');
    const dismissed = sessionStorage.getItem('bf-cta-dismissed') === '1';
    if (sticky && !dismissed) {
      sticky.hidden = false;
      const reveal = () => {
        if (scrollY > 600) { sticky.classList.add('is-visible'); removeEventListener('scroll', reveal); }
      };
      addEventListener('scroll', reveal, { passive: true });
      $('.bf-sticky-cta_close')?.addEventListener('click', () => {
        sticky.classList.remove('is-visible');
        sessionStorage.setItem('bf-cta-dismissed', '1');
        setTimeout(() => sticky.remove(), 320);
      });
    }

    // Lucide
    if (window.lucide) window.lucide.createIcons();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
