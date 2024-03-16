let a_scan = 0;
let a_alpha = 1;
let a_diam = 200;
let a_x;
let a_y;

function setup() {
  createCanvas(400, 300).mousePressed(function() {
    circleX = mouseX;
    // circleY = mouseY;
  });
  noStroke();
  fill(255, 255, 255, a_alpha);
  create_ui();
  background(0);
}

function draw() {
  // background(0);
  a_x = a_scan % width;
  a_y = int(a_scan / width) * (a_diam / 2);
  a_y = a_y % height;
  circle(a_x, a_y, a_diam);
  a_scan = a_scan + 1;
  update_ui();
}

function create_ui() {
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('red').mousePressed(function() {
    fill(255, 0, 0, a_alpha);
  });
  createButton('green').mousePressed(function() {
    fill(0, 255, 0, a_alpha); 
  });
  createButton('blue').mousePressed(function() {
    fill(0, 0, 255, a_alpha); 
  });
  createButton('random').mousePressed(function() {
    fill(random(0, 255), random(0, 255), random(0, 255), a_alpha);
  });
  createElement('br')
  createSpan().id('ix');
  createSpan().id('iy');
  createElement('br')
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#ix').html('[a_x=' + a_x + '] ')
  select('#iy').html('[a_y=' + a_y + '] ')
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/mDleb9mKk
// 2.2 variable remainder rgb

// https://editor.p5js.org/jht1493/sketches/rO0jSdg9Y
// 2.2 variable remainder circleX slider

// https://editor.p5js.org/jht1493/sketches/e33y9FbcE
// 2.2 variable remainder circleX

// https://editor.p5js.org/jht1493/sketches/HtESWWNTa
// 2.2 variable remainder

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC