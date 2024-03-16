function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  for (var x = 20; x < width; x += 20) {
    var mx = mouseX / 10;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    line(x + offsetA, 20, x - offsetB, 100);
  }
}

// https://editor.p5js.org/jht1493/sketches/SmFX6Ioj_
// Ex_08_08 Draw Randomly

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_08.js
