// W6.2-1v6 Bouncing ball class with width error QUESTION1
// https://editor.p5js.org/benjamin.bergery/sketches/gmx5rZ32M

// QUESTION why are we getting WIDTH scope error? probably line 61

let bballs = [];
let xwidth;

function setup() {
  createCanvas(400, 400);
  xwidth = width;
  // fill array with new instances of Bball using push

  for (let indy = 0; indy < 22; indy++) {
    let bradius = random(10, 70);
    let bspeed = random(0.5, 2);
    let xstart = random(bradius, xwidth - bradius);
    let ystart = random(bradius, height - bradius);
    ball = new Bball(xstart, ystart, bradius, bspeed);
    bballs.push(ball);
  }
}

function draw() {
  background(220);

  for (ball of bballs) {
    ball.bounceRandom();
    // instance.classFunction()
  }
}

/*** CLASS ********************/

class Bball {
  constructor(x, y, r, bsp) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = bsp; // xspeed
    this.ysp = bsp; // yspeed
  }

  // meta function inside class
  bounceRandom() {
    this.move();
    this.show();
  }

  // display ball
  show() {
    stroke(225, 100, 100);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x = this.x + this.xsp;
    this.y = this.y + this.ysp;
    //// bounce x
    if (this.x >= xwidth - this.r || this.x <= 0 + this.r) {
      this.xsp = -this.xsp;
    }
    ////// bounce y
    if (this.y >= height - this.r || this.y <= 0 + this.r) {
      this.ysp = -this.ysp;
    }
  }
}

/*******************************/
// https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe

/*** NOTES ********************/

// more verbose 
  // for (let indie = 0; indie < bballs.length; indie++) {
  //   bballs[indie].move();
  //   bballs[indie].show();
  // }

// less verbose
  // for (let circle of bballs) {
  //   circle.bounceRandom();

// QUESTION why are we getting WIDTH scope error? probably line 61
