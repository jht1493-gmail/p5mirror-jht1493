// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  // frameRate(0.1);

  draw_full(draw_rect, a_size);

  draw_full(draw_circle, a_size);
  
  // draw_full(draw_triangle, a_size);
  
  // draw_triangle(a_size)
}

let x_pos = 0;
let y_pos = 0;
let a_size = 50;
let a_size2 = a_size * 2;

function draw_full(draw_func, a_size) {
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
  fill(random_color(100));
  circle(x_pos, y_pos, a_size);
}

function draw_triangle(a_size) {
  fill(random_color(110));
  // triangle(x1, y1, x2, y2, x3, y3)
  const x1 = x_pos, y1 = y_pos+a_size;
  const x2 = x_pos+a_size/2, y2 = y_pos;
  const x3 = x_pos+a_size, y3 = y_pos+a_size;
  triangle(x1, y1, x2, y2, x3, y3)
}

function random_color(a_alpha) {
  return color(random(255), random(255), random(255), a_alpha);
}

// https://editor.p5js.org/phil-in-a-can/sketches/rtN_vgRGJ