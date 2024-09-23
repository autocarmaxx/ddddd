// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Sticky navigation bar
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
});

// Mobile navigation toggle
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelector('nav ul');

mobileNav.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting us! We will get back to you shortly.');
});