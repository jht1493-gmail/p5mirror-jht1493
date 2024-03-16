let a_d = [10, 20, 30, 40, 30, 20, 10];
let a_colors = [
  [200, 0, 0, 50],
  [0, 200, 0, 50],
  [200, 200, 0, 50],
  [0, 0, 200, 50],
  [200, 0, 200, 50],
];

function setup() {
  createCanvas(400, 200);
  background(255);
  noStroke();

  let xloc = 0;
  let yloc = 20;
  let i = 0;
  while (yloc < height) {
    for (let i = 0; i < a_d.length; i++) {
      let c = a_colors[i % a_colors.length];
      let d = a_d[i];
      fill(c);
      circle(xloc + d / 2, yloc, d);
      xloc += d;
    }
    if (xloc > width) {
      xloc = 0;
      yloc += 40;
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/tNqn2o0M3
// 4.3 array for-loop 2

// https://editor.p5js.org/codingtrain/sketches/ZnPevren
// 4.3 array for-loop

// Arrays and Loops
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.2-arrays-loops.html
// https://youtu.be/RXWO3mFuW-I
// https://editor.p5js.org/codingtrain/sketches/ZnPevren
