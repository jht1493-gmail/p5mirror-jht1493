let spot = {
  count: 0,
  x: 100,
  y: 50,
  d: 40
};
let a_alpha = 100;
let col_set = [
  [255, 0, 0, a_alpha],
  [0, 255, 0, a_alpha],
  [255, 255, 0, a_alpha],
  [0, 0, 0, a_alpha],
  // [255, 255, 255, a_alpha]
];

function setup() {
  createCanvas(400, 200);
  background(0);
  create_ui();
}

function draw() {
  let col = random(col_set);
  col[3] = a_alpha;
  spot.count = spot.count + spot.d;
  spot.x = spot.count % width;
  spot.y = (int(spot.count / width) * spot.d) % height;
  noStroke();
  fill(col);
  let r = spot.d / 2;
  let x = spot.x + r;
  x = x + random([-r, 0, r]);
  let y = spot.y + r;
  y = y + random([-r, 0, r]);
  // ellipse(x, y, spot.d);
  rect(x, y, spot.d, spot.d);
  update_ui();
}

function create_ui() {
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('a_alpha 100').mousePressed(function() {
    a_alpha = 100;
  });
  createButton('255').mousePressed(function() {
    a_alpha = 255;
  });
  createElement('br');
  createButton('frameRate 0').mousePressed(function() {
    frameRate(0);
  });
  createButton('5').mousePressed(function() {
    frameRate(5);
  });
  createButton('30').mousePressed(function() {
    frameRate(30);
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

// https://editor.p5js.org/jht1493/sketches/jZtF7e5E5
// 2.5.2 random spot.count ui col set

// https://editor.p5js.org/jht1493/sketches/lZD21fbFG
// 2.5.2 random spot.count ui jiggle 

// https://editor.p5js.org/jht1493/sketches/46pdvjYd_
// 2.5.2 random function spot.count ui rgb

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