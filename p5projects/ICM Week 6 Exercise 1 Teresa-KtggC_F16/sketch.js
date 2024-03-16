let bouncingBall;

function setup() {
  createCanvas(400, 400);
  bouncingBall = new myCircle(200,300,50,0.5,3)
}

function draw() {
  background(220);
  bouncingBall.show()
  bouncingBall.bounce()
}

class myCircle {
  constructor(tempx, tempy, tempr, tempxs, tempys) {
    this.x = tempx;
    this.y = tempy;
    this.r = tempr;
    this.xs = tempxs;
    this.ys = tempys;
  }
  
  show(){
    circle (this.x, this.y, this.r)
  }
  
  bounce(){
    this.x = this.x + this.xs;
    this.y = this.y + this.ys;
    
    if (this.x >= width-this.r || this.x < this.r){
      this.xs = -this.xs
    }
    
    if (this.y >= height-this.r || this.y < this.r){
      this.ys = -this.ys
    }
  }
  
}

// https://editor.p5js.org/qiqirathwang/sketches/a3dU9MkrR
// ICM Week 6 Exercise 1 Teresa