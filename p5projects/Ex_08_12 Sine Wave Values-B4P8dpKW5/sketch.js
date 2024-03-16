let angle = 0.0;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  var sinval = sin(angle);
  print(sinval);
  var gray = map(sinval, -1, 1, 0, 255);
  background(gray);
  angle += 0.1;
}

// https://editor.p5js.org/jht1493/sketches/B4P8dpKW5
// Ex_08_12 Sine Wave Values

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_12.js
