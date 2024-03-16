// Two ball objects
let ball1;
let ball2;

// Global gravity variable
let gravity = 0.1;

function setup() {
  createCanvas(480, 270);

  // Create ball objects
  ball1 = {
    x: 150,
    y: 0,
    w: 16,
    speed: 0
  };
  ball2 = {
    x: 350,
    y: 50,
    w: 32,
    speed: 0
  };
}

function draw() {
  background(51);

  // Display ball objects
  display_ball(ball1);
  display_ball(ball2);

  // Move ball objects
  update_ball(ball1);
  update_ball(ball2);
}

function display_ball(ball) {
  fill(175);
  circle(ball.x, ball.y, ball.w);
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

// jht: Converted to POJO from
// https://editor.p5js.org/jht1493/sketches/ExoAGUZRm
// jht: Corrected bounce test, comments
// https://editor.p5js.org/icm/sketches/BkyUQp1nb