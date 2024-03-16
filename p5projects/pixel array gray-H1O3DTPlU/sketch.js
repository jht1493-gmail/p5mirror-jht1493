let a_vid;

function setup() {
  // make canvas the resolution of webcam
  createCanvas(640, 480);

  // create webcam capture 
  a_vid = createCapture(VIDEO);
  a_vid.size(width, height);
  a_vid.hide(); // hide it
  
  pixelDensity(1);
}

function draw() {
  background(255);

  // Prepare canvas pixels
  loadPixels();
  
  // load webcam pixels 
  a_vid.loadPixels();

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let ii = (width * y + x) * 4;

      // get r,g,b values from webcam pixel array
      let r = a_vid.pixels[ii + 0];
      let g = a_vid.pixels[ii + 1];
      let b = a_vid.pixels[ii + 2];

      // get average brightness 
      let br = (r + b + g) / 3;
    
      // Make gray
      pixels[ii + 0] = br;
      pixels[ii + 1] = br;
      pixels[ii + 2] = br;
      
    }
  }

  updatePixels();
}

// TODO: Make only a portion of the canvas gray

// https://editor.p5js.org/lisajamhoury/sketches/RZFJXcGTw
