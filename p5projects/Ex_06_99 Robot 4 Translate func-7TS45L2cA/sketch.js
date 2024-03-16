function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  
  let x = 0; // X-offet from mouse
  let y = 440; // Y-coordinate
  let radius = 45; // Head Radius
  let bodyHeight = 180; // Body Height
  let neckHeight = 40; // Neck Height
  draw_bot(x, y, radius, bodyHeight, neckHeight);
  
  draw_bot(x+100, y, radius/2, bodyHeight/4, neckHeight)
}

function draw_bot(x, y, radius, bodyHeight, neckHeight) {
  let neckY = -1 * (bodyHeight + neckHeight + radius);
  push();
  translate(mouseX+x, y); // Move all to (mouseX, y)
  if (mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6); // 60% size when mouse is pressed
  }
  // Body
  noStroke();
  fill(102);
  ellipse(0, -33, 33, 33);
  fill(0);
  rect(-45, -bodyHeight, 90, bodyHeight - 33);
  // Neck
  stroke(102);
  line(12, -bodyHeight, 12, neckY);
  // Hair
  push();
  translate(12, neckY);
  let angle = -PI / 30.0;
  for (let i = 0; i <= 30; i++) {
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop();
  // Head
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY - 6, 14, 14);
  fill(0);
  ellipse(24, neckY - 6, 3, 3);
  pop();
}

// https://editor.p5js.org/jht1493/sketches/7TS45L2cA
// Ex_06_99 Robot 4: Translate func

// https://editor.p5js.org/jht1493/sketches/yGDQyWCf7
// Ex_06_99 Robot 4: Translate

// https://github.com/lmccart/gswp5.js-code/blob/master/Robots/Robot04_Transform.js