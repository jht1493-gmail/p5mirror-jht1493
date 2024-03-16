function setup() {
  createCanvas(400, 400);
  background(230);
  
  angleMode(DEGREES);

  x_pos = width / 2;
  y_pos = height / 2;
  a_size = width;
  
  // strokeWeight(0);
  let a_flag = 0;
  let a_first = true;
  while (a_size > 10) {
    a_angle = a_flag ? 30 : 90;
    draw_circle(a_size);
    if (! a_first) draw_equi(a_size, a_angle);
    a_size = a_size / 2;
    a_flag = ! a_flag;
    a_first = false;
  }
}

let x_pos = 0;
let y_pos = 0;
let a_size = 50;
let a_angle = 30;
let a_alpha = 100;

function draw_equi(a_size, a_angle) {
  fill(random_color(a_alpha));
  push();
  translate(x_pos, y_pos)
  rotate(a_angle);

  const side = a_size
  const x1 = side * cos(0), y1 = side * sin(0);
  const x2 = side * cos(120), y2 = side * sin(120);
  const x3 = side * cos(240), y3 = side * sin(240);
  triangle(x1, y1, x2, y2, x3, y3)

  pop();
}

function draw_circle(a_size) {  
  fill(random_color(a_alpha));
  push();
  translate(x_pos, y_pos)

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

function random_color(a_alpha) {
  return color(random(255), random(255), random(255), a_alpha);
}