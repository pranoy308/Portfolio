// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('active');
});

// Simple contact form submission (optional)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});
