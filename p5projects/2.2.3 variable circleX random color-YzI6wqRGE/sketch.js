let circleX = 0;
let circleY = 100;
let diam = 64;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    circleX = mouseX;
    circleY = mouseY;
  });
  create_ui();
  fill('gold');
  // fill('yellow');
}

function draw() {
  // background(0);
  noStroke();
  // fill(a_color);
  circle(circleX, circleY, diam);
  circleX = (circleX + 1) % width;
  update_ui();
}

function create_ui() {
  createSpan('click on canvas to move the circle')
  createElement('br');
  createButton('random color').mousePressed(function() {
    let col = random(['red','green','gold']);
    fill(col);
  });
  createButton('random gray').mousePressed(function() {
    let col = random(0,255);
    fill(col, 100);
  });
  createElement('br');
  createButton('backg 255').mousePressed(function() {
    background(255);
  });
  createButton('diam 50').mousePressed(function() {
    diam = 50;
  });
  createButton('diam 100').mousePressed(function() {
    diam = 100;
  });
  createElement('br');
  createSpan().id('icircleX');
  createSpan().id('icircleY');
  createElement('br');
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#icircleX').html('[circleX=' + circleX + '] ')
  select('#icircleY').html('[circleY=' + circleY + '] ')
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/YzI6wqRGE
// 2.2.3 variable circleX random color

// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 variable circleX % width ui

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable circleX % width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC