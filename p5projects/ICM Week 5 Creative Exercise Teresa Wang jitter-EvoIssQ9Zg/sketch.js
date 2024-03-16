// TRY: make tornardo move
// TRY: change mousePressed to have tree appear at mouse pos
// TRY: fix mousePressed using createGraphics
// TRY: debug function mousePressed, is it executed?

function setup() {
  createCanvas(600, 400);
  frameRate(5);
}

function draw() {
  // TRY: commenting out background
  background(220);
  fill(100, 100);
  drawTornado(200, 200, 10, 5);
  tree(50, 60, 5, 30, 20);
  tree(300, 300, 5, 30, 20);
  tree(500, 250, 5, 30, 20);
}

// how can I make the tornardo move?
function drawTornado(xpos, ypos, width, height) {
  // let xpos = a;
  // let ypos = b;
  // let width = c;
  // let height = d;
  for (i = 1; i < 10; i = i + 1) {
    stroke(250);
    ellipse(xpos, ypos, width, height);
    width = width + 10;
    height = height + 5;
    xpos = xpos + 1;
    ypos = ypos - 10;
    // if (xpos == 210 || xpos == 211 || xpos == 212) {
    //   xpos = 200;
    // } else {
      xpos = xpos + random([-5,5]);
    // }
  }
}

function tree(x, y, rw, rh, d) {
  noStroke();
  fill(188, 143, 143, 100);
  rect(x, y, rw, rh, PI);
  fill(85, 107, 47, 200);
  ellipse(x + rw / 2, y + d / 10, d);
}

//this won't work,
// even when I try just a rectangle
// instead of my tree function
function mousePressed() {
  let x = random(100, 500);
  let y = random(200, 300);
  let rw = random(50, 10);
  let rh = random(50, 10);
  let d = random(50, 10);
  tree(x, y, rw, rh, d);
}

// https://editor.p5js.org/jht1493/sketches/UlVOmPiV9

// https://editor.p5js.org/qiqirathwang/sketches/V3KOjDg_E
// ICM Week 5 Creative Exercise Teresa Wang
