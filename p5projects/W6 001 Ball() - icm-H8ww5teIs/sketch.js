// https://editor.p5js.org/jht1493/sketches/H8ww5teIs
// W6 001: Ball() - icm

// Create an array to store ball objects
let balls = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Iterate through all the ball objects and run them
  for (let aball of balls) {
    aball.run();
  }
}

// Create new balls with a mousepress
function mousePressed() {
  let x = mouseX;
  let y = mouseY;
  let xspeed = random(-5, 5);
  let yspeed = random(-5, 5);
  let aball = new Ball(x, y, xspeed, yspeed);
  balls.push(aball);
}

// Ball class definition
class Ball {
  // Construct a new ball object with these parameters
  constructor(x, y, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  run() {
    this.move();
    this.bounce();
    this.display();
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xspeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, 50, 50);
  }
}

// https://editor.p5js.org/icm4.0/sketches/1YoFHsR7U
// W6 001: Ball() - icm
