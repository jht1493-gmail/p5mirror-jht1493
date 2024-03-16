function setup() {
  createCanvas(240, 120);
  strokeWeight(12);
}

function draw() {
  background(204);
  stroke(255);
  line(120, 60, mouseX, mouseY); // White line
  stroke(0);
  let mx = map(mouseX, 0, width, 60, 180);
  line(120, 60, mx, mouseY); // Black line
}

// https://editor.p5js.org/jht1493/sketches/AtqCFY7CC
// Ex_05_23 Map with the map Function

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_23.js
