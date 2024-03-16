var shade = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, shade, shade);
  stroke(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100, 10);

  if (mouseX < (width / 4) * 1) {
    fill(255, 220, 220);
    rect(winMouseX, winMouseY, 50, 10, 10);
  }

  if (
    mouseX > width / 3 &&
    mouseX < (width / 3) * 2 &&
    mouseY > 150 &&
    mouseY < 250
  ) {
    rect(winMouseX, winMouseY, 50, 30, 35);
  } else if (mouseX > width / 3 && mouseX < (width / 3) * 2) {
    rect(winMouseX, winMouseY, 50, 10, 10);
  }

  if (mouseX > (width / 3) * 2 && mouseX < width) {
    rect(winMouseX, winMouseY, 50, 10, 10);
  }
}

function mouseDragged() {
  shade = shade + 2;
  if (shade > 255) {
    shade = 0;
  }
}

//https://p5js.org/reference/#/p5/mouseDragged
