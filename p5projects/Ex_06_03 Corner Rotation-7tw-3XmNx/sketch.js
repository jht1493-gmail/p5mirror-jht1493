function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(40, 30, 160, 20);
}

// https://editor.p5js.org/jht1493/sketches/7tw-3XmNx
// Ex_06_03 Corner Rotation

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_03.js
