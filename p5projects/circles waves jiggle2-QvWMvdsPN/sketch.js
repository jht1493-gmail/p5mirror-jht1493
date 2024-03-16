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

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 320);
  background(204);
  angle = TWO_PI * 0.75;
  // angle = 0;
  step_count = PI * 1.0 / speed;
  // step_count = PI / 2 / speed;
  step_index = 0;
  jiggle = step_count * 0.20
  console.log(frameCount, 'step_count', step_count)
}

function draw() {
  let x1 = x0 + cos(angle) * rad;
  let y1 = y0 + sin(angle) * rad;
  ellipse( x1, y1, cir_len, cir_len);
  // line(offsetX, offsetY, x, y)
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
    // step_count += jiggle;
    step_index = 0;
    speed = -speed;
    let x2 = x0;
    let y2 = y0 + rsize*2;
    let dx = x2 - x1;
    let dy = y2 - y1;
    angle = atan2(-dy,-dx)
    // console.log('angle', angle)
    rad = sqrt(dx*dx + dy*dy)
    y0 = y2;
    if (y0 > height) {
      rad = rsize
      y0 = rsize;
      x0 += rsize*2;
      if (x0 > width) {
        x0 = rsize;
      }
    }
  }
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
