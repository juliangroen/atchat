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
const SignUpButtonSubmit = document.querySelector('#SignUpButtonSubmit');
const signUpIconClose = document.querySelector('#signUpIconClose');
const modalFormLogIn = document.querySelector('#modalFormLogIn');
const logInButtonLogin = document.querySelector('#logInButtonLogin');
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
  modalBackground.classList.remove('opacity-0', 'pointer-events-none');
  modalBackground.classList.add('opacity-75', 'pointer-events-auto');
  modalForeground.classList.remove('opacity-0', 'pointer-events-none');
  modalForeground.classList.add('opacity-100', 'pointer-events-auto');
};

const closeModal = () => {
  modalBackground.classList.add('opacity-0', 'pointer-events-none');
  modalBackground.classList.remove('opacity-75', 'pointer-events-auto');
  modalForeground.classList.add('opacity-0', 'pointer-events-none');
  modalForeground.classList.remove('opacity-100', 'pointer-events-auto');
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

signUpButtonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  closeSignUp();
  modalFormSignUp.reset();
});

logInButtonLogin.addEventListener('click', (e) => {
  e.preventDefault();
  closeLogIn();
  modalFormLogIn.reset();
});
