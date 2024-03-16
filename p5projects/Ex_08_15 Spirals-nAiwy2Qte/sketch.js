let angle = 0.0;
let offset = 60;
let scalar = 2;
let speed = 0.05;

function setup() {
  createCanvas(120, 120);
  fill(0);
}

function draw() {
  let x = offset + cos(angle) * scalar;
  let y = offset + sin(angle) * scalar;
  ellipse( x, y, 2, 2);
  angle += speed;
  scalar += speed;
}

// https://editor.p5js.org/jht1493/sketches/nAiwy2Qte
// Ex_08_15 Spirals

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_15.js
