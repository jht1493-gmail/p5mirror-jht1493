// Two ball objects
let ball1;
let ball2;

// Global gravity variable
let gravity = 0.1;

function setup() {
  createCanvas(480, 270);

  // Create ball objects
  ball1 = new Ball(150, 0, 16);
  ball2 = new Ball(350, 50, 32);
}

function draw() {
  background(51);

  // Display ball objects
  ball1.display();
  ball2.display();

  // Move ball objects
  ball1.update();
  ball2.update();

}

// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from Chapter 5 using objects with a Ball class. 
// Include two instances of a Ball object.

// Ball constuctor
class Ball {
  constructor(x, y, w) {
    this.x = x; // x location of square 
    this.y = y; // y location of square 
    this.w = w; // speed of square 
    this.speed = 0; // size
  }

  display() {
    // Display the square 
    fill(175);
    stroke(0);
    ellipse(this.x, this.y, this.w, this.w);
  }

  update() {
    // Add speed to location
    this.y = this.y + this.speed;

    // Add gravity to speed
    this.speed = this.speed + gravity;

    // If square reaches the bottom 
    // Reverse speed 
    if (this.y > height) {
      this.speed = this.speed * -0.95;
    }
  }
}

// https://editor.p5js.org/icm/sketches/BkyUQp1nb
