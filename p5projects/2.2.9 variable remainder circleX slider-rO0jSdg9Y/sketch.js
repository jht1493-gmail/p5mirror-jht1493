let circleX = 0;
let circleY = 150;
let a_alpha = 1;

function setup() {
  createCanvas(400, 300).mousePressed(function() {
    circleX = mouseX;
    circleY = mouseY;
  });
  noStroke();
  fill(255, 255, 255, a_alpha);
  create_ui();
  background(0);
}

// function mousePressed() {
//   circleX = mouseX;
//   circleY = mouseY;
// }

function draw() {
  // background(0);
  circle(circleX, circleY, 200);
  circleX = (circleX + 1) % width;
  update_ui();
}

function create_ui() {
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('red').mousePressed(function() {
    fill(255, 0, 0, a_alpha);
  });
  createButton('yellow').mousePressed(function() {
    fill(255, 255, 0, a_alpha); // Yellow, alpha 20
  });
  createButton('random').mousePressed(function() {
    fill(random(0, 255), random(0, 255), random(0, 255), a_alpha);
  });
  createElement('br')
  // createSlider(min, max, [value], [step])
  createSlider(0, 255, a_alpha).input(function() {
    a_alpha = this.value();
  });
  createSpan().id('ialpha');
  createElement('br')
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#ialpha').html('[a_alpha=' + a_alpha + '] ')
  select('#imx').html('[circleX=' + circleX + '] ')
  select('#imy').html('[circleY=' + circleY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

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