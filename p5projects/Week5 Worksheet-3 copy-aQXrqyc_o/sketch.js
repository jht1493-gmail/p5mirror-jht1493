//Week5 Worksheet-3

var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  move1();
  bounce();
  display(ball.x, ball.x);
  display(ball.y, ball.y);
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display(x,y) {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(x, y, 24, 24);
}

function move1() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
