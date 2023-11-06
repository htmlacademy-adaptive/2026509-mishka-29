let navMain = document.querySelector('.navigation__list');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation__list--no-js');
navToggle.classList.remove('navigation__toggle--no-js');
navMain.classList.add('navigation__list--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation__list--closed')) {
    navMain.classList.remove('navigation__list--closed');
    navMain.classList.add('navigation__list--open');
    navToggle.classList.add('navigation__toggle--open');
  } else {
    navMain.classList.add('navigation__list--closed');
    navMain.classList.remove('navigation__list--open');
    navToggle.classList.remove('navigation__toggle--open');
  }
});
