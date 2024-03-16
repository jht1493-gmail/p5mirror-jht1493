// https://editor.p5js.org/jht1493/sketches/0qBB2QGDI
// circleX object literal

let aCircle = {
  x: 100,
  y: 150,
  sx: 2,
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
    aCircle.x = mouseX;
    aCircle.y = mouseY;
    bCircle.x = mouseX;
    bCircle.y = mouseY;
  })
  createButton('backg 0').mousePressed(function() {
    console.log('calling background');
    background(0);
  });
  createButton('jump').mousePressed(function() {
    // aCircle
    aCircle.y = random(0,height)
    aCircle.x = random(0,width)
    aCircle.r = random(100,255)
    aCircle.g = random(100,255)
    aCircle.b = random(100,255)
    // bCircle
    bCircle.x = random(0,width)
    bCircle.r = random(100,255)
    bCircle.g = random(100,255)
    bCircle.b = random(100,255)
  });
  background(0);
}

function draw() {
  // background(0);
  noStroke();
  // fill(255);
  fill(aCircle.r, aCircle.g, aCircle.b, aCircle.a);
  circle(aCircle.x, aCircle.y, aCircle.d);
  aCircle.x = (aCircle.x + aCircle.sx) % width;
  aCircle.y = (aCircle.y + aCircle.sy) % width;

  fill(bCircle.r, bCircle.g, bCircle.b, bCircle.a);
  circle(bCircle.x, bCircle.y, bCircle.d);
  bCircle.x = (bCircle.x + bCircle.sx) % width;
  bCircle.y = (bCircle.y + bCircle.sy) % width;
}

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

