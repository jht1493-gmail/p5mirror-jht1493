let object1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // color properties
  noFill();
  strokeWeight(5);
  stroke(50, 180, 230);

  // x position starts at 0 - circle's radius
  object1 = {
    radius : height / 2,
    x : -height/2,
    y : height / 2,
    speed : 2
  }
}

function draw() {
  // red, green, blue, alpha
  background(20, 0, 220, 3);

  // LEFT TO RIGHT
  // circle(x, y, diameter)
  circle(object1.x, object1.y, object1.radius * 2);
  object1.x += object1.speed;

  // If x position (center of circle) is 
  // greater than canvas width + circle's radius, 
  // then reset the x position
  if (object1.x > width + object1.radius) { 
    object1.x = -object1.radius;
  }
}

// https://editor.p5js.org/enickles/sketches/QbRTbV1H_
// Exercise - ICM 21 Week 3 - Add another moving circle object that resets