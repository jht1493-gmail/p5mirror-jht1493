let video;
let x = 0;
let img;

function setup() {
  // createCanvas(400, 240);
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(51);

  img = createImage(320, 240);
}

function draw() {
  let w = video.width;
  let h = video.height;

  let sx = w / 2;
  // let sx = mouseX;
  let sy = 0;
  let sw = 1;
  let sh = h;
  let dx = x;
  let dy = 0;
  let dw = 1;
  let dh = h;
  // copy(video, sx, sy, sw, sh, dx, dy, dw, dh)
  // copy(video, w/2, 0, 1, h, x, 0, 1, h);
  // image(video, dx, dy, dw, dh, sx, sy, sw, sh)
  // image(video, dx, dy, dw, dh);
  // image(video, dx, dy, dw, h, sx, sy, sw, sh);

  img.copy(video, 0, 0, w, h, 0, 0, w, h);

  // image(img, dx, dy, dw, dh, sx, sy, sw, sh);
  // image(img, x, 0, 1, h, w / 2, 0, 1, h);

  image(video, x, 0, 1, h, w / 2, 0, 1, h);

  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

// !!@ image on video behaves as expected after img.copy
// image(img, x, y, [width], [height])
// image(img, dx, dy, dWidth, dHeight, 
//          sx, sy, [sWidth], [sHeight])

// https://editor.p5js.org/jht1493/sketches/zBH7ThRpP
// https://github.com/CodingTrain/website/blob/master/
// Tutorials/P5JS/p5.js_video
// Daniel Shiffman
// https://thecodingtrain.com
// https://youtu.be/WCJM9WIoudI
// https://youtu.be/YqVbuMPIRwY