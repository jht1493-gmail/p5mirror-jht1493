var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed;  // Increase the value of x
  arc(x, 60, radius, radius, 0.52, 5.76);
}

// https://editor.p5js.org/jht1493/sketches/DJ99paBR7
// Ex_08_03 Move a Shape

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_03.js
