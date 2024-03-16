function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  noStroke();
  
  const part_1 = width / 3;
  const part_2 = part_1 * 2;
  
  if (mouseX > 0 && mouseX < part_1) {
    rect(0, 0, part_1, height);
  }
  else if (mouseX > part_1 && mouseX < part_2) {
    rect(part_1, 0, part_1, height);
  }
  else if (mouseX > part_2 && mouseX < width) {
    rect(part_2, 0, part_1, height);
  }
}