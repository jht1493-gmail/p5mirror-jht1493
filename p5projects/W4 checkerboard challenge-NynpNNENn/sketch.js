var n = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noStroke();
  let colw = width / n 
  let colh = height / n
  let firstWhite = false;
  for (x = 0; x < width; x += colw ) {
    let isWhite = firstWhite
    for (y = 0; y < height; y += colh ) {
      if (isWhite) {
        fill(255)
      }
      else {      
        fill(0);
      }
      rect(x, y, colw, colh)
      isWhite = ! isWhite;
    }
    firstWhite = ! firstWhite;
  }
}