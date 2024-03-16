//work in progress

let bbs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    let x = random(25, windowWidth - 25);
    let y = random(25, windowHeight - 25);
    let d = random(5, 50);
    let b = new bb(x, y, d);
    bbs.push(b);
  }
}

function draw() {
  background(125);

  for (let b of bbs) {
    b.move();
    b.bounce();
    b.show();
    let disappear = false;
    for (let others of bbs) {
      if (b !== others && b.intersects(others)) {
        disappear = true;
      }
    }
    for (let i = 0; i < bbs.length - 1; i++) {
      if (disappear) {
        bbs.splice(i, 1);
      }
    }
  }
}

class bb {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.brightness = 0;
  }

  intersects(others) {
    let d = dist(this.x, this.y, others.x, others.y);
    return d <= this.d / 2 + others.d / 2;
  }

  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  bounce() {
    if (this.x >= width - this.d / 2 || this.x <= this.d / 2) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y >= height - this.d / 2 || this.y <= this.d / 2) {
      this.ySpeed = this.ySpeed * -1;
    }
  }

  show() {
    noStroke();
    fill(this.brightness);
    circle(this.x, this.y, this.d);
  }
}
