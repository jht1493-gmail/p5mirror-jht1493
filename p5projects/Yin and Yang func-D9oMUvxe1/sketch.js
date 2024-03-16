// https://editor.p5js.org/jht1493/sketches/D9oMUvxe1
// Yin and Yang func

angle = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220)
  draw_yinyang();
}

function draw_yinyang() {
  push();
  translate(width/2, height/2);
  rotate(angle);
  
  strokeWeight(2)
  stroke(0);
  fill(255);
  arc(0, 0, width, height, 0, PI);
  
  stroke(255)
  fill(0);
  arc(0, 0, width, height, PI, TWO_PI);
  
  noStroke();
  fill(255);
  ellipse(width/4, 0, width/2, height/2);
  
  fill(0);
  ellipse(-width/4, 0, width/2, height/2);
  
  fill(255);
  ellipse(-width/4, 0, width/8, height/8);
  
  fill(0);
  ellipse(width/4, 0, width/8, height/8);
  
  pop();

  angle += 0.01;
}

// https://editor.p5js.org/Antman/sketches/HyKLFwHiX
// Yin and Yang by Antman
