function initGalaxyEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.body.classList.add('is-galaxy-active');
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="galaxy-field" aria-hidden="true">
      <div class="galaxy-field__nebula"></div>
      <div class="galaxy-field__dust"></div>
      <div class="galaxy-field__spotlight"></div>
      <div class="galaxy-field__reveal">
        <div class="galaxy-field__objects"></div>
      </div>
    </div>
    <div class="cursor-ring" aria-hidden="true"></div>
    `
  );

  const nebula = document.querySelector('.galaxy-field__nebula');
  const spotlight = document.querySelector('.galaxy-field__spotlight');
  const reveal = document.querySelector('.galaxy-field__reveal');
  const objectsEl = document.querySelector('.galaxy-field__objects');
  const ring = document.querySelector('.cursor-ring');
  if (!objectsEl || !ring || !reveal || !spotlight) return;

  const objects = [
    { type: 'star', x: 14, y: 22, accent: false },
    { type: 'star', x: 27, y: 61, accent: true },
    { type: 'star', x: 38, y: 14, accent: false },
    { type: 'star', x: 52, y: 78, accent: false },
    { type: 'star', x: 63, y: 33, accent: true },
    { type: 'star', x: 71, y: 55, accent: false },
    { type: 'star', x: 84, y: 19, accent: false },
    { type: 'star', x: 91, y: 72, accent: true },
    { type: 'star', x: 19, y: 84, accent: false },
    { type: 'star', x: 46, y: 42, accent: false },
    { type: 'triangle', x: 22, y: 38 },
    { type: 'triangle', x: 58, y: 26 },
    { type: 'triangle', x: 76, y: 64 },
    { type: 'triangle', x: 34, y: 68 },
    { type: 'line', x: 18, y: 30, w: 72, rot: 24 },
    { type: 'line', x: 48, y: 58, w: 88, rot: -18 },
    { type: 'line', x: 62, y: 18, w: 64, rot: 52 }
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

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let moving = false;
  let idleTimer;

  function applySpotlight(x, y) {
    const mask = `radial-gradient(circle 280px at ${x}px ${y}px, #000 0%, #000 42%, transparent 78%)`;
    reveal.style.webkitMaskImage = mask;
    reveal.style.maskImage = mask;
    spotlight.style.background = `radial-gradient(circle 320px at ${x}px ${y}px, rgba(168, 85, 247, 0.16), transparent 72%)`;

    if (nebula) {
      const px = (x - window.innerWidth / 2) * -0.02;
      const py = (y - window.innerHeight / 2) * -0.02;
      nebula.style.transform = `translate(${px}px, ${py}px)`;
    }
  }

  function setMouse(x, y) {
    mouseX = x;
    mouseY = y;
    applySpotlight(x, y);
    moving = true;
    ring.classList.add('cursor-ring--active');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      moving = false;
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

    document.querySelectorAll('.case-card').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(mouseX - cx, mouseY - cy);
      const near = dist < Math.max(rect.width, rect.height) * 0.85;
      card.classList.toggle('is-spotlit', near);
    });

    const nearCard = document.querySelector('.case-card.is-spotlit');
    ring.classList.toggle('cursor-ring--card', Boolean(nearCard) && moving);

    requestAnimationFrame(tick);
  }

  setMouse(mouseX, mouseY);
  requestAnimationFrame(tick);
}
