// https://editor.p5js.org/jht1493/sketches/Qm20nAEJD
// Yin and Yang duo

let ob1 = {};

let ob2 = {};

function setup() {
  createCanvas(500, 500);
  ob1.xloc = width / 2;
  ob1.yloc = height / 2;
  ob1.xsize = width;
  ob1.ysize = height;
  ob1.angle = radians(-90);
  ob1.astep = radians(0.5);

  ob2.xloc = width / 2;
  ob2.yloc = height / 2;
  ob2.xsize = width / 2.67;
  ob2.ysize = height / 2.67;
  ob2.angle = radians(90);
  ob2.astep = radians(-0.5);
}

function draw() {
  background(220);
  draw_yinyang(ob1);
  draw_yinyang(ob2);
}

function draw_yinyang(ob) {
  push();

  translate(ob.xloc, ob.yloc);
  rotate(ob.angle);

  strokeWeight(2);
  stroke(0);
  fill(255);
  arc(0, 0, ob.xsize, ob.ysize, 0, PI);
  stroke(255);
  fill(0);
  arc(0, 0, ob.xsize, ob.ysize, PI, TWO_PI);
  noStroke();
  fill(255);
  ellipse(ob.xsize / 4, 0, ob.xsize / 2, ob.ysize / 2);
  fill(0);
  ellipse(-ob.xsize / 4, 0, ob.xsize / 2, ob.ysize / 2);
  fill(255);
  ellipse(-ob.xsize / 4, 0, ob.xsize / 8, ob.ysize / 8);
  fill(0);
  ellipse(ob.xsize / 4, 0, ob.xsize / 8, ob.ysize / 8);

  pop();

  // ob.angle += 0.01;
  ob.angle += ob.astep;
}

// https://editor.p5js.org/jht1493/sketches/Dlu-w9dla
// Yin and Yang parameters

// https://editor.p5js.org/jht1493/sketches/D9oMUvxe1
// Yin and Yang func

// https://editor.p5js.org/Antman/sketches/HyKLFwHiX
// Yin and Yang by Antman
