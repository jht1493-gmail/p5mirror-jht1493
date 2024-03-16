let r, g, b;

function setup() {
  createCanvas(480*2, 630);
  r = random(100, 255);
  b = random(100, 255);
  g = random(100, 255);
}

function draw() {
  background(r, b, g);

  ellen(0,0);
  ellen(200,0);
  ellen(400,0);
}

function ellen(x, y) {
  push();
  translate(x, y);
  scale(0.5);
  // eyes
  fill(240, 180);
  ellipse(160, 230, 100, 50);
  ellipse(340, 260, 100, 50);

  // pupils
  fill(40);
  // original
  // circle(mouseX, 230, 40);
  // circle(330, 260, 40);

  // updated
  // map(value, start1, stop1, start2, stop2, [withinBounds])
  let pupil1_X = map(mouseX, 0, width, 130, 200, true);
  circle(pupil1_X, 230, 40);

  let pupil2_X = map(mouseX, 0, width, 300, 370, true);
  circle(pupil2_X, 260, 40);

  // eyebrows
  stroke(200, 200, 0);
  strokeWeight(4);
  // line (x1, y1, x2, y2)
  let y2 = 100;
  line(140, 200, 160, y2);
  line(160, 200, 180, y2);
  line(180, 200, 200, y2);
  line(200, 200, 220, y2);

  line(320, 230, 340, y2 + 30);
  line(340, 230, 360, y2 + 30);
  line(360, 230, 380, y2 + 30);
  line(380, 230, 400, y2 + 30);

  // mouth
  noStroke();
  fill(240, 20, 0, 200);
  quad(160, 460, 190, 465, 210, 465, 240, 480);
  quad(160, 460, 190, 500, 210, 500, 240, 480);
  
  pop();
}

// https://editor.p5js.org/jht1493/sketches/9YeBcurXF
// ellen funcs xy

// https://editor.p5js.org/jht1493/sketches/gov67__9a
// ellen funcs

// https://editor.p5js.org/jht1493/sketches/HYF86ea7R
// https://editor.p5js.org/enickles/sketches/QakAzdCpv
// ICM-06 Example - ICM 21 Week 2 - Ellen self portrait animated
