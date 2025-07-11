// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Cursor Effects
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  
  cursorOutline.style.left = `${e.clientX}px`;
  cursorOutline.style.top = `${e.clientY}px`;
});

// Interactive Elements
const interactiveElements = document.querySelectorAll('a, button, .product-card, .nav-link');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorOutline.style.width = '40px';
    cursorOutline.style.height = '40px';
    cursorOutline.style.backgroundColor = 'rgba(46, 125, 50, 0.1)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursorOutline.style.width = '30px';
    cursorOutline.style.height = '30px';
    cursorOutline.style.backgroundColor = 'transparent';
  });
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Language Switcher
const languageSwitcher = document.querySelector('.language-switcher');
languageSwitcher.addEventListener('click', () => {
  languageSwitcher.classList.toggle('active');
});

// Initialize Swiper
const testimonialSwiper = new Swiper('.testimonial-slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});
