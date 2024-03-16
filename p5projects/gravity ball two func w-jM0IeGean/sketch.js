// Two ball objects
let ball_1 = {
  x: 150,
  y: 0,
  w: 16,
  speed: 0
};
let ball_2 = {
  x: 350,
  y: 50,
  w: 32,
  speed: 0
};

// Global gravity variable
let gravity = 0.1;

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
  stroke(0);
  ellipse(ball.x, ball.y, ball.w, ball.w);
}

function update_ball(ball) {
  // Add gravity to speed
  ball.speed = ball.speed + gravity;

  // Add speed to location
  ball.y = ball.y + ball.speed;

  // If square reaches the bottom 
  // Reverse speed 
  if (ball.y > height - ball.w / 2) {
    ball.y = height - ball.w / 2;
    ball.speed = ball.speed * -0.95;
  }
}

// 2020-10-11 jht: Corrected bounce test
// https://editor.p5js.org/icm/sketches/BkyUQp1nb