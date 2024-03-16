// For week 2, hand drawn plan
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(100,100,100);
  circle(300,100,100);
  // by trail and error
  // arc(x, y, w, h, start, stop, mode
  arc(200, 200, 200, 100, 0, PI, CHORD);
}