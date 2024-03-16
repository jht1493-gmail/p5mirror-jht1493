// https://editor.p5js.org/jht1493/sketches/iNGrQuX3H
// mouseX,mouseY circle Button

function setup() {
  createCanvas(400, 300);
  background(0);
  createButton('Circle').mousePressed(function() {
    console.log('calling circle');
    // circle(x,y,diameter)
    circle(200, 150, 200)
  });

}

function draw() {
  noStroke();
  fill(255, 50);
  circle(mouseX, mouseY, 24);
}

function mousePressed() {
  // background(0);
}

// https://editor.p5js.org/codingtrain/sketches/IeblvUQrf
// p5js Code! - 2.1 - mouseX,mouseY

// Variables in p5.js (mouseX, mouseY)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.1-mousex-mousey.html
// https://youtu.be/7A5tKW9HGoM

