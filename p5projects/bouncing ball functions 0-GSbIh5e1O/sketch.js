let ball = {
  x: 200,
  y: 30,
  speed: 0,
  radius: 12
}

var gravity = 0.1;
var damp = -0.95;

function setup() {
  createCanvas(400, 300);
}

function displayBall() {
  fill(255);
  circle(ball.x, ball.y, ball.radius*2)
}

function moveBall() {
  ball.speed = ball.speed + gravity;
  ball.y = ball.y + ball.speed;
  if (ball.y > height - ball.radius) {
    ball.y = height - ball.radius;
    ball.speed = ball.speed * damp;
  }
}

function draw() {
  background(0);
  displayBall();
  moveBall();
}



