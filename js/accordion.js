document.addEventListener('DOMContentLoaded', function () {
  const buttonAccordionElems = document.querySelectorAll('.faq-link');

  buttonAccordionElems.forEach((item) => {
    item.addEventListener('click', function () {
      if (item.matches('.faq-link-active') === true) {
        item.classList.remove('faq-link-active');
        item.querySelector('.icon-accordion').classList.add('plus');
        item.querySelector('.icon-accordion').classList.remove('minus');
      } else {
        item.classList.add('faq-link-active');
        item.querySelector('.icon-accordion').classList.add('minus');
        item.querySelector('.icon-accordion').classList.remove('plus');
      }
    });
  });
});
