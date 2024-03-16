var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = 0.1;
var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() { 
  createCanvas(600, 600);
  noStroke();
  background (0);
} 

function draw() { 
  col.r = random(0, 200);
  col.g = random(0, 250);
  col.b = random(100, 250);
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(x, y, 5, 5);
  angle += speed;
  scalar += speed;
  
}

// https://editor.p5js.org/hyershin/sketches/SkG_S5K3W
// Spiral