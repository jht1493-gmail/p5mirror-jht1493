function setup() {
  createCheckbox(' fill').changed(function() {
    if (this.checked()) {
      fill(0);
    } else {
      noFill();
    }
  });
  createCanvas(100, 100).position(0, 30);
  noFill();
}

function draw() {
  background(200);
  ellipse(50, 50, 50, 50)
}

// https://editor.p5js.org/jht1493/sketches/Tv4_-7Qiq
// https://p5js.org/reference/#/p5/changed