function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  noStroke();
  
  const part_1 = height / 3;
  const part_2 = part_1 * 2;
  
  if (mouseY > 0 && mouseY < part_1) {
    rect(0, 0, width, part_1);
  }
  else if (mouseY > part_1 && mouseY < part_2) {
    rect(0, part_1, width, part_1);
  }
  else if (mouseY > part_2 && mouseY < height) {
    rect(0, part_2,  width, part_1);
  }
}