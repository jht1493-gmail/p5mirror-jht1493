// Source:
// https://editor.p5js.org/zjsheng0502/sketches/7O5Dwhqpt

var circleX = 270 //ball
var circley = 200 //head
var circleX2 = 250 //eyeball
var speed = 1
var speed2 = 10
var speed3 = 0.5
var speed4 = 0.2
var linex = 260
var linex2 = 260
var speed5 = 0.2

function setup() {
  createCanvas(500, 380);
}

function draw() {
  background(255);
  circle(circley, 120, 170, 100)
  if (circley > 203 || circley < 200) {
    speed3 = speed3 * -1
  }
  circley = circley + speed3
  strokeWeight(2)
  fill(200, 200, 200)

  //Eye
  arc(256, 100, 40, 40, 0, PI + QUARTER_PI, CHORD);
  //Ear
  arc(158, 100, 50, 20, 0, PI + QUARTER_PI, CHORD);

  //Body
  strokeWeight(3);
  line(200, 280, 200, 205);
  line(200, 250, 240, 255);
  line(240, 255, linex2, 240);
  if (linex2 > 265 || linex2 < 260) {
    speed5 = speed5 * -1
  }
  linex2 = linex2 + speed5

  line(200, 260, 240, 255);
  line(240, 255, linex, 270);
  if (linex > 265 || linex < 260) {
    speed4 = speed4 * -1
  }
  linex = linex + speed4

  line(170, 310, 200, 280);
  line(240, 290, 200, 280);
  line(240, 290, 240, 310);

  stroke(255, 255, 255)
  line(240, 160, 260, 180);

  //hair
  noFill();
  stroke(255);
  strokeWeight(3);
  bezier(280, 20, 0, 130, 100, 0, 150, 0, 0, 50, 100, 50);

  bezier(280, 20, 0, 150, 100, 0, 150, 0, 0, 50, 150, 50);

  bezier(270, 20, 0, 170, 100, 0, 150, 0, 0, 50, 250, 50);

  bezier(260, 20, 0, 190, 100, 0, 150, 0, 0, 50, 300, 50);

  bezier(250, 20, 0, 210, 100, 0, 150, 0, 0, 50, 350, 50);

  stroke(10);
  //ellipse(160, 100, 55, 25)
  //ellipse(240, 100, 35, 35)

  fill(80)

  circle(255, 100, 20, 20)
  //eyeball

  circle(circleX2, 100, 20, 20)
  if (circleX2 > 265 || circleX2 < 250) {
    speed2 = speed2 * -1
  }

  circleX2 = circleX2 + speed2

  fill(0)
  stroke(1);
  circle(circleX, 255, 20, 20)
  circle(circleX + 40, 255, 30, 30)
  circle(circleX + 90, 255, 40, 40)
  circle(circleX + 150, 255, 50, 50)

  if (circleX > width || circleX < 270) {
    speed = speed * -1
  }
  circleX = circleX + speed

  strokeWeight(3); // Thicker

  //circle(mouseX, 100, 20, 20)
}