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
    this.w = w; // size
    this.speed = 0; // speed of square 
  }

  display() {
    // Display the square 
    fill(175);
    stroke(0);
    ellipse(this.x, this.y, this.w, this.w);
  }

  update() {
    // Add gravity to speed
    this.speed = this.speed + gravity;
    // Add speed to location
    this.y = this.y + this.speed;

    // If square reaches the bottom 
    // Reverse speed 
    if (this.y + this.w/2 > height) {
      this.y = height - this.w/2;
      this.speed = this.speed * -0.95;
    }
  }
}