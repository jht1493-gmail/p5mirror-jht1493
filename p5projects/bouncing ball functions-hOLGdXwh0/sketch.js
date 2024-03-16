let ball = {
  x: 200,
  y: 30,
  speed: 0
}

var gravity = 0.1;

function setup() {
  createCanvas(400, 300);
}

function displayBall() {
  fill(255);
  ellipse(ball.x, ball.y, 24, 24);
}

function moveBall() {
  ball.y = ball.y + ball.speed;
  ball.speed = ball.speed + gravity;
}

function bounceBall() {
  if (ball.y > height) {
    ball.speed = ball.speed * -0.95;
  }
}

function draw() {
  // print(ball.speed)
  background(0);
  displayBall();
  moveBall();
  bounceBall();
}

// https://editor.p5js.org/icm/sketches/H1Oq4qta

