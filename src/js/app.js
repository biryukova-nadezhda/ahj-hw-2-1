// Импортируем картинку
import image from '../img/goblin.png';

// Задаем размер поля
const n = 4;

// Создаем картинку
const img = document.createElement('img');
img.src = image;
// img.src = "goblin.png";
img.className = 'img_goblin';

// Функция рандомайзер
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

// функция создания cекции для игрового поля
function createSection() {
  const body = document.querySelector('body');
  const section = '<section class="game_field"><div class="field_container" id="fieldGame"></div></section>';
  body.insertAdjacentHTML('afterbegin', section);
}

// Функция создания поля, n - размер квадратного поля
function generateField(x) {
  const field = document.getElementById('fieldGame');

  for (let i = 0; i < x ** 2; i += 1) {
    const cell = `<div class="cell" data-cell="${i}"></div>`;
    field.insertAdjacentHTML('beforeend', cell);
  }
}

// Функция вставления картинки
function insertImg() {
  const max = n ** 2;
  const i = getRandom(max);
  const cell = document.querySelector(`div[data-cell='${i}']`);
  cell.append(img);
}

// Функция начала игры
function start() {
  createSection();
  generateField(n);

  setInterval(() => {
    insertImg();
  }, 1000);
}

start();
