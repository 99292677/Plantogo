document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseover", () => button.classList.add("hover-effect"));
  button.addEventListener("mouseout", () => button.classList.remove("hover-effect"));
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
  }
});

const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('href').includes(current)) {
      item.classList.add('active');
    }
  });
});

const addRowBtn = document.getElementById('add-row-btn');
const deleteRowBtn = document.getElementById('delete-last-row-btn');
const tableBody = document.querySelector('#data-table tbody');

addRowBtn.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  for (let i = 0; i < 5; i++) {
    const newCell = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Enter Data ${i + 1}`;
    newCell.appendChild(input);
    newRow.appendChild(newCell);
  }
  tableBody.appendChild(newRow);
});

deleteRowBtn.addEventListener('click', () => {
  if (tableBody.rows.length > 0) {
    tableBody.deleteRow(-1);
  }
});