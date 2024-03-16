let x = [];

function setup() {
  createCanvas(240, 120);
  noStroke();
  fill(255, 200);
  // 300 * 0.4 == 120 the height of canvas
  for (var i = 0; i < 300; i++) {
    x[i] = random(-1000, 200);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < x.length; i++) {
    x[i] += 0.5;
    var y = i * 0.4;
    arc(x[i], y, 12, 12, 0.52, 5.76);
    // if (y > height) {
    //   console.log('i', i, 'y', y);
    // }
  }
}

// https://editor.p5js.org/jht1493/sketches/mJyTluseZ
// Ex_11_03 Arrays, Not Variables

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_03.js
