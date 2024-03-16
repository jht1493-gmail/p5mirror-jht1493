function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  translate(-25, -25);
  if (frameCount % 3 == 0) {
    draw_shape1();
  } else if (frameCount % 3 == 1) {
    draw_shape2();
  } else {
    draw_shape3();
  }
}

function draw_shape1() {
  for (let x = 0; x <= width; x += width / 4) {
    for (let y = 0; y <= height; y += height / 4) {
      background(217, 229, 240, 3);
      noStroke();
      push();
      translate(x, y);
      if ((x / 2) % 2 == 0) {
        rotate(45);
      }
      rect(0, 0, 25, 25);
      pop();
    }
  }
}

function draw_shape2() {
  background(217, 229, 240, 100);
  fill(0, 0, 255);
  angleMode(DEGREES);
  rectMode(CENTER);
  translate(50, 50);
  for (let x = 0; x <= width; x += width / 8) {
    for (let y = 0; y <= height; y += height / 8) {
      noStroke();
      push();
      translate(x, y);
      if ((x / 2) % 2 == 0) {
        rotate(45);
      }
      rect(0, 0, 25, 25);
      pop();
    }
  }
}

function draw_shape3() {
  background(217, 229, 240, 50);
  fill(0, 0, 255);
  angleMode(DEGREES);
  rectMode(CENTER);
  translate(50, 50);
  for (let x = 0; x <= width; x += width / 8) {
    for (let y = 0; y <= height; y += height / 8) {
      //rect(0, 0, 10, 10);
      push();
      translate(x, y);
      if ((x / 2) % 2 == 0) {
        rotate(45);
      }
      //stroke(0);
      fill(217, 229, 240);
      rect(0, 0, 5, 5);
      pop();
    }
  }
}
