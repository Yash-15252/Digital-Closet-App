document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // Animate cards on load
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
  });

  // Outfit save with animation
  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      this.innerHTML = '<div class="spinner"></div> Saving...';
      this.classList.add('btn-success');
    });
  }

  // Generate outfit button animation
  const genBtn = document.querySelector('.btn-success');
  if (genBtn) {
    genBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    genBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }

  // Gallery image hover
  const galleryImgs = document.querySelectorAll('.card-img-top');
  galleryImgs.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.2) saturate(1.2)';
      this.parentElement.style.transform = 'translateY(-10px)';
    });
    img.addEventListener('mouseleave', function() {
      this.style.filter = 'brightness(1) saturate(1)';
      this.parentElement.style.transform = 'translateY(0)';
    });
  });

  // Upload form enhancement
  const uploadForm = document.querySelector('form');
  if (uploadForm) {
    uploadForm.addEventListener('submit', function() {
      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<div class="spinner"></div> Uploading...';
      submitBtn.disabled = true;
      // Re-enable after 5s in case no redirect
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Upload';
      }, 5000);
    });
  }

  // Parallax effect for jumbotron
  window.addEventListener('scroll', function() {
    const jumbotron = document.querySelector('.jumbotron');
    if (jumbotron) {
      const scrolled = window.pageYOffset;
      jumbotron.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Confetti for outfit save (bonus fun)
  function confetti() {
    // Simple confetti using canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    // Confetti animation code...
    setTimeout(() => document.body.removeChild(canvas), 3000);
  }

  // Trigger confetti on save success
  window.saveOutfitSuccess = function() {
    confetti();
  };

  // Update saveOutfit to use new handler
  window.saveOutfit = function(outfit) {
    fetch('/save_outfit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(outfit)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'saved') {
        alert('Outfit saved! 🎉');
        window.saveOutfitSuccess();
        window.location.href = '/outfits';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error saving outfit.');
    });
  };
});
