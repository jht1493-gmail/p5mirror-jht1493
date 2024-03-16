var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed * direction;
  if ((x > width-radius) || (x < radius)) {
  // if ((x > width) || (x < 0)) {
    direction = -direction; // Flip direction
  }
  if (direction == 1) {
    arc(x, 60, radius, radius, 0.52, 5.76); // Face right
  } else {
    arc(x, 60, radius, radius, 3.67, 8.9); // Face left
  }
}

// https://editor.p5js.org/jht1493/sketches/wJCzyVzBm
// Ex_08_05 Bounce Off the Wall

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_05.js
