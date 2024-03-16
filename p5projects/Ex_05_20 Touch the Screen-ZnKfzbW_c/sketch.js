// !!@ Not tested on mobile device

function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  line(20, 20, 220, 100);
  // !!@ touchIsDown no longer supported
  // if (touchIsDown) {
  //   line(220, 20, 20, 100);
  // }
}

function touchMoved() {
  line(220, 20, 20, 100);
  // prevent default
  return false;
}

// https://editor.p5js.org/jht1493/sketches/ZnKfzbW_c
// Ex_05_20 Touch the Screen

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_20.js