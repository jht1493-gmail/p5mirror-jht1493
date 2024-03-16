let angle = 0.0;
let offset = 60;
let scalar = 30;
let speed = 0.05;

function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  let x = offset + cos(angle) * scalar;
  let y = offset + sin(angle) * scalar;
  ellipse( x, y, 40, 40);
  angle += speed;
}

// https://editor.p5js.org/jht1493/sketches/0IZtaK_fH
// Ex_08_14 Circular Motion

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_14.js
