// https://editor.p5js.org/yw6602/sketches/lPVt6eaoJ
// final project-Pong game copy

let ball, floor;
let sprite;
let block;
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let r = 25;
let paddle1 = 100;
let paddle2 = 300;

function setup() {
  createCanvas(400, 400);
  background(220);
  //mouseMoveMethod(movePaddle1);
  //mouseMoveMethod(movePaddle2);

  // world.gravity.y = 15;
  // block = new Sprite(30, 30);
  //floor = new Sprite(30, 300, 60, 5, 'static');
}

function draw() {
  rect(paddle1, height - 50, 100, 20);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW && paddle1 < width - 100) {
      paddle1 = paddle1 + xspeed;
    }
    if (keyCode == LEFT_ARROW && paddle1 > 0) {
      paddle1 = paddle1 - xspeed;
    }
  }
  //function movePaddle1(e){
  // var posP = e.getX();
  //  paddle1.setPosition(posP-35, getHeight() -15);
  //}

  function draw() {
    clear();
    ellipse(x, y, r * 2, r * 2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
      xspeed = -xspeed;
    }
    if (y > height - r || y < r) {
      yspeed = -yspeed;
    }
  }
}
