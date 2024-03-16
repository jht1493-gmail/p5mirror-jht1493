// W6.2-1 Bouncing ball class
// https://editor.p5js.org/benjamin.bergery/sketches/OlywNtrZ5

let bsp; // ball speed
let xstart = 0; // starting position
let ystart = 0;
let bballs = [];
let indy = 0;

function setup() {
  createCanvas(400, 400);
  // fill array with new instances of Bball
  for (indy = 0; indy < 20; indy++) {
    xstart = round(random(0,400));
    ystart = round(random(0,400));
    
    //  slinky option
    // xstart = xstart + width/20;
    // ystart = ystart + height/20;
    bballs[indy] = new Bball(xstart, ystart, 30, 5);
  }
}

function draw() {
  background(220);
  // move and display each instance

  // style 1: for loop
  // for (indy = 0; indy < bballs.length; indy++) {
  //   bballs[indy].move();
  //   bballs[indy].show();
  // }
  
  // for ... of
  for (let ball of bballs) {
    ball.run();
    // ball.move();
    // ball.show();
  }
}

class Bball {
  constructor(x, y, r, bsp) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xsp = bsp; // xspeed
    this.ysp = bsp; // yspeed
  }

  run() {
    this.move();
    this.show();
  }
  
  move() {
    // bounce x   
    if (this.x > width || this.x < 0) {
      this.xsp = -this.xsp;
    }
    // bounce y
    // console.log("this.y", this.y);
    if (this.y >= height - this.r * 2 || this.y <= 0 - (this.r * 2)) {
      this.ysp = -this.ysp;
      // console.log("this.y", this.y);
    }
    // move ball
    this.x = this.x + this.xsp;
    this.y = this.y + this.ysp;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}

/*******************************/
// https://editor.p5js.org/benjamin.bergery/sketches/WUlFUTdMe
//   cornerBounce() {
//   }

// cornerBounce(brush) {
//   // inverts x and y speed at corners
//   if (brush.x >= width - brush.radius || brush.x <= brush.radius) {
//     brush.xspeed = -brush.xspeed;
//   }
//   if (brush.y >= height - brush.radius || brush.y - brush.radius <= 0) {
//     brush.yspeed = -brush.yspeed;
//   }

// https://editor.p5js.org/codingtrain/sketches/1y_xfueO
// for (let i = 0; i < bubbles.length; i++) {
//   bubbles[i].move();
//   bubbles[i].show();
// }
