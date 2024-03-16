var video;

function setup() {
  createCanvas(640, 480);
  background(51);
  video = createCapture(VIDEO);
  // video.size(320, 240);
  video.hide();
}

function draw() {
  tint(255, 0, 150);
  // image(video, 0, 0, mouseX, height);
  image(video, mouseX, mouseY, 40, 30);
}

// https://github.com/CodingTrain/website/blob/master
//   /Tutorials/P5JS/p5.js_video/11.1_p5.js_createCapture

// https://p5js.org/reference/#/p5/image
// -- draw entire image, optionally scaled to new size
// image(img, x, y, [width], [height])
