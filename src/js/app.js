// Определим количество ячеек в поле
const field = document.getElementById('field');
const childCount = field.childElementCount;

// создаем картинку
const img = document.createElement('img');
img.src = '../img/goblin.png';

// Функция рандомайзер
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

// Функция вставления картинки
function insertImg() {
  const i = getRandom(childCount);
  const cell = document.querySelector(`div[data-cell='${i}']`);
  cell.append(img);
}

function removeEl() {
  const remEl = field.querySelector('div > img');
  remEl.remove();
}

setInterval(() => {
  insertImg();
}, 1000);

setInterval(() => {
  removeEl();
}, 1500);
