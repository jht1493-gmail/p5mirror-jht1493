let max_count = 5;
// let x_pos = 0;
// let y_pos = 100;

function setup() {
  createCanvas(400, 400);
  // background(220);
}

function draw() {
  background(220);
  let x_pos = 0;
  let y_pos = mouseY;
  while (x_pos < width) {
    rect(x_pos, y_pos, 50, 50);
    // rect(x_pos + 50, y_pos, 50, 50);
    // rect(x_pos + 100, y_pos, 50, 50);

    x_pos = x_pos + 50;
    print('x_pos', x_pos);
  }
}