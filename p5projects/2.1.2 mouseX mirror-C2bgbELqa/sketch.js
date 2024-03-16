function setup() {
  createCanvas(400, 200);
  background(0);
  noStroke();
  fill(255, 50);
  createSpan('Click and drag mouse to draw');
}

function draw() {
  // fill(255, 50);
  // circle(mouseX, mouseY, 24);
}

function mouseDragged() {
  circle(mouseX, mouseY, 24);
  circle(width - mouseX, mouseY, 24);
}

// https://editor.p5js.org/jht1493/sketches/C2bgbELqa
// 2.1.2 mouseX mirror

// https://editor.p5js.org/jht1493/sketches/pmA0d9Uqt
// 2.1 mouseX,mouseY arith

// https://editor.p5js.org/jht1493/sketches/I8zejgYIX
// 2.1 mouseX,mouseY ui

// Variables in p5.js (mouseX, mouseY)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.1-mousex-mousey.html
// https://youtu.be/7A5tKW9HGoM
// https://editor.p5js.org/codingtrain/sketches/IeblvUQrf