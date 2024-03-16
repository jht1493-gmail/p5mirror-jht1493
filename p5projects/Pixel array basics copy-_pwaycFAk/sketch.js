let myVid;

function setup() {
  // canvas is resolution of webcam
  createCanvas(640, 480);

  // create a webcam video
  myVid = createCapture(VIDEO);
  myVid.size(width, height);
  myVid.hide(); // hide it
  pixelDensity(1)
}

function draw() {
  background(220);

  // mirror the video on canvas
  // push();
  // translate(width,0);
  // scale(-1,1);
  // image(myVid, 0, 0);
  // pop();
  
  // load canvas pixels 
  loadPixels();
  
  // load webcam pixels 
  myVid.loadPixels();

  // go through all pixels 
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let i = (width * y + x) * 4; // get index of r
      let rI = ((width * y) + (width - x - 1)) * 4; // reverse index of r

      // make image purple
      // pixels[i+0] = 255; // red channel 
      // pixels[i+2] = 255; // blue 

      // doubled from center image
      // pixels[i + 0] = pixels[rI + 0];
      // pixels[i + 1] = pixels[rI + 1];
      // pixels[i + 2] = pixels[rI + 2];
      // pixels[i + 3] = pixels[rI + 3];

      // true mirror image
      pixels[i + 0] = myVid.pixels[rI + 0];
      pixels[i + 1] = myVid.pixels[rI + 1];
      pixels[i + 2] = myVid.pixels[rI + 2];
      pixels[i + 3] = myVid.pixels[rI + 3];
      
      // draw red channel one direction, blue and grn channels opposite 
      // pixels[i + 0] = myVid.pixels[i + 0];
      // pixels[i + 1] = myVid.pixels[rI + 1];
      // pixels[i + 2] = myVid.pixels[rI + 2];
      // // pixels[i + 3] = myVid.pixels[rI + 3];
    }
  }

  // don't forget to update the pixels!
  updatePixels();
}

// https://editor.p5js.org/lisajamhoury/sketches/DUaE4KLlx
