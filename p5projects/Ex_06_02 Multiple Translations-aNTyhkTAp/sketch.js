function setup() {
  createCanvas(280, 120);
}

function draw() {
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  translate(35, 10);
  rect(0, 0, 15, 15);
}

// https://editor.p5js.org/jht1493/sketches/aNTyhkTAp
// Ex_06_02 Multiple Translations

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_02.js
