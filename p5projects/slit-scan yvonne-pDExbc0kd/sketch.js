var video;
var x = 0;

function setup() {
  createCanvas(800, 230);

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(100, 240);

  background(51);
}

function draw() {
  //image(video,0,0)

  var w = video.width;
  var h = video.height;

  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  copy(video, w / 2, 15, 4, h, x, 0, 1, h);

  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

// https://editor.p5js.org/jht1493/sketches/pDExbc0kd

// https://editor.p5js.org/yz4195/sketches/y450Wh1e1
// slit-scan yvonne
