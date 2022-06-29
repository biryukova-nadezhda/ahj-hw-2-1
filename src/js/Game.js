export default class Game {
  constructor(srcImg, fieldSize) {
    this.srcImg = srcImg;
    this.fieldSize = fieldSize;
  }

  // Метод выдачи рандомного числа меньше заданного
  getRandom(max) {
    this.name = 'getRandom';
    return Math.floor(Math.random() * max);
  }

  // Функция создания картинки
  createImg() {
    const img = document.createElement('img');
    img.src = this.srcImg;
    img.className = 'img_goblin';
    return img;
  }

  // Функция создания секции
  createSection() {
    this.name = 'createSection';
    const body = document.querySelector('body');
    const section = '<section class="game_field"><div class="field_container" id="fieldGame"></div></section>';
    body.insertAdjacentHTML('afterbegin', section);
  }

  // Функция создания игрового поля
  generateField() {
    const field = document.getElementById('fieldGame');
    const size = this.fieldSize ** 2;

    for (let i = 0; i < size; i += 1) {
      const cell = `<div class="cell" data-cell="${i}"></div>`;
      field.insertAdjacentHTML('beforeend', cell);
    }
  }

  // Функция вставки картинки в ячейку поля
  insertImg(img) {
    const max = this.fieldSize ** 2;
    const i = this.getRandom(max);
    const cell = document.querySelector(`div[data-cell='${i}']`);
    cell.append(img);
  }

  // Функция запуска работы класса
  start() {
    this.createSection();
    this.generateField();
    const img = this.createImg();

    setInterval(() => {
      this.insertImg(img);
    }, 1000);
  }
}
