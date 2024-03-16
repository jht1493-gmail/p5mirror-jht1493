let objA = {
  x: 0,
  y: 30,
  d: 50,
  r: 250,
  g: 200,
  b: 200
};

let objB = {
  x: 0,
  y: 90,
  d: 50,
  r: 250,
  g: 200,
  b: 10
};

function setup() {
  createCanvas(400, 120);
  fill(250, 200, 200);
  create_ui();
}

function draw() {
  background(218, 160, 221);
  
  fill(objA.r, objA.g, objA.b);
  ellipse(objA.x, objA.y, objA.d);
  objA.x = (objA.x + 1) % width;

  fill(objB.r, objB.g, objB.b);
  ellipse(objB.x, objB.y, objB.d);
  objB.x = (objB.x + 2) % width;
  
  update_ui();
}

function create_ui() {
  createSpan().id('iax');
  createSpan().id('ibx');
}

function update_ui() {
  select('#iax').html('[objA.x='+objA.x+'] ')
  select('#ibx').html('[objB.x='+objB.x+'] ')
}
// https://editor.p5js.org/jht1493/sketches/Hc2w8A4XM
// 2.4 object duo ui

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
