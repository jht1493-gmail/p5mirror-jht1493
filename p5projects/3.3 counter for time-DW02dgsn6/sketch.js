// https://editor.p5js.org/jht1493/sketches/DW02dgsn6
// 3.3 counter for time
// Display white rect briefly using frame counter variable

let icount = 0;
function setup() {
  createCanvas(400, 400);
  createSpan("press mouse to reset counter. wait for white square");
}

function draw() {
  // console.log('frameRate', frameRate())
  background(220);
  icount = icount + 1;
  if (icount > 60 && icount < (60 + 30)) {
    rect(100, 100, 100, 100);
  }
  // reset after 5 seconds
  if (icount > (60 * 5)) {
    icount = 0;
  }
}

function mousePressed() {
  console.log("mousePressed icount", icount);
  icount = 0;
}
