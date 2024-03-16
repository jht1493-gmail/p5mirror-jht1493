// https://editor.p5js.org/jht1493/sketches/lsahl0gCh
// portrait-Jchen_123 rotated

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(330, 40, 20);
  rectMode(CENTER);
    // fill(250);
    // square(200, 200, 250);
    // ellipseMode(CORNER);
    // fill(40, 500);
    // ellipse(100, 100, 200, 200);
    // fill(220);
    // ellipse(200, 150, 100, 100);
    // fill(300);
    // strokeWeight(3);
    // stroke(0, 0, 0);
    // bezier(100, 75, 300, 150, 120, 150, 275, 325);

  // translate(-73,-24)
  // rotate(PI/2)
  //eye from reference
  noFill();
  strokeWeight(3);
  
  // Center the shape
  let x = width / 2;
  let y = height / 2;
  let w = 25;
  let h = 50;

  push()
  translate(x,y);
  rotate(PI / 2);
  drawLasses();
  pop()
  
  push()
  translate(x+75,y);
  rotate(PI / 2);
  drawLasses();
  pop()

  // push();
  // translate(x,y);
  // rect(0, 0, w, h)
  // rotate(PI / 2);
  // rect(0, 0, w, h)
  // pop();
  
  // rect(73,24,25,50)
}

// Lasses adjjusted to drawn at 0,0
function drawLasses() {
  let x0 = 73;
  let y0 = 24;
  curve( 5 - x0, 26 - y0, 
        73 - x0, 24 - y0, 
        73 - x0, 61 - y0, 
        15 - x0, 65 - y0);
  stroke(0);
  let steps = 6;
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = curvePoint(5 - x0, 73 - x0, 73 - x0, 15 - x0, t);
    let y = curvePoint(26 - y0, 24 - y0, 61 - y0, 65 - y0, t);
    // let x = curvePoint(5 , 73 , 73, 15, t);
    // let y = curvePoint(26, 24, 61 , 65 , t);
    //ellipse(x, y, 5, 5);
    let tx = curveTangent(5 - x0, 73 - x0, 73 - x0, 15 - x0, t);
    let ty = curveTangent(26 - y0, 24 - y0, 61 - y0, 65 - y0, t);
    // let tx = curveTangent(5 , 73 , 73 , 15, t);
    // let ty = curveTangent(26 , 24 , 61 , 65, t);
    let a = atan2(ty, tx);
    a -= PI / 2.0;
    line(x, y, cos(a) * 18 + x, sin(a) * 18 + y);
  }
}

// https://editor.p5js.org/Jchen_123/sketches/W9LdsThpI
// self portrait by Jchen_123

// https://p5js.org/reference/#/p5/curve
// curve(x1, y1, x2, y2, x3, y3, x4, y4)
// x1 Number: x-coordinate for the beginning control point
// x2 Number: x-coordinate for the first point
// x3 Number: x-coordinate for the second point
// x4 Number: x-coordinate for the ending control point

// https://p5js.org/reference/#/p5/curvePoint
// curvePoint(a, b, c, d, t)
// a Number: coordinate of first control point of the curve
// b Number: coordinate of first point
// c Number: coordinate of second point
// d Number: coordinate of second control point
// t Number: value between 0 and 1

// https://p5js.org/reference/#/p5/curveTangent
// curveTangent(a, b, c, d, t)
// a Number: coordinate of first control point
// b Number: coordinate of first point on the curve
// c Number: coordinate of second point on the curve
// d Number: coordinate of second conrol point
// t Number: value between 0 and 1

// https://p5js.org/learn/curves.html

