function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (let i = 20; i < 400; i += 20) {
    line(i, 0, i + i/2, 80);
  }
}

// https://editor.p5js.org/jht1493/sketches/Zxxj1cjH9
// Ex_04_08 Fanning Out the Lines

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_08.js
