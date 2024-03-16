// https://editor.p5js.org/jht1493/sketches/QYlq2DxmM
// video tint 2x2 mobile

let a_video;
let a_scale = 2;
let a_alpha = 10;
let a_w = 240;
let a_h = 320;

function setup() {
  createCanvas(a_w * a_scale, a_h * a_scale);
  background(51);
  a_video = createCapture(VIDEO);
  a_video.size(a_w, a_h);
  a_video.hide();
}

function draw() {

  // Copy the entire source image
  // image(img, x, y, [width], [height])

  // Red - top left
  tint(255, 0, 0, a_alpha);  
  image(a_video, 0, 0, a_w, a_h);

  // Green - top right
  tint(0, 255, 0, a_alpha);  
  image(a_video, a_w, 0, a_w, a_h);

  // Blue - bottom left
  // tint(125, 125, 125, a_alpha);  
  tint(0, 0, 255, a_alpha);  
  image(a_video, 0, a_h, a_w, a_h);

  // Red+Green=Yellow - bottom right
  tint(255, 255, 0, a_alpha);  
  image(a_video, a_w, a_h, a_w, a_h);

  // No tint - center
  tint(255, 255, 255, 255)  
  image(a_video, a_w-a_w/2, a_h-a_h/2, a_w, a_h);

}

// TRY: Try extreme values for a_alpha
// TRY: try background call in draw func
// TRY: comment out center image and have 4 images
//     show the corresponding portion of the video

// https://editor.p5js.org/jht1493/sketches/Zx8JnxZfw
// video tint 2x2

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
