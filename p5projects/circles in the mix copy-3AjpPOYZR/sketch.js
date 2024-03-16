let angle = 0.0;
let rsize = 60;
let offsetX = rsize;
let offsetY = rsize;
let rad = 60;
let speed = 0.05;
let rad2 = rad;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204);
  angleEnd = TWO_PI;
  noFill();
}

function draw() {
  let x = offsetX + cos(angle) * rad2;
  let y = offsetY + sin(angle) * rad2;
  ellipse( x, y, 40, 40);
  angle += speed;
  if (angle > TWO_PI) {
    // rad2 = random(rad, rad*2);
    rad2 = random([rad, rad*0.5, rad*1.5]);
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
