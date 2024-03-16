//week5
// TRY: what happens if cactus is not draw last?

let c1, c2;
let img;
let cloudPosX = 0;

function setup() {
  createCanvas(600, 400);
  // Define colors
  c1 = color(135, 206, 250);
  c2 = color(255);
  img = loadImage("cloud1.png");

  setGradient(c1, c2);
  movingCloud(1);
  sky();
  sun();
  cactus();
  sand();
}

function draw() {
  setGradient(c1, c2);
  sun();
  movingCloud(1);
  cactus();
  sand();
}

function movingCloud(speedFactor) {
  //cloud. png
  image(img, cloudPosX, 10, 100, 100);
  if (cloudPosX > width) {
    cloudPosX = 0;
  } else {
    cloudPosX += speedFactor;
  }
}

function sky() {
  // Define colors
  c1 = color(135, 206, 235);
  c2 = color(75, 0, 30);
  setGradient(c1, c2);
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function sand() {
  fill(222, 184, 135);
  noStroke();
  square(0, 345, 600);
}

function sun() {
  fill(225, 155, 40);
  noStroke();
  ellipse(270, 60, 80, 80);
  stroke(5);
}

function cactus() {
  push();
  fill(107, 142, 35);
  rect(190, 290, 15, 55);
  translate(200, 275);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 5, 20, 80);
    rotate(PI / 5);
    rect(30, 20, 10, 10);
  }
  pop();
}

// https://editor.p5js.org/lolo.ostia/sketches/GuQJlbpqK
// week5-creative excercise Lorena

//Moving CLOUDS
//https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V

//Gradient
//https://editor.p5js.org/REAS/sketches/S1TNUPzim
