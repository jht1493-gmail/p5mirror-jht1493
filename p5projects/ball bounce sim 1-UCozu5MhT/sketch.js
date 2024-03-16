function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  draw_ball();
  step_ball();
}

const ball = {
  a_radius: 40, // radius size of ball
  x_pos: 100, // initial horizontal position
  y_pos: 30, // initial vertical position
  x_speed: 4, // initial horizontal speed
  y_speed: 0, // initial vertical speed
  x_damp: 0.01, // slow down on horizontal speed
  y_damp: 0.80, // slown down on vertical speed
};

var a_gravity = 0.1; // acceleration due to gravity

function step_ball() {

  // horizontal speed increases horizontal position
  ball.x_pos += ball.x_speed;
  // simulate air friction slowing down horizontal speed
  ball.x_speed = ball.x_speed - ball.x_damp;
  if (ball.x_speed < 0) ball.x_speed = 0;
  // print('x_speed', ball.x_speed)
  // if ball goes beyond canvas
  if (ball.x_pos > width + ball.a_radius) {
    // wrap it around
    ball.x_pos = -ball.a_radius;
  }

  // gravity increases the vertical speed
  ball.y_speed += a_gravity;
  // vertical speed increases vertical position
  ball.y_pos += ball.y_speed;
  // if ball hits the ground
  if (ball.y_pos > height - ball.a_radius) {
    // reposition it at the ground
    ball.y_pos = height - ball.a_radius;
    // reverse and reduce its vertical speed
    ball.y_speed = -1.0 * ball.y_speed * ball.y_damp;
  }
}

function draw_ball() {
  circle(ball.x_pos, ball.y_pos, ball.a_radius * 2);
}

// https://xaeyr.typepad.com/files/physics-for-javascript-games-animation-and-simulations.pdf