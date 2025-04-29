// DARK MODE TOGGLE
document.getElementById("toggle-mode").onclick = function () {
  document.body.classList.toggle("dark-mode");
};

// TESTIMONIAL SLIDER
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
setInterval(() => {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[index].classList.add("active");
  index = (index + 1) % testimonials.length;
}, 4000);

// PRELOADER
function showPreloader() {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
}
