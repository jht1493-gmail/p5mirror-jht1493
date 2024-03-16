function setup() {
  // Create drawing canvas
  createCanvas(400, 400);

  // Dark gray background
  background(120);
  //Draw purple Face
  drawpurpleFace();
  //Draw green eyes
  drawEye("blue", 150, 150);
  drawEye("pink", 250, 150);
  // drawEyes('pink');

  //Draw dark pupil
  drawblackPupil();
  // Orange eyebrows
  draworangeEyebrows();
  // Antenna
  drawAntenna();
  // Pink mouth
  drawpinkMouth();
  // Black arms
  drawblackArms();
  // Yellow body
  drawYellowbody();
}

function drawEye(color, x, y) {
  fill(color);
  ellipse(x, y, 70, 40);
  // ellipse(150, 150, 70, 40);
  // ellipse(250, 150, 40, 60);
}

function drawpurpleFace() {
  fill(127, 0, 127);
  ellipse(200, 200, 150, 200);
}
function drawblackPupil() {
  // Black pupils
  fill(0);
  ellipse(170, 150, 5, 5);
  ellipse(270, 150, 10, 10);
}
function draworangeEyebrows() {
  stroke(255, 100, 100);
  strokeWeight(15);
  line(130, 110, 170, 120);
  line(230, 105, 270, 100);
}
function drawAntenna() {
  stroke(255);
  strokeWeight(5);
  line(200, 125, 200, 50);
  noFill();
  ellipse(200, 40, 20, 20);
}
function drawpinkMouth() {
  noStroke();
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);
}
function drawblackArms() {
  stroke(0);
  strokeWeight(30);
  line(150, 350, 300, 300);
}
function drawYellowbody() {
  noStroke();
  fill(255, 255, 0);
  rect(150, 275, 100, 200);
}
