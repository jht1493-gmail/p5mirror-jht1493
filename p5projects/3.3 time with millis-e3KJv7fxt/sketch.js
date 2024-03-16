// https://editor.p5js.org/jht1493/sketches/e3KJv7fxt
// 3.3 time with millis 
// Use millis to track time

let itime = 0;

function setup() {
  createCanvas(400, 300);
  itime = millis();
  createSpan("press mouse to reset timer. wait for white square ");
  createSpan().id('lapse')
}

function draw() {
  // console.log('frameRate', frameRate())
  background(220);
  let lapse = (millis() - itime)/1000;
  if (lapse > 1.0 && lapse < 1.5) {
    rect(100, 100, 100, 100);
  }
  // reset after 5 seconds
  if (lapse > 5.0) {
    itime = millis();
  }
  select('#lapse').html('[lapse='+lapse.toFixed(2)+']')
}

function mousePressed() {
  console.log("mousePressed itime", itime);
  itime = millis();
}

// https://p5js.org/reference/#/p5/millis

// https://editor.p5js.org/jht1493/sketches/DW02dgsn6
// 3.3 counter for time
// Display white rect briefly using frame counter variable
