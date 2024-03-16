let x = 320;
let y = 180;
let xspeed = 1;
let yspeed = 1;

let r = 50;

function setup() {
  createCanvas(640, 360);
  // ellipseMode(RADIUS);
}

function draw() {
  background(0);
  stroke(255, 150, 230);
  strokeWeight(5);

  const x_check = mouseX > x && mouseX < x + r * 2;
  const y_check = mouseY > y && mouseY < y + r * 2;
  if (x_check && y_check) {
    fill(255, 230, 120)
  } else {
    fill(255)
  }
  ellipse(x+r, y+r, r * 2, r * 2);
  
//   rect(x,y,r*2,r*2);
  
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

}