(() => {
 const overlay = document.querySelector('.title-overlay');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 let timer;
 const hide = () => { clearTimeout(timer); overlay.classList.remove('is-visible'); };
 const show = button => {
  if (reduced.matches || overlay.classList.contains('is-visible')) return;
  overlay.textContent = button.textContent;
  overlay.classList.add('is-visible');
  timer = setTimeout(hide, 2000);
 };
 document.querySelectorAll('.heading-preview').forEach(button => {
  button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') show(button); });
  button.addEventListener('click', () => show(button));
 });
 document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
 window.addEventListener('scroll', hide, {passive:true});
})();

// Align only standalone text sections with the header navigation; grids do not move.
(() => {
 const main = document.querySelector('.sketch-services');
 const nav = document.querySelector('.section-nav');
 const header = document.querySelector('header');
 if (!main || !nav) return;
 const align = () => {
  const offset = Math.max(0, nav.getBoundingClientRect().left - main.getBoundingClientRect().left);
  main.style.setProperty('--text-offset', `${offset}px`);
  if (header) main.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
 };
 const observer = new ResizeObserver(align);
 observer.observe(document.documentElement);
 if (header) observer.observe(header);
 window.addEventListener('resize', align, { passive: true });
 document.fonts.ready.then(align);
 align();
})();
