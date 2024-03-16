let angle = 0.0;
let angleDirection = 1;
let speed = 0.005;

function setup() {
  createCanvas(280, 120);
}

function draw() {
  background(204);
  translate(20, 25);  // Move to start position
  rotate(angle);
  strokeWeight(12);
  line(0, 0, 40, 0);
  translate(40, 0);   // Move to next joint
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0, 0, 30, 0);
  translate(30, 0);   // Move to next joint
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0, 0, 20, 0);

  angle += speed * angleDirection;
  if ((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}

// https://editor.p5js.org/jht1493/sketches/NqUbfaE2H
// Ex_06_07 Articulating Arm

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_07.js