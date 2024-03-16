// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

const color_blue = color(0,125,255,0.6);
const color_red = color(255,0,0,0.6);
const color_green = color(0,255,0,0.6);

function setup() {
  createCanvas(800, 800);
  set_color(color_blue);
  draw_p(0, 0);
  set_color(color_red);
  draw_5(0, 0);
  set_color(color_green);
  draw_5(0, 0);
}

function set_color(a_color) {
  stroke(a_color);
  fill(a_color);
}

function draw_p(x_start, y_start) {
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])
  // Draw a rectangle at location (30, 20) 
  // with a width and height of 55.
  // rect(30, 20, 55, 55);
  console.log('x_start', x_start, 'y_start', y_start);
  rect(x_start + 10, y_start + 100, 40, 300);
  rect(x_start + 50, y_start + 100, 100, 40);
  rect(x_start + 50, y_start + 230, 100, 40);
  rect(x_start + 150, y_start + 140, 40, 90);
}

function draw_5(x_start, y_start) {
  rect(x_start + 200, y_start + 0, 130, 40);
  rect(x_start + 200, y_start + 40, 40, 60);
  rect(x_start + 200, y_start + 100, 110, 40);
  rect(x_start + 310, y_start + 140, 40, 90);
  rect(x_start + 200, y_start + 230, 110, 40);
}

function draw() {}