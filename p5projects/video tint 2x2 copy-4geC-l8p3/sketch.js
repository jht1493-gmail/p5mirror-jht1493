let a_video;
let a_scale = 2;
let a_alpha = 255;

function setup() {
  createCanvas(320 * a_scale, 240 * a_scale);
  background(51);
  a_video = createCapture(VIDEO);
  a_video.size(320, 240);
  a_video.hide();
}

function draw() {

  // Copy the entire source image
  // image(img, x, y, [width], [height])

  // Red - top left
  tint(255, 0, 0, a_alpha);  
  image(a_video, 0, 0, 320, 240, 0, 0, 320/2, 240/2);

  // Green - top right
  tint(0, 255, 0, a_alpha);  
  image(a_video, 320, 0, 320, 240, 320/2, 0, 320/2, 240/2);

  // Blue - bottom left
  tint(0, 0, 255, a_alpha);  
  image(a_video, 0, 240, 320, 240, 0, 240/2, 320/2, 240/2);

  // Red+Blue - bottom right
  tint(255, 0, 255, a_alpha);  
  image(a_video, 320, 240, 320, 240, 320/2, 240/2, 320/2, 240/2);

  // No tint - center
  // tint(255, 255, 255, 255)  
  // image(a_video, 320-320/2, 240-240/2, 320, 240);

}

// TODO: Try extreme values for a_alpha
// TODO: try background call in draw func

// https://editor.p5js.org/jht1493/sketches/MtdR3vBcj
// https://github.com/CodingTrain/website/blob/master
//   /Tutorials/P5JS/p5.js_video/11.1_p5.js_createCapture

// https://p5js.org/reference/#/p5/image
// -- draw entire image, optionally scaled to new size
// image(img, x, y, [width], [height])
// -- draw into subsection of an image,
//      optional subsection of source image
// image(img, dx, dy, dWidth, dHeight, 
//    sx, sy, [sWidth], [sHeight])
