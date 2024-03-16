// https://editor.p5js.org/jht1493/sketches/4mTNtiQnZ
// 7.8-objects-and-images
// Added toggleImg, testHit

let bubbles = [];

let flower;
let kittens = [];

function preload() {
  flower = loadImage("kittens/flower.png");
  for (let i = 0; i < 5; i++) {
    kittens[i] = loadImage(`kittens/kitten${i}.jpg`);
  }
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    let img = random(kittens);
    let b = new Bubble(x, y, r, img);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    // bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.img = img;
    this.kittenImg = img;
  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (this.testHit(px, py)) {
      // this.img = flower;
      this.toggleImg();
    }
  }

  testHit(px, py) {
    let hitx = px > this.x && px < this.x + this.r;
    let hity = py > this.y && py < this.y + this.r;
    return hitx && hity;
  }

  toggleImg() {
    if (this.img != flower) {
      this.img = flower;
    } else {
      this.img = this.kittenImg;
    }
  }
  
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.img, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}

// https://editor.p5js.org/jht1493/sketches/4mTNtiQnZ
// 7.8-objects-and-images

// Objects and Images
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/8-objects-images
// https://youtu.be/i2C1hrJMwz0
// https://editor.p5js.org/codingtrain/sketches/H44xHm5a
