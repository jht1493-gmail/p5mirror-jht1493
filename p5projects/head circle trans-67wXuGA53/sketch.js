function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  translate(5,5);
  draw_head();
  
  translate(25,0);
  draw_head();

  translate(25,0);
  draw_head();

  translate(25,0);
  draw_head();
}

function draw_head() {
  circle(10,10,20);
  circle(5,8,5);
  circle(15,8,5);
  ellipse(10,15,10,4);
}