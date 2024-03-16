let squares = [];
let spots = [];

function setup() {
  createCanvas(600, 600);
  frameRate(1);
}

function mousePressed() {
  if (random(1) < 0.5) {
    squares.push(new Square(mouseX, mouseY, 50, 50, 5));
  } else {
    spots.push(new Spot(mouseX, mouseY, 50, 50));
  }
}

function draw() {
  background(0);
  print('draw frameCount', frameCount)
  for (let square of squares) {
    // push();
    square.show();
    square.move();
    // pop();
    for (let i = 0; i < squares.length; i++) {
      squares[i].move();
      squares[i].show();
    }
  }
  for (let spot of spots) {
    // push();
    spot.show();
    spot.move();
    // pop();

    for (let i = 0; i < spots.length; i++) {
      spots[i].move();
      spots[i].show();
    }
  }
}

class Square {
  constructor(tempX, tempY, tempH, tempW) {
    this.x = tempX;
    this.y = tempY;
    this.h = tempH;
    this.w = tempW;
    this.speedx = random(-3, 3);
    this.speedy = random(-7, 7);
  }
  move() {
    if ((this.x > width) || (this.x < 0)) {
      this.speedx = this.speedx * -1;
    }
    this.x = this.x + this.speedx;

    if ((this.y > height) || (this.y < 0)) {
      this.speedy = this.speedy * -1;
    }
    this.y = this.y + this.speedy;
  }
  show() {
    print('Square show x', this.x)
    push();
    let c = map(this.x, 0, width, 0, 255);
    let c2 = map(this.y, 0, height, 0, 255);
    rectMode(CENTER);
    stroke(c, 0, c2);
    strokeWeight(1);
    noFill();
    rect(this.x, this.y, this.w, this.h);
    pop();
    // p;rint(this.x);
  }
}

class Spot {
  constructor(spotX, spotY, spotH, spotW) {
    this.x = spotX;
    this.y = spotY;
    this.h = spotH;
    this.w = spotW;
    this.speedx = random(1, 3);
    this.speedy = random(1, 7);
  }
  move() {
    push();
    if ((this.x > width) || (this.x < 0)) {
      this.speedx = this.speedx * -1;
    }
    this.x = this.x + this.speedx;

    if ((this.y > height) || (this.y < 0)) {
      this.speedy = this.speedy * -1;
    }
    this.y = this.y + this.speedy;

    pop();
  }
  show() {
    // push();
    print('Square show x', this.x)
    let c = map(this.x, 0, width, 0, 255);
    let c2 = map(this.y, 0, height, 0, 255);
    stroke(c, c2, c);
    ellipseMode(CENTER);
    // stroke(0,255,0);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, this.h, this.w);
    // pop();
    // print(this.x);
  }
}