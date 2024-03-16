// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

let ystart = 0;
let xstart = 0;
let colorblue = 'rgba(0,125,255,0.6)';
let colorred = 'rgba(255,0,0,0.6)';
let colorgreen = 'rgba(0,255,0,0.6)';

function setup() {
  createCanvas(800, 800);
  console.log('width', width);
  console.log('height', height);
  //
  colorarg(colorblue);
  p5rect();
  //
  xstart = 350;
  colorarg(colorred);
  p5rect();
  //
  ystart = 310;
  xstart = 0;
  colorarg(colorgreen);
  p5rect();
}

function p5rect() {
  p5rect_p();
  p5rect_5();
}

function p5rect_p() {
  // P
  {
    const x = xstart + 10;
    const y = ystart + 100;
    const w = 40;
    const h = 300;
    rect(x, y, w, h);
    const ra = {
      x: x+10,
      y,
      w,
      h
    };
    rect(ra.x, ra.y, ra.w, ra.h);
  }
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])
  rect(xstart + 50, ystart + 100, 100, 40);
  rect(xstart + 50, ystart + 230, 100, 40);
  rect(xstart + 150, ystart + 140, 40, 90);
}

function p5rect_5() {
  // 5
  rect(xstart + 200, ystart + 0, 130, 40);
  rect(xstart + 200, ystart + 40, 40, 60);
  rect(xstart + 200, ystart + 100, 110, 40);
  rect(xstart + 310, ystart + 140, 40, 90);
  rect(xstart + 200, ystart + 230, 110, 40);
}

function colorarg(arg) {
  stroke(arg);
  fill(arg);
}

function draw() {}