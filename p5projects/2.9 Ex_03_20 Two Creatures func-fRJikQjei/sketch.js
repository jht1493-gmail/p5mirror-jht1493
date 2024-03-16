function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  
  draw_cret();
  
  translate(450,0);
  scale(-1,1);
  draw_cret();
  
}

function draw_cret() {
  // Left creature
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
}

// https://editor.p5js.org/jht1493/sketches/fRJikQjei
// 2.9 Ex_03_20 Two Creatures func

// https://editor.p5js.org/jht1493/sketches/mPX1b9278
// Ex_03_20 Two Creatures

// https://github.com/lmccart/gswp5.js-code/blob/master/03_Draw/Example_03_20.js