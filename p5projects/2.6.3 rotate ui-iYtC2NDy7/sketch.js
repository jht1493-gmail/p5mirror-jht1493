// let a_angle = 45;
let a_angle = 0;

function setup() {
  createCanvas(400, 400);
  background(204);
  angleMode(DEGREES);
  
  createSpan().id('angle');
}

function draw() {
  background(204);

  translate(width / 2, height / 2);
  // in order to see the full rotation on the screen
  // must first translate the origin then rotate.
  // scale mouseX to 0 to 360 for degrees
  a_angle = 360 * (mouseX / width);
  rotate(a_angle);

  rect(10, 10, 20, 20);
  line(1, 1, 100, 1);
  line(1, 1, 1, 100);
  line(1, 1, 100, 100);
  rect(100-20, 100-20, 20, 20);
  
  select('#angle').html(' [angle=' + a_angle + ']')
}

// https://editor.p5js.org/jht1493/sketches/iYtC2NDy7
// 2.6.3 rotate ui

// https://editor.p5js.org/kushinda/sketches/vB2Jfg-mm
// rotateExperiment