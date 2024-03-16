// https://editor.p5js.org/jht1493/sketches/ZwUDZXioq
// 4.0 for loop example

let xlen;
let ylen;

function setup() {
  createCanvas(400, 200);
  background(220);
  ylen = height / 10;
  xlen = width / 10;
  for (let y = 0; y < height; y += ylen) {
    for (let x = 0; x < width; x += xlen) {
      console.log('y', y, 'x', x);
      rect(x, y, 10, 10);
    }
  }
}

// function draw() {
//   background(220);
// }
