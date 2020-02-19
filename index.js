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

const openMobileMenu = () => {
  mobileMenu.classList.remove('translate-x-double');
  mobileMenu.classList.add('translate-x-0');
  mobileMenu.classList.add('md:translate-x-full');
  mobileMenu.classList.add('md:translate-x-full');
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.remove('md:translate-x-full');
  mobileMenu.classList.add('translate-x-double');
};

const openModal = () => {
  closeMobileMenu();
  modalBackground.classList.toggle('invisible');
  modalForeground.classList.toggle('invisible');
  modalBackground.classList.add('visible', 'opacity-75');
  modalForeground.classList.add('visible', 'opacity-100');
};

const closeModal = () => {
  modalBackground.classList.remove('opacity-75');
  modalForeground.classList.remove('opacity-100');
  modalBackground.classList.add('opacity-0');
  modalForeground.classList.add('opacity-0');
  modalBackground.classList.remove('visible');
  modalForeground.classList.remove('visible');
  modalBackground.classList.add('invisible');
  modalForeground.classList.add('invisible');
};

const openSignUp = () => {
  openModal();
  modalFormSignUp.classList.remove('hidden');
};

const closeSignUp = () => {
  closeModal();
  modalFormSignUp.classList.add('hidden');
};

const openLogIn = () => {
  openModal();
  modalFormLogIn.classList.remove('hidden');
};

const closeLogIn = () => {
  closeModal();
  modalFormLogIn.classList.add('hidden');
};

navIconMenu.addEventListener('click', () => {
  openMobileMenu();
});

menuIconClose.addEventListener('click', () => {
  closeMobileMenu();
});

menuLinkSignUp.addEventListener('click', () => {
  openSignUp();
});

navLinkSignUp.addEventListener('click', () => {
  openSignUp();
});

indexButtonSignUp.addEventListener('click', () => {
  openSignUp();
});

signUpIconClose.addEventListener('click', () => {
  closeSignUp();
});

navLinkLogIn.addEventListener('click', () => {
  openLogIn();
});

menuButtonLogIn.addEventListener('click', () => {
  openLogIn();
});

logInIconClose.addEventListener('click', () => {
  closeLogIn();
});
