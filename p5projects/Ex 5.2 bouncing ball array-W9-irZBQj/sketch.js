let a_balls = [];

function setup() {
  createCanvas(320, 180);
  createButton("Add ball").mousePressed(function () {
    add_ball();
  });
}

function draw() {
  background(0);
  for (i = 0; i < a_balls.length; i++) {
    draw_ball(a_balls[i]);
  }
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

function add_ball() {
  let b = {
    x: random(width),
    y: random(height),
    xspeed: random([0, 4]),
    yspeed: random([0, 4]),
    r: random([5, 10, 20]),
    c: random(["red", "green", "yellow"]),
  };
  a_balls.push(b);
}

// https://editor.p5js.org/jht1493/sketches/W9-irZBQj
// Ex 5.2 bouncing ball array

// https://editor.p5js.org/jht1493/sketches/CrWz1PalX
// Ex 5.2 bouncing ball two

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
