function setup() {
  createCanvas(480, 120);
  strokeWeight(4);
  stroke(0, 102);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}

// https://editor.p5js.org/jht1493/sketches/d2VusUGT4
// Ex_05_06 Draw Continuously

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_06.js
