// High View Roofing
// Website interactions

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // Contact form message
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {

      event.preventDefault();

      alert(
        "Thanks! Your estimate request has been received. We will contact you soon."
      );

      form.reset();
    });
  }


  // Simple reveal animation
  const sections = document.querySelectorAll(
    ".service-card, .review-card, .about-text, .about-image, .contact-form"
  );

  const observer = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
  });

});
