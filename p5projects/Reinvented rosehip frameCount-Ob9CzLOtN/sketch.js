let hue;
const a_size = 50;
const a_alpha = 255;

function setup() {
  createCanvas(600, 400);
  hue = 0;
  frameRate(30);
}

function draw() {
  // background(220);

  if (hue > 360) {
    hue = 0;
  } else {
    hue = hue + 20;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200, a_alpha);
  const max_x = floor(width / a_size);
  const max_y = floor(height / a_size);
  const nframe = frameCount-1;
  const a_x = nframe % max_x;
  const a_y = floor(nframe / max_x) % max_y;
  circle(a_x * a_size, a_y * a_size, a_size);

  // fill(255);
  // rect(0, height - 20, width, 20);
  // fill(0)
  // text(frameCount + ' ' + a_x + ' ' + a_y, 5, height - 5);
}