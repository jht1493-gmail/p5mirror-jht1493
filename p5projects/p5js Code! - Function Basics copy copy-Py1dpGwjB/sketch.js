// https://editor.p5js.org/jht1493/sketches/Py1dpGwjB
// may balls

let ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};

let ball2 = {
  x: 300,
  y: 200,
  xspeed: -4,
  yspeed: 3
};

let balls = [ball1, ball2];

function setup() {
  createCanvas(600, 400);
  
  let b3 = {}
}

function draw() {
  background(0);
  
//   move(ball1);
//   display(ball1);
  
//   move(ball2);
  // display(ball2);
  for (let index = 0; index < balls.length; index++) {
    let aball = balls[index];
    move(aball);
    display(aball);
  }

}

function move(bp) {
  if (bp.x > width || bp.x < 0) {
    bp.xspeed = bp.xspeed * -1;
  }
  if (bp.y > height || bp.y < 0) {
    bp.yspeed = bp.yspeed * -1;
  }
  bp.x = bp.x + bp.xspeed;
  bp.y = bp.y + bp.yspeed;
}

function display(bp) {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(bp.x, bp.y, 24, 24);
}

// https://editor.p5js.org/jht1493/sketches/0Ndu35i2C


// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
