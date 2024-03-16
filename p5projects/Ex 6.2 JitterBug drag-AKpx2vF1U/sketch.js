let a_bug = [];

function setup() {
  createCanvas(480, 120);
  createSpan('Drag mouse on canvas to create JitterBugs')
  background(204);
}

function draw() {
  for (let bug of a_bug) {
    bug.move();
    bug.display();
  }
}

function mouseDragged() {
  add_bug(mouseX, mouseY);
}

function add_bug(x, y) {
  let r = random(2,20);
  let c = random(['red', 'green', 'yellow'])
  let bug = new JitterBug(x, y, r, c);
  a_bug.push(bug);
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
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    this.y += random(-this.speed, this.speed);
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;
  }
  display() {
    stroke(this.color);
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

// https://editor.p5js.org/jht1493/sketches/AKpx2vF1U
// Ex 6.2 JitterBug drag

// https://editor.p5js.org/jht1493/sketches/OLgbWg-a0
// Ex 6.2 JitterBug clamped

// https://editor.p5js.org/jht1493/sketches/UfXdsZAHU
// Ex 6.1 JitterBug

// https://editor.p5js.org/jht1493/sketches/HSp7qS5n4
// Ex_11_09 Managing Many Objects-remix

// https://editor.p5js.org/jht1493/sketches/XDfmnW1JD
// Ex_11_09 Managing Many Objects

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_09.js
