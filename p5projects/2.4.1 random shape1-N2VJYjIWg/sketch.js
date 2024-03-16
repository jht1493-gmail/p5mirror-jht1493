let shape1x = 0;
let shape1y = 100;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    shape1x = mouseX;
    shape1y = mouseY;
    let col = random(['red','green','yellow','gray']);
    fill(col);
  });
  createSpan('click on canvas to move the shape');
}

function draw() {
  background(0);
  noStroke();
  // fill(255);
  circle(shape1x, shape1y, 64);
  shape1x = (shape1x + 1) % width;
}

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