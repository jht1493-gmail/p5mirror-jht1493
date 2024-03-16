function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('red')
  draw_head();
  scale(5);
  translate(5,0)
  fill('green')
  draw_head();
  scale(1/5)
  translate(130,0)
  fill('white')
  draw_head();
  // scale(2);
  // draw_head();
}

function draw_head() {
  circle(10,10,20);
  circle(5,8,5);
  circle(15,8,5);
  ellipse(10,15,10,4);
}