(() => {
 const overlay = document.querySelector('.title-overlay');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 let timer;
 const hide = () => { clearTimeout(timer); overlay.classList.remove('is-visible'); };
 const show = button => {
  if (reduced.matches || overlay.classList.contains('is-visible')) return;
  overlay.textContent = button.textContent;
  overlay.classList.add('is-visible');
  timer = setTimeout(hide, 1100);
 };
 document.querySelectorAll('.heading-preview').forEach(button => {
  button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') show(button); });
  button.addEventListener('click', () => show(button));
 });
 document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
 window.addEventListener('scroll', hide, {passive:true});
})();
