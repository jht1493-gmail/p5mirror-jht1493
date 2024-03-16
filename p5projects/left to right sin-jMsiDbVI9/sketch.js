let x = 0;
let xcoords = [];
let nstep = 40;
let ssize = 10;

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(5);
  let xwidth = width;
  ssize = xwidth / nstep;
  for (let y = 0; y < nstep; y++) {
    let v = sin(TWO_PI * (y / nstep));
    let xc = map(v, -1.0, 1.0, 0, xwidth);
    xcoords[y] = xc;
  }
}

function draw() {
  for (let y = 0; y < nstep; y++) {
    let xc = xcoords[y ];
    if (x < xc) {
      rect(x, y * ssize, ssize, ssize);
    }
  }
  x += 10;
  if (x > width) {
    // x = 0;
    // background(220);
    noLoop();
  }
}
