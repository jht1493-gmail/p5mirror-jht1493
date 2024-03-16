let a_video;
let a_scale = 2;
let a_side = 20;
let a_x = 0;
let a_y;
let scan_top;
let a_angle = 0;
let angle_step = 1;
let side_mult = 3;

function setup() {
  let a_canvas = createCanvas(320 * a_scale, 240 * a_scale);
  a_canvas.mousePressed(canvas_pressed); // attach listener for

  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.position(0, 0);
  a_video.style('z-index', '-1')
  // a_video.hide();
  clear();
  noStroke();
  a_x = width / 2;
  a_y = height / 2;
  scan_top = height / 2;
}

function draw() {
  // show_fps();

  let col = a_video.get(a_x, a_y);
  fill(col);

  h = height / 4;

  rect(a_x, a_y, 1, h);

  a_x += 1;
  if (a_x >= width) {
    a_x = 0;
    a_y = random(0, height);
  }
}

function random_loc() {
  a_x = width / 2;
  a_y = random(0, height);
  select_col();
}

function canvas_pressed() {
  a_x = mouseX;
  a_y = mouseY;
}

function select_col() {
  scan_top = a_y;

  let col = a_video.get(a_x, a_y);

  show_num('x', a_x);
  show_num('y', a_x);

  show_num('r', col[0]);
  show_num('g', col[1]);
  show_num('b', col[2]);

  // Draw bottom bar with given color col
  fill(col);
  rect(0, a_y - a_side / 2, width, a_side);
}