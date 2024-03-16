function setup() {
  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  background(204);
  // arc(x, y, w, h, start, stop, [mode], [detail])
  arc(90, 60, 80, 80, 0, 90);
  arc(190, 60, 80, 80, 0, 270);
  arc(290, 60, 80, 80, 180, 450);
  arc(390, 60, 80, 80, 45, 225);
}

// https://editor.p5js.org/jht1493/sketches/lj5UimD1G
// Ex_03_09 arcs

// https://github.com/lmccart/gswp5.js-code/blob/master/03_Draw/Example_03_09.js