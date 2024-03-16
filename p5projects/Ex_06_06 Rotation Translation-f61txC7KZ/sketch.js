let angle = 0.0;

function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  rotate(angle);
  translate(mouseX, mouseY);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}

// https://editor.p5js.org/jht1493/sketches/f61txC7KZ
// Ex_06_06 Rotation Translation

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_06.js
