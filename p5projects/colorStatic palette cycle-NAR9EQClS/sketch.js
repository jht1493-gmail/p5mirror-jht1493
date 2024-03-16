// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES

  draw_full(draw_rect, a_size, 255);
  draw_full(draw_circle, a_size, 255);
  // draw_full(draw_equi, a_size, 140);
  // draw_full(draw_triangle, a_size);
  // draw_triangle(a_size)
}

let x_pos = 0;
let y_pos = 0;
let a_size = 50;
let draw_count = 0;
let a_angle = 30;

function draw_full(draw_func, a_size, a_alpha) {
  // y_pos = height/2-a_size;
  // draw_count = int(random(10))
  for (y_pos = 0; y_pos <= height; y_pos += a_size) {
    draw_count = int(random(100))
    for (x_pos = 0; x_pos <= width; x_pos += a_size) {
      draw_count += 1;
      draw_func(a_size, a_alpha);
    }
  }
}

const a_angles = [30, 45, 60, 90];

function draw_equi(a_size, a_alpha) {
  // a_angle = a_angles[int(random(a_angles.length))]
  a_angle = a_angles[draw_count % a_angles.length]
  
  fill(random_color(a_alpha));
  
  push();

  translate(x_pos, y_pos)
  rotate(a_angle);
  
  // const half = int(a_size / 2);
  const side = int(a_size / 2);
  const x1 = side * cos(0), y1 = side * sin(0);
  const x2 = side * cos(120), y2 = side * sin(120);
  const x3 = side * cos(240), y3 = side * sin(240);
  triangle(x1, y1, x2, y2, x3, y3)
  
  pop();
}

function draw_rect(a_size, a_alpha) {
  fill(random_color(a_alpha));
  rect(x_pos, y_pos, a_size, a_size);
}

function draw_circle(a_size, a_alpha) {
  fill(random_color(a_alpha));
  circle(x_pos, y_pos, a_size);
}

function draw_triangle(a_size, a_alpha) {
  push();
  draw_count = (draw_count + 45) % 360
  // draw_count = 0
  const half = a_size/2;
  // translate(x_pos+half, y_pos+half)
  translate(x_pos, y_pos)
  // translate(width/2, y_pos)
  rotate(  draw_count)
  fill(random_color(a_alpha));
  // triangle(x1, y1, x2, y2, x3, y3)
  const x1 = -half, y1 = half;
  const x2 = 0, y2 = -half;
  const x3 = half, y3 = half;
  triangle(x1, y1, x2, y2, x3, y3)
  pop();
}

let a_palette;
function random_color(a_alpha) {
  if (! a_palette) {
    // a_palette = [ [0,0,0], [255,255,255]];
    a_palette = [ [150,0,0], [0,150,0], [150,150,0]];
  }
  // const a_color = a_palette[int(random(a_palette.length))]
  const a_color = a_palette[ draw_count % a_palette.length]
  
  return color(...a_color, a_alpha)
  // return color(random(255), random(255), random(255), a_alpha);
}

// https://editor.p5js.org/phil-in-a-can/sketches/rtN_vgRGJ