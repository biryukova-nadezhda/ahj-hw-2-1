import Game from '../Game';

test('should create new object class Game', () => {
  const expected = {
    srcImg: 'goblin.png',
    fieldSize: 4,
  };

  const result = new Game('goblin.png', 4);
  expect(result).toEqual(expected);
});

test('should return number less then max', () => {
  const max = 2;
  const game = new Game('goblin.png', 4);
  const result = game.getRandom(max);
  expect(result).toBeLessThan(max);
});

test('should create element img', () => {
  document.body.innerHTML = '<img class="img_goblin" src="goblin.png">';
  const expected = document.querySelector('.img_goblin');

  document.body.innerHTML = '<div class="div"></div>';
  const div = document.querySelector('.div');

  const game = new Game('goblin.png', 2);
  const img = game.createImg();

  div.insertAdjacentElement('beforeend', img);
  const result = div.querySelector('.img_goblin');

  expect(result).toEqual(expected);
});

/* test('section must be of a given pattern', () => {
  document.body.innerHTML = `<img class="img_goblin" src="goblin.png">';
  const expected = document.querySelector('.img_goblin');
  document.createElement('article');
  const article = document.querySelector('article');
  article.innerHTML = '<section class="game_field">
  <div class="field_container" id="fieldGame"></div></section>`;
  const expected = article.querySelector('.game_field');

  const game = new Game('goblin.png', 2);
  game.createSection();
  const result = document.body.querySelector('.game_field');
  expect(result).toEqual(expected);
  document.body.innerHTML = '';
}) */

test('should insert section in body', () => {
  const game = new Game('goblin.png', 2);
  game.createSection();

  const result = document.body.querySelector('.game_field');
  expect(result).toEqual(expect.anything());
});

/* test('field must be of a given pattern', () => {
  document.body.innerHTML = `<article class="article">
  <div class="field_container" id="fieldGame"><div class="cell" data-cell="0">
  <div class="cell" data-cell="1"><div class="cell" data-cell="2">
  <div class="cell" data-cell="3"></div></article>`;
  const article = document.querySelector('.article');
  const expected = article.querySelector('.field_container');

  const game = new Game('goblin.png', 2);
  game.createSection();
  game.generateField();
  const section = document.querySelector('.game_field');
  const result = section.querySelector('.field_container');
  expect(result).toEqual(expected);
}) */

test('should insert cell in field', () => {
  const game = new Game('goblin.png', 2);
  game.createSection();
  game.generateField();

  const result = document.body.querySelector('.field_container');
  expect(result).toEqual(expect.anything());
});

test('should insert img in cell', () => {
  document.body.insertHTML = '<div class="cell" data-cell="0"><img src="goblin.png" class="img_goblin"></div>';
  const expected = document.querySelector('body .cell');

  const game = new Game('goblin.png', 1);
  game.createSection();
  game.generateField();
  const img = game.createImg();
  game.insertImg(img);

  const div = document.getElementById('fieldGame');
  const result = div.querySelector('.cell');
  expect(result).toEqual(expected);
});
