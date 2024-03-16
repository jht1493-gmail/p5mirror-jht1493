function setup() {
  createCanvas(240, 120);
  strokeWeight(12);
}

function draw() {
  background(204);
  stroke(102);
  line(mouseX, 0, mouseX, height);  // Gray line
  stroke(0);
  let mx = mouseX/2 + 60;
  line(mx, 0, mx, height);  // Black line
}

// https://editor.p5js.org/jht1493/sketches/BglFnxl3U
// Ex_05_22 Map Values to a Range

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_22.js
