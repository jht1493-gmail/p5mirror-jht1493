function setup() {
  createCanvas(480, 120);
  create_ui();
}

function draw() {
  background(204);
  
  // Left creature
  fill(0);  // Correction
  beginShape();
  vertex(50, 120);
  vertex(100, 90);
  vertex(110, 60);
  vertex(80, 20);
  vertex(210, 60);
  vertex(160, 80);
  vertex(200, 90);
  vertex(140, 100);
  vertex(130, 120);
  endShape();
  fill(255);  // Correction
  ellipse(155, 60, 8, 8);

  // Right creature
  fill(255);
  beginShape();
  vertex(370, 120);
  vertex(360, 90);
  vertex(290, 80);
  vertex(340, 70);
  vertex(280, 50);
  vertex(420, 10);
  vertex(390, 50);
  vertex(410, 90);
  vertex(460, 120);
  endShape();
  fill(0);
  ellipse(345, 50, 10, 10);
  
  update_ui();
}

function create_ui() {
  createSpan().id('imx');
  createSpan().id('imy');
  createSpan().id('icc');
}

function update_ui() {
  select('#imx').html('[mouseX=' + mouseX + '] ')
  select('#imy').html('[mouseY=' + mouseY + '] ')
  select('#icc').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/MLzEHAnCh
// Ex_03_20 Two Creatures ui

// https://editor.p5js.org/jht1493/sketches/mPX1b9278
// Ex_03_20 Two Creatures

// https://github.com/lmccart/gswp5.js-code/blob/master/03_Draw/Example_03_20.js