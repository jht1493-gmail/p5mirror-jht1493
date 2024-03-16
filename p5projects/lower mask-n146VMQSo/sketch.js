let a_video;

function setup() {
  createCanvas(640, 480);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.hide();
  // frameRate(1);
  create_ui();
}

function draw() {
  let img = a_video.get();

  img.loadPixels();
  let halfImage = 4 * img.width * img.height / 2;
  for (let i = 0; i < halfImage; i += 4) {
    let ii = i + halfImage;
    img.pixels[ii] = 255 - img.pixels[ii];
    ii++;
    img.pixels[ii] = 255 - img.pixels[ii];
    ii++;
    img.pixels[ii] = 255 - img.pixels[ii];
    // img.pixels[ii] = 0;
  }
  img.updatePixels();

  image(img, 0, 0);
  update_ui();
}

function create_ui() {
  createSpan().id('ifps');
}

function update_ui() {
  select('#ifps').html('[fps=' + round(frameRate(), 2) + ']');
}

// https://editor.p5js.org/jht1493/sketches/n146VMQSo
// lower mask

// https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js_video/11.2_p5.js_photoBooth/sketch.js