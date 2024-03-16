// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

function setup() {
  // createCanvas(width, height)
  createCanvas(600, 500);

  // color(red 0..255, green 0..255, blue 0..255, alpha 0..255)
  const a_alpha = 100;
  const color_blue = color(0, 125, 255, a_alpha);
  const color_red = color(255, 0, 0, a_alpha);
  const color_green = color(0, 255, 0, a_alpha);
  const f_scale = .5;
  
  fill(color_red);
  draw_p(0, 0, f_scale);
  draw_5(240*f_scale, 0, f_scale);

  fill(color_green);
  draw_p(20*f_scale, 0, f_scale);
  draw_5(260*f_scale, 0, f_scale);

  fill(color_blue);
  draw_p(40*f_scale, 0, f_scale);
  draw_5(280*f_scale, 0, f_scale);
}

function draw_p(x_pos, y_pos, f_scale) {
  print('draw_p x_pos', x_pos, 'y_pos', y_pos);
  // rect(x, y, width, height)
  rect(x_pos + 10*f_scale, y_pos + 100*f_scale, 40*f_scale, 300*f_scale);
  rect(x_pos + 50*f_scale, y_pos + 100*f_scale, 100*f_scale, 40*f_scale);
  rect(x_pos + 50*f_scale, y_pos + 230*f_scale, 100*f_scale, 40*f_scale);
  rect(x_pos + 150*f_scale, y_pos + 140*f_scale, 40*f_scale, 90*f_scale);
}

function draw_5(x_pos, y_pos, f_scale) {
  print('draw_5 x_pos', x_pos, 'y_pos', y_pos);
  rect(x_pos + 10*f_scale, y_pos + 0*f_scale, 130*f_scale, 40*f_scale);
  rect(x_pos + 10*f_scale, y_pos + 40*f_scale, 40*f_scale, 60*f_scale);
  rect(x_pos + 10*f_scale, y_pos + 100*f_scale, 110*f_scale, 40*f_scale);
  rect(x_pos + 120*f_scale, y_pos + 140*f_scale, 40*f_scale, 90*f_scale);
  rect(x_pos + 10*f_scale, y_pos + 230*f_scale, 110*f_scale, 40*f_scale);
}

function draw() {}