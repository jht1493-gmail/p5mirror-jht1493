let x1 = -10;
let x2 = 10;
let x3 = 35;
let x4 = 18;
let x5 = 30;

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  x1 += 0.5;
  x2 += 0.5;
  x3 += 0.5;
  x4 += 0.5;
  x5 += 0.5;
  arc(x1, 20, 20, 20, 0.52, 5.76);
  arc(x2, 40, 20, 20, 0.52, 5.76);
  arc(x3, 60, 20, 20, 0.52, 5.76);
  arc(x4, 80, 20, 20, 0.52, 5.76);
  arc(x5, 100, 20, 20, 0.52, 5.76);
}

// https://editor.p5js.org/jht1493/sketches/WNdXMzR_Q
// Ex_11_02 Too Many Variables

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_02.js
