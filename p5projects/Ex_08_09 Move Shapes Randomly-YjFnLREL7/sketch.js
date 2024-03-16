let speed = 2.5;
let diameter = 20;
let x;
let y;

function setup() {
  createCanvas(240, 120);
  background(204);
  x = width/2;
  y = height/2;
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);
}

// https://editor.p5js.org/jht1493/sketches/YjFnLREL7
// Ex_08_09 Move Shapes Randomly

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_09.js
