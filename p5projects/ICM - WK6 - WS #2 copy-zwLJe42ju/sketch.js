let bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(20, 400);
    let y = random(20, 400);
    let xspeed = random(5);
    let yspeed = random(2);
    bubbles[i] = new bubble(x, y, xspeed, yspeed, 50);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

class bubble {
  constructor(x, y, xspeed, yspeed, size) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.size = size;
  }

  display() {
    stroke(255);
    fill(255, 0, 150, 50);
    circle(this.x, this.y, this.size);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width - this.size/2 || this.x < this.size/2) {
      this.xspeed = -this.xspeed;
    }
    if (this.y > height - this.size/2 || this.y < this.size/2) {
      this.yspeed = -this.yspeed;
    }
    // console.log(this.xspeed, this.yspeed);
  }
}
