// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  // angleMode(DEGREES); // Change the mode to DEGREES

  // draw_full(draw_rect, a_size);
  // draw_full(draw_circle, a_size);
  draw_full(draw_triangle, a_size);

  // y_pos = height / 2;
  // x_pos = width / 2;
  // // draw_triangle(a_size)
  // draw_line(draw_triangle, a_size);
}

let x_pos = 0;
let y_pos = 0;
let a_size = 50;
let a_size2 = a_size * 2;
let cell_count = 0;

function draw_line(draw_func, a_size) {
  for (x_pos = 0; x_pos <= width; x_pos += a_size) {
    draw_func(a_size);
  }
}

function draw_full(draw_func, a_size) {
  // y_pos = height/2-a_size;
  for (y_pos = 0; y_pos <= height; y_pos += a_size) {
    for (x_pos = 0; x_pos <= width; x_pos += a_size) {
      draw_func(a_size);
    }
  }
}

function draw_rect() {
  fill(random_color(255));
  rect(x_pos, y_pos, a_size, a_size);
}

function draw_circle(a_size) {
  fill(random_color(255));
  circle(x_pos, y_pos, a_size);
}

function draw_triangle(a_size) {
  fill(random_color(200));
  push();
  cell_count = (cell_count + 45) % 360
  // cell_count = 0
  const half = a_size / 2;
  // translate(x_pos+half, y_pos+half)
  translate(x_pos, y_pos)
  // translate(width/2, y_pos)
  rotate( (TWO_PI / 360) * cell_count)
  // triangle(x1, y1, x2, y2, x3, y3)
  const x1 = -half, y1 = half;
  const x2 = 0, y2 = -half;
  const x3 = half, y3 = half;
  triangle(x1, y1, x2, y2, x3, y3)
  pop();
}

function random_color(a_alpha) {
  return color(random(255), random(255), random(255), a_alpha);
}

// https://p5js.org/reference/#/p5/atan2
function draw() {
  background(204);
  translate(width / 2, height / 2);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  rotate(a);
  rect(-30, -5, 60, 10);
}

// https://editor.p5js.org/phil-in-a-can/sketches/rtN_vgRGJ