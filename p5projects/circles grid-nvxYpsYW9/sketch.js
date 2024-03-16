let angle = 0.0;
let rsize = 40;
let x0 = rsize;
let y0 = rsize;
let rad = rsize;
let speed = 0.05;
let cir_len = 5;
let step_count;
let step_index;
let jiggle;
let loopFlag = 1;
let startX;
let startY;
let step_count_start;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 320);
  background(204);
  // angle = TWO_PI * 0.75;
  angle = 0;
  // step_count = PI * 1.2 / speed;
  step_count_start = PI / 2 / speed;
  step_count = step_count_start;
  step_index = 0;
  jiggle = step_count * 0.20
  console.log(frameCount, 'step_count', step_count)
  startX = 0;
  startY = 0;
  x0 = startX;
  y0 = startY;
}

function draw() {
  let dx = cos(angle) * rad;
  let x1 = x0 + dx;
  let dy = sin(angle) * rad;
  let y1 = y0 + dy;
  ellipse( x1, y1, cir_len, cir_len);
  // line(x0, y0, x1, y1)
  
  let offy = y1 > height || y1 < 0
  let offx = x1 > width || x1 < 0
  if (offy || offx) {
    nextGrid();
    return;
  }

  angle += speed;
  if (angle > TWO_PI) {
    angle -= TWO_PI;
  }
  else if (angle < -TWO_PI) {
    angle += TWO_PI;
  }
  // console.log(frameCount, 'angle', angle)
  step_index++;
  if (step_index > step_count) {
    step_count += random(-jiggle,jiggle)
    if (step_count < 0) {
      step_count = step_count_start;
    }
    // step_count += jiggle;
    step_index = 0;
    speed = -speed;
    x0 = x0 + dx*2;
    y0 = y0 + dy*2;
    angle += PI
  }
}

function nextGrid() {
  startX += rsize;
  if (startX > width) {
    startX = 0
    startY += rsize;
    if (startY > height) {
      startY = 0
    }
  }
  x0 = startX
  y0 = startY
}

function mousePressed() {
  if (loopFlag) {
    noLoop();
    loopFlag = 0;
  }
  else {
    loop();
    loopFlag = 1;
  }
}

// https://editor.p5js.org/jht1493/sketches/nvxYpsYW9
// circles grid

// https://editor.p5js.org/jht1493/sketches/QvWMvdsPN
// circles waves jiggle2

// https://editor.p5js.org/jht1493/sketches/6m4rTU_M1
// circles waves jiggle

// https://editor.p5js.org/jht1493/sketches/XnsQ-CAuV
// circles black waves

// https://editor.p5js.org/jht1493/sketches/xZGAWtzf_
// circles black pie

// https://editor.p5js.org/jht1493/sketches/jAvVW37Mm
// circles in the mix

// https://editor.p5js.org/jht1493/sketches/0IZtaK_fH
// Ex_08_14 Circular Motion

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_14.js
