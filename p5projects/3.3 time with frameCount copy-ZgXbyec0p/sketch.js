// https://editor.p5js.org/jht1493/sketches/ZgXbyec0p
// 3.3 frameRate timing

let iframe = 0;
let fps = 4;

function setup() {
  createCanvas(400, 300);
  frameRate(fps)
  iframe = frameCount
  createSpan("press mouse to reset timer. wait for white square ");
  createSpan().id('lapse')
}

function draw() {
  // console.log('frameRate', frameRate())
  background(220);
  let lapse = (frameCount - iframe)/fps;
  if (lapse > 1.0 && lapse < 1.5) {
    rect(100, 100, 100, 100);
  }
  // reset after 5 seconds
  if (lapse > 5.0) {
    iframe = frameCount
  }
  select('#lapse').html('[lapse='+lapse.toFixed(2)+']')
}

function mousePressed() {
  console.log("mousePressed iframe", iframe);
  iframe = frameCount
}

// https://p5js.org/reference/#/p5/frameCount
// https://p5js.org/reference/#/p5/frameRate

// https://editor.p5js.org/jht1493/sketches/S5QXtzIaC
// 3.3 time with frameCount 
// Use frameCount to track time
