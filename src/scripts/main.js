/* Nav scroll shadow */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

/* Hamburger menu */
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
const observerReveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observerReveal.observe(el));

/* Project image placeholder fallback */
document.querySelectorAll('.project-img img').forEach(img => {
  img.onerror = function () {
    this.style.display = 'none';
    this.parentElement.querySelector('.project-img__placeholder').style.display = 'flex';
  };
});
