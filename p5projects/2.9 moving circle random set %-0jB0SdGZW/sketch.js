let x = 320;
let y = 180;

let r;
let g;
let b;

let a_alpha = 20;

function setup() {
  createCanvas(640, 360).mousePressed(function() {
    random_color();
    x = mouseX;
    y = mouseY;
  });
  random_color();
  noStroke();
}

function random_color() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  // background(255);

  fill(r, g, b, a_alpha);
  ellipse(x, y, 50, 50);

  x = (x + random([-1, 1]) * 25) % width;
  y = (y + random([-1, 1]) * 25) % height;
  
  if (random() > 0.8) {
    random_color();
  }
}

// https://editor.p5js.org/jht1493/sketches/0jB0SdGZW
// 2.9 moving circle random set %

// https://editor.p5js.org/jht1493/sketches/QfgP2VgJt
// 2.9 moving circle random set

// https://editor.p5js.org/jht1493/sketches/IiHPr9gcV
// 2.9 moving circle

// https://editor.p5js.org/icm/sketches/Bymv7ca2
// moving circle