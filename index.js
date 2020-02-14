const mainIconMenu = document.querySelector('#mainIconMenu');
const mainLinkSignUp = document.querySelector('#mainLinkSignUp');
const mainButtonSignUp = document.querySelector('#mainButtonSignUp');
const menuIconClose = document.querySelector('#menuIconClose');
const menuLinkSignUp = document.querySelector('#menuLinkSignUp');
const modalBackground = document.querySelector('#modalBackground');
const modalForeground = document.querySelector('#modalForeground');
const modalIconClose = document.querySelector('#modalIconClose');
const mobileMenu = document.querySelector('#mobileMenu');

const openModalSignUp = function() {
  mobileMenu.classList.add('hidden');
  modalBackground.classList.remove('hidden');
  modalForeground.classList.remove('hidden');
};

const closeModalSignUp = function() {
  modalBackground.classList.add('hidden');
  modalForeground.classList.add('hidden');
};

mainIconMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('hidden');
});

menuIconClose.addEventListener('click', function() {
  mobileMenu.classList.add('hidden');
});

menuLinkSignUp.addEventListener('click', function() {
  openModalSignUp();
});

mainLinkSignUp.addEventListener('click', function() {
  openModalSignUp();
});

mainButtonSignUp.addEventListener('click', function() {
  openModalSignUp();
});

modalIconClose.addEventListener('click', function() {
  closeModalSignUp();
});
