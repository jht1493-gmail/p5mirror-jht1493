// https://editor.p5js.org/jht1493/sketches/7VFns9ZeO
// circleX function gray

let aCircle = {
  x: 100,
  y: 150,
  sx: 1,
  sy: 0,
  d: 64,
  c: 255,
  a: 10
};
let bCircle = {
  x: 100,
  y: 150,
  sx: 0,
  sy: -1,
  d: 64,
  c: 255,
  a: 10
};

function setup() {
  let myCanvas = createCanvas(400, 300);
  myCanvas.mousePressed(function () {
    circleMouseXY(aCircle)
    circleRandomSize(aCircle);
    circleMouseXY(bCircle)
    circleRandomSize(bCircle);
  })
  createButton('backg 0').mousePressed(function() {
    console.log('calling background');
    background(0);
  });
  createButton('jump').mousePressed(function() {
    // aCircle
    circleJump(aCircle);
    circleRandomSize(aCircle);
    // bCircle
    circleJump(bCircle);
    circleRandomSize(bCircle);
  });
  background(0);
  noStroke();
}

function circleJump(circle1) {
  circle1.y = random(0,height)
  circle1.x = random(0,width)
}

function circleRandomSize(circle1) {
  circle1.d = random(5,50)
}

function circleMouseXY(circle1) {
  circle1.x = mouseX;
  circle1.y = mouseY;
}

function draw() {
  circleDraw(aCircle);
  circleDraw(bCircle)
}

function circleDraw(circle1) {
  fill(circle1.c, circle1.c, circle1.c, circle1.a);
  circle(circle1.x, circle1.y, circle1.d);
  circle1.x = (circle1.x + circle1.sx + width) % width;
  circle1.y = (circle1.y + circle1.sy + height) % height;
}

// https://editor.p5js.org/jht1493/sketches/4JqUtGU
// circleX literal functions

// https://editor.p5js.org/jht1493/sketches/0qBB2QGDI
// circleX object literal

// https://editor.p5js.org/jht1493/sketches/a60pgYiUH
// circleX random colors

// https://editor.p5js.org/jht1493/sketches/AJxU3gRhX
// myCanvas buttons random

// https://editor.p5js.org/jht1493/sketches/L55nCCMds
// variable circleX myCanvas buttons

// Move to myCanvas.mousePressed to allow buttons
// to work.
// function mousePressed() {
//   circleX = 0;
// }

// https://editor.p5js.org/jht1493/sketches/JVoQAP3aM
// variable circleX myCanvas

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

