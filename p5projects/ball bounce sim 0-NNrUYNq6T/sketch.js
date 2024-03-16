const ball = {
  a_radius: 20, // radius size of ball
  x: 100, // initial horizontal position
  y: 50, // initial vertical position
  vx: 2, // initial horizontal speed
  vy: 0, // initial vertical speed
  dampy: -0.8,
  dampx: -0.01,
}

var g = 0.1; // acceleration due to gravity

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  draw_ball();
  step_ball();
}

function step_ball() {
  // gravity increases the vertical speed
  ball.vy += g; 
  ball.vx += ball.dampx;
  if (ball.vx < 0) ball.vx = 0;
  // horizontal speed increases horizontal position
  ball.x += ball.vx; 
  // vertical speed increases vertical position
  ball.y += ball.vy; 
  // if ball hits the ground
  if (ball.y > height - ball.a_radius) { 
    // reposition it at the ground
    ball.y = height - ball.a_radius; 
    // reverse and reduce its vertical speed
    ball.vy *= ball.dampy; 
  }
  // if ball goes beyond canvas
  if (ball.x > width + ball.a_radius) { 
    // wrap it around
    ball.x = -ball.radius; 
  }
}

function draw_ball() {
  circle(ball.x, ball.y, ball.a_radius*2)
}

// https://xaeyr.typepad.com/files/physics-for-javascript-games-animation-and-simulations.pdf