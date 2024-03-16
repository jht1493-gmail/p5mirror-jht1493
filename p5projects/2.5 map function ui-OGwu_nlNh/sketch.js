let r = 0;
let b = 225;

function setup() {
  createCanvas(600, 400);
  createSpan().id('imouseX');
  createSpan().id('ir');
  createSpan().id('ib');
}

function draw() {
  // background
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b);

  // ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
  
  select('#imouseX').html('[mouseX='+mouseX+'] ')
  select('#ir').html('[r='+round(r,2)+'] ')
  select('#ib').html('[b='+round(b,2)+'] ')
  // select('#ir').html('[r='+r+'] ')
  // select('#ib').html('[b='+b+'] ')
}

// https://editor.p5js.org/jht1493/sketches/OGwu_nlNh
// 2.5 map function ui

// The map() Function
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.4-map.html
// https://youtu.be/nicMAoW6u1g
// https://editor.p5js.org/codingtrain/sketches/yJqbGf71
