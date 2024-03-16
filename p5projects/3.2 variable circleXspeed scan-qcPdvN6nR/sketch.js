let circleX = 0;
let circleY = 30;
let circleXspeed = 5;
let circleYspeed = 30;

function setup() {
  createCanvas(300, 200).mousePressed(function() {
    circleX = mouseX;
    circleY = mouseY;
  });
  createSpan('click on canvas to move circle');
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circleX, circleY, 60);
  circleX = circleX + circleXspeed;
  if (circleX > width || circleX < 0) {
    circleXspeed = - circleXspeed;
    circleY = circleY + circleYspeed;
    if (circleY > height || circleY <= 0) {
      circleYspeed = -circleYspeed;
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/qcPdvN6nR
// 3.2 variable circleXspeed scan 

// https://editor.p5js.org/jht1493/sketches/PLfo2BKRm
// 3.2 variable circleXspeed OR

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