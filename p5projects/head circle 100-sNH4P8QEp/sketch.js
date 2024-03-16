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
  circle(50,50,100);
  circle(25,40,25);
  circle(75,40,25);
  ellipse(50,75,50,20);
}