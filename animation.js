const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    // only animate once
    // if (entry.isIntersecting) {
    //   entry.target.classList.add("show");
    // }

    // this will make it re-animate when leaving the screen
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

const slidingElements = document.querySelectorAll(".slide");
const fadingElements = document.querySelectorAll(".fade");
slidingElements.forEach((el) => observer.observe(el));
fadingElements.forEach((el) => observer.observe(el));
