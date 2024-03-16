let x1 = -20;
let x2 = 20;

function setup() {
  createCanvas(240, 120);
  noStroke(); 
}

function draw() {
  background(0);
  x1 += 0.5;
  x2 += 0.5;
  arc(x1, 30, 40, 40, 0.52, 5.76);
  arc(x2, 90, 40, 40, 0.52, 5.76);
}

// https://editor.p5js.org/jht1493/sketches/W26Y1uuiu
// Ex_11_01 Many Variables

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_01.js
