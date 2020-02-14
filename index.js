const mainIconMenu = document.querySelector('#mainIconMenu');
const menuIconClose = document.querySelector('#menuIconClose');
const menuLinkSignUp = document.querySelector('#menuLinkSignUp');
const modalBackground = document.querySelector('#modalBackground');
const modalForeground = document.querySelector('#modalForeground');
const modalIconClose = document.querySelector('#modalIconClose');
const mobileMenu = document.querySelector('#mobileMenu');

mainIconMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('hidden');
});

menuIconClose.addEventListener('click', function() {
  mobileMenu.classList.add('hidden');
});

menuLinkSignUp.addEventListener('click', function() {
  mobileMenu.classList.add('hidden');
  modalBackground.classList.remove('hidden');
  modalForeground.classList.remove('hidden');
});

modalIconClose.addEventListener('click', function() {
  modalBackground.classList.add('hidden');
  modalForeground.classList.add('hidden');
});
