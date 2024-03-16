
function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  pop();
  translate(35, 10);
  rect(0, 0, 15, 15);
}

// https://editor.p5js.org/jht1493/sketches/6vFu9X3jD
// Ex_06_10 Isolating Transformations

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_10.js
