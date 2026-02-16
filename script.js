// ===============================
// Smooth scrolling for anchor links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ===============================
// Fade-in animation on scroll
// ===============================
const sections = document.querySelectorAll(".section, .project, .split");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(sec => observer.observe(sec));


// ===============================
// Console branding (professional touch)
// ===============================
console.log("🚀 AWS DevOps Portfolio Loaded Successfully");
console.log("Built with Cloud, Containers, and CI/CD");
