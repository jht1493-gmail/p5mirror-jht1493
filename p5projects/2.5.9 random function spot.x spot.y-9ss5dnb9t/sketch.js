var spot = {
  x: 100,
  y: 50,
  d: 24
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
  spot.x = (spot.x + random(-spot.d, spot.d)) % width;
  spot.y = (spot.y + random(-spot.d, spot.d)) % height;
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, spot.d);
}


// https://editor.p5js.org/jht1493/sketches/9ss5dnb9t
// 2.5.2 random function spot.x spot.y

// https://editor.p5js.org/jht1493/sketches/yu1MwEqyQ
// 2.5.1 random function spot.x

// https://editor.p5js.org/jht1493/sketches/UTMOVgcsv
// 2.5.1 random function 

// The random() Function
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.5-random.html
// https://youtu.be/nicMAoW6u1g
// https://editor.p5js.org/codingtrain/sketches/4gD7Btgi