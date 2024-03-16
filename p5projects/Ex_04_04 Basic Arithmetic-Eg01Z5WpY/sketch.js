let x = 25;
let h = 20;
let y = 25;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  x = 20; // Correction
  rect(x, y, 300, h);        // Top
  x = x + 100;
  rect(x, y + h, 300, h);    // Middle
  x = x - 250;
  rect(x, y + h*2, 300, h);  // Bottom
}

// https://editor.p5js.org/jht1493/sketches/Eg01Z5WpY
// Ex_04_04 Basic Arithmetic

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_04.js
