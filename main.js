// Navbar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-link');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    navLinks.classList.add('open');
  } else {
    navLinks.classList.remove('open');
  }
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// View Details buttons
const detailButtons = document.querySelectorAll('.car-btn');
detailButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // redirect to details page with car index
    window.location.href = `details.html?car=${index}`;
  });
});
