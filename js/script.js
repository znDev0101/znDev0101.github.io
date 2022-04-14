// button humberger menu
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
  navUl.classList.toggle('slide');
});

// button up
const buttonUp = document.querySelector('.fa-circle-chevron-up');
buttonUp.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

// dark mode
const chechkbox = document.querySelector('.checkbox');
const html = document.querySelector('html');
const img = document.getElementById('img');

chechkbox.addEventListener('click', function () {
  if (html.dataset.colorMode === 'light') {
    html.dataset.colorMode = 'dark';
    img.src = 'img/lightmode.png';
  } else {
    html.dataset.colorMode = 'light';
    img.src = 'img/darkmode.png';
  }
});

// navbar style
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('navScrollChange', windowPosition);
  // jika button up di scroll
  if (window.scrollY > 350) {
    buttonUp.classList.add('fa-circle-chevron-up-change');
  } else {
    buttonUp.classList.remove('fa-circle-chevron-up-change');
  }
});
