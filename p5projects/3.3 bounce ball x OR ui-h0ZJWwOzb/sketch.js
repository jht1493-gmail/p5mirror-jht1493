
let x = 0;
let speed = 3;

function setup() {
  createCanvas(200, 120);
  frameRate(3);
  create_ui();
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 60, 100, 100);
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;
  update_ui();
}

function create_ui() {
  // Create DOM element to display a value
  createSpan().id('ix');
  createSpan().id('ispeed');
}

function update_ui() {
  // Display values in DOM element
  select('#ix').html('[x='+x+'] ');
  select('#ispeed').html('[speed='+speed+'] ');
}
// https://editor.p5js.org/jht1493/sketches/h0ZJWwOzb
// 3.3 bounce ball x OR ui

// https://editor.p5js.org/jht1493/sketches/G1WHVQsRV
// 3.3 bounce ball x OR

// The Bouncing Ball
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.2-bouncing-ball.html
// https://youtu.be/LO3Awjn_gyU
// https://editor.p5js.org/codingtrain/sketches/Xm4cmQvU

// println() is no longer part of p5.js use console.log(). For more info: https://p5js.org/reference/#/console/log
