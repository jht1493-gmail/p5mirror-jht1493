// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from 
// Chapter 5 using objects with a Ball class. 
// Include two instances of a Ball object.

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