let a_obj = {
  x: 0,
  y: 30,
  d: 50,
  r: 250,
  g: 200,
  b: 200
};

let b_obj = {
  x: 0,
  y: 90,
  d: 50,
  r: 250,
  g: 200,
  b: 200
};

function setup() {
  createCanvas(400, 120);
  fill(250, 200, 200);
}

function draw() {
  background(218, 160, 221);
  
  fill(a_obj.r, a_obj.g, a_obj.b);
  ellipse(a_obj.x, a_obj.y, a_obj.d);
  a_obj.x = (a_obj.x + 1) % width;

  fill(b_obj.r, b_obj.g, b_obj.b);
  ellipse(b_obj.x, b_obj.y, b_obj.d);
  b_obj.x = (b_obj.x + 2) % width;
}

// https://editor.p5js.org/jht1493/sketches/1WLCUZfR4
// 2.4 object duo

// https://editor.p5js.org/jht1493/sketches/Eba5AyFPo
// 2.4 object literal

// JavaScript Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/beginners/p5js/2.3-objects.html
// https://youtu.be/-e5h4IGKZRY
// https://editor.p5js.org/codingtrain/sketches/6J5VPMbW
