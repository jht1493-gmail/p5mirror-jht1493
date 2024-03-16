function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(0);
  for (let y = 0; y < height+45; y += 40) {
    fill(255, 140);
    ellipse(0, y, 40, 40);
  }
  for (let x = 0; x < width+45; x += 40) {
    fill(255, 140);
    ellipse(x, 0, 40, 40);
  }
}

// https://editor.p5js.org/jht1493/sketches/SemvF_Fht
// Ex_04_11 Rows and Columns

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_11.js
