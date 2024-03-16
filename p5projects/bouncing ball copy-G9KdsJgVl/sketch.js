let x = 30;
let y = 60;
let xspeed = 5;
let yspeed = 0;

let r = 25;

function setup() {
  createCanvas(400, 120);
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