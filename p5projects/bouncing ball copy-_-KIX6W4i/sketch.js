let x = 320;
let y = 180;
let xspeed = 10;
let yspeed = 2;
let xcount = 0;

let r = 25; // rad

function setup() {
  createCanvas(400, 360);
}

function draw() {
  background(0);
  ellipse(x, y, r * 2, r * 2);
  // y += yspeed;
  // if (x > width - r || x < r) {
  // if (y > height - r || y < r) {
  //   yspeed = -yspeed;
  // }
  xcount = xcount + 1;
  if (xcount > 10) {
    x += xspeed;
    if (x > width || x < 0) {
      xspeed = -xspeed;
    }
    xcount = 0;
  }
}
