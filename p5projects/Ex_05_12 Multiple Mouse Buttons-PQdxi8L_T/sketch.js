function setup() {
  createCanvas(120, 120);
  strokeWeight(30);
}

function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(255);
    } else {
      stroke(0);
    }
    line(0, 70, width, 50);
  }
}

// https://editor.p5js.org/jht1493/sketches/PQdxi8L_T
// Ex_05_12 Multiple Mouse Buttons

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_12.js
