let sliderR;
let sliderG;
let sliderB;

let cursor = [];
let circles = [];

// Fix circle error
// Examine clicked method
// in popped for-loop what changes?

function setup() {
  createCanvas(800, 800);
  //smooth();
  sliderR = createSlider(0, 255, 220, 10);
  sliderR.position(0, 800);
  sliderR.style("width", "80px");

  sliderG = createSlider(0, 255, 200, 10);
  sliderG.position(100, 800);
  sliderG.style("width", "80px");

  sliderB = createSlider(0, 255, 240, 10);
  sliderB.position(200, 800);
  sliderB.style("width", "80px");

  for (var i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 200);
    circles.push(new Circle(x, y, r));
  }
}

function mouseDragged() {
  cursor.push(new Cursor(mouseX, mouseY));
}

function mousePressed() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].clicked();
  }
}

function mouseClicked() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].popped();
  }
}

function draw() {
  let valR = sliderR.value();
  let valG = sliderG.value();
  let valB = sliderB.value();

  background(valR, valG, valB);

  //cursor
  noStroke();
  fill(255, 255, 255);
  circle(mouseX, mouseY, 25, 1);

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }

  for (let i2 = 0; i2 < cursor.length; i2++) {
    cursor[i2].display();
    if (cursor.length > 5) {
      cursor.splice(i2, 1);
    }
  }
}

class Cursor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.col = color(255, 25);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 20, 20);
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(180, 200, 255, 50);
    //fill(valR, valG, valB);
  }

  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.x = this.x + random(-0.2, 0.2);

    this.y = this.y - 0.4;
    if (this.y + this.r <= 0) {
      this.y = height;
    }
  }

  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.y) {
      this.col = color(240, random(200, 255), 250, 250);
    }
  }

  popped() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    // What changes in this loop?
    for (var i = 0; i < circles.length; i++) {
      if (d < this.r / 2) {
        circles.splice(i, 1);
      }
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/6Oneew7P0
// Slider_hue_circles_cursorLimited_pop Martha
