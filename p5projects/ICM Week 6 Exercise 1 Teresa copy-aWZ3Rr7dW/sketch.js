let bouncingBall;

function setup() {
  createCanvas(400, 400);
  bouncingBall = new myCircle(
    { x: 200, y: 300, r: 50, xs: 0.5, ys: 3 }
  );
}

function draw() {
  background(220);
  bouncingBall.show();
  bouncingBall.bounce();
}

class myCircle {
  // constructor(tempx, tempy, tempr, tempxs, tempys) {
  constructor(props) {
    Object.assign(this,props)
    // this.x = tempx;
    // this.y = tempy;
    // this.r = tempr;
    // this.xs = tempxs;
    // this.ys = tempys;
  }

  show() {
    circle(this.x, this.y, this.r);
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
}

// https://editor.p5js.org/jht1493/sketches/aWZ3Rr7dW
// ICM Week 6 Exercise 1 Teresa copy


// https://editor.p5js.org/qiqirathwang/sketches/a3dU9MkrR
// ICM Week 6 Exercise 1 Teresa
