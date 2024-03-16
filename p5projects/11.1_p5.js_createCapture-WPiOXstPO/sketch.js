var video;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();
}

function draw() {
  tint(255, 0, 150);
  image(video, 0, 0, mouseX, height);
}

// https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js_video/11.1_p5.js_createCapture
