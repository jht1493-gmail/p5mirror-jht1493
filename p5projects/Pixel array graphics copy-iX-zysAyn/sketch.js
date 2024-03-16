let myVid;
let size = 10;

function setup() {
  // make canvas the resolution of webcam
  createCanvas(640, 480);

  // create webcam capture 
  myVid = createCapture(VIDEO);
  myVid.size(width, height);
  myVid.hide(); // hide it

}

function draw() {
  background(255);

  // load webcam pixels 
  myVid.loadPixels();

  for (let y = size; y < height; y += size) {
    for (let x = size; x < width; x += size) {
      let i = (width * y + x) * 4;
      let rI = ((width * y) + (width - x - 1)) * 4;

      // get r,g,b values from webcam pixel array
      let r = myVid.pixels[rI + 0];
      let g = myVid.pixels[rI + 1];
      let b = myVid.pixels[rI + 2];

      // get average brightness 
      let br = (r + b + g) / 3;

      // brightness dots  
      // if (br < 120) {
      //   noStroke();
      //   fill(200, 20, 255);
      //   ellipse(x, y, size);

      // }

      // natural color circles 
      noStroke();
      fill(r,g,b,50);
      ellipse(x,y,size+0);

      // pink circles 
      // noStroke();
      // fill(255, g, 255, 50);
      // ellipse(x, y, size + 50);

    }
  }

  // We don't need this if we are drawing graphics based on pixel array
  // updatePixels();
}

// https://editor.p5js.org/lisajamhoury/sketches/RZFJXcGTw
