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
  circle(mouseX, mouseY, 24);
  circle(width - mouseX, mouseY, 24);
}

function create_ui() {
  createSpan('Click and drag mouse to draw');
  createElement('br');
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
    fill(random(0, 255), random(0, 255), random(0, 255), 50);
  });
  createElement('br');
  createSpan().id('imouseX');
  createSpan().id('imouseY');
  createSpan().id('irgba');
}

function update_ui() {
  select('#imouseX').html('[mouseX=' + mouseX + '] ')
  select('#imouseY').html('[mouseY=' + mouseY + '] ')
  select('#irgba').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/I8zejgYIX
// 2.1.4 mouseX mirror ui

// Variables in p5.js (mouseX, mouseY)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.1-mousex-mousey.html
// https://youtu.be/7A5tKW9HGoM
// https://editor.p5js.org/codingtrain/sketches/IeblvUQrf