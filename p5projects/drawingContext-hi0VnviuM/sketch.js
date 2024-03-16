let a_dc;

function setup() {
  createCanvas(400, 400);
  a_dc = drawingContext;
  print('a_dc', a_dc)
  print('a_dc.getTransform()', a_dc.getTransform())
}

function draw() {
  background(220);
}

// https://p5js.org/reference/#/p5/drawingContext

