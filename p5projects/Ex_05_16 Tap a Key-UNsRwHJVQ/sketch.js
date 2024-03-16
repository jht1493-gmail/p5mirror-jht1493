function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  line(20, 20, 220, 100);
  if (keyIsPressed) {
    line(220, 20, 20, 100);
  }
}

// https://editor.p5js.org/jht1493/sketches/UNsRwHJVQ
// Ex_05_16 Tap a Key

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_16.js