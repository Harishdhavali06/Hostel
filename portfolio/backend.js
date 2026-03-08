// Typewriter effect for "HARISH"
const text = "HARISH";
const speed = 200;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;

// Scroll reveal for all sections 
window.addEventListener('scroll', () => {
  const sections = [
    { selector: '.about', className: 'visible' },
    { selector: '.projects', className: 'visiblee' },
    { selector: '.contact', className: 'visibleee' },
    { selector: '.skills', className: 'visibleeee' },
    { selector: '.resume-section', className: 'visibleeeee' }, 
  ];

  const windowHeight = window.innerHeight;

  sections.forEach(({ selector, className }) => {
    const el = document.querySelector(selector);
    if (el && el.getBoundingClientRect().top < windowHeight - 150) {
      el.classList.add(className);
    }
  });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.style.color = 'red';
    status.textContent = 'Please fill in all fields.';
    return;
  }

  status.style.color = 'green';
  status.textContent = 'Thanks! Your message has been sent (mock).';
  document.getElementById('contact-form').reset();
});

// Light/Dark mode toggle with localStorage
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Optional: Navbar toggle (only if using hamburger menu)

const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });
}
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('nav-active');
});

const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  mobileNav.classList.toggle('open');
  overlay.classList.toggle('visible');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : 'auto';
}

// Toggle on hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close when clicking overlay
overlay.addEventListener('click', toggleMenu);

// Close when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});