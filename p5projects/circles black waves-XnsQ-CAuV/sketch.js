let angle = 0.0;
let rsize = 40;
let offsetX = rsize;
let offsetY = rsize;
let rad = rsize;
let speed = 0.05;
let cir_len = 5;
let step_count;
let step_index;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 320);
  background(204);
  angle = TWO_PI * 0.75;
  step_count = PI / speed;
  step_index = 0;
}

function draw() {
  let x = offsetX + cos(angle) * rad;
  let y = offsetY + sin(angle) * rad;
  ellipse( x, y, cir_len, cir_len);
  // line(offsetX, offsetY, x, y)
  angle += speed;
  step_index++;
  if (step_index > step_count) {
    step_index = 0;
    speed = -speed;
    angle = atan(-rsize,0)
    offsetY += rsize*2;
    if (offsetY > height) {
      offsetY = rsize;
      offsetX += rsize*2;
      if (offsetX > width) {
        offsetX = rsize;
      }
    }
  }
}

function mousePressed() {
  noLoop();
}
// https://editor.p5js.org/jht1493/sketches/XnsQ-CAuV
// circles black waves

// https://editor.p5js.org/jht1493/sketches/xZGAWtzf_
// circles black pie

// https://editor.p5js.org/jht1493/sketches/jAvVW37Mm
// circles in the mix

// https://editor.p5js.org/jht1493/sketches/0IZtaK_fH
// Ex_08_14 Circular Motion

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_14.js
