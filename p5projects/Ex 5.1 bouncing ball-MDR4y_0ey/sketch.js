let x = 160;
let y = 90;
let xspeed = 5;
let yspeed = 2;
let r = 20;

function setup() {
  createCanvas(320, 180);
}

function draw() {
  background(0);
  ellipse(x, y, r * 2, r * 2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}

// https://editor.p5js.org/jht1493/sketches/MDR4y_0ey
// Ex 5.1 bouncing ball

// https://editor.p5js.org/icm/sketches/BJKWv5Tn
// bouncing ball
