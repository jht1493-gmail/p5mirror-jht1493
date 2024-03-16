// From: http://10print.org/

var x_pos = 0;
var y_pos = 0;
var x_step = 20;
var y_step = 20;
var a_size = 20;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  if (random(1) > 0.5) {
    line(x_pos, y_pos, x_pos + a_size, y_pos + a_size);
  } else {
    line(x_pos, y_pos + a_size, x_pos + a_size, y_pos);
  }
  x_pos += x_step;
  if (x_pos > width || x_pos < 0) {
    x_step = x_step * -1;
    x_pos += x_step;
    y_pos += y_step;
  }
  if (y_pos > height || y_pos < 0) {
    // background(255);
    y_step = y_step * -1;
    y_pos += y_step;
  }
}

// https://editor.p5js.org/icm/sketches/rkHKL962