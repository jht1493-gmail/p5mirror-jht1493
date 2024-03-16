let bugs = [];
let num = 33;

function setup() {
  createCanvas(480, 120);
  for (let i = 0; i < num; i++) {
    let x = random(width);
    let y = random(height);
    let r = i + 2;
    let c = random(['red', 'green', 'yellow'])
    bugs[i] = new JitterBug(x, y, r, c);
  }
  background(204);
}

function draw() {
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

class JitterBug {
  constructor(tempX, tempY, tempDiameter, tempC) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2.5;
    this.color = tempC;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    stroke(this.color);
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

// https://editor.p5js.org/jht1493/sketches/HSp7qS5n4
// Ex_11_09 Managing Many Objects-remix

// https://editor.p5js.org/jht1493/sketches/XDfmnW1JD
// Ex_11_09 Managing Many Objects

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_09.js
