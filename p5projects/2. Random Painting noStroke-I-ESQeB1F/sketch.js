function setup() {
  createCanvas(640, 360);
  noStroke()
}

function mousePressed() {
  background(255);
}  
  

function draw() {
  let x = random(width);
  let y = random(height);

  let r = random(255);
  let g = random(255);
  var b = random(255);

  fill(r, g, b, 100);
  ellipse(x, y, 50, 50);
}

// https://editor.p5js.org/icm/sketches/HJg8jfcT3
