
var angle = 0.0;

function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}

// https://editor.p5js.org/jht1493/sketches/dIUreb8Fc
// Ex_06_05 Translation Rotation

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_05.js
