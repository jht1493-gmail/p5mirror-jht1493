var n_col = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noStroke();
  let colw = width / n_col
  let odd = false;
  for (x = 0; x < width; x += colw) {
    // print('x', x, 'odd', odd)
    if (mouseX > x && mouseX < x + colw) {
      if (odd) {
        fill(0, 0, 255);
      }
      else {
        fill(255);
      }
      rect(x, 0, colw, height)
    }
    odd = ! odd;
  }
}