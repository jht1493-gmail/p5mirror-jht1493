let a_count = 0;
let a_alpha = 10;
let a_diam = 200;
let a_x;
let a_y;
let a_step = 1;

function setup() {
  createCanvas(400, 300).mousePressed(function() {
    a_count = mouseX;
  });
  noStroke();
  // fill(255, 255, 255, a_alpha);
  clear();
  background(0);
  create_ui();
}

function draw() {
  // background(0);
  a_x = a_count % width;
  a_y = int(a_count / width) * (a_diam / 2);
  a_y = a_y % height;
  circle(a_x, a_y, a_diam);
  a_count = a_count + a_step;
  update_ui();
}

function create_ui() {
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('backg 255').mousePressed(function() {
    background(255);
  });
  createElement('br');
  createButton('alpha 1').mousePressed(function() {
    print('alpha 1')
    a_alpha = 1;
  });
  createButton('alpha 10').mousePressed(function() {
    print('alpha 10')
    a_alpha = 10;
  });
  createButton('alpha 100').mousePressed(function() {
    print('alpha 100')
    a_alpha = 100;
  });
  createButton('alpha 255').mousePressed(function() {
    print('alpha 255')
    a_alpha = 255;
  });
  createElement('br');
  createButton('white').mousePressed(function() {
    print('white');
    fill(255, 255, 255, a_alpha);
  });
  createButton('black').mousePressed(function() {
    print('black');
    fill(0, 0, 0, a_alpha);
  });
  createButton('red').mousePressed(function() {
    print('red');
    fill(255, 0, 0, a_alpha);
  });
  createButton('green').mousePressed(function() {
    print('green');
    fill(0, 255, 0, a_alpha);
  });
  createButton('blue').mousePressed(function() {
    print('blue');
    fill(0, 0, 255, a_alpha);
  });
  createButton('random').mousePressed(function() {
    print('random');
    fill(random(0, 255), random(0, 255), random(0, 255), a_alpha);
  });
  createElement('br');
  createButton('erase').mousePressed(function() {
    print('erase');
    erase();
  });
  createButton('noErase').mousePressed(function() {
    print('noErase');
    noErase();
  });
  createButton('frameRate 1').mousePressed(function() {
    print('frameRate 1');
    frameRate(1);
  });
  createButton(' 10 ').mousePressed(function() {
    print('frameRate 10');
    frameRate(10);
  });
  createButton(' 30 ').mousePressed(function() {
    print('frameRate 30');
    frameRate(30);
  });
  createButton(' 0 ').mousePressed(function() {
    print('frameRate 0');
    frameRate(0);
  });
  createElement('br');
  createButton('step 1').mousePressed(function() {
    print('step 1');
    a_step = 1;
  });
  createButton('step 10').mousePressed(function() {
    print('step 10');
    a_step = 10;
  });
  createButton('step 50').mousePressed(function() {
    print('step 50');
    a_step = 50;
  });
  createButton('step 100').mousePressed(function() {
    print('step 100');
    a_step = 100;
  });
  createButton('step -10').mousePressed(function() {
    print('step -10');
    a_step = -10;
  });
  createElement('br');
  createSpan().id('icount');
  createSpan().id('ix');
  createSpan().id('iy');
  createElement('br')
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#icount').html('[a_count=' + a_count + '] ')
  select('#ix').html('[a_x=' + a_x + '] ')
  select('#iy').html('[a_y=' + a_y + '] ')
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/vig9Wkf9V
// 2.2 variable remainder erase

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