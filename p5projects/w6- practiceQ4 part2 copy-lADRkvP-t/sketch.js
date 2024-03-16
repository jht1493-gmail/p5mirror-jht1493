// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1

let balls = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    balls[i] = new bouncingBalls(random(width), random(height));
  }
}

function draw() {
  background(0);

  for (let b of balls) {
    b.display();
    b.move();
    b.bounce();
    let overlapping = false;
    // b.highlighted = false;
    for (let other of balls) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
      if (overlapping && !b.highlighted) {
        b.highlighted = true;
        b.changeColor(255);
      } else if (overlapping && b.highlighted) {
        b.changeColor(0);
        b.highlighted = false;
      }
    }
  }
}

function mousePressed() {
  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].contains(mouseX, mouseY)) {
      balls.splice(i, 1);
    }
  }
}

class bouncingBalls {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.shade = 0;
    this.xspeed = random(1, 3);
    this.yspeed = -2;
    this.highlighted = false
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  display() {
    stroke(255);
    strokeWeight(4);
    fill(0, this.shade, 0, 150);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }

  changeColor(highlight) {
    this.shade = highlight;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }
}
