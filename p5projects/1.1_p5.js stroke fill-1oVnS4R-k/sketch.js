function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(200);

  // try to change the numbers below to see differences
  stroke(50) // dark gray color
  strokeWeight(5);
  fill(100); // light gray color
  // rect(x, y, width, height)
  rect(10, 10, 50, 50);

  fill(200); // white gray color
  rect(70, 10, 50, 50);

  fill(100); // light gray color
  // circle(x, y, diameter)
  circle(160 - 6, 35, 50);

  fill(200); // white gray color
  circle(210 + 2, 35, 50);

}