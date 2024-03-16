//splice can be used as a 'function' after the dot of a class as well as a function on its own?

let screencircles = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++) {
    let xpos = random(5, 300);
    let ypos = random(5, 300);
    screencircles[i] = new myCircle(xpos, ypos, 50, 2, 1);
    console.log("screencircles", screencircles[i]);
  }
}

function draw() {
  background(220, 200, 100, 100);

  for (let i = 0; i < screencircles.length; i++) {
    screencircles[i].show();
    screencircles[i].bounce();
  }
}

function mousePressed() {
  for (i = 0; i < screencircles.length; i++) {
    if (screencircles[i].contains(mouseX, mouseY)) {
      screencircles.splice(i, 1);
    }
  }
}

class myCircle {
  constructor(tempx, tempy, tempr, tempxs, tempys, mousexpos, mouseypos) {
    this.x = tempx;
    this.y = tempy;
    this.r = tempr;
    this.xs = tempxs;
    this.ys = tempys;
    // this.mx = mousexpos;
    // this.my = mouseypos;
  }

  show() {
    fill(100, 150, 150, 100);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }

  bounce() {
    this.x = this.x + this.xs;
    this.y = this.y + this.ys;

    if (this.x >= width - this.r || this.x < this.r) {
      this.xs = -this.xs;
    }

    if (this.y >= height - this.r || this.y < this.r) {
      this.ys = -this.ys;
    }
  }

  contains(mx, my) {
    let distance = dist(this.x, this.y, mx, my);
    if (distance < this.r) {
      return true;
    } else {
      return false;
    }
  }
}
// https://editor.p5js.org/qiqirathwang/sketches/3AKSJYbGG
// ICM Week 6 Exercise 3 Teresa
