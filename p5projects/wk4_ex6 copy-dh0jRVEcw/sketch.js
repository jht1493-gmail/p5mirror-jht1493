function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  background(225);
  let x = 0;
  let y = 0;
  let w = 200; 
  let h = 200;

  for (x = 0; x <= width; x += 50) {
    for (y = 0; y <= height; y += 50) {
      stroke(125);
      strokeWeight(0.5);
      fill ([10, 50], [50, 100], [10, 50, 100, 200]);
      rect(x, y, w, h);
    }
  }

  
}