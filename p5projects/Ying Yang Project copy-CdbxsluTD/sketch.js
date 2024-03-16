function setup() {
  angleMode(DEGREES);
  createCanvas(580, 525);
}

function draw() {
  background(mouseX,mouseY,43);
  //Big Circle
  stroke(0)
  strokeWeight(4)
  fill(0);
  ellipse(290,275,247,247)
  fill(255)
arc(290, 275, 250, 245, 90, 270);
  fill(0);
 stroke(0);
  strokeWeight(3)
  //Black
  ellipse(290,335,123,123)
  fill(255);
  //White
  noStroke();
  ellipse(284,213,120,117);
  fill(0);
  ellipse(280,220,50,50);
  fill(255);
ellipse(295,330,50,50); 
}