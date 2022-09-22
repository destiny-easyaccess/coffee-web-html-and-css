let authToggle = () => {
  let loginToggle = document.getElementById('login-form');
  let registerToggle = document.getElementById('register-form');
  let slider = document.getElementsByClassName('slider');
};
modalToggle = () => {
  let modalContainer = document.getElementById('modal-main');
  let modalClose = document.getElementById('close-icon');
  let modalOpen = document.getElementById('open-icon');
  modalOpen.addEventListener('click', () => {
    modalContainer.classList.add('modal-open');
  });
  modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('modal-open');
  });
};

modalToggle();
let appear = false;
cartToggle = () => {
  let cartContainer = document.getElementById('maincart');
  let cartIcon = document.getElementById('cart-icon');
  cartIcon.addEventListener('click', () => {
    if (appear === false) {
      cartContainer.classList.add('appear');
      appear = true;
    } else if (appear === true) {
      cartContainer.classList.remove('appear');
      appear = false;
    }
  });
};
cartToggle();

let navToggle = document.querySelector('.toggle-slider');
let loginForm = document.querySelector('#login-form');
let registerForm = document.querySelector('#register-form');
let sliderContainer = document.querySelector('.slider');
let clickRegToggle = document.querySelector('#auth-toggle-reg');
let clickLogToggle = document.querySelector('#auth-toggle-log');

clickRegToggle.addEventListener('click', () => {
  navToggle.style.right = '0px';
  registerForm.style.top = '0px';
  loginForm.style.top = '-450px';
  sliderContainer.style.height = '450px';
});

clickLogToggle.addEventListener('click', () => {
  navToggle.style.right = '110px';
  registerForm.style.top = '450px';
  loginForm.style.top = '0px';
  sliderContainer.style.height = '420px';
});

let navBar = document.getElementById('nav-bar');
let navCon = document.getElementById('first-nav');
let navClose = true;
navBar.addEventListener('click', () => {
  if (navClose === true) {
    navCon.style.transform = 'translateX(0%)';
    navCon.style.opacity = '1';
    navClose = false;
  } else if (navClose === false) {
    navCon.style.transform = 'translateX(100%)';
    navCon.style.opacity = '0';
    navClose = true;
  }
});

window.onscroll = () => {
  navCon.style.transform = 'translateX(100%)';
  navCon.style.opacity = '0';
  navClose = true;
};
