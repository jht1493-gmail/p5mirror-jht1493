// https://editor.p5js.org/jht1493/sketches/4JqUtGU
// circleX literal functions

let aCircle = {
  x: 100,
  y: 150,
  sx: 0,
  sy: 1,
  d: 64,
  r: 255,
  g: 255,
  b: 255,
  a: 10
};
let bCircle = {
  x: 100,
  y: 150,
  sx: 0,
  sy: 1,
  d: 64,
  r: 255,
  g: 255,
  b: 255,
  a: 10
};

function setup() {
  let myCanvas = createCanvas(400, 300);
  myCanvas.mousePressed(function () {
    circleMouseXY(aCircle)
    circleMouseXY(bCircle)
    // bCircle.x = mouseX;
    // bCircle.y = mouseY;
    circleRandomColor(aCircle);
    circleRandomColor(bCircle);
  })
  createButton('backg 0').mousePressed(function() {
    console.log('calling background');
    background(0);
  });
  createButton('jump').mousePressed(function() {
    // aCircle
    circleJump(aCircle);
    circleRandomColor(aCircle);
    // bCircle
    circleJump(bCircle);
    circleRandomColor(bCircle);
    // bCircle.x = random(0,width)
    // bCircle.r = random(100,255)
    // bCircle.g = random(100,255)
    // bCircle.b = random(100,255)
  });
  background(0);
  noStroke();
}

function circleJump(circle1) {
  circle1.y = random(0,height)
  circle1.x = random(0,width)
}

function circleRandomColor(circle1) {
  circle1.r = random(100,255)
  circle1.g = random(100,255)
  circle1.b = random(100,255)
}

function circleMouseXY(circle1) {
  circle1.x = mouseX;
  circle1.y = mouseY;
}

function draw() {
  // background(0);
  // aCircle
  circleDraw(aCircle);
  // fill(aCircle.r, aCircle.g, aCircle.b, aCircle.a);
  // circle(aCircle.x, aCircle.y, aCircle.d);
  // aCircle.x = (aCircle.x + aCircle.sx) % width;
  // aCircle.y = (aCircle.y + aCircle.sy) % width;
  // bCircle
  circleDraw(bCircle)
}

function circleDraw(circle1) {
  fill(circle1.r, circle1.g, circle1.b, circle1.a);
  circle(circle1.x, circle1.y, circle1.d);
  circle1.x = (circle1.x + circle1.sx) % width;
  circle1.y = (circle1.y + circle1.sy) % width;
}

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

