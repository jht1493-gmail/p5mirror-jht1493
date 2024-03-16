let x0 = 100;
let y0 = 400;
let w0 = 90;
let h0 = 125;
let speed0 = 1;

let x1 = 300;
let y1 = 400;
let w1 = 120;
let h1 = 150;
let speed1 = 0.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 200, 245);

  fill(250, 250, 0);

  // balloons!
  ellipse(x0, y0, w0, h0);
  ellipse(x1, y1, w1, h1);

  y0 = (y0 - speed0 + height) % height;
  y1 = (y1 - speed1 + height) % height;
}

// https://editor.p5js.org/jht1493/sketches/3iasCjLp-
// Exercise - ICM Week 2 - Convert to object literals wrap

// https://editor.p5js.org/enickles/sketches/urTyZ7ua2
// Exercise - ICM Week 2 - Convert to object literals
