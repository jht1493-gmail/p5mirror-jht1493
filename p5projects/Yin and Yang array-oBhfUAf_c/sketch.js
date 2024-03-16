// https://editor.p5js.org/jht1493/sketches/oBhfUAf_c
// Yin and Yang array

// let ob2 = {};
let objs = [];
let ngrid = 3;

function setup() {
  createCanvas(500, 500);
  noStroke();

  // ob2.xloc = width / 2;
  // ob2.yloc = height / 2;
  // ob2.xsize = width / 2;
  // ob2.ysize = height / 2;
  // ob2.angle = radians(90);
  // ob2.astep = radians(-0.5);

  let xsize = width / ngrid;
  let ysize = height / ngrid;
  let astep = 0.5;
  let dir = -1;
  
  for (let y = 0; y < height; y += xsize) {
    for (let x = 0; x < width; x += ysize) {
      
      // Create a new object for this x & y location
      let ob1 = {};
      ob1.xloc = x + xsize / 2;
      ob1.yloc = y + ysize / 2;
      ob1.xsize = xsize;
      ob1.ysize = xsize;
      ob1.angle = radians(-90);
      // Each shape will have alternating spin
      ob1.astep = radians(astep * dir);
      
      // Add the object the array
      objs.push(ob1);
      
      // Change the direction of the spin
      dir = dir * -1;
    }
  }
}

function draw() {
  background(220);
  // draw_yinyang(ob2);
  for (let index = 0; index < objs.length; index++) {
    let aob = objs[index]
    draw_yinyang(aob);
  }
  // for ... of is concise form of the above for loop
  // for (let aob of objs) {
  //   draw_yinyang(aob);
  // }
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

  ob.angle += ob.astep;
}

// https://editor.p5js.org/jht1493/sketches/Qm20nAEJD
// Yin and Yang duo

// https://editor.p5js.org/jht1493/sketches/Dlu-w9dla
// Yin and Yang parameters

// https://editor.p5js.org/jht1493/sketches/D9oMUvxe1
// Yin and Yang func

// https://editor.p5js.org/Antman/sketches/HyKLFwHiX
// Yin and Yang by Antman
