// https://editor.p5js.org/iscodd/sketches/v12F3R-XN
// 
let a, b, c, d, e, f, g, h;
let cnv;

function setup() {
  cnv = createCanvas(400, 500);
  let newCanvasX = (windowWidth - 400) / 2;
  let newCanvasY = (windowHeight - 500) /2;
  cnv.position(newCanvasX, newCanvasY);
  background(0);
}

function draw() {
  // background(0);
  
  a = random(-5, 5);
  b = random(-5, 5);
  c = random(-5, 5);
  d = random(-5, 5);
  e = random(-5, 5);
  f = random(-5, 5);
  g = random(-5, 5);
  h = random(-5, 5);
  
  noFill();
  strokeWeight(0.5);
  stroke(255, 5);

  //face contour
  line(100 + a, 300 + b, 90 + c, 200 + d);
  line(90 + a, 200 + b, 90 + c, 150 + d);
  line(90 + a, 150 + b, 115 + c, 100 + d);
  line(300 + a, 300 + b, 310 + c, 200 + d);
  line(310 + a, 200 + b, 310 + c, 150 + d);
  line(310 + a, 150 + b, 285 + c, 100 + d);
  line(115 + a, 100 + b, 165 + c, 85 + d);
  line(165 + a, 85 + b, 235 + c, 85 + d);
  line(235 + a, 85 + b, 285 + c, 100 + d);
  line(100 + a, 300 + b, 125 + c, 350 + d);
  line(125 + a, 350 + b, 175 + c, 375 + d);
  line(175 + a, 375 + b, 200 + c, 380 + d);
  line(300 + a, 300 + b, 275 + c, 350 + d);
  line(275 + a, 350 + b, 225 + c, 375 + d);
  line(225 + a, 375 + b, 200 + c, 380 + d);
  
  //eyes
  quad(130 + a, 195 + b, 170 + c, 195 + d, 180 + e, 215 + f, 140 + g, 215 + h);
  quad(230 + a, 195 + b, 270 + c, 195 + d, 260 + e, 215 + f, 220 + g, 215 + h);
  
  //eyebrows
  curve(175 + a, 190 + b, 180 + c, 180 + d, 125 + e, 175 + f, 175 + g, 220 + h);
  curve(225 + a, 190 + b, 220 + c, 180 + d, 275 + e, 175 + f, 275 + g, 220 + h);
  
  //nose
  triangle(200 + a, 215 + b, 180 + c, 290 + d, 220 + e, 290 + f);
  
  //mouth
  ellipse(200 + a, 320 + b, 70 + c, 10 + d);
}
