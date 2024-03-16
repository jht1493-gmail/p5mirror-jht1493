// button switch
var a_x = 300;
var a_y = 200;
var a_size = 100;
var a_state = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (a_state) {
    background(0);
  } else {
    background(255);
  }
  ellipse(a_x, a_y, a_size, a_size);
}

function mousePressed() {
  if (dist(mouseX, mouseY, a_x, a_y) < a_size/2) {
    a_state = !a_state;
  }
}

// https://editor.p5js.org/icm/sketches/Sywrrqa2
