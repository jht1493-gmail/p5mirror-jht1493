// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

function setup() {
  // createCanvas(w, h, [renderer])
  createCanvas(600, 400);

  // color(red 0..255, green 0..255, blue 0..255, [alpha 0..255])
  const color_blue = color(0, 125, 255, 150);
  const color_red = color(255, 0, 0, 150);
  const color_green = color(0, 255, 0, 150);

  set_color(color_blue);
  draw_p(0, 0);

  set_color(color_red);
  draw_5(200, 0);
}

function set_color(a_color) {
  stroke(a_color);
  fill(a_color);
}

function draw_p(x_start, y_start) {
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])
  rect(x_start + 10, y_start + 100, 40, 300);
  rect(x_start + 50, y_start + 100, 100, 40);
  rect(x_start + 50, y_start + 230, 100, 40);
  rect(x_start + 150, y_start + 140, 40, 90);
}

function draw_5(x_start, y_start) {
  console.log('x_start', x_start, 'y_start', y_start);
  rect(x_start + 10, y_start + 0, 130, 40);
  rect(x_start + 10, y_start + 40, 40, 60);
  rect(x_start + 10, y_start + 100, 110, 40);
  rect(x_start + 120, y_start + 140, 40, 90);
  rect(x_start + 10, y_start + 230, 110, 40);
}

function draw() {}