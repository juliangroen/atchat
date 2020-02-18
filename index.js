const navIconMenu = document.querySelector('#navIconMenu');
const navLinkSignUp = document.querySelector('#navLinkSignUp');
const navLinkLogIn = document.querySelector('#navLinkLogIn');
const indexButtonSignUp = document.querySelector('#indexButtonSignUp');
const menuIconClose = document.querySelector('#menuIconClose');
const menuLinkSignUp = document.querySelector('#menuLinkSignUp');
const menuButtonLogIn = document.querySelector('#menuButtonLogIn');
const modalBackground = document.querySelector('#modalBackground');
const modalForeground = document.querySelector('#modalForeground');
const modalFormSignUp = document.querySelector('#modalFormSignUp');
const signUpIconClose = document.querySelector('#signUpIconClose');
const modalFormLogIn = document.querySelector('#modalFormLogIn');
const mobileMenu = document.querySelector('#mobileMenu');

const openMobileMenu = function() {
  mobileMenu.classList.remove('translate-x-double');
  mobileMenu.classList.add('translate-x-0');
  mobileMenu.classList.add('md:translate-x-full');
  mobileMenu.classList.add('md:translate-x-full');
};

const closeMobileMenu = function() {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.remove('md:translate-x-full');
  mobileMenu.classList.add('translate-x-double');
};

const openModal = function() {
  closeMobileMenu();
  modalBackground.classList.remove('hidden');
  modalForeground.classList.remove('hidden');
};

const closeModal = function() {
  modalBackground.classList.add('hidden');
  modalForeground.classList.add('hidden');
};

const openSignUp = function() {
  openModal();
  modalFormSignUp.classList.remove('hidden');
};

const closeSignUp = function() {
  closeModal();
  modalFormSignUp.classList.add('hidden');
};

const openLogIn = function() {
  openModal();
  modalFormLogIn.classList.remove('hidden');
};

const closeLogIn = function() {
  closeModal();
  modalFormLogIn.classList.add('hidden');
};

navIconMenu.addEventListener('click', function() {
  openMobileMenu();
});

menuIconClose.addEventListener('click', function() {
  closeMobileMenu();
});

menuLinkSignUp.addEventListener('click', function() {
  openSignUp();
});

navLinkSignUp.addEventListener('click', function() {
  openSignUp();
});

indexButtonSignUp.addEventListener('click', function() {
  openSignUp();
});

signUpIconClose.addEventListener('click', function() {
  closeSignUp();
});

navLinkLogIn.addEventListener('click', function() {
  openLogIn();
});

menuButtonLogIn.addEventListener('click', function() {
  openLogIn();
});

logInIconClose.addEventListener('click', function() {
  closeLogIn();
});
