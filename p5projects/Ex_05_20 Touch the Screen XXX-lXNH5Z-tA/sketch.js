function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  line(20, 20, 220, 100);
  // if (touchIsDown) {
  //   line(220, 20, 20, 100);
  // }
}

function touchMoved() {
  line(220, 20, 20, 100);
  // prevent default
  return false;
}


// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_20.js