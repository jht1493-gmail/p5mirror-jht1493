// p5 rect
// Source: http://yining1023.github.io/p5PlayGround/

let xstart = 0;
let ystart = 0;
let colorblue = 'rgba(0,125,255,0.6)';
let colorred = 'rgba(255,0,0,0.6)';
let colorgreen = 'rgba(0,255,0,0.6)';

function setup() {
  createCanvas(800, 800);

  function s1() {
    xstart = 0;
    ystart = 0;
    set_color(colorblue);
    draw_letters();
  }

  function s2() {
    xstart = 350;
    ystart = 0;
    set_color(colorred);
    draw_letters();
  }

  function s3() {
    xstart = 0;
    ystart = 310;
    set_color(colorgreen);
    draw_letters();
  }
  s1();
  s2();
  s3();
}

function draw_letters() {
  draw_p();
  draw_5();
}

function draw_p() {
  // rect(xstart + 10, ystart + 100, 100, 40);
  {
    const x = xstart + 10;
    const y = ystart + 100;
    const w = 40;
    const h = 300;
    rect(x, y, w, h);
  }
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])
  rect(xstart + 50, ystart + 100, 100, 40);
  rect(xstart + 50, ystart + 230, 100, 40);
  rect(xstart + 150, ystart + 140, 40, 90);
}

function draw_5() {
  rect(xstart + 200, ystart + 0, 130, 40);
  rect(xstart + 200, ystart + 40, 40, 60);
  rect(xstart + 200, ystart + 100, 110, 40);
  rect(xstart + 310, ystart + 140, 40, 90);
  rect(xstart + 200, ystart + 230, 110, 40);
}

function set_color(arg) {
  stroke(arg);
  fill(arg);
}

function draw() {}