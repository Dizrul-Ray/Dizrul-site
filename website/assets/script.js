(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-nav]');
  if(btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === file) a.classList.add('active');
  });
})();
