var a_video;

function setup() {
  createCanvas(320, 240);
  background(51);
  a_video = createCapture(VIDEO);
  a_video.size(320, 240);
  // a_video.hide();
}

function draw() {
  tint(255, 0, 150);

  // Copy the entire source image
  // image(img, x, y, [width], [height])

  // mouseX stretches a_video
  // image(a_video, 0, 0, mouseX, height);

  // a_video follows mouseX
  // image(a_video, mouseX, 0, 100, height);

  // a_video follows mouseX, mouseY -- distorted
  // image(a_video, mouseX, mouseY, 100, 100);

  // a_video follows mouseX, mouseY -- proportional
  image(a_video, mouseX, mouseY, 80, 60);

}

// NOTE: distorted image
// NOTE: math to resize proportionally
// TODO: draw single row of small video images at mouseY

// https://editor.p5js.org/jht1493/sketches/MtdR3vBcj
// https://github.com/CodingTrain/website/blob/master
//   /Tutorials/P5JS/p5.js_a_video/11.1_p5.js_createCapture

// https://p5js.org/reference/#/p5/image
// -- draw entire image, optionally scaled to new size
// image(img, x, y, [width], [height])
// -- draw into subsection of an image,
//      optional subsection of source image
// image(img, dx, dy, dWidth, dHeight, 
//    sx, sy, [sWidth], [sHeight])
