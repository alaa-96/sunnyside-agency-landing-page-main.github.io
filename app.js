const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  } else {
    navMenu.classList.add('active');
  }
});
