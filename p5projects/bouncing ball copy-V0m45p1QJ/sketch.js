let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}