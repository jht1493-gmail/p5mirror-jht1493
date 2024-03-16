let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  noStroke();
  if (random(1) < 0.2) {
    circle(x, y, spacing);
    fill(random(200, 300));
    //line(x,y,x + spacing,y+spacing);
  } else {
    rect(x, y, spacing, spacing);
    //line(x,y+spacing, x+spacing,y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}

// https://editor.p5js.org/yz4195/sketches/g2tkpR-_6
// algorithmic design yuyan（yvonne）zhang
