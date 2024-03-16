// https://editor.p5js.org/jht1493/sketches/QpBNxr3n-
// Sorting video

let nwidth = 640
let nheight = 480
let ascan = []
let capture;

function setup() {
  createCanvas(nwidth, nheight);
  capture = createCapture(VIDEO)
  capture.size(width, height)
  capture.hide();
  // init_ascan();
  createButton('grab').mousePressed(capture_ascan);
}

function init_ascan() {
  let series = Array.from(Array(nwidth).keys())
  ascan = shuffle(series);
}

function capture_ascan() {
  let y = nheight/2;
  let img = capture.get();
  for (let x = 0; x < img.width; x++) {
    // let col = img.get(x,y)
    ascan[x] = img.get(x,y)
  }
}

function draw() {
  // colorMode(HSB);
  strokeWeight(2);
  background(255);
  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight],
  let img = capture.get();
  image(img,0,0,nwidth,nheight/2,0,0,nwidth,nheight/2)
  for (let i = 0; i < ascan.length; i++) {
    stroke(ascan[i])
    // stroke(ascan[i], 70, 150);
    line(i, nheight/2, i, nheight);
  }
  // sort_ascan();
  if (frameCount % 60 == 0) {
    capture_ascan();
  }
}

function sort_ascan() {
  for (let i = 0; i < nwidth - 1; i++) {
    if (ascan[i] > ascan[i + 1]) {
      let num = ascan[i];
      ascan[i] = ascan[i + 1];
      ascan[i + 1] = num;
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/B1yNi1afN
// Sorting by colors

// https://editor.p5js.org/AndreMartiny/sketches/0CeLRhtr9

// https://p5js.org/reference/#/p5/colorMode
// https://p5js.org/learn/color.html
// https://github.com/processing/p5.js/wiki/Beyond-the-canvas
// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video
