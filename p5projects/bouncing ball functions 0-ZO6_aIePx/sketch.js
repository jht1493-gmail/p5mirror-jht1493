let ball1 = {
  x: 200,
  y: 30,
  speed: 0
}

let ball2 = {
  x: 100,
  y: 30,
  speed: 0
}

var gravity = 0.1;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  // console.log('ball1', ball1)
  background(0);
  draw_ball(ball1)
  draw_ball(ball2)
}

function draw_ball(ball) {
  displayBall(ball);
  moveBall(ball);
  bounceBall(ball);
}

function displayBall(ball) {
  fill(255);
  ellipse(ball.x, ball.y, 24, 24);
}

function moveBall(ball) {
  ball.y = ball.y + ball.speed;
  ball.speed = ball.speed + gravity;
}

function bounceBall(ball) {
  if (ball.y > height) {
    ball.speed = ball.speed * -0.95;
  }
}

// https://editor.p5js.org/icm/sketches/H1Oq4qta
// https://github.com/ITPNYU/ICM-2020-Code/blob/master/weeks/05_functions.md
// 5.1: Function Basics

