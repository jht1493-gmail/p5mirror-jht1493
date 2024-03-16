let slider;
let count = 20;
function setup() {
  createCanvas(400, 400);
  background(0);

  colorMode(HSB, 250, 50, 10, 3);
  slider = createSlider(100, 200, 86);
}

function draw() {
  let vol = slider.value();
  translate(width / 2, height / 2);
  let angle = TWO_PI / count;
  for (let i = 0; i < count; i++) {
    rotate(angle);
    strokeWeight(20);
    stroke(mouseX, 150, 100, 0.5);
    triangle(3, 75, 58, 20, 86, 90);
    line(mouseX, mouseY, pmouseX, pmouseY);
    push();
    scale(1, -1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }
}
