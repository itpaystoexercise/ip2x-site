/* ============================================================
   IP2X — Site behaviour
   Loaded on every page with `defer`.
   ============================================================ */

// 1. Sticky nav border appears once you scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 4);
  }, { passive: true });
}

// 2. FAQ accordion toggles
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});

// 3. Reveal on scroll (intersection observer)
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
// Thresholds must include 0. With only 0.12, an element taller than about
// 8x the viewport can never show 12% of itself at once, so the callback never
// fires and the content stays at opacity 0 permanently.
}, { threshold: [0, 0.12], rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-on-scroll, .stagger').forEach(el => io.observe(el));
