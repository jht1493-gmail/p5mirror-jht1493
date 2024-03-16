let x = 120;
let y = 60;
let radius = 12;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  let d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    radius++;
    fill(0);
  } else {
    if (radius > 12) {
      radius--;
    }
    fill(255);
  }
  ellipse(x, y, radius, radius);
}

// https://editor.p5js.org/jht1493/sketches/nPTnXZD3c
// Ex_05_14 The Bounds of a Circle pulse

// https://editor.p5js.org/jht1493/sketches/tPX6MmuEk
// Ex_05_14 The Bounds of a Circle

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_14.js
