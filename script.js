// scripts.js
// Placeholder for interactive behaviors like dropdowns, animations, etc.
document.addEventListener('DOMContentLoaded', function () {
    const langSwitcher = document.querySelector('.lang-switcher');
  
    if (langSwitcher) {
      langSwitcher.addEventListener('click', function () {
        alert('Language switching functionality not yet implemented.');
      });
    }
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  document.querySelectorAll('.faq-card .toggle').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.parentElement.nextElementSibling;
      answer.classList.toggle('open');
      button.textContent = answer.classList.contains('open') ? '-' : '+';
    });
  });
  
