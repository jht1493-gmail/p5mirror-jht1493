let circleX = 0;
let circleY = 150;

function setup() {
  createCanvas(400, 300);
  noStroke();
  fill(255);
}

function mousePressed() {
  circleX = mouseX;
  circleY = mouseY;
}

function draw() {
  background(0);

  circle(circleX, circleY, 200);
  circleX = circleX + 1;
  circleX = circleX % width;
}

// https://editor.p5js.org/jht1493/sketches/e33y9FbcE
// 2.2 variable remainder circleX

// https://editor.p5js.org/jht1493/sketches/HtESWWNTa
// 2.2 variable remainder

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

