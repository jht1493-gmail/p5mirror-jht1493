var time1 = 2000;
var time2 = 4000;
var x = 0;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  var currentTime = millis();
  background(204);
  if (currentTime > time2) {
    x -= 0.5;
  } else if (currentTime > time1) {
    x += 2;
  }
  ellipse(x, 60, 90, 90);
}

// https://editor.p5js.org/jht1493/sketches/xADLvN6tz
// Ex_08_11 Triggering Timed

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_11.js
