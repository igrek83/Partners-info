import './styles/index.css';

const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('.header__mobile-menu');
const closeButton = document.querySelector('#menuClose');

function open() {
  menu.classList.add('open');
}

function close() {
  menu.classList.remove('open');
}

menuButton.addEventListener('click', open);
closeButton.addEventListener('click', close);