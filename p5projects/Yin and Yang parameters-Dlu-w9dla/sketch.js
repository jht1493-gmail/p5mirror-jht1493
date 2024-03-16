// https://editor.p5js.org/jht1493/sketches/Dlu-w9dla
// Yin and Yang parameters

let ob = {
  xloc: 0,
  yloc: 0,
  xsize: 0,
  ysize: 0,
  angle: 0,
};

function setup() {
  createCanvas(500, 500);
  noStroke();
  ob.xloc = width / 2;
  ob.yloc = height / 2;
  ob.xsize = width;
  ob.ysize = height;
}

function draw() {
  background(220);
  draw_yinyang(ob);
}

function draw_yinyang(ob) {
  push();

  // translate(width/2, height/2);
  translate(ob.xloc, ob.yloc);
  rotate(ob.angle);

  strokeWeight(2);
  stroke(0);
  fill(255);
  // arc(0, 0, width, height, 0, PI);
  arc(0, 0, ob.xsize, ob.ysize, 0, PI);

  stroke(255);
  fill(0);
  // arc(0, 0, width, height, PI, TWO_PI);
  arc(0, 0, ob.xsize, ob.ysize, PI, TWO_PI);

  noStroke();
  fill(255);
  // ellipse(width/4, 0, width/2, height/2);
  ellipse(ob.xsize / 4, 0, ob.xsize / 2, ob.ysize / 2);

  fill(0);
  // ellipse(-width/4, 0, width/2, height/2);
  ellipse(-ob.xsize / 4, 0, ob.xsize / 2, ob.ysize / 2);

  fill(255);
  // ellipse(-width/4, 0, width/8, height/8);
  ellipse(-ob.xsize / 4, 0, ob.xsize / 8, ob.ysize / 8);

  fill(0);
  // ellipse(width/4, 0, width/8, height/8);
  ellipse(ob.xsize / 4, 0, ob.xsize / 8, ob.ysize / 8);

  pop();

  ob.angle += 0.01;
}

// https://editor.p5js.org/jht1493/sketches/D9oMUvxe1
// Yin and Yang func

// https://editor.p5js.org/Antman/sketches/HyKLFwHiX
// Yin and Yang by Antman
