document.addEventListener('DOMContentLoaded', function () {
  const navElem = document.getElementById('header-nav');

  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 400) {
      navElem.classList.add('header-nav-fixed');
    } else {
      navElem.classList.remove('header-nav-fixed');
    }
  });
});
