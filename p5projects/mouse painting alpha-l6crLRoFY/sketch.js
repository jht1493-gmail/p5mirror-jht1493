let hue;
const a_size = 50;
const a_alpha = 100;

function setup() {
  createCanvas(400, 400);
  hue = 0;
}

function draw() {
  // background(220);
}

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200, a_alpha);
  const a_x = floor(mouseX / a_size)*a_size;
  const a_y = floor(mouseY / a_size)*a_size;
  ellipse(a_x, a_y, a_size, a_size);
}