// From: http://10print.org/

var x_pos = 0;
var y_pos = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  if (random(1) > 0.5) {
    line(x_pos, y_pos, x_pos+20, y_pos+20);
  } 
  else {
    line(x_pos, y_pos+20, x_pos+20, y_pos);
  }
  x_pos += 20;
  if (x_pos > width) {
    x_pos = 0;
    y_pos += 20;
  }
  if (y_pos > height) {
    background(255);
    x_pos = 0;
    y_pos = 0;
  }
}

// https://editor.p5js.org/icm/sketches/rkHKL962