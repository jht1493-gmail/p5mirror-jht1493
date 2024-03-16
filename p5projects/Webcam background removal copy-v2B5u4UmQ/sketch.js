let myVid;
let a_scale = 1;

function setup() {
  // canvas is same resolution as webcam 
  // createCanvas(640, 480);
  createCanvas(640 * a_scale, 480 * a_scale);

  // make the webcam
  myVid = createCapture(VIDEO);
  myVid.size(width, height);
  myVid.hide(); // hide it
  pixelDensity(1);
}

function draw() {
  background(255);

  // draw the webcam mirrored
  push();
  translate(width, 0);
  scale(-1, 1);
  image(myVid, 0, 0);
  pop();

  // load the canvas pixels 
  loadPixels();


  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let i = (width * y + x) * 4;
      let rI = ((width * y) + (width - x - 1)) * 4;

      // get r,g,b values from pixel array
      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];

      // get the average brightness of the pixel
      let br = (r + b + g) / 3;

      // if the pixel is brighter that 120, 
      if (br > 120) {
        // make it purple
        pixels[i + 0] = 255;
        pixels[i + 1] = 0;
        pixels[i + 2] = 255;

      }
    }
  }

  // Don't forget this!
  updatePixels();
}

// jht: Added pixelDensity
// https://editor.p5js.org/lisajamhoury/sketches/zdx7KtsTM