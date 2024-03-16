// https://editor.p5js.org/jht1493/sketches/a60pgYiUH
// circleX random colors

let circleX = 100;
let circleY = 150;
let circleSpeed = 2;
let circleDiam = 64;
let circleRed = 255;
let circleGreen = 255;
let circleBlue = 255;
let circleAlpha = 10;

function setup() {
  let myCanvas = createCanvas(400, 300);
  myCanvas.mousePressed(function () {
    circleX = 0;
  })
  createButton('backg 0').mousePressed(function() {
    console.log('calling background');
    background(0);
  });
  createButton('jump').mousePressed(function() {
    circleY = random(0,height)
    circleX = random(0,width)
    circleRed = random(100,255)
    circleGreen = random(100,255)
    circleBlue = random(100,255)
  });
  background(0);
}

function draw() {
  // background(0);
  noStroke();
  // fill(255);
  fill(circleRed, circleBlue, circleBlue, circleAlpha);
  circle(circleX, circleY, circleDiam);
  circleX = (circleX + circleSpeed) % width;
}

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

