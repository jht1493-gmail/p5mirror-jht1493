//For future reference, where would I have to put fill color so that it doesn't flicker?

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  for (x = 20; x <= width; x = x + 50) {
    for (y = 5; y <= height; y = y + 75) {
      fill(x, y, 10, random(10, 100));
      rect(x, y, 10);
    }
  }
}

// https://editor.p5js.org/qiqirathwang/sketches/Sh4WcwKHY
// ICM Week 4 Exercise 6 Teresa
