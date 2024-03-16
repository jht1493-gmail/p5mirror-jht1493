let x_pos = 0;
let y_pos = 0;
let a_size = 50;

// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  // frameRate(10);
  background(255);

  // Fill canvas using for-loop
  // for (y_pos = 0; y_pos < height; y_pos += a_size) {
  //   for (x_pos = 0; x_pos < width; x_pos += a_size) {
  //     draw_rect();
  //   }
  // }

  // Fill canvas using while-loop
  // y_pos = 0;
  // while (y_pos < height) {
  //   x_pos = 0;
  //   while (x_pos < width) {
  //     draw_rect();
  //     x_pos += a_size;
  //   }
  //   y_pos += a_size;
  // }

  // Draw one line of rects using for-loop
  // for (x_pos = 0; x_pos < width; x_pos += a_size) {
  //   draw_one();
  // }

  // Draw one line of rects using while-loop
  // x_pos = 0;
  // while (x_pos < width) {
  //   draw_rect();
  //   x_pos += a_size;
  // }

  // Draw a few rects
  draw_rect();
  x_pos += a_size;
  draw_rect();
  x_pos += a_size;
  draw_rect();
}

function draw_rect() {
  fill(random(0, 255));
  rect(x_pos, y_pos, a_size, a_size);
}