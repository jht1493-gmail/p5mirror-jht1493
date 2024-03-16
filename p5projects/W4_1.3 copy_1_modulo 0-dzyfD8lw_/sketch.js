const n = 10;
// var m = 1;
const a_blue = [0, 0, 255, 120];
const a_white = 255;
let a_band;

function setup() {

  createCanvas(400, 400);
  // background(255)
  // for (var i = 0; i < n; i++) {
  //   noStroke();
  //   fill(255);
  //   rect(width / n * i, 0, width / n, height);
  // }
  a_band = width / n;
}

function draw() {
  background(255)
  // if (m % 2 == 0) {
  for (var i = 0; i < n; i += 1) {
    const after = mouseX > a_band * (i)
    const before = mouseX < a_band * (i + 1)
    const odd = (i % 2) == 1;
    if (after && before && odd) {
      // background(255)
      fill(a_blue);
      // m++;
    } else {
      fill(a_white);
    }
    rect(a_band * i, 0, a_band, height);
    // console.log(frameCount, 'i', i, 'odd', odd);
  }
  // } else {
  //   m++;
  // }
}

// jht: Corrected module odd test
// https://editor.p5js.org/BoweiXx/sketches/fM5L4W_9E