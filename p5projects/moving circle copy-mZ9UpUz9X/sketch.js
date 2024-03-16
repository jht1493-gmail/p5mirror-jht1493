let x = 320;
let y = 180;

let r; 
let g;
let b;

function setup() {
  createCanvas(640, 360);
  r = random(255);
  g = random(255);
  b = random(255);
}


function draw() {
  background(255);

  fill(r, g, b, 100);
  ellipse(x, y, 50, 50);

  x = x + random(-1, 1);
  y = y + random(-1, 1);
}