let circleX = 0;
let circleY = 150;
let calpha = 1;

function setup() {
  createCanvas(400, 300).mousePressed(function() {
    circleX = mouseX;
    circleY = mouseY;
  });
  noStroke();
  fill(255, 255, 0, calpha);
  background(255);
  create_ui();
}

function draw() {
  // background(0);
  circle(circleX, circleY, 200);
  circleX = (circleX + 1) % width;
  update_ui();
}

function create_ui() {
  createSpan('Click on canvas to move shape');
  createElement('br');
  createButton('random').mousePressed(function() {
    fill(random(0, 255), random(0, 255), random(0, 255), calpha);
  });
  createButton('red').mousePressed(function() {
    fill(255, 0, 0, calpha);
  });
  createButton('green').mousePressed(function() {
    fill(0, 255, 0, calpha);
  });
  createButton('blue').mousePressed(function() {
    fill(0, 0, 255, calpha);
  });
  createElement('br');
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('backg 255').mousePressed(function() {
    background(255);
  });
  createElement('br');
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#imx').html('[circleX=' + circleX + '] ')
  select('#imy').html('[circleY=' + circleY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/mDleb9mKk
// 2.2 circleX rgb ui

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