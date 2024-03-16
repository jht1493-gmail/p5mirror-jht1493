function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);

  draw_cret(0, 255);

  translate(330, 0);
  scale(-1, 1);
  draw_cret(255, 0);

  translate(-50, 60);
  scale(0.5, 0.5);
  draw_cret([100, 100, 100, 100], 100);

  translate(-80, 0);
  draw_cret([200, 200, 0, 100], 0);

  translate(-80, 0);
  draw_cret([200, 0, 0, 100], 0);

  translate(-80, 0);
  draw_cret([200, 0, 200, 100], 0);

}

function draw_cret(bodyColor, eyeColor) {
  print('draw_cret bodyColor=',bodyColor,'eyeColor=',eyeColor)
  fill(bodyColor);
  beginShape();
  vertex(50 - 50, 120);
  vertex(100 - 50, 90);
  vertex(110 - 50, 60);
  vertex(80 - 50, 20);
  vertex(210 - 50, 60);
  vertex(160 - 50, 80);
  vertex(200 - 50, 90);
  vertex(140 - 50, 100);
  vertex(130 - 50, 120);
  endShape();
  fill(eyeColor); // Correction
  ellipse(155 - 50, 60, 8, 8);
}

// https://editor.p5js.org/jht1493/sketches/fRJikQjei
// 2.9 Ex_03_20 Two Creatures func

// https://editor.p5js.org/jht1493/sketches/mPX1b9278
// Ex_03_20 Two Creatures

// https://github.com/lmccart/gswp5.js-code/blob/master/03_Draw/Example_03_20.js