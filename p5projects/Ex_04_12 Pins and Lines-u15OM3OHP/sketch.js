function setup() {
  createCanvas(480, 120);
  fill(255);
  stroke(102);
}

function draw() {
  background(0);
  for (let y = 20; y <= height-20; y += 10) {
    for (let x = 20; x <= width-20; x += 10) {
      ellipse(x, y, 4, 4);
      // Draw a line to the center of the display
      line(x, y, 240, 60);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/u15OM3OHP
// Ex_04_12 Pins and Lines

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_12.js
