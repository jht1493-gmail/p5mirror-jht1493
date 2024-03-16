function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 229, 204);
  Wushuang_face();
}

// https://editor.p5js.org/cloveria2/sketches/PULHgr6gC

function Wushuang_face() {
  //left eye
  stroke(0)
  strokeWeight(1)
  ellipseMode(RADIUS);
  fill(255);
  ellipse(100, 100, 30, 30);
  ellipseMode(CENTER);
  fill(0, 204, 204);
  ellipse(100, 100, 30, 30);
  
  //right eye
  ellipseMode(RADIUS);
  fill(255);
  ellipse(200, 100, 30, 30);
  ellipseMode(CENTER);
  fill(0, 204, 204);
  ellipse(200, 100, 30, 30);

  //Nose  
  fill(255, 153, 51);
  arc(150, 150, 60, 60, HALF_PI, PI);

  //mouth
  strokeWeight(6);
  line(125, 210, 200, 200);
}