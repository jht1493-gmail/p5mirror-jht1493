var spot = {
  x: 200,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(400, 200);
  background(0);
}

function draw() {
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 190);

  // spot.x = random(0, width);
  spot.x = (spot.x + 1) % width;
  let h = height/8;
  spot.y = random([h, h*3, h*5, h*7]);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
}

// https://editor.p5js.org/jht1493/sketches/ny4aSEPTp
// 2.5.1 random function scan x ran y

// https://editor.p5js.org/jht1493/sketches/XzrXlqxMN
// 2.5.1 random function scan x

// https://editor.p5js.org/jht1493/sketches/UTMOVgcsv
// 2.5.1 random function 

// The random() Function
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.5-random.html
// https://youtu.be/nicMAoW6u1g
// https://editor.p5js.org/codingtrain/sketches/4gD7Btgi