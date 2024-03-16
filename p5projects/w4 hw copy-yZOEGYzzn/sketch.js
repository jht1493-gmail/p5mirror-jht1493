let x = 0
y = 0
spacing = 20;

function setup() {
  createCanvas(600, 600);
  background(130, 100, 255, 60);
}

function draw() {
  stroke(random(255), random(255), random(100));
  strokeWeight(random(0.4));
  if (random(1) < 0.5) {
    noFill();
    ellipse(x+spacing/2, y+spacing/2, spacing, spacing);
  } else {
    // noStroke();
    noFill();
    stroke(0, 255, 255);
    strokeWeight(1.5);
    rect(x, y, 20);
  }

  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}

// https://editor.p5js.org/Hoj09/sketches/a1akLrgRv
