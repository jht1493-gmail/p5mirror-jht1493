let obj1 = {
  x: 0,
  y: 50,
  gray: 0,
  alpha: 5
}
let obj2 = {
  x: 0,
  y: 150,
  gray: 64,
  alpha: 5
}
let obj3 = {
  x: 0,
  y: 250,
  gray: 127,
  alpha: 5
}

function setup() {
  createCanvas(400, 300);
  noStroke();
  background(0);
}

function mousePressed() {
  background(0);
}

function draw() {
  draw_ob(obj1);
  draw_ob(obj2);
  draw_ob(obj3);
}

function draw_ob(ob) {
  fill(ob.gray, ob.alpha);
  circle(ob.x-50, ob.y, 100);
  
  ob.x = (ob.x + 1) % (width + 100);
  
  ob.gray = (ob.gray + 1) % 255;
}

// https://editor.p5js.org/jht1493/sketches/58CvXXSE8
// 2.2 - variable edge draw_obj 3 alpha 5

// https://editor.p5js.org/jht1493/sketches/GJWDvxs6d
// 2.2 - variable edge draw_obj 3 alpha

// https://editor.p5js.org/jht1493/sketches/g_NFzcbcq
// 2.2 - variable edge draw_obj 3

// https://editor.p5js.org/jht1493/sketches/nDGl7usRr
// 2.2 - variable edge draw_obj

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

