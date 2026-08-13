async function loadPartials() {
  const partials = document.querySelectorAll('[data-partial]');
  for (const el of partials) {
    const url = el.getAttribute('data-partial');
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      el.innerHTML = await response.text();
    } catch (err) {
      console.warn(err);
    }
  }
}

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu || toggle.dataset.menuBound === 'true') return;

  toggle.dataset.menuBound = 'true';
  const backdrop = menu.querySelector('[data-menu-close]');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }

  function closeMenu() {
    setOpen(false);
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  backdrop?.addEventListener('click', closeMenu);

  menu.querySelectorAll('.mobile-menu__link, .mobile-menu__icon-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', async () => {
  initMobileMenu();
  fixSiteLinks();
  try {
    await loadPartials();
    setFooterYear();
  } catch (err) {
    console.warn(err);
  }
  initGalaxyEffects();
});

function fixSiteLinks() {
  const onCasePage = window.location.pathname.includes('/cases/');
  const home = onCasePage ? '../index.html' : 'index.html';

  document.querySelectorAll('.logo, .mobile-menu__icon-link').forEach((logo) => {
    logo.setAttribute('href', home);
  });

  document.querySelectorAll('.main-nav a, .mobile-menu__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) {
      link.setAttribute('href', `${home}${href}`);
    }
  });
}

function initGalaxyEffects() {
  if (document.querySelector('.galaxy-field')) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isNarrowViewport = window.matchMedia('(max-width: 800px)').matches;
  const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (prefersReducedMotion || isNarrowViewport || isCoarsePointer) return;

  document.body.classList.add('is-galaxy-active');
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="galaxy-field" aria-hidden="true">
      <div class="galaxy-field__nebula"></div>
      <div class="galaxy-field__dust"></div>
      <div class="galaxy-field__ambient"></div>
      <div class="galaxy-field__spotlight"></div>
      <div class="galaxy-field__reveal">
        <div class="galaxy-field__objects"></div>
      </div>
      <div class="galaxy-field__anchors"></div>
    </div>
    <div class="cursor-ring" aria-hidden="true"></div>
    `
  );

  const nebula = document.querySelector('.galaxy-field__nebula');
  const ambientEl = document.querySelector('.galaxy-field__ambient');
  const anchorsEl = document.querySelector('.galaxy-field__anchors');
  const spotlight = document.querySelector('.galaxy-field__spotlight');
  const reveal = document.querySelector('.galaxy-field__reveal');
  const objectsEl = document.querySelector('.galaxy-field__objects');
  const ring = document.querySelector('.cursor-ring');
  if (!objectsEl || !ring || !reveal || !spotlight) return;

  const objects = [
    { type: 'star', x: 14, y: 22, accent: false },
    { type: 'star', x: 38, y: 14, accent: false },
    { type: 'star', x: 63, y: 33, accent: true },
    { type: 'star', x: 84, y: 19, accent: false },
    { type: 'star', x: 46, y: 42, accent: false },
    { type: 'triangle', x: 58, y: 26 },
    { type: 'triangle', x: 34, y: 68 },
    { type: 'line', x: 48, y: 58, w: 56, rot: -18 }
  ];

  objects.forEach((obj) => {
    const el = document.createElement('div');
    el.className = 'galaxy-object';

    if (obj.type === 'star') {
      el.classList.add(obj.accent ? 'galaxy-object--star-accent' : 'galaxy-object--star');
    } else if (obj.type === 'triangle') {
      el.classList.add('galaxy-object--triangle');
    } else {
      el.classList.add('galaxy-object--line');
      el.style.width = `${obj.w}px`;
      el.style.transform = `rotate(${obj.rot}deg)`;
    }

    el.style.left = `${obj.x}%`;
    el.style.top = `${obj.y}%`;
    objectsEl.appendChild(el);
  });

  const ambientItems = [
    { type: 'star', x: 6, y: 12 },
    { type: 'star', x: 93, y: 8 },
    { type: 'triangle', x: 8, y: 88 },
    { type: 'star', x: 92, y: 82 },
    { type: 'dot', x: 72, y: 8 },
    { type: 'dot', x: 4, y: 48 },
    { type: 'star', x: 96, y: 52 }
  ];

  ambientItems.forEach((item) => {
    const el = document.createElement('span');
    el.className = `galaxy-ambient galaxy-ambient--${item.type}`;
    el.style.left = `${item.x}%`;
    el.style.top = `${item.y}%`;
    ambientEl?.appendChild(el);
  });

  const anchors = [
    { type: 'star', x: 11, y: 35 },
    { type: 'triangle', x: 89, y: 28 },
    { type: 'star', x: 76, y: 72 },
    { type: 'triangle', x: 18, y: 58 },
    { type: 'star', x: 94, y: 44 }
  ];

  anchors.forEach((item) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `galaxy-anchor galaxy-anchor--${item.type}`;
    el.style.left = `${item.x}%`;
    el.style.top = `${item.y}%`;
    el.setAttribute('aria-hidden', 'true');
    el.tabIndex = -1;
    anchorsEl?.appendChild(el);
  });

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let idleTimer;

  function isOverImage(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el) return false;
    return Boolean(
      el.closest(
        'img, .case-card__media, .case-card__image, .case-hero-image, figure.case-figure, .case-compare, picture'
      )
    );
  }

  function applySpotlight(x, y) {
    if (isOverImage(x, y)) {
      document.body.classList.add('galaxy-paused');
      return;
    }
    document.body.classList.remove('galaxy-paused');

    const mask = `radial-gradient(circle 140px at ${x}px ${y}px, #000 0%, #000 40%, transparent 75%)`;
    reveal.style.webkitMaskImage = mask;
    reveal.style.maskImage = mask;
    spotlight.style.background = `radial-gradient(circle 165px at ${x}px ${y}px, rgba(168, 85, 247, 0.13), rgba(192, 132, 252, 0.05) 50%, transparent 72%)`;

    if (nebula) {
      const px = (x - window.innerWidth / 2) * -0.012;
      const py = (y - window.innerHeight / 2) * -0.012;
      nebula.style.transform = `translate(${px}px, ${py}px)`;
    }
  }

  function setMouse(x, y) {
    mouseX = x;
    mouseY = y;
    applySpotlight(x, y);
    ring.classList.add('cursor-ring--active');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      ring.classList.remove('cursor-ring--active');
    }, 900);
  }

  document.addEventListener('mousemove', (e) => setMouse(e.clientX, e.clientY), { passive: true });
  document.addEventListener(
    'touchmove',
    (e) => {
      const touch = e.touches[0];
      if (touch) setMouse(touch.clientX, touch.clientY);
    },
    { passive: true }
  );

  function tick() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    document.querySelectorAll('.galaxy-anchor').forEach((anchor) => {
      const rect = anchor.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(mouseX - cx, mouseY - cy);
      anchor.classList.toggle('is-near', dist < 44);
    });

    document.querySelectorAll('.galaxy-ambient').forEach((item) => {
      const rect = item.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(mouseX - cx, mouseY - cy);
      item.classList.toggle('is-near', dist < 40);
    });

    requestAnimationFrame(tick);
  }

  setMouse(mouseX, mouseY);
  requestAnimationFrame(tick);
}

if (document.readyState !== 'loading') {
  queueMicrotask(initGalaxyEffects);
}
