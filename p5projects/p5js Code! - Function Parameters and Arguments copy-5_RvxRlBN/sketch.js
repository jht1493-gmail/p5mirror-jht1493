// Function Parameters and Arguments
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  // for (avar = initalVal ; avar < endValu; avar += change) 
  for (let x = 0; x < width; x += 100) {
    lollipop(x+50, 100, 50);
  }
  // lollipop(100, 100, 50);
  // lollipop(200, 100, 50);
  // lollipop(300, 100, 50);
  // lollipop(400, 100, 50);
}

function lollipop(x, y, diameter) {
  fill(0, 200, 255);
  rect(x - 10, y, 20, 150);
  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}


// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.2-parameters-arguments.html
// https://youtu.be/zkc417YapfE
// https://editor.p5js.org/codingtrain/sketches/eGD-xzsw
