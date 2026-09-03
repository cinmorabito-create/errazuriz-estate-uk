const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const form = document.querySelector('#competition-form');
const formError = document.querySelector('#form-error');
const formSuccess = document.querySelector('#form-success');
const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image');
const imageBreak = document.querySelector('.image-break');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const updateParallax = () => {
  if (prefersReducedMotion.matches) return;

  if (hero && heroImage) {
    const heroBounds = hero.getBoundingClientRect();
    const heroOffset = Math.max(-58, Math.min(58, heroBounds.top * -0.16));
    hero.style.setProperty('--hero-parallax-y', `${heroOffset}px`);
  }

  if (imageBreak) {
    const imageBounds = imageBreak.getBoundingClientRect();
    const imageDistanceFromCenter = window.innerHeight / 2 - (imageBounds.top + imageBounds.height / 2);
    const imageOffset = Math.max(-58, Math.min(58, imageDistanceFromCenter * 0.18));
    imageBreak.style.setProperty('--parallax-y', `${imageOffset}px`);
  }
};

if ((hero || imageBreak) && !prefersReducedMotion.matches) {
  let parallaxFrame;
  const requestParallaxUpdate = () => {
    if (parallaxFrame) return;
    parallaxFrame = window.requestAnimationFrame(() => {
      updateParallax();
      parallaxFrame = undefined;
    });
  };

  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestParallaxUpdate);
  updateParallax();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formError.textContent = '';

  if (!form.checkValidity()) {
    formError.textContent = 'Please complete the required fields and accept the Terms & Conditions.';
    form.querySelector(':invalid')?.focus();
    return;
  }

  form.hidden = true;
  formSuccess.hidden = false;
  formSuccess.focus();
});