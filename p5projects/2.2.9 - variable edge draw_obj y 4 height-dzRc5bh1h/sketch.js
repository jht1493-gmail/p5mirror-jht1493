let obj1 = {
  x: 0,
  y: 0,
}
let obj2 = {
  x: 100,
  y: 0,
}
let obj3 = {
  x: 200,
  y: 0,
}
let obj4 = {
  x: 300,
  y: 0,
}
let a_gray = 0;
let a_alpha = 5;

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
  draw_ob(obj4);
}

function draw_ob(ob) {
  fill(a_gray, a_alpha);
  circle(ob.x + 50, ob.y, 100);
  
  ob.y = (ob.y + 1) % (height + 0);
  
  a_gray = (a_gray + 0.5) % 255;
}

// https://editor.p5js.org/jht1493/sketches/dzRc5bh1h
// 2.2 - variable edge draw_obj y 4 height

// https://editor.p5js.org/jht1493/sketches/IDzmRpEKu
// 2.2 - variable edge draw_obj y 4

// https://editor.p5js.org/jht1493/sketches/G2sHkNwFo
// 2.2 - variable edge draw_obj 3 alpha 1 gray 0

// https://editor.p5js.org/jht1493/sketches/nFRMBGVaU
// 2.2 - variable edge draw_obj 3 alpha 1

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

