// https://github.com/CodingTrain/website-archive/tree/main/Tutorials/P5JS/p5.js_video
// https://editor.p5js.org/jht1493/sketches/X-s9xTI9b
// 11.7_p5.js_slitscan

var video;

var x = 0;

function setup() {
  createCanvas(640, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(51);
}

function draw() {
  video.loadPixels();
  // image(video, 0, 0);

  var w = video.width;
  var h = video.height;

  copy(video, w / 2, 0, 1, h, x, 0, 1, h);

  x = x + 1;

  if (x > width) {
    x = 0;
  }
}

// EX: scan top to bottom
// EX: change scan location
// EX: use saveCanvas
//      https://p5js.org/reference/#/p5/saveCanvas
