// https://editor.p5js.org/jht1493/sketches/B1yNi1afN
// Sorting by colors

let nwidth = 640
let nheight = 480
let hues = []
let capture;

function setup() {
  createCanvas(nwidth, nheight);
  capture = createCapture(VIDEO)
  capture.size(width, height)
  capture.hide();
  init_hues();
}

function init_hues() {
  let series = Array.from(Array(nwidth).keys())
  hues = shuffle(series);
}

function draw() {
  colorMode(HSB);
  strokeWeight(2);
  background(255);
  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight],
  image(capture,0,0,nwidth,nheight/2,0,0,nwidth,nheight/2)
  for (let i = 0; i < nwidth; i++) {
    stroke(hues[i], 70, 150);
    line(2*i, nheight/2, 2*i, height);
  }
  sort_hues();
}

function sort_hues() {
  for (let i = 0; i < nwidth - 1; i++) {
    if (hues[i] > hues[i + 1]) {
      let num = hues[i];
      hues[i] = hues[i + 1];
      hues[i + 1] = num;
    }
  }
}

// https://editor.p5js.org/AndreMartiny/sketches/0CeLRhtr9

// https://p5js.org/reference/#/p5/colorMode
// https://p5js.org/learn/color.html
// https://github.com/processing/p5.js/wiki/Beyond-the-canvas
// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video
