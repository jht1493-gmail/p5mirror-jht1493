// https://editor.p5js.org/jht1493/sketches/sPa32siCE
// circle func

let acircle = {
  x: 100,
  y: 100,
  c: [255, 0, 0, 10], // [red,green,blue,alpha],
  sx: 2,
  sy: 2
};

let bcircle = {
  x: 100,
  y: 200,
  // c: [255,0,0,10]
  c: 'yellow',
  sx: 0,
  sy: 2
};

let ccircle = {
  x: 100,
  y: 200,
  c: [255,0,0,10],
  // c: 'red',
  sx: 2,
  sy: 0
};

function setup() {
  createCanvas(400, 300);
  background(0);
  // noStroke()
  // picking random colors for a set 
  let r = color(255,0,0,10)
  let g = color(0, 255, 0, 10)
  let y = color(255, 255, 0, 10)
  acircle.c = random([r,g,y,y,y])
  bcircle.c = random([r,g,y])
}

function draw() {
  drawCircle(acircle);
  drawCircle(bcircle);
  drawCircle(ccircle);
}

function drawCircle(circle1) {
  fill(circle1.c);
  circle(circle1.x, circle1.y, 64);
  circle1.x = (circle1.x + circle1.sx) % width;
  circle1.y = (circle1.y + circle1.sy) % width;
}

// https://editor.p5js.org/jht1493/sketches/LpHeTo9Hl
// circleX circleY

// function mousePressed() {
//   circleX = 0;
// }

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC
