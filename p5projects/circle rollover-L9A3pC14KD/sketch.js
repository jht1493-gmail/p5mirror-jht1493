// circle rollover
var a_x = 300;
var a_y = 200;
var a_size = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (dist(mouseX, mouseY, a_x, a_y) < a_size/2) {
    background(0);
  } else {
    background(255);
  }
  ellipse(a_x, a_y, a_size, a_size);
}

// https://editor.p5js.org/icm/sketches/H1kCSqah