let a_video;
let a_img;
let a_width = 320;
let a_height = 240;

function setup() {
  createCanvas(a_width, a_height);

  a_video = createCapture(VIDEO);
  a_video.size(a_width, a_height);
  a_video.hide();

  // same as new p5.Image(100, 100);
  a_img = createImage(a_width, a_height);
}

function draw() {
  background(0);

  a_img.loadPixels();
  let x, y;

  // draw a red line
  y = height / 4;
  for (x = 0; x < a_img.width; x++) {
    writeColor(a_img, x, y, 255, 0, 0, 255);
  }

  // draw a blue line
  y = a_img.height - y;
  for (x = 0; x < a_img.width; x++) {
    writeColor(a_img, x, y, 0, 0, 255, 255);
  }

  // draw a green line
  x = width / 2;
  for (y = 0; y < height; y++) {
    writeColor(a_img, x, y, 0, 255, 0, 255);
  }

  a_img.updatePixels();

  image(a_video, 0, 0);
  image(a_img, 0, 0);
}

// Write a color to array of image pixels
function writeColor(image, x, y, red, green, blue, alpha) {
  let index = (x + y * width) * 4;
  image.pixels[index] = red;
  image.pixels[index + 1] = green;
  image.pixels[index + 2] = blue;
  image.pixels[index + 3] = alpha;
}

// https://p5js.org/reference/#/p5.Image