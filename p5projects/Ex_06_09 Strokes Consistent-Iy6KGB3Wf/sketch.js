function setup() {
  createCanvas(280, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  var scalar = mouseX / 60.0;
  scale(scalar);
  strokeWeight(1.0 / scalar);
  rect(-15, -15, 30, 30);
}

// https://editor.p5js.org/jht1493/sketches/Iy6KGB3Wf
// Ex_06_09 Strokes Consistent

// https://github.com/lmccart/gswp5.js-code/blob/master/06_Transform/Ex_06_09.js