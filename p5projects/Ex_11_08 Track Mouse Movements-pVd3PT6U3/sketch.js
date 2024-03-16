let num = 60;
let x = [];
let y = [];

function setup() {
  createCanvas(240, 120);
  noStroke();

  for (let i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  // Copy array values from back to front
  for (let i = x.length-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0] = mouseX; // Set the first element
  y[0] = mouseY; // Set the first element
  for (let i = 0; i < x.length; i++) {
    fill(i * 4);
    ellipse(x[i], y[i], 40, 40);
  }
}

// https://editor.p5js.org/jht1493/sketches/pVd3PT6U3
// Ex_11_08 Track Mouse Movements

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_08.js
