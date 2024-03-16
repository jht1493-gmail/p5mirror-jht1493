// Declare a variable to hold my webcam image
let cam;

function setup() {
  createCanvas(400, 400);
  // Create a video DOM element that grabs the video stream from my webcam
  cam = createCapture(VIDEO);
  // Hide the DOM element
  cam.hide();
  noStroke();
}

function draw() {
  background(220);
  
  // Load the pixels into memory
  cam.loadPixels();
  
  // Loop through every 50th pixel
  for(let x = 0; x < width; x+=40) {
    for(let y = 0; y < height; y+=40) {
      // Get the color at this x,y location
      // Calculate the corresponding index-values in the pixels array.
      let i = (y*cam.width + x)*4;
      let r = cam.pixels[i];
      let g = cam.pixels[i+1];
      let b = cam.pixels[i+2];
      let a = cam.pixels[i+3];

      let col = [r,g,b,a]; //cam.get(x,y);
      // Use it to fill a 40x40 rectangle
      fill(col);
      rect(x, y, 40, 40);
    }
  }
  
  //image(cam, 0, 0);
}