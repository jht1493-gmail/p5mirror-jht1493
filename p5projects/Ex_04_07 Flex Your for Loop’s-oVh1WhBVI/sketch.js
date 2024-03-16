function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (let i = 20; i < 400; i += 8) {
    line(i, 40, i + 60, 80);
  }
}

// https://editor.p5js.org/jht1493/sketches/oVh1WhBVI
// Ex_04_07 Flex Your for Loop’s

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_07.js
