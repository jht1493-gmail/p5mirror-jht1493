function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  step_bounce();
  draw_ball(); // draw the ball
}

function step_bounce() {
  vx += dampx;
  if (vx < 0) vx = 0;
  x += vx; // horizontal speed increases horizontal position
  if (x > width + radius) { // if ball goes beyond canvas
    x = -radius; // wrap it around
  }

  vy += g; // gravity increases the vertical speed
  y += vy; // vertical speed increases vertical position
  if (y > height - radius) { // if ball hits the ground
  // if (y > height ) { // if ball hits the ground
    y = height - radius; // reposition it at the ground
    // y = height;
    vy *= dampy; // then reverse and reduce its vertical speed
  }
}

function draw_ball() {
  circle(x,y,radius*2)
}

var radius = 20;
var g = 0.1; // acceleration due to gravity
var x = 50; // initial horizontal position
var y = 50; // initial vertical position
var vx = 4; // initial horizontal speed
var vy = 0; // initial vertical speed
var dampx = -0.03;
var dampy = -0.8;


// https://xaeyr.typepad.com/files/physics-for-javascript-games-animation-and-simulations.pdf