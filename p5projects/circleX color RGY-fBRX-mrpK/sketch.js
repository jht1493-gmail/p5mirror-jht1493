// https://editor.p5js.org/jht1493/sketches/fBRX-mrpK
// circleX color RGY

let aCircle = {
  x: 300, y: 200, sx: 4, sy: 0,
  d: 64, c: [255,0,0,10],
};
let bCircle = {
  x: 300, y: 200, sx: 0, sy: -4,
  d: 64, c: [255,255,0,10],
};
let cCircle = {
  x: 300, y: 200, sx: 4, sy: 4,
  d: 64, c: [0,255,0,10],
};

function setup() {
  createCanvas(600, 400).mousePressed(function () {
    circleMouseXY(aCircle)      // aCircle
    circleRandomSize(aCircle);
    circleRandomColor(aCircle);
    circleMouseXY(bCircle)      // bCircle
    circleRandomSize(bCircle);
    circleRandomColor(bCircle);
    circleMouseXY(cCircle)      // cCircle
    circleRandomSize(cCircle);
    circleRandomColor(cCircle);
  })
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('jump').mousePressed(function() {
    circleJump(aCircle);         // aCircle
    circleRandomSize(aCircle);
    circleRandomColor(aCircle);
    circleJump(bCircle);         // bCircle
    circleRandomSize(bCircle);
    circleRandomColor(bCircle);
    circleJump(cCircle);         // cCircle
    circleRandomSize(cCircle);
    circleRandomColor(cCircle);
  });
  background(0);
  noStroke();
}
function draw() {
  circleDraw(aCircle);
  circleDraw(bCircle)
  circleDraw(cCircle)
}
function circleDraw(circle1) {
  fill(circle1.c, circle1.c, circle1.c, circle1.a);
  circle(circle1.x, circle1.y, circle1.d);
  circle1.x = (circle1.x + circle1.sx + width) % width;
  circle1.y = (circle1.y + circle1.sy + height) % height;
}
function circleRandomColor(circle1) {
  // circle1.c[0] = random(100,255); // Red
  // circle1.c[1] = random(100,255); // Green
  // circle1.c[2] = random(100,255); // Blue
  let r = [255,0,0,10];
  let g = [0,255,0,10]
  let y = [255,255,0,10]
  circle1.c = random([r,g,y])
}
function circleJump(circle1) {
  circle1.y = random(0,height)
  circle1.x = random(0,width)
}
function circleRandomSize(circle1) {
  circle1.d = random(20,50)
}
function circleMouseXY(circle1) {
  circle1.x = mouseX;
  circle1.y = mouseY;
}

// https://editor.p5js.org/jht1493/sketches/7VFns9ZeO
// circleX function color

// https://editor.p5js.org/jht1493/sketches/7VFns9ZeO
// circleX function gray

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

