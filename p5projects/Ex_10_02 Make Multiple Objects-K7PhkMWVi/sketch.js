let jit;
let bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  jit = new JitterBug(width * 0.33, height/2, 50);
  bug = new JitterBug(width * 0.66, height/2, 10);
}

function draw() {
  jit.move();
  jit.display();
  bug.move();
  bug.display();
}


function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

// https://editor.p5js.org/jht1493/sketches/K7PhkMWVi
// Ex_10_02 Make Multiple Objects

// https://github.com/lmccart/gswp5.js-code/blob/master/10_Objects/Ex_10_02.js
