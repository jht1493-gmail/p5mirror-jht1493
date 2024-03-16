// Two ball objects
let ball_1 = {
  x: 150,
  y: 0,
  r: 8,
  speed: 0
};
let ball_2 = {
  x: 350,
  y: 50,
  r: 16,
  speed: 0
};

let a_gravity = 0.4;
let a_damp = -0.95;

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(51);

  display_ball(ball_1);
  display_ball(ball_2);

  update_ball(ball_1);
  update_ball(ball_2);
}

function display_ball(ball) {
  fill(175);
  circle(ball.x, ball.y, ball.r*2);
}

function update_ball(ball) {
  ball.speed = ball.speed + a_gravity;
  ball.y = ball.y + ball.speed;
  // If reaches the bottom, reverse speed 
  if (ball.y > height - ball.r) {
    ball.y = height - ball.r;
    ball.speed = ball.speed * a_damp;
  }
}

// 2020-10-11 jht: Corrected bounce test
// https://editor.p5js.org/icm/sketches/BkyUQp1nb