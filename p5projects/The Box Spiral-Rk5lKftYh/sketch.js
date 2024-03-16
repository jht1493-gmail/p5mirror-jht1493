// The Box Spiral

// State of spiral
let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;
let colors = [255,0];
let colorIndex = 0;
// Scale / resolution
let stepSize = 5;
let totalSteps;
let aSize = 400;

function setup() {
  createCanvas(aSize, aSize);

  // set up spiral
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);

  fill(colors[colorIndex]);
  stroke(colors[colorIndex]);
}

function draw() {
  // Connect current to previous with a line
  line(x, y, px, py);
  px = x;
  py = y;
  // Move according to state
  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }
  // Change state
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;
  // Are we done?
  if (step > totalSteps) {
    nextCycle();
  }
}

function nextCycle() {
  let cx = width/2;
  let cy = height/2;
  let rx = random(width/10);
  let ry = random(height/10)
  x = cx + random(-rx,rx)
  y = cy + random(-ry,ry)
  step = 1;
  numSteps = 1;
  px = x;
  py = y;
  colorIndex = (colorIndex + 1) % colors.length;
  fill(colors[colorIndex]);
  stroke(colors[colorIndex]);
}

function mousePressed() {
  nextCycle()
}

function xxx() {
  x = mouseX;
  y = mouseY;
  step = 1;
  numSteps = 1;
  px = x;
  py = y;
}

// https://editor.p5js.org/jht1493/sketches/Rk5lKftYh
// The Box Spiral

// https://editor.p5js.org/jht1493/sketches/IY3XrOjnX

// https://editor.p5js.org/codingtrain/sketches/0Ud-XsaYb
// CC 167: Prime (Ulam) Spiral

// The Prime Spiral (aka Ulam Spiral)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/167-prime-spiral.html
// https://youtu.be/a35KWEjRvc0

// Prime Spiral: https://editor.p5js.org/codingtrain/sketches/0Ud-XsaYb
// Number Spiral: https://editor.p5js.org/codingtrain/sketches/Zs65bV-Al
// Prime vs Random Spiral: https://editor.p5js.org/codingtrain/sketches/3np1hBlXD
// Shapes and Color: https://editor.p5js.org/codingtrain/sketches/mCvvSKpZ5
// Prime Spiral 3D: https://editor.p5js.org/codingtrain/sketches/-eX078HZ5
