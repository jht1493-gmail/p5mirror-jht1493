function setup() {
  createCanvas(480, 120);
  strokeWeight(8);
}

function draw() {
  background(204);
  for (let i = 20; i < 400; i += 60) {
    line(i, 40, i + 60, 80);
  }
}

// https://editor.p5js.org/jht1493/sketches/h0eBcXsIC
// Ex_04_06 Use a for Loop

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_06.js
