// Select elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Sticky Navbar Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Smooth Scrolling Effect for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Hover Animation for Buttons
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("mouseover", () => {
    button.classList.add("hover-effect");
  });
  button.addEventListener("mouseout", () => {
    button.classList.remove("hover-effect");
  });
});

// Toggle Navigation Menu (For Mobile)
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show'); // Hide menu
  }
});