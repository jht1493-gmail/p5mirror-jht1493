// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  // frameRate(10);
  background(255);
  noStroke();

  let x_pos;
  let y_pos;
  let a_size = 50

  for (y_pos = 0; y_pos <= height; y_pos += a_size) {
    for (x_pos = 0; x_pos <= width; x_pos += a_size) {
      draw_one();
      draw_two();
    }
  }

  function draw_one() {
    // noStroke();
    fill(random(255), random(255), random(255));
    rect(x_pos, y_pos, a_size, a_size);
  }

  function draw_two() {
    // noStroke();
    fill(random(255), random(255), random(255), 120);
    // ect(x_pos, y_pos, a_size, a_size);
    circle(x_pos, y_pos, a_size);
  }
}

// https://editor.p5js.org/phil-in-a-can/sketches/rtN_vgRGJ