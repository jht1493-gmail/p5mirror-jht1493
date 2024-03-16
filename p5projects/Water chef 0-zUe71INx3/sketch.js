var n = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noStroke();
  let colw = width / n 
  let colh = height / n
  for (x = 0; x < width; x += colw * 2) {
    for (y = 0; y < height; y += colh * 2) {
      fill(0);
      rect(x, y, colw, colh)
    }
  }
  for (x = colw; x < width; x += colw * 2) {
    for (y = colh; y < height; y += colh * 2) {
      fill(0);
      rect(x, y, colw, colh)
    }
  }
}