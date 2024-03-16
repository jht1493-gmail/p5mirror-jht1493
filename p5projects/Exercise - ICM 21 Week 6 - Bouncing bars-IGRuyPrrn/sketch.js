let bars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  bars.push(new Bar(mouseY));
}

function draw() {
  background(0);

  for (let i = 0; i < bars.length; i++) {
    let currentBar = bars[i];
    currentBar.move();
    currentBar.display();
    currentBar.bounce();
  }
}

// Object template
class Bar {
  constructor(mY) {
    this.x = 0;
    this.y = mY;
    this.w = width;
    this.h = 5;
    this.col = 255;
    this.speed = random(1, 2);
  }

  display() {
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.speed;
  }

  bounce() {
    if (this.y > height || this.y < 0) {
      this.speed *= -1;
    }
  }
}

// https://editor.p5js.org/enickles/sketches/jwnhcdJ4m
// Exercise - ICM 21 Week 6 - Bouncing bars
