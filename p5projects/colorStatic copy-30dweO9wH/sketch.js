// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  // frameRate(10);
  background(255);

  let x_pos;
  let y_pos;
  let a_size = 50;
  let a_size2 = a_size * 2;

  for (y_pos = 0; y_pos <= height; y_pos += a_size) {
    for (x_pos = 0; x_pos <= width; x_pos += a_size) {
      draw_rect();
    }
  }

  for (y_pos = 0; y_pos <= height; y_pos += a_size2) {
    for (x_pos = 0; x_pos <= width; x_pos += a_size2) {
      draw_circle(a_size2);
    }
  }

  function draw_rect() {
    noStroke();
    fill(random_color());
    rect(x_pos, y_pos, a_size, a_size);
  }

  function draw_circle(a_size) {
    noStroke();
    fill(random_color());
    circle(x_pos, y_pos, a_size);
  }
}

function random_color() {
  return color(random(255), random(255), random(255), 110);
}