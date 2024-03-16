let ball1;
let ball2;

function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(200, 200, 25);
  ball2 = new Ball(300, 200, 25);
}

function draw() {
  background(40);
  ball1.move();
  ball1.show();
  ball2.move();
  ball2.show();
}

class Ball {
  constructor (x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xspeed = 2.8;
  this.yspeed = 2.2;
  this.xdirection = 1;
  this.ydirection = 1;
}
  move() {
    this.x = this.x + this.xspeed * this.xdirection;
    this.y = this.y + this.yspeed * this.ydirection;
    
    if (this.x > width - this.r || this.x < this.r) {
    this.xdirection *= -1;
  }
  if (this.y > height - this.r || this.y < this.r) {
    this.ydirection *= -1;
  }
}
  show() {
    stroke (255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r, this.r);
  }
}
//https://editor.p5js.org/lh1966/sketches/i5RkOcFV5
// Week #5 Exercise #1 La’Kay
