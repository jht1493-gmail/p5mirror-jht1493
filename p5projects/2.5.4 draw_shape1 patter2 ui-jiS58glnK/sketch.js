let shape1x = 0;
let shape1y = 50;
let shape1step = 50;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    shape1x = mouseX;
    shape1y = mouseY;
  });
  createButton('backg 255').mousePressed(function() {
    background(255);
  });
  createButton('step 10').mousePressed(function() {
    shape1step = 10;
  });
  createButton('step 75').mousePressed(function() {
    shape1step = 75;
  });
  createElement('br');
  createSpan('click on canvas to move the shape');
  // Color gray with moderate alpha
  fill(100, 100, 100, 100);
  background(255);
}

function draw() {
  // background(255);
  noFill();
  // circle(shape1x, shape1y, 64);
  draw_shape1(shape1x, shape1y);
  draw_shape1(shape1x, shape1y + 100);
  shape1x = (shape1x + shape1step) % width;
}

function draw_shape1(x, y) {
  push();
  translate(x, y);
  circle(-25, -25, 50)
  rect(-50, -25, 50, 50);
  circle(-25, 25, 50)
  pop();
}

// https://editor.p5js.org/jht1493/sketches/jiS58glnK
// 2.5.4 draw_shape1 patter2 ui

// https://editor.p5js.org/jht1493/sketches/huhUWN6Uc
// 2.5.3 draw_shape1 patter2

// https://editor.p5js.org/jht1493/sketches/5JqwobAgJ
// 2.5.2 draw_shape1 pattern

// https://editor.p5js.org/jht1493/sketches/hgFw3__cZ
// 2.5.1 draw_shape1 

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