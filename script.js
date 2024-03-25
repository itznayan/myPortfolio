const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openLinkInNewTab(url) {
  window.open(url, "_blank");
}

var typed = new Typed("#element", {
  strings: ["Frontend  Developer", " Android Developer"],
  typeSpeed: 110,
  loop: Infinity,
});

// Example usage
var linkUrl = "https://www.example.com";
openLinkInNewTab(linkUrl);
