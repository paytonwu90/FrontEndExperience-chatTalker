window.addEventListener('DOMContentLoaded', addListeners);

function addListeners() {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('collapsed');
      const accordionItem = this.closest('.accordion-item');
      const accordionCollapse = accordionItem.querySelector('.accordion-collapse');
      
      if (accordionCollapse.style.maxHeight) {
        accordionCollapse.style.maxHeight = null;
      } else {
        accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + 'px';
      }

      accordionCollapse.classList.toggle('collapsed');
    });
  });
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

if (typeof window.Swiper === 'function') { //prevent js error in pricing page
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 16,
    slidesPerView: 1,
    loop: true,
    /* autoplay: {
      delay: 5000,
    }, */
    breakpoints: {
      768: {
        slidesPerView: 3
      },
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Navigation arrows
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/
    
  });
}
