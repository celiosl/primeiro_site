// Seleciona o botão hamburguer e o menu
const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Ao clicar no botão, adiciona/remove a classe "active"
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
