let circleX = 0;
let circleY = 80;
let a_diam = 100;

function setup() {
  createCanvas(400, 300).mousePressed(function() {
    circleX = 0;
  });
  noStroke();
  fill(255);
}

function draw() {
  background(0);
  circle(circleX, circleY, a_diam);
  circleX = (circleX + 1) % width;
}

// https://editor.p5js.org/jht1493/sketches/HtESWWNTa
// 2.2 variable circleX remainder

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

