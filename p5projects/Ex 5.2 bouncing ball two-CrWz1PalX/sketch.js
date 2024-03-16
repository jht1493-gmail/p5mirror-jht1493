// https://editor.p5js.org/jht1493/sketches/CrWz1PalX
// Ex 5.2 bouncing ball two

let ball = {
  x: 160,
  y: 90,
  xspeed: 5,
  yspeed: 2,
  r: 20,
  c: 'red'
};

let ball2 = {
  x: 80,
  y: 90,
  xspeed: 2,
  yspeed: 5,
  r: 20,
  c: 'green'
};

function setup() {
  createCanvas(320, 180);
}

function draw() {
  background(0);
  draw_ball(ball);
  draw_ball(ball2);
}

function draw_ball(b) {
  fill(b.c);
  ellipse(b.x, b.y, b.r * 2, b.r * 2);
  b.x += b.xspeed;
  b.y += b.yspeed;
  if (b.x > width - b.r || b.x < b.r) {
    b.xspeed = -b.xspeed;
  }
  if (b.y > height - b.r || b.y < b.r) {
    b.yspeed = -b.yspeed;
  }
}


// https://editor.p5js.org/jht1493/sketches/4XHAe1BM5
// Ex 5.1 bouncing ball color

// https://editor.p5js.org/jht1493/sketches/rwosDvy8s
// Ex 5.1 bouncing ball function

// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
// p5js Code! - Function Basics

// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
