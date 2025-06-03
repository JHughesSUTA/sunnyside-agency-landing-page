const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

const slidingElements = document.querySelectorAll(".slide");
const fadingElements = document.querySelectorAll(".fade");
slidingElements.forEach((el) => observer.observe(el));
fadingElements.forEach((el) => observer.observe(el));
