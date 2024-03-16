let numFrames = 12; // The number of frames
let images = []; // Make the array
let currentFrame = 0;

function preload() {
  for (let i = 0; i < numFrames; i++) {
    let imageName = "frame-" + nf(i, 4) + ".png";
    images[i] = loadImage(imageName); // Load each image
  }
}

function setup() {
  createCanvas(240, 120);
  frameRate(24);
}

function draw() {
  image(images[currentFrame], 0, 0);
  currentFrame++; // Next frame
  if (currentFrame == images.length) {
    currentFrame = 0;  // Return to first frame
  }
}

// https://editor.p5js.org/jht1493/sketches/-XbD5Gw0a
// Ex_11_10 Sequences of Images

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_10.js