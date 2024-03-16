let gray = [];

function setup() {
  createCanvas(240, 120);
  for (var i = 0; i < width; i++) {
    gray[i] = random(0, 255);
  }
  console.log('gray', gray);
}

function draw() {
  for (var i = 0; i < gray.length; i++) {
    stroke(gray[i]);
    line(i, 0, i, height);
  }
}

// https://editor.p5js.org/jht1493/sketches/BjH5BkIjj
// Ex_11_07 Filling an Array in a for Loop

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_07.js
