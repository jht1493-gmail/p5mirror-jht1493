let a_scan = {
  x: 0,
  r: 0,
  alpha: 100,
  diam: 20
};
// a_scan is assigned and an object 
// the object contains one variable, x
// an object is container for other variables

function setup() {
  createCanvas(400, 200);
  background(0);
  noStroke();
}

function draw() {
  // variables are set on the object a_scan
  a_scan.x = (a_scan.x + 1) % width;
  a_scan.y = random(0, height / 2);
  a_scan.r = (a_scan.r + 1) % 255;
  a_scan.g = random(100, 255);
  a_scan.b = random(100, 190);
  fill(a_scan.r, a_scan.g, a_scan.b, a_scan.alpha);
  ellipse(a_scan.x, a_scan.y, a_scan.diam);
}

// https://editor.p5js.org/jht1493/sketches/UTMOVgcsv
// 2.5.1 object scan 

// The random() Function
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.5-random.html
// https://youtu.be/nicMAoW6u1g
// https://editor.p5js.org/codingtrain/sketches/4gD7Btgi