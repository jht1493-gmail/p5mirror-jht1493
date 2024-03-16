let spot = {
  count: 0,
  x: 100,
  y: 50,
  d: 20
};

let col = {
  r: 255,
  g: 0,
  b: 0,
  alpha: 100
};

function setup() {
  createCanvas(400, 200);
  background(0);
  create_ui();
}

function draw() {
  col.r = random(100, 255);
  // col.g = 0;
  col.b = random(100, 190);

  // spot.x = random(0, width);
  spot.count = spot.count + spot.d;
  spot.x = width - (spot.count % width);
  spot.y = height - ((int(spot.count / width) * spot.d) % height);
  noStroke();
  fill(col.r, col.g, col.b, col.alpha);
  ellipse(spot.x, spot.y, spot.d);
  update_ui();
}

function create_ui() {
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('alpha 100').mousePressed(function() {
    col.alpha = 100;
  });
  createButton('alpha 180').mousePressed(function() {
    col.alpha = 180;
  });
  createElement('br');
  createSpan().id('ic');
  createSpan().id('ix');
  createSpan().id('iy');
  createElement('br');
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#ic').html('[count=' + spot.count + '] ')
  select('#ix').html('[x=' + spot.x + '] ')
  select('#iy').html('[y=' + spot.y + '] ')
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/A1NHTo3cg
// 2.5.2 random function spot.count ui bottom

// https://editor.p5js.org/jht1493/sketches/Dv5o83_c3
// 2.5.2 random function spot.count ui

// https://editor.p5js.org/jht1493/sketches/vpcHXx_E1
// 2.5.2 random function spot.count

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