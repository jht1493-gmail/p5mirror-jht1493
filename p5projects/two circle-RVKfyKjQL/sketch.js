let c1 = {
  x: 0,
  y: 0,
  d: 180
};
let c2 = {
  x: 0,
  y: 0,
  d: 120
};

function setup() {
  createCanvas(600, 400);

  c1.x = width / 2;
  c1.y = height / 2;
  fill(255);
  // circle(x, y, d)
  circle(c1.x, c1.y, c1.d);
  let r1 = c1.d / 2;
  let a1 = TWO_PI*r1*r1;
  console.log('area a1/2', a1/2);
  
  c2.x = width / 2 - c2.d / 2;
  c2.y = height / 2;
  circle(c2.x, c2.y, c2.d);
  c2.x += c2.d;
  circle(c2.x, c2.y, c2.d);
  let r2 = c2.d / 2;
  let a2 = TWO_PI*r2*r2;
  console.log('area a2', a2);
}

function draw() {
  // background(220);
}