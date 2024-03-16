function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(330, 40, 20);
  rectMode(CENTER);
  fill(250);
  square(200, 200, 250);
  ellipseMode(CORNER);
  fill(40, 500);
  ellipse(100, 100, 200, 200);
  fill(220);
  ellipse(200, 150, 100, 100);
  fill(300);
  strokeWeight(3);
  stroke(0, 0, 0);
  bezier(100, 75, 300, 150, 120, 150, 275, 325);

  
  //eye from reference
  noFill();
  curve(5, 26, 73, 24, 73, 61, 15, 65);
  stroke(0);
  let steps = 6;
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = curvePoint(5, 73, 73, 15, t);
    let y = curvePoint(26, 24, 61, 65, t);
    //ellipse(x, y, 5, 5);
    let tx = curveTangent(5, 73, 73, 15, t);
    let ty = curveTangent(26, 24, 61, 65, t);
    let a = atan2(ty, tx);
    a -= PI / 2.0;
    line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);
  }
 
}
