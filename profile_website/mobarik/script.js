window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 1s ease";
});
