// Contact form demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! We’ll email your itinerary soon.');
    contactForm.reset();
  });
}

