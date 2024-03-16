Balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(20, 300);
    let y = random(20, 300);
    let xs = random(-2, 3);
    let ys = random(-2, 3);
    Balls[i] = new Ball(x, y, xs, ys, 40);
    // Balls.push();
  }
}

function draw() {
  background(255, 100);

  //reference from Daniel Shiffman
  //https://editor.p5js.org/codingtrain/sketches/7SjPmXN2
  for (let b of Balls) {
    b.display();
    b.bounce();

    let overlapping = false;
    for (let other of Balls) {
      if (b !== other && b.contains(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.toggleColor();
    }
    // let cirWasOverlapping = false;
    // cirWasOverlapping = overlapping;
    // if (overlapping) {
    //   if (!cirWasOverlapping) {
    //     b.changeColor(255) = !b.changeColor(255);
    //   }
    // }
  }
}

class Ball {
  constructor(x, y, xs, ys, d) {
    this.d = d;
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
    this.brightness = 0;
  }

  contains(other) {
    let dis = dist(this.x, this.y, other.x, other.y);
    if (dis < this.d / 2 + other.d / 2) {
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
    fill(this.brightness);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  toggleColor() {
    if (this.brightness == 255) {
      this.brightness = 0;
    } else {
      this.brightness = 255;
    }
  }
}
