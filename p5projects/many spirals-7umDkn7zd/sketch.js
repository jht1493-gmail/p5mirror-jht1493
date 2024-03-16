let angle = 0.0;
let offsetX;
let offsetY;
let scalar = 2;
let speed = 0.05;
let x, y;
let fillc = 0;

function setup() {
  createCanvas(400, 400);
  fill(fillc);
  noStroke();
  offsetX = width / 2;
  offsetY = height / 2;
}

function draw() {
  x = offsetX + cos(angle) * scalar;
  y = offsetY + sin(angle) * scalar;
  ellipse(x, y, 2, 2);
  angle += speed;
  scalar += speed;
  let doFlip = 0;
  if (x > width) {
    x = width;
    nextCycle();
  }
  if (x < 0) {
    x = 0;
    nextCycle();
  }
}

function nextCycle() {
  speed = -speed;
  angle = 0.0;
  scalar = 2;
  // if (random(10) < 1) {
  //   fillc = fillc ? 0 : 255;
  // }
  fill(fillc);
  offsetX = random(0,width);
  offsetY = random(0,height);
}

function mousePressed() {
  nextCycle();
}

// https://editor.p5js.org/jht1493/sketches/076mMnP-F
// Ex_08_15 Spirals copy

// https://editor.p5js.org/jht1493/sketches/nAiwy2Qte
// Ex_08_15 Spirals

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_15.js
