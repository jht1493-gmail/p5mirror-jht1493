let shape1x = 0;
let shape1y = 100;

let a_alpha = 10;
let a_len = 100;
let a_step = 30;

let cRed = [255, 0, 0, a_alpha];
let cGreen = [0, 255, 0, a_alpha];
let cYellow = [255, 255, 0, a_alpha];
let cGray = [100, 100, 100, a_alpha];

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    shape1x = mouseX;
    shape1y = mouseY;
    let col = random([cRed, cGreen, cYellow, cGray]);
    fill(col);
  });
  createSpan('click on canvas to move the shape');
  createElement('br');
  createButton('backg 255').mousePressed(function () {
    background(255);
  });
  fill(cRed);
  // Slow down to 2 frames per second
  frameRate(2);
}

function draw() {
  // background(0);
  noStroke();
  // fill(255);
  circle(shape1x, shape1y, a_len);
  shape1x = (shape1x + a_step) % width;
}

// https://editor.p5js.org/jht1493/sketches/iNY8JDhzH
// 2.4.3 shape1 alpha slow

// https://editor.p5js.org/jht1493/sketches/UDMyivHEQ
// 2.4.2 shape1 alpha

// https://editor.p5js.org/jht1493/sketches/N2VJYjIWg
// 2.4.1 random shape1

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