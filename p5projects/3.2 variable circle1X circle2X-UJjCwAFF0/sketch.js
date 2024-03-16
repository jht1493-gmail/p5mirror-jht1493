let circle1X = 0;
let circle2X = 0;

function setup() {
  createCanvas(300, 200).mousePressed(function() {
    circle1X = mouseX;
    circle2X = mouseX;
  });
  createSpan('click on canvas to move circle');
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circle1X, 60, 100);
  fill('gray');
  circle(circle2X, 120, 100);
  circle1X = circle1X + 1;
  if (circle1X > width) {
    circle1X = 0;
  }
  circle2X = circle2X - 1;
  if (circle2X < 0) {
    circle2X = width;
  }
}

// https://editor.p5js.org/jht1493/sketches/UJjCwAFF0
// 3.2 variable circle1X circle2X

// https://editor.p5js.org/jht1493/sketches/NO5mWO62W
// 3.1 variable circleX width if

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable circleX width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC