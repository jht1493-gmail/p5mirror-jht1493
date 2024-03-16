// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

function setup() {
  // createCanvas(width, height)
  createCanvas(600, 500);

  const a_alpha = 255*0.4;
  // color(red 0..255, green 0..255, blue 0..255, alpha 0..255)
  const color_blue = color(0, 125, 255, a_alpha);
  const color_red = color(255, 0, 0, a_alpha);
  const color_green = color(0, 255, 0, a_alpha);

  fill(color_red);
  draw_p(0, 0);
  draw_5(240, 0);

  fill(color_green);
  draw_p(20, 0);
  draw_5(260, 0);

  fill(color_blue);
  draw_p(40, 0);
  draw_5(280, 0);
}

function draw_p(x_pos, y_pos) {
  print('draw_p x_pos', x_pos, 'y_pos', y_pos);
  // rect(x, y, width, height)
  rect(x_pos + 10, y_pos + 100, 40, 300);
  rect(x_pos + 50, y_pos + 100, 100, 40);
  rect(x_pos + 50, y_pos + 230, 100, 40);
  rect(x_pos + 150, y_pos + 140, 40, 90);
}

function draw_5(x_pos, y_pos) {
  print('draw_5 x_pos', x_pos, 'y_pos', y_pos);
  rect(x_pos + 10, y_pos + 0, 130, 40);
  rect(x_pos + 10, y_pos + 40, 40, 60);
  rect(x_pos + 10, y_pos + 100, 110, 40);
  rect(x_pos + 120, y_pos + 140, 40, 90);
  rect(x_pos + 10, y_pos + 230, 110, 40);
}

function draw() {}