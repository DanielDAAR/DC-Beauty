export function initNav(current) {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const links = nav.querySelectorAll('.nav-link');
  links.forEach(a => {
    const href = a.getAttribute('href');
    const page = href.replace('.html','').replace('/','').replace('index','');
    if ((current === 'home' && href.includes('index')) || href.includes(current)) a.classList.add('active');
  });
  const toggle = nav.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
