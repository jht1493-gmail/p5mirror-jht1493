// https://editor.p5js.org/jht1493/sketches/BgVkHJ2MC
// explaining sin and cos

let radius = 150;
let angle = 0;
let fsize = 16;
let withLeading = 18;
let interact;
let isInteractive = false;

function setup() {
  createCanvas(500, 550);
  interact = select("#interactive");
  interact.changed(function () {
    isInteractive = interact.checked();
  });
}

function draw() {
  background(250);
  stroke(0);

  push();
  translate(width * 0.5, 200);
  ellipse(0, 0, radius * 2, radius * 2);
  let lineEndX = cos(angle);
  let lineEndY = sin(angle);
  strokeWeight(1);
  line(lineEndX * radius, 0, lineEndX * radius, lineEndY * radius);
  line(0, lineEndY * radius, lineEndX * radius, lineEndY * radius);
  line(0, 0, radius, 0);
  text("0°/radians", radius + 6, 0);
  strokeWeight(4);
  stroke(255, 0, 128);
  line(0, 0, lineEndX * radius, 0);
  stroke(0, 255, 0);
  line(0, 0, 0, lineEndY * radius);
  stroke(0);
  line(0, 0, lineEndX * radius, lineEndY * radius);
  pop();

  push();
  noStroke();
  translate(25, 400);
  textSize(fsize);
  fill(255, 0, 128);
  text("cos(angle): " + nf(lineEndX, 0, 2), 0, 0);
  fill(0, 255, 0);
  text("sin(angle): " + nf(lineEndY, 0, 2), 0, withLeading);
  fill(0);
  text("Radians: " + nf(angle, 0, 2), 0, withLeading * 2);
  text("Degrees: " + nf(degrees(angle), 0, 2), 0, withLeading * 3);
  pop();

  if (isInteractive) {
    angle = map(mouseX, 0, width, 0, TWO_PI);
  } else {
    angle += 0.01;
  }
}

// https://editor.p5js.org/allison.parrish/sketches/h6JW7hIS-
// explaining sin and cos

// https://github.com/ITPNYU/ICM-2022-Code/wiki/Homework-Allison#week-2-animation-variables
