let eyeX = 170;
let eyeY = 250;
let faceSize;
let noceX;

function setup() {
  createCanvas(400, 400);
  faceSize = random(180, 250);
  noceX = random(230, 280);
}

function draw() {
  background(50, 20, 100);

  //FACE
  stroke(25);
  strokeWeight(9);
  fill(250, 80, 20);
  ellipse(200, 200, 180, faceSize);

  //eye
  fill(250, 1500, 200);
  circle(eyeX, 170, 20);
  circle(eyeY, 170, 20);
  eyeX = eyeX + 1;

  eyeX = random(170, 175);
  eyeY = random(250, 255);
  //eyebrow
  stroke(100, 30, 50);
  strokeWeight(10);
  arc(150, 149, 90, 1, 0, HALF_PI);
  arc(220, 149, 70, 1, 0, HALF_PI);

  //mouth
  fill(220, 200, 60);
  rect(mouseX, mouseY, 30, 20);
  //NOSE
  stroke(100, 100, 200);
  // line(x1, y1, x2, y2)
  line(300, noceX, 200, 180);
}

function mousePressed() {
  noceX = random(50, 280);
}

// https://editor.p5js.org/jht1493/sketches/CvO3B5mxJ
// week22 yvonne - mousePressed

// https://editor.p5js.org/yuyan211/sketches/1iMYYGcwS
// week22 yvonne
