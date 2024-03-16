let x = [-20, 20];

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  x[0] += 0.5;  // Increase the first element
  x[1] += 0.5;  // Increase the second element
  arc(x[0], 30, 40, 40, 0.52, 5.76);
  arc(x[1], 90, 40, 40, 0.52, 5.76);
}

// https://editor.p5js.org/jht1493/sketches/WSHfHkoyV
// Ex_11_06 Revisiting the First Example

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_06.js
