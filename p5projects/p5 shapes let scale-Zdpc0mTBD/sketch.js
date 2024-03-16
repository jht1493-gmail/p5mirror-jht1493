// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

let ystart = -79+50;
let xstart = -63+50;
let scale = 0.5;

function setup() {
  createCanvas(680, 880);
  p5rect();
  ystart = 200;
  p5rect();
}

function p5rect() {
  stroke('rgba(0,125,255,0.6)');
  fill('rgba(0,125,255,0.6)');
  rect(xstart+63*scale, ystart + 186*scale, 38*scale, 298*scale);
  rect(xstart+108*scale, ystart + 187*scale, 102*scale, 40*scale);
  rect(xstart+210*scale, ystart + 227*scale, 40*scale, 89*scale);
  rect(xstart+107*scale, ystart + 317*scale, 103*scale, 40*scale);
  rect(xstart+251*scale, ystart + 187*scale, 128*scale, 40*scale);
  rect(xstart+379*scale, ystart + 227*scale, 40*scale, 90*scale);
  rect(xstart+250*scale, ystart + 317*scale, 130*scale, 40*scale);
  rect(xstart+251*scale, ystart + 79*scale, 40*scale, 147*scale);
  rect(xstart+251*scale, ystart + 80*scale, 146*scale, 40*scale);
}

function draw() {}