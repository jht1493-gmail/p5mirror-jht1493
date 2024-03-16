var counter = 0;
//var factor = 0;
var r = 50;
var pi = 3.14;
let extraCanvas;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  extraCanvas.clear();
  frameRate(60);
  smooth();
  colorMode(RGB);
}

function draw() {

  background(0);
  stroke(125);
  //the big planet
  //color changing module

  let colR = map(mouseX, 0, 400, 200, 255);
  let colG = map(mouseY, 0, 400, 200, 255);
  let colB = map(mouseX - mouseY, 0, 400, 200, 255);
  fill(colR, colG, colB);
  noStroke();
  //itself
  ellipse(width / 2, height / 2, r * 2, r * 2);

  //Click the mouse and to draw a star
  if (mouseIsPressed) {

    extraCanvas.fill(colR, colG, colB);
    extraCanvas.noStroke();
    extraCanvas.quad(mouseX, mouseY - 10, mouseX + 5, mouseY, mouseX, mouseY + 20, mouseX - 5, mouseY);

  }
  image(extraCanvas, 0, 0);

  //its orbit
  translate(width / 2, height / 2);
  stroke(colR, colG, colB);
  rotate(2.6);
  strokeWeight(4);
  noFill();
  ellipse(0, 0, 280, 60);

  //tiny stars around the planet appear randomly
  noStroke();
  fill(random(125, 255));
  ellipse(random(0, width), random(0, height), random(2, 5), random(2, 5));

}

// https://editor.p5js.org/BoweiXx/sketches/-okuF-qPT
