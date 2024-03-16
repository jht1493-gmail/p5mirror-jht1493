let ball = {
  x: 160,
  y: 90,
  xspeed: 5,
  yspeed: 0,
  r: 20,
  c: "red",
};

function setup() {
  createCanvas(320, 180);
  createButton("Faster").mousePressed(function () {
    ball.xspeed = ball.xspeed * 1.5;
  });
  createButton("Slower").mousePressed(function () {
    ball.xspeed = ball.xspeed / 1.5;
  });
}

function draw() {
  background(0);
  draw_ball();
}

function draw_ball() {
  fill(ball.c);
  ellipse(ball.x, ball.y, ball.r * 2, ball.r * 2);
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
  if (ball.x > width - ball.r || ball.x < ball.r) {
    ball.xspeed = -ball.xspeed;
  }
  if (ball.y > height - ball.r || ball.y < ball.r) {
    ball.yspeed = -ball.yspeed;
  }
}

// https://editor.p5js.org/jht1493/sketches/HsQDi5mPF
// Ex 5.1 bouncing ball speed

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
