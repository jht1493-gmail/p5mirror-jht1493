// Declare a variable to hold my webcam image
let cam;
let len = 40;

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
  
  // img is a copy of the current video frame
  let img = cam.get();
  
  // Loop through every 50th pixel
  for(let x = 0; x < width; x+=len) {
    for(let y = 0; y < height; y+=len) {
      // Get the color at this x,y location
      let col = img.get(x,y);

      fill(col);
      rect(x, y, len, len);
    }
  }
  
  //image(cam, 0, 0);
}

// https://editor.p5js.org/icm4.0/sketches/OGSIfgFgy
// Pixelated mirror