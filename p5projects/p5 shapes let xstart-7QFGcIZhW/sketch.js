// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

let ystart = -79;
let xstart = -63;

function setup() {
  createCanvas(680, 880);
  p5rect();
  xstart = 300;
  p5rect();
}

function p5rect() {
  stroke('rgba(0,125,255,0.6)');
  fill('rgba(0,125,255,0.6)');
  rect(xstart+63, ystart + 186, 38, 298);
  rect(xstart+108, ystart + 187, 102, 40);
  rect(xstart+210, ystart + 227, 40, 89);
  rect(xstart+107, ystart + 317, 103, 40);
  rect(xstart+251, ystart + 187, 128, 40);
  rect(xstart+379, ystart + 227, 40, 90);
  rect(xstart+250, ystart + 317, 130, 40);
  rect(xstart+251, ystart + 79, 40, 147);
  rect(xstart+251, ystart + 80, 146, 40);
}

function draw() {}