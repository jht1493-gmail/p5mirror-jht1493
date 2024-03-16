// https://editor.p5js.org/jht1493/sketches/gjAK4v51E
// 4.0 for loop example

function setup() {
  createCanvas(400, 200);
  background(220);
  let len = width / 10;
  let x = 0;
  for (y = 0; y < height; y += len) {
    rect(x, y, len, len);
  }
  y = 100;
  for (let x = 0; x < width; x += 50) {
    rect(x, y, len, len);
  }
}

// function draw() {
//   background(220);
// }
