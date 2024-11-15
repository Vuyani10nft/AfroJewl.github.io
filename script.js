window.addEventListener('scroll', () => {
  const stickyNav = document.getElementById('sticky-nav');
  const aboutSection = document.getElementById('about');
  const aboutPosition = aboutSection.offsetTop;

  if (window.scrollY >= aboutPosition) {
    stickyNav.classList.remove('hidden');
  } else {
    stickyNav.classList.add('hidden');
  }
});
