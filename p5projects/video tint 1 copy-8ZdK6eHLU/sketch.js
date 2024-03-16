let a_video;
let a_tints = [
  [255, 0, 150],
  [0, 255, 0],
  [0, 0, 255],
  [255, 0, 0]
]
let x_step;
let y_step;
let a_scale = 7;

function setup() {
  createCanvas(320, 240);
  background(51);
  a_video = createCapture(VIDEO);
  a_video.size(320, 240);
  x_step = width / a_scale;
  y_step = x_step * (height / width);
  print('x_step',x_step, 'y_step', y_step)
  // a_video.hide();
}

function draw() {

  // Copy the entire source image
  // image(img, x, y, [width], [height])

  // Copy portion of source image
  // image(img, dx, dy, dWidth, dHeight, 
  //    sx, sy, [sWidth], [sHeight])

  // mouseX stretches a_video
  // image(a_video, 0, 0, mouseX, height);

  // a_video follows mouseX
  // image(a_video, mouseX, 0, 100, 100);

  // a_video follows mouseX, mouseY
  // image(a_video, mouseX, mouseY, 100, 100);

  // a_video follows mouseX, mouseY
  // image(a_video, mouseX, mouseY, 80, 60);

  tindex = 0;
  for (y = 0; y < height; y += y_step) {
    for (x = 0; x < width; x += x_step) {
      // let tt = random(a_tints);
      tindex = tindex % a_tints.length
      let tt = a_tints[tindex];
      tint(tt);
      image(a_video, x, y, x_step, y_step);
      tindex = (tindex + 1) ;
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/MtdR3vBcj
// https://github.com/CodingTrain/website/blob/master
//   /Tutorials/P5JS/p5.js_a_video/11.1_p5.js_createCapture