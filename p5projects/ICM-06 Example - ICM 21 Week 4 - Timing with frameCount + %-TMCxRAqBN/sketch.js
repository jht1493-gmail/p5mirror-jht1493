let r, g, b;
let xpos = 0;

function setup() {
  createCanvas(400, 400);
  // frameRate(1);
}

function draw() {
  if (frameCount % 90 == 0) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  background(r, g, b);

  circle(xpos, width / 2, 50);
  xpos += 1;
}

// https://editor.p5js.org/enickles/sketches/j7XeP08uf
// ICM-06 Example - ICM 21 Week 4 - Timing with frameCount + %
