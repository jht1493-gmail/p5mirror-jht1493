// https://editor.p5js.org/jht1493/sketches/v8N8pF3Yy
// intro to class

let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  // new operator to create an instance on a class
  // makes a call to the constructor
  //   constructor(x, y, r)
  let x = width / 2;
  let y = height / 2;
  bubble1 = new Bubble(x, y, 10);
  bubble2 = new Bubble(x, y, 20);

  // change properties on a instance
  bubble1.r = 200;
}

function draw() {
  background(0);
  // call run method for each instance of the bubble
  bubble1.run();
  bubble2.run();
}

// Defining a class
class Bubble {
  // creating instance must be called constructor
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  // run method calls other methods to do it's job
  run() {
    this.move();
    this.show();
  }

  // methods or functions
  // method_name( param1, param2 ... )
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r, this.r);
  }
}

// Classes in JavaScript with ES6
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/6.2-classes.html
// https://youtu.be/T-HGdc8L-7w
// https://editor.p5js.org/codingtrain/sketches/qi7N4LWq
