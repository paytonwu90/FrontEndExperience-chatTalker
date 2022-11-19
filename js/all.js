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
