function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(-80, -10, 160, 20);
}

// https://editor.p5js.org/jht1493/sketches/-K5nIPw-O
// Ex_06_04 Center Rotation

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_04.js
