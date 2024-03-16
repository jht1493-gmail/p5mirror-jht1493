// Try: setting different values for the angle
let a_angle = 0;

function setup() {
  createCanvas(400, 400);
  background(204);
  angleMode(DEGREES);
}

function draw() {
  background(204);

  translate(width / 2, height / 2);
  //   in order to see the full rotation on the screen
  //   must first translate the origin then rotate.
  // rotate(mouseX / 20);
  rotate(a_angle);

  rect(10, 10, 20, 20);
  line(1, 1, 100, 1);
  line(1, 1, 1, 100);
  line(1, 1, 100, 100);
  rect(100, 100, 20, 20);
}

// https://editor.p5js.org/jht1493/sketches/mq4r5u0v3
// 2.6 rotate a_angle

// https://editor.p5js.org/kushinda/sketches/vB2Jfg-mm
// rotateExperiment