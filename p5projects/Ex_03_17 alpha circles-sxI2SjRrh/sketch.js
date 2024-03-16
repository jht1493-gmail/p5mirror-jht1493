function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(204, 226, 225);    // Light blue color
  fill(255, 0, 0, 160);         // Red color
  ellipse(132, 82, 200, 200);   // Red circle
  fill(0, 255, 0, 160);         // Green color
  ellipse(228, -16, 200, 200);  // Green circle
  fill(0, 0, 255, 160);         // Blue color
  ellipse(268, 118, 200, 200);  // Blue circle
}

// https://editor.p5js.org/jht1493/sketches/sxI2SjRrh
// Ex_03_17 alpha circles

// https://github.com/lmccart/gswp5.js-code/blob/master/03_Draw/Example_03_17.js