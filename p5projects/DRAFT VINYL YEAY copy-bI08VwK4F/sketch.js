var num = [40, 120, 130, 140, 150, 160, 170, 180, 190, 200];
angle = 0;

let rotateAmount = 0;
let colordefined = 0;

//white circle1
let whitecircleXpos = 120;
let whitecircleYpos = 260;

//black circle2
let blackcircleYpos = 140;
let blackcircleXpos = 280;

function setup() {
  frameRate(3.5);
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(255);
  push();
  ellipseMode(CENTER);
  fill(0);
  //original big circle
  noStroke();
  noFill();
  stroke(0);
  ellipse(200, 200, 400, 400);

  //needle
  fill(0);
  push();
  translate(whitecircleXpos, whitecircleYpos);
  // rotate(PI / 20.0);
  rect(-2, 60, 80, 4);
  rect(5, 65, 2, 16);
  pop();

  drawWhitecircle();
  drawBlackcircle();
  turnBlackscratch();
  turnWhitescrach();
}

function drawWhitecircle() {
  for (var yin = 0; yin < 10; yin++) {
    stroke(0);
    noFill();

    //white circle
    ellipse(whitecircleXpos, whitecircleYpos, num[yin], num[yin]);
    stroke(255);
    fill(0) / ellipse(whitecircleXpos, whitecircleYpos, 40, 40);
    fill(255);

    //small points inside white
    ellipse(whitecircleXpos, whitecircleYpos, 10, 10);
    fill(0);
    stroke(0);
    noFill();
  }
}
function drawBlackcircle() {
  push();

  //filled circle right
  fill(0);
  ellipse(blackcircleXpos, blackcircleYpos, 200, 200);
  fill(255);
  ellipse(blackcircleXpos, blackcircleYpos, 40, 40);
  fill(0);
  ellipse(blackcircleXpos, blackcircleYpos, 10, 10);

  for (var yang = 0; yang < 10; yang++) {
    //black circle
    stroke(255);
    noFill();
    ellipse(blackcircleXpos, blackcircleYpos, num[yang], num[yang]);
    stroke(255);
  }
  pop();
}

function turnBlackscratch() {
  push();
  translate(whitecircleXpos, whitecircleYpos);
  rotate(rotateAmount++);
  ellipseMode(CENTER);
  stroke(0);
  arc(20, 20, 10, 10, 0, HALF_PI);
  pop();
}
function turnWhitescrach() {
  push();
  translate(blackcircleXpos, blackcircleYpos);
  rotate(-rotateAmount++);
  ellipseMode(CENTER);
  stroke(255);
  arc(20, 20, 10, 10, 0, HALF_PI);
  pop();
}
