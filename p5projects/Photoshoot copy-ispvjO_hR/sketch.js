var video;
let blur = false;
let pixel = false;
let cnv;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  btnBlur = createButton("Add Blur filter");
  btnBlur.position(400, 400);
  btnBlur.mousePressed(applyBlur);
  btnPixel = createButton("Pixel");
  btnPixel.position(400, 420);
  btnPixel.mousePressed(applyPixel);
}

function draw() {
  if (frameCount % 15 == 0) {
    //
    image(video, 0, 0);
    if (blur) filter(BLUR, 10);
    if (pixel) drawPixelate();
  }
}

function drawPixelate() {
  video.loadPixels();
  for (let y = 0; y < video.height; y += 16) {
    // going through every row
    for (let x = 0; x < video.width; x += 16) {
      // every pixel on the row
      let offset = (y * video.width + x) * 4;
      fill(
        video.pixels[offset],
        video.pixels[offset + 1],
        video.pixels[offset + 2]
      );
      rect(x, y, 16, 16); //draws 16x16 rectangle and less items
    }
  }
}

function applyBlur() {
  // Add the BLUR filter to the image
  // invert a boolean variable
  blur = !blur;
}

function applyPixel() {
  pixel = !pixel;
}
