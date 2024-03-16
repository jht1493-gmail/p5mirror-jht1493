// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

let ystart = 0;
let xstart = 0;

function setup() {
  createCanvas(800, 800);
  //
  colorblue();
  p5rect();
  //
  xstart = 350;
  colorred();
  p5rect();
  //
  ystart = 310;
  xstart = 0;
  colorgreen();
  p5rect();
}

function p5rect() {
  // P
  rect(xstart + 10, ystart + 100, 40, 300);
  rect(xstart + 50, ystart + 100, 100, 40);
  rect(xstart + 50, ystart + 230, 100, 40);
  rect(xstart + 150, ystart + 140, 40, 90);
  // 5
  rect(xstart + 200, ystart + 0, 130, 40);
  rect(xstart + 200, ystart + 40, 40, 60);
  rect(xstart + 200, ystart + 100, 110, 40);
  rect(xstart + 310, ystart + 140, 40, 90);
  rect(xstart + 200, ystart + 230, 110, 40);
}

function colorblue() {
  stroke('rgba(0,125,255,0.6)');
  fill('rgba(0,125,255,0.6)');
}

function colorred() {
  stroke('rgba(255,0,0,0.6)');
  fill('rgba(255,0,0,0.6)');
}

function colorgreen() {
  stroke('rgba(0,255,0,0.6)');
  fill('rgba(0,255,0,0.6)');
}


function draw() {}