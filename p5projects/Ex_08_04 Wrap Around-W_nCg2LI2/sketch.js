var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
  // frameRate(2);
}

function draw() {
  background(0);
  x += speed;  // Increase the value of x
  if (x > width+radius) {  // If the shape is off screen
    x = -radius;  // move to the left edge
  }
  arc(x, 60, radius, radius, 0.52, 5.76);
}

// https://editor.p5js.org/jht1493/sketches/W_nCg2LI2
// Ex_08_04 Wrap Around

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_04.js
