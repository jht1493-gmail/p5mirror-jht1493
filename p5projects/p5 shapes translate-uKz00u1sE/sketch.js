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

  fill(color_red);
  translate(0, 0);
  draw_p();
  translate(240, 0);
  draw_5();

  fill(color_green);
  translate(-240 + 20, 0);
  draw_p();
  translate(240, 0);
  draw_5();

  fill(color_blue);
  translate(-240 + 20, 0);
  draw_p();
  translate(240, 0);
  draw_5();
}

function draw_p() {
  // rect(x, y, width, height)
  rect(10, 100, 40, 300);
  rect(50, 100, 100, 40);
  rect(50, 230, 100, 40);
  rect(150, 140, 40, 90);
}

function draw_5() {
  rect(10, 0, 130, 40);
  rect(10, 40, 40, 60);
  rect(10, 100, 110, 40);
  rect(120, 140, 40, 90);
  rect(10, 230, 110, 40);
}

function draw() {}