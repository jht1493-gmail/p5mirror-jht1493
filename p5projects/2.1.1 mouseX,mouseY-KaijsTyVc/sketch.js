function setup() {
  createCanvas(400, 200)
  background(0);
  noStroke();
  fill(255, 50);
  createSpan('Click and drag mouse to draw');
}

function draw() {
  // noStroke();
  // fill(255, 50);
  // circle(mouseX, mouseY, 24);
}

// function mousePressed() {
//   background(0);
// }

function mouseDragged() {
  circle(mouseX, mouseY, 24);
}

// https://editor.p5js.org/jht1493/sketches/KaijsTyVc
// 2.1 mouseX,mouseY

// Variables in p5.js (mouseX, mouseY)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.1-mousex-mousey.html
// https://youtu.be/7A5tKW9HGoM
// https://editor.p5js.org/codingtrain/sketches/IeblvUQrf