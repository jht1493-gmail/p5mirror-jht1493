// https://editor.p5js.org/Shanneldoshi-NYU/sketches/yfCNLCxtA

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240, 245, 115);


  //background rect
  fill(255, 176, 200, 127);
  noStroke();
  rect(0, 0, 50, 400);
  rect(100, 0, 50, 400);
  rect(200, 0, 50, 400);
  rect(300, 0, 50, 400);
  rect(0, 0, 400, 50);
  rect(0, 100, 400, 50);
  rect(0, 200, 400, 50);
  rect(0, 300, 400, 50);

  //background ellipse
  fill(255, 247, 0);
  noStroke();
  ellipse(mouseX, 25, 25, 25);
  ellipse(mouseX, 125, 25, 25);
  ellipse(mouseX, 225, 25, 25);
  ellipse(mouseX, 325, 25, 25);

  ellipse(25, mouseY, 25, 25);
  ellipse(125, mouseY, 25, 25);
  ellipse(225, mouseY, 25, 25);
  ellipse(325, mouseY, 25, 25);


  //body rect
  stroke(0, 0, 0);
  fill(240, 245, 115);
  rect(150, 160, 80, 120, 20, 20, 10, 10);

  //hair ellipse
  fill(0, 0, 0);
  ellipse(188, 100, 140, 120);
  ellipse(160, 155, 20, 20);
  ellipse(142, 145, 20, 20);
  ellipse(126, 133, 20, 20);

  ellipse(220, 155, 20, 20);
  ellipse(237, 145, 20, 20);
  ellipse(250, 133, 20, 20);

  //face ellipse
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(224, 193, 141);
  ellipse(188, 110, 90, 100);


  //1st eye ellipse
  fill(82, 82, 82);
  ellipse(170, 115, 20, 25);
  ellipse(206, 115, 20, 25);
  circle(159, 250, 10);

  // 2nd eye ellipse
  fill(0, 0, 0);
  noStroke();
  ellipse(170, 118, 15, 15);
  ellipse(206, 118, 15, 15);

  //3rd eye ellipse
  fill(255, 255, 255);
  ellipse(170, 121, 5, 7);
  ellipse(206, 121, 5, 7);


  // chest
  fill(224, 193, 141);
  strokeWeight(1);
  stroke(0, 0, 0);
  rect(165, 160, 50, 30, 0, 0, 10, 10);

  // dress dots
  fill(194, 70, 122);
  circle(165, 220, 10);
  circle(159, 250, 10);
  circle(180, 245, 10);
  circle(200, 265, 10);
  circle(200, 230, 10);
  circle(190, 210, 10);
  circle(215, 210, 10);
  circle(213, 245, 10);
  circle(177, 270, 10);








}