let obj1 = {
  x: 0,
  y: 50,
  gray: 0,
}

let obj2 = {
  x: 0,
  y: 150,
  gray: 0,
}

function setup() {
  createCanvas(400, 200);
  noStroke();
  background(0);
}

function mousePressed() {
  background(0);
}

function draw() {
  fill(obj1.gray, 100);
  circle(obj1.x-50, obj1.y, 100);
  obj1.x = (obj1.x + 1) % (width + 100);  
  obj1.gray = (obj1.gray + 1) % 255;

  fill(obj2.gray, 100);
  circle(obj2.x-50, obj2.y, 100);
  obj2.x = (obj2.x + 1) % (width + 100);
  obj2.gray = (obj2.gray + 1) % 255;
}

// https://editor.p5js.org/jht1493/sketches/y98Qq3YM9
// 2.2 - variable edge obj 2

// https://editor.p5js.org/jht1493/sketches/Kik0LOIug
// 2.2 - variable edge obj

// https://editor.p5js.org/jht1493/sketches/I69gHq4bl
// p5js Code! - 2.2 - variable edge full

// https://editor.p5js.org/jht1493/sketches/PEuN_WPty
// p5js Code! - 2.2 - make your own variable edge

// https://editor.p5js.org/jht1493/sketches/HtESWWNTa
// p5js Code! - 2.2 - make your own variable remainder

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

