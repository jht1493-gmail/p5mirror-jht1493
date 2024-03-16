// https://editor.p5js.org/jht1493/sketches/2mzYK-rpa
// func parameter objects

let ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};
let bal2 = {
  x: 100,
  y: 40,
  xspeed: -2,
  yspeed: 1
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  move(ball1);
  bounce(ball1);
  display(ball1);
  
  move(bal2);
  bounce(bal2);
  display(bal2);

}

function bounce(ball) {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display(ball) {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 10,10 );
}

function move(ball) {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}



// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1

