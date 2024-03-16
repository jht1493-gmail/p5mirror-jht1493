let x = 0;
let y = 0;
let px = 0;
let py = 0;
let easing = 0.05;

function setup() {
  createCanvas(480, 120);
  stroke(0, 102);
}

function draw() {
  let targetX = mouseX;
  x = x + (targetX - x) * easing;
  let targetY = mouseY;
  y = y + (targetY - y) * easing;
  let weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py);
  py = y;
  px = x;
}

// https://editor.p5js.org/jht1493/sketches/TZ5FwWXoW
// Ex_05_09 Smooth Lines with Easing

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_09.js