let capture;

function setup() {
  createCanvas(320, 240)
  pixelDensity(1);
  // Turn on webcam
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {

  // Display webcam image
  image(capture, 0, 0, width, height);

  // Store the brightest value we've found
  let brightest = 0;
  
  // Store the x,y position of brightest pixel
  let bright = {
    x: 0,
    y: 0
  };
  
  // Iterate through webcam image pixel by pixel
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let d = dist(x,y,mouseX, mouseY);
      if (d > 30) continue;
      let c = capture.get(x, y);
      //console.log(c);
      let b = brightness(c);
      // Check to see if this pixel is brightest SO FAR
      // If so, make it the brightest value of record
      if (b > brightest) {
        brightest = b;
        bright.x = x;
        bright.y = y;
      }
    }
  }
  // Draw brightest pixel
  stroke('red');
  noFill();
  line(0, bright.y, width, bright.y);
  line(bright.x, 0, bright.x, height);
  // Make brightest pixel act like the mouse
  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     let d = dist(x, y, bright.x, bright.y);
  //     let c = capture.get(x, y);
  //     c[3] = map(d, 0, 100, 255, 0);
  //     capture.set(x, y, c);
  //   }
  // }
  // // Update pixels of webcam image
  // capture.updatePixels();
}

// ?? capture.set
// Spotlight with Brightest Webcam Pixel
// https://editor.p5js.org/icm4.0/sketches/VDYs7MqdB


