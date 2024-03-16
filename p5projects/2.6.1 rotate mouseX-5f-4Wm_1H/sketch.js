function setup() {
  createCanvas(400, 400);
  background(204);
  // angleMode(DEGREES);
}

function draw() {
  background(204);

  translate(width / 2, height / 2);
  //   in order to see the full rotation on the screen
  //   must first translate the origin then rotate.
  rotate(mouseX / 20);

  rect(10, 10, 20, 20);
  line(1, 1, 100, 1);
  line(1, 1, 1, 100);
  line(1, 1, 100, 100);
  rect(100, 100, 20, 20);
}

// https://editor.p5js.org/jht1493/sketches/5f-4Wm_1H
// 2.6.1 rotate mouseX

// https://editor.p5js.org/kushinda/sketches/vB2Jfg-mm
// rotateExperiment

// https://editor.p5js.org/jht1493/sketches/7tw-3XmNx
// Ex_06_03 Corner Rotation
