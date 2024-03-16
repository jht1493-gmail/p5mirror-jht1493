Balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(20, 300);
    let y = random(20, 300);
    let xs = 1
    let ys = 0
    // let xs = random(-2, 3);
    // let ys = random(-2, 3);
    Balls[i] = new Ball(x, y, xs, ys, 40);
    Balls.push();
  }
}

function mousePressed() {
  for (let i = Balls.length - 1; i >= 0; i--) {
    if (Balls[i].contains(mouseX, mouseY)) {
      Balls.splice(i, 1);
    }
  }
}


function draw() {
  background(255, 100);
  for (let i = 0; i < Balls.length; i++) {
    Balls[i].bounce();
    Balls[i].display();
  }
}

class Ball {
  constructor(x, y, xs, ys, d) {
    this.d = d;
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
  }
  
    contains(px, py) {
    let dis = dist(px, py, this.x, this.y);
    if (dis < this.d/2) {
      return true;
    } else {
      return false;
    }
  }

  bounce() {
    this.x += this.xs;
    this.y += this.ys;
    if (this.x > width - this.d / 2 || this.x < this.d / 2) {
      this.xs = this.xs * -1;
    }
    if (this.y > height - this.d / 2 || this.y < this.d / 2) {
      this.ys = this.ys * -1;
    }
  }

  display() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
}
}
