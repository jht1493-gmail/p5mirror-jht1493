let eyeX = 170;
let eyeY = 250;
let fillG;
let fillB;
let myoffset;

function setup() {
  createCanvas(400, 800);
  fillG = random (100,200);
  fillB = random (100,200);
  frameRate(5);
  myoffset = 0;
  background(60, fillG, fillB);
}

function draw() {
  myoffset += 1 ;
  if (mouseIsPressed) {
    background(60,50,40,50);
  } else {
    // background(60, fillG, fillB);
  }

  for (var y = myoffset; y <= height; y += 60) {
    //eye
    fill(random(250), fillG, fillB);
    circle(eyeX, y, 20);
    circle(eyeY, y, 20);
    eyeX = eyeX + 1;

    eyeX = random(170, 175);
    eyeY = random(250, 255);
  }

  stroke(100, 100, 100);
}
