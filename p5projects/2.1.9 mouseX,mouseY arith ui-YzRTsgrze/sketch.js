function setup() {
  createCanvas(400, 200);
  background(0);
  noStroke();
  fill(255, 50);
  create_ui();
}

function draw() {
  // fill(255, 50);
  // circle(mouseX, mouseY, 24);
  update_ui();
}

function mouseDragged() {
  circle(mouseX-25, mouseY, 24);
  circle(mouseX+25, mouseY, 24);
}

function create_ui() {
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('red').mousePressed(function() {
    fill(255, 0, 0, 50);
  });
  createButton('yellow').mousePressed(function() {
    fill(255, 255, 0, 50); // Yellow, alpha 20
  });
  createButton('random').mousePressed(function() {
    fill(random(0,255), random(0,255), random(0,255), 50);
  });
  createElement('br')
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/pmA0d9Uqt
// 2.1 mouseX,mouseY arith

// https://editor.p5js.org/jht1493/sketches/I8zejgYIX
// 2.1 mouseX,mouseY ui

// Variables in p5.js (mouseX, mouseY)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.1-mousex-mousey.html
// https://youtu.be/7A5tKW9HGoM
// https://editor.p5js.org/codingtrain/sketches/IeblvUQrf