// Function Basics
let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: 0
};
function setup() {
  createCanvas(600, 400);
}
function mousePressed() {
  console.log('in mousePressed')
  // if (ball.xspeed > 0 || ball.xspeed < 0) {
  if (ball.xspeed != 0) { // not x still
    ball.xspeed = 0; // x is no still
    ball.yspeed = 4;
  }
  else if (ball.yspeed != 0) {
    ball.yspeed = 0;
    ball.xspeed = 4;
  }
  console.log('ball.xspeed',ball.xspeed,'ball.yspeed',ball.yspeed)
}
function draw() {
  background(0);
  move();
  bounce();
  display();
}
function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}
function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
function display() {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 24, 24);
}

// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
