function setup() {
  createCanvas(240, 120);
  strokeWeight(30);
}

function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed) {
    stroke(0);
  }
  line(0, 70, width, 50);
}

// https://editor.p5js.org/jht1493/sketches/ptw9C5yOQ
// Ex_05_10 Click the Mouse

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_10.js
