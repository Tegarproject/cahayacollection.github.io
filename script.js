// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(233, 30, 99, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #e91e63, #c2185b)';
        header.style.backdropFilter = 'none';
    }
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxUakEqdHbiJLqeDag5JFkMGYnU9CG8vU3AmuzRSOil4syIut8u3JcuwATOvUwNXjL1/exec';
  const form = document.forms['konveksi-cahaya-collection'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const orderType = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector('textarea').value;
    
    const whatsappMessage = `Halo, saya ingin menanyakan tentang:
Nama: ${name}
Email: ${email}
WhatsApp: ${phone}
Jenis Pesanan: ${orderType}
Pesan: ${message}`;
    
    const whatsappURL = `https://wa.me/6283189829546?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    alert('Pesan akan dikirim melalui WhatsApp!');
});