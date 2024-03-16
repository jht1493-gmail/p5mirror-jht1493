let x = 80;
let y = 30;
let w = 80;
let h = 60;

function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  if ((mouseX > x) && (mouseX < x + w) &&
    (mouseY > y) && (mouseY < y + h)) {
    fill(0);
  } else {
    fill(255);
  }
  rect(x, y, w, h);
}

// https://editor.p5js.org/jht1493/sketches/MV2Ifxtaz
// Ex_05_15 The Bounds of a Rectangle

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_15.js