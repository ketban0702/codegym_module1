

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {//sang phai
    this.left += speed;
    console.log('ok: ' + this.left);
  }

  this.moveLeft = function () {//sang trai
    this.left -= speed;
    console.log('ok: ' + this.left);
  }

  this.moveDown = function () {//xuong duoi
    this.top += speed;
    console.log('ok: ' + this.top);
  }

  this.moveUp = function () {//len tren
    this.top -= speed;
    console.log('ok: ' + this.top);
  }
}

var hero = new Hero('car.png', 20, 30, 20, 200);

function start() {
  if ((hero.left < window.innerWidth - hero.size) && (hero.top < 30)) {
    hero.moveRight();
  }
  if ((hero.left >= window.innerWidth - hero.size) && (hero.top < window.innerHeight - hero.size)) {
    hero.moveDown();
  }
  if ((hero.left > hero.size) && (hero.top >= window.innerHeight - hero.size)) {
    hero.moveLeft();
  }
  if ((hero.left <= hero.size) && (hero.top >hero.size)) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();