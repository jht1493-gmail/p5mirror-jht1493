// global variables
var herX = 10;
var hereX = 130;
var sheX = 100;
let x_position = 100;
let y_position = 100;
let a_size;

function setup() {
  createCanvas(600, 400);
  frameRate();
  // smooth();
  colorMode(RGB);
  console.log((1+2)*(3+4)/(9-2));
}

function draw() {
  //fountain
  background(100, 100, 51, 22);
  // background(0);
  fill(173, 216, 230);
  noStroke();
  rect(290, 210, 40, 200, 200);

  if (mouseX < 100)
    fill(0, 0, 0, 0);
  fill(193, 216, 230, 63);
  ellipse(300, herX, 100, 80);
  ellipse(320, hereX, 70, 30);
  ellipse(280, sheX, 90, 15);
  ellipse(280, sheX, 10, 15);
  ellipse(210, sheX, 10, 5);
  ellipse(250, sheX, 10, 5);
  ellipse(200, sheX, 10, 5);
  herX = herX + 3;
  hereX = hereX + 4;
  sheX = sheX + 4;

  //Drinking
  fill(212, 108, 133);
  ellipse(310, 50, 50, 50);
  fill(255);
  ellipse(337, 33, 7, 7);
  ellipse(322, 43, 7, 7);
  fill(0);
  ellipse(337, 33, 3, 3);
  ellipse(322, 43, 3, 3);
  fill(450, 25, 25);
  ellipse(332, 60, 7, 7);
}

function mousePressed() {
  background(250, 210, 252);
}