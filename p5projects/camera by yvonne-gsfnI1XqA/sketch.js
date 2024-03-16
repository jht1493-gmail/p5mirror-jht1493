let cap;

function setup() {
  createCanvas(400, 400);
  cap = createCapture(VIDEO);
  cap.hide();
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(50);
  fill(100, 200, 170);
  cap.loadPixels();
  for (let cy = 0; cy < cap.height; cy += 10) {
    for (let cx = 0; cx < cap.width; cx += 5) {
      let offset = (cy * cap.width + cx) * 4;
      let xpos = (cx / cap.width) * height;
      let ypos = (cy / cap.height) * width;
      rect(xpos, ypos, 1, 10 * (cap.pixels[offset + 1] / 300));
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/gsfnI1XqA

// https://editor.p5js.org/yz4195/sketches/ChwERyGIm
// camera by yvonne
