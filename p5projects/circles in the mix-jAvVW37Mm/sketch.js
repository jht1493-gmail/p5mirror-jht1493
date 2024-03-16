let angle = 0.0;
let rsize = 40;
let offsetX = rsize;
let offsetY = rsize;
let rad = 20*2;
let speed = 0.05;
let cir_len = 5;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 320);
  background(204);
  angleEnd = TWO_PI;
}

function draw() {
  let x = offsetX + cos(angle) * rad;
  let y = offsetY + sin(angle) * rad;
  ellipse( x, y, cir_len, cir_len);
  // line(offsetX, offsetY, x, y)
  angle += speed;
  if (angle > TWO_PI) {
    offsetX += rsize*2;
    angle = 0;
    if (offsetX > width) {
      offsetX = rsize;
      offsetY += rsize*2;
      if (offsetY > height) {
        offsetY = rsize;
      }
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/jAvVW37Mm
// circles in the mix

// https://editor.p5js.org/jht1493/sketches/0IZtaK_fH
// Ex_08_14 Circular Motion

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_14.js
