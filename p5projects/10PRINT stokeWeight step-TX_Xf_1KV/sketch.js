// From: http://10print.org/

var x = 0;
var y = 0;
var a_weight = 1;
var a_step = 1;
let weight_cycle = 7;

function setup() {
  createCanvas(400, 400);
  background(255);
  // frameRate(5)
}

function draw() {
  strokeWeight(a_weight);

  if (random(1) > 0.5) {
    line(x, y, x + 20, y + 20);
  } else {
    line(x, y + 20, x + 20, y);
  }
  x += 20;
  if (x > width) {
    x = 0;
    y += 20;
  }
  if (y > height) {
    // background(255);
    x = 0;
    y = 0;
  }
  a_weight += a_step;
  if (a_weight > weight_cycle || a_weight < 1) {
    a_step *= -1;
  }
}

