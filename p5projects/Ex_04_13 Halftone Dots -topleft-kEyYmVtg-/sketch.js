function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  for (var y = 0; y <= height; y += 8) {
    for (var x = -100; x <= width; x += 15) {
      ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/kEyYmVtg-
// Ex_04_13 Halftone Dots -topleft

// https://editor.p5js.org/jht1493/sketches/GO50HlzHN
// Ex_04_13 Halftone Dots

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_13.js
