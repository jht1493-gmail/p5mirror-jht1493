// https://editor.p5js.org/jht1493/sketches/qs6G3T5ju
// array of objects

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  createP('click on the canvas to create a bubble')
}

// function mouseDragged() {
function mouseClicked() {
  let r = random(10, 50);
  // Adding a new object to the array
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);

  // two styles of operation on an array of objects
  // style 1: for .. of
  for (let bubble of bubbles) {
    bubble.run();
  }

  // for loop style
  // style 2
  // for (let i = 0; i < bubbles.length; i++) {
  //   // bubbles[i].move();
  //   // bubbles[i].show();
  //   let bubble = bubbles[i].
  //   bubble.run();
  // }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  run() {
    this.move();
    this.show();
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}

// Array of Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.3-array-of-objects.html
// https://youtu.be/fBqaA7zRO58
// https://editor.p5js.org/codingtrain/sketches/1y_xfueO

