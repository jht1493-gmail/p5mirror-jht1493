let a_move = 0;
let x_pos = 50;

function setup() {
  createCanvas(100, 100)
  createCheckbox('move').changed(function() {
    a_move = this.checked();
  });
  createCheckbox('fill').changed(function() {
    if (this.checked()) {
      fill(0);
    } else {
      noFill();
    }
  });
  noFill();
}

function draw() {
  background(200);
  ellipse(x_pos, 50, 50, 50);
  if (a_move) {
    x_pos = (x_pos + 1) % width;
  }
}

// https://editor.p5js.org/jht1493/sketches/vP21lJkf6
// p5 checkbox inline two

// https://editor.p5js.org/jht1493/sketches/Tv4_-7Qiq
// https://p5js.org/reference/#/p5/changed