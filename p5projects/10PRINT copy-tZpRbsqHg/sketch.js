var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  // frameRate(1)
}

function draw() {
  if (random(1) > 0.5) {
    line(x, y, x+20, y+20);
  } 
  else {
    line(x, y+20, x+20, y);
  }
  x += 20;
  if (x > width) {
    x = 0;
    y += 20;
  }
  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
}

// From: http://10print.org/
// https://editor.p5js.org/icm/sketches/rkHKL962