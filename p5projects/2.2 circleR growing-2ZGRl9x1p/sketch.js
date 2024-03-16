let circleR = 0;

function setup() {
  createCanvas(280, 120).mousePressed(function() {
    circleR = 0;
  });
  createSpan('click on the canvas to reset the circle');
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(width / 2, height / 2, circleR * 2);
  circleR = (circleR + 1) % (width/2);
}

// https://editor.p5js.org/jht1493/sketches/2ZGRl9x1p
// 2.2 circleR growing 

// Make Your Own (Growing Circle Exercise)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC