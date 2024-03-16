let video;
let x = 0;

function setup() {
  // createCanvas(400, 240);
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(51);
}

function draw() {
  let w = video.width;
  let h = video.height;

  // copy(video, sx, sy, sw, sh, dx, dy, dw, dh)
  // image(video, dx, dy, dw, dh, sx, sy, sw, sh)

  copy(video, w/2, 0, 1, h, x, 0, 1, h);

  // image(video, x, 0, 1, h, w/2, 0, 1, h);

  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

// !!@ image on video not like copy
// image(img, x, y, [width], [height])
// image(img, dx, dy, dWidth, dHeight, 
//          sx, sy, [sWidth], [sHeight])

// https://editor.p5js.org/jht1493/sketches/yDHzF0TDZ
// 11.7: Slit-Scan copy-image

// https://github.com/CodingTrain/website/blob/master/
// Tutorials/P5JS/p5.js_video
// Daniel Shiffman
// https://thecodingtrain.com
// https://youtu.be/WCJM9WIoudI
// https://youtu.be/YqVbuMPIRwY