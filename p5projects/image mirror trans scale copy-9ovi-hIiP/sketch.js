let a_vid;

function setup() {
  createCanvas(640, 480);

  // create a webcam video
  a_vid = createCapture(VIDEO);
  a_vid.size(width, height);
  a_vid.hide(); // hide it

  // Needed for retina 2x displays
  pixelDensity(1);
}

function draw() {
  background(220);

  let w = width / 2;
  let h = height / 2;

  // Draw video scaled to w, h
  tint(255); // White
  image(a_vid, 0, 0, w, h)

  // mirror the video on canvas
  tint(255, 0, 0); // Red
  push();
  translate(w * 2, 0);
  scale(-1, 1);
  image(a_vid, 0, 0, w, h);
  pop();

  tint(0, 255, 0); // Green
  push();
  translate(w, h);
  scale(-1, 1);
  image(a_vid, 0, 0, w, h);
  pop();

  tint(0, 0, 255); // Blue
  push();
  translate(w*2, h);
  scale(-1, 1);
  image(a_vid, 0, 0, w, h);
  pop();

}

// TODO: Add 2 other images with different tints

// https://p5js.org/reference/#/p5/image
// -- draw entire image, optionally scaled to new size
// image(img, x, y, [width], [height])
// -- draw into subsection of an image,
//      optional subsection of source image
// image(img, dx, dy, dWidth, dHeight, 
//    sx, sy, [sWidth], [sHeight])

