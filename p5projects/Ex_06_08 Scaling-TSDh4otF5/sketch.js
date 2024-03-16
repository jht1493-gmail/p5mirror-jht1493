function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  scale(mouseX / 60.0);
  rect(-15, -15, 30, 30);
}

// https://editor.p5js.org/jht1493/sketches/TSDh4otF5
// Ex_06_08 Scaling

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_08.js