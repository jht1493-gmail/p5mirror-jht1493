var col = {
  r: 255,
  g: 230,
  b: 230,
  alpha: 100
}

var backcol = 100;

var ball = {
  x: 100,
  Y: 100
}

let extraCanvas;

function setup() {
  createCanvas(600, 400);
  // extraCanvas = createGraphics(600, 400);
  // extraCanvas.clear();
}

function draw() {
  // background(255, 204, backcol)
  backcol = (mouseX / 3);
  noStroke();
  stroke(0);
  strokeWeight(1);
  fill(153, 204, 255);
  ellipse(ball.x, 200, 100, 100);
  ball.x = random (280,280+width/10)
  frameRate(10)

  if (mouseIsPressed) {
    fill(col.r, col.g, col.b, col.alpha);
    noStroke();
    col.g = map(mouseX, 0, width / 2, 0, height / 2);
    col.b = map(mouseY, 0, width / 2, 0, height / 2);
    col.alpha = random(100, 255)
    ellipse(mouseX, mouseY, 50, 50)
  }
  frameRate(20)

  // image(extraCanvas, 0, 0)
}

// https://editor.p5js.org/cloveria2/sketches/SfwM3xIuI
