function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  draw_head();
  
  translate(100,0);
  draw_head();

  translate(100,0);
  draw_head();

  translate(100,0);
  draw_head();
}

function draw_head() {
  circle(10*5,10*5,20*5);
  circle(5*5,8*5,5*5);
  circle(15*5,8*5,5*5);
  ellipse(10*5,15*5,10*5,4*5);
}