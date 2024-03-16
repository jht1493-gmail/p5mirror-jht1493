// https://editor.p5js.org/jht1493/sketches/H-IXB_Xf0
// using iframe and frameRate to give 0.5 second flash

let iframe = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(2)
}

function draw() {
  background(220);
  iframe++;
  if (iframe == 2) {
    rect(100, 100, 200, 200);
  }
  if (iframe > 2) {
    iframe = 0;
  }
}