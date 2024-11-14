window.addEventListener("scroll", function () {
  const aboutSection = document.querySelector("#about");
  const stickyNav = document.getElementById("sticky-nav");
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  // Show sticky nav when scrolled to the About section, hide when above it
  if (aboutSectionTop <= 0) {
    stickyNav.classList.remove("hidden");
  } else {
    stickyNav.classList.add("hidden");
  }
});
