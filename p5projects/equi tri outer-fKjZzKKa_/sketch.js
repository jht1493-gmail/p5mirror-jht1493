function setup() {
  createCanvas(400, 400);
  background(230);
  
  angleMode(DEGREES);

  x_pos = width / 2;
  y_pos = height / 2;

  draw_equi_outer(a_size, 90)

  draw_equi_inner(a_size, 30);

  // draw_rand(a_size);
  // draw_tri(a_size, 45)
}

let x_pos = 0;
let y_pos = 0;
let a_size = 100;
let a_size2 = a_size * 2;
let a_angle = 30;
let a_alpha = 100;

function draw_equi_outer(a_size, a_angle) {
  fill(random_color(a_alpha));
  push();

  translate(x_pos, y_pos)
  rotate(a_angle);

  fill(random_color(a_alpha));
  circle(0, 0, a_size*2);
  
  const side = a_size
  const x1 = side * cos(0), y1 = side * sin(0);
  const x2 = side * cos(120), y2 = side * sin(120);
  const x3 = side * cos(240), y3 = side * sin(240);
  triangle(x1, y1, x2, y2, x3, y3)

  pop();
}


function draw_equi_inner(a_size, a_angle) {
  fill(random_color(a_alpha));
  push();

  translate(x_pos, y_pos)
  rotate(a_angle);

  const side = int(a_size / 2);
  const x1 = side * cos(0), y1 = side * sin(0);
  const x2 = side * cos(120), y2 = side * sin(120);
  const x3 = side * cos(240), y3 = side * sin(240);
  triangle(x1, y1, x2, y2, x3, y3)

  fill(random_color(80));
  circle(0, 0, a_size);

  pop();
}

function draw_tri(a_size, a_angle) {
  fill(random_color(a_alpha));
  push();

  translate(x_pos, y_pos)
  rotate(a_angle);

  const half = int(a_size / 2);
  const x1 = -half,
    y1 = half;
  const x2 = 0,
    y2 = -half;
  const x3 = half,
    y3 = half;
  triangle(x1, y1, x2, y2, x3, y3)

  pop();
}

function draw_rand(a_size, a_angle) {
  fill(random_color(a_alpha));
  push();
  a_angle = (a_angle + 0) % 360
  // cell_count = 0
  const half = int(a_size / 2);
  translate(x_pos, y_pos)
  rotate(a_angle);

  // triangle(x1, y1, x2, y2, x3, y3)
  const x1 = -half,
    y1 = half;
  const x2 = 0,
    y2 = -half;
  const x3 = half,
    y3 = half;
  // triangle(x1, y1, x2, y2, x3, y3)

  fill(random_color(a_alpha));
  circle(0, 0, a_size);

  fill(random_color(a_alpha));
  rect(x1, y2, a_size, a_size);

  pop();
}

function random_color(a_alpha) {
  return color(random(255), random(255), random(255), a_alpha);
}