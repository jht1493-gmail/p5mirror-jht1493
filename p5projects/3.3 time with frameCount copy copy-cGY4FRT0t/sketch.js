// https://editor.p5js.org/jht1493/sketches/cGY4FRT0t
// 3.3 frameRate 2
/* 3.3 3. Draw a rectangle to the screen every half a second. In between, just draw the background. What information do you need to accomplish this?
*/
let fps = 2;

function setup() {
  createCanvas(400, 300);
  frameRate(fps)
  createSpan().id('lapse')
}

function draw() {
  // console.log('frameRate', frameRate())
  background(220);
  if (frameCount % 2 == 0) {
    rect(100, 100, 100, 100);
  }
  let lapse = frameCount/fps;
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
