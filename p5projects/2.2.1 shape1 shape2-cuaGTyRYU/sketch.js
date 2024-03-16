let shape1x = 0;
let shape1y = 100;

let shape2x = 200;
let shape2y = 0;

let lenxy = 100;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    shape1x = mouseX;
    shape1y = mouseY;
    shape2x = mouseX;
    shape2y = mouseY;
  });
  createSpan('click on canvas to move the shpaes');
}

function draw() {
  background(0);
  noStroke();
  
  fill(255);
  circle(shape1x, shape1y, lenxy);
  shape1x = (shape1x + 1) % width;
  
  rect(shape2x-lenxy/2, shape2y-lenxy/2, lenxy);
  shape2y = (shape2y + 1) % height;
}

// https://editor.p5js.org/jht1493/sketches/cuaGTyRYU
// 2.2.1 shape1 shape2

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable shape1x width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC