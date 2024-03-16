let circleX = 0;
let circleY = 100;
let diam_count = 0;
let diam_max = 64;
let diam_step = 1;
let a_alpha = 100;
let a_col = [0, 0, 0, a_alpha];
let a_stepx = 1;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    circleX = mouseX;
    circleY = mouseY;
  });
  create_ui();
}

function draw() {
  // background(0);
  noStroke();
  fill(a_col);
  
  circle(circleX, circleY, diam_count);
  
  circleX = (circleX + 1) % width;
  
  diam_count = (diam_count + diam_step) % diam_max;
  
  update_ui();
}

function create_ui() {
  createSpan().id('icx');
  createSpan().id('idc');
  createElement('br');
  createButton('diam_step 1').mousePressed(function() {
    diam_step = 1;
  });
  createButton('diam_step -1').mousePressed(function() {
    diam_step = -1;
  });
  createElement('br');
  createButton('diam_max 10').mousePressed(function() {
    diam_max = 10;
  });
  createButton('diam_max 100').mousePressed(function() {
    diam_max = 100;
  });
  createElement('br');
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('backg 255').mousePressed(function() {
    background(255);
  });
  createButton('red').mousePressed(function() {
    a_col = [255, 0, 0, a_alpha];
  });
  createButton('green').mousePressed(function() {
    a_col = [0, 255, 0, a_alpha];
  });
  createButton('blue').mousePressed(function() {
    a_col = [0, 0, 255, a_alpha];
  });
  createButton('random').mousePressed(function() {
    a_col = [random(0, 255), random(0, 255), random(0, 255), a_alpha];
  });
  createElement('br');
  createButton('alpha 10').mousePressed(function() {
    a_alpha = 10;
    a_col[3] = a_alpha;
  });
  createButton('alpha 100').mousePressed(function() {
    a_alpha = 100;
    a_col[3] = a_alpha;
  });
  createButton('alpha 255').mousePressed(function() {
    a_alpha = 255;
    a_col[3] = a_alpha;
  });
  createElement('br');
  createSpan().id('ico');
  createElement('br');
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#icx').html('[circleX=' + circleX + '] ')
  select('#idc').html('[diam_count=' + diam_count + '] ')
  select('#ico').html('[a_col=' + a_col + '] ')
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/Sp6LGqMlu
// 2.2.3 variable circleX % width ui btns

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