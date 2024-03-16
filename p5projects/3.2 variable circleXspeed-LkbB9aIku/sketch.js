let circleX = 0;
let circleXspeed = 1;

function setup() {
  createCanvas(300, 200).mousePressed(function() {
    circleX = mouseX;
  });
  createSpan('click on canvas to move circle');
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circleX, 100, 64);
  circleX = circleX + circleXspeed;
  if (circleX > width) {
    circleXspeed = -1;
  }
  if (circleX < 0) {
    circleXspeed = 1;    
  }
}

// https://editor.p5js.org/jht1493/sketches/TAV5p1sMW
// 3.2 variable circleXspeed

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