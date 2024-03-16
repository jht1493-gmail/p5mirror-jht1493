// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  // frameRate(10);
  background(255);

  y_pos = a_width;
  grid_while_x();

  y_pos += a_width * 2;
  grid_for_x();
}

let x_pos;
let y_pos;
let a_width = 20;

function grid_while_x() {
  x_pos = 0;
  while (x_pos < width) {
    draw_rect();
    x_pos += a_width;
  }
}

function grid_for_x() {
  for (x_pos = 0; x_pos < width; x_pos += a_width) {
    draw_rect();
  }
}

function draw_rect() {
  fill(random(0, 255));
  rect(x_pos, y_pos, a_width, a_width);
}