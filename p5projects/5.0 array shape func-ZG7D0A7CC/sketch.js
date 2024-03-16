// https://editor.p5js.org/jht1493/sketches/ZG7D0A7CC
// 5.0 array shape func

let nstep = 8;
let ashapes = [myRect, myEllipse, myEllipse];

let shapeIndex = 0;
let xloc = 0;
let yloc = 0;
let xstep;
let ystep;

function setup() {
  createCanvas(400, 400);
    
  xstep = width / nstep;
  ystep = height / nstep;
  background(220);
}

function draw() {
  let shape = next_shape();
  shape(xloc, yloc, xstep, ystep);

  next_location();
}

function next_location() {
  xloc += xstep;
  if (xloc > width) {
    xloc = 0;
    yloc += ystep;
    if (yloc > height) {
      yloc = 0;
    }
  }
}

function next_shape() {
  shapeIndex = (shapeIndex + 1) % ashapes.length;
  return ashapes[shapeIndex];
}

function myRect(xloc, yloc, xsize, ysize) {
  rect(xloc, yloc, xsize, ysize)
}

function myEllipse(xloc, yloc, xsize, ysize) {
  ellipse(xloc+xsize/2, yloc+ysize/2, xsize, ysize)
}


// https://editor.p5js.org/jht1493/sketches/0B8HIn-Dp
// 5.0 array colors func

// https://editor.p5js.org/jht1493/sketches/VAXbwF4ag
// 5.0 array colors rect

// https://editor.p5js.org/jht1493/sketches/akS3a9N6d
// 5.0 array of colors names

// aqua,  blue, fuchsia, green, lime, maroon,
// navy, olive, purple, red, silver, teal, yellow

// https://editor.p5js.org/jht1493/sketches/vhPVm8WCWX
// color array
