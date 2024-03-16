let a_d = [10, 20, 30, 40, 30, 20];

function setup() {
  createCanvas(400, 200);
  background(200);
  noStroke();
  
  let xloc = 0;
  let yloc = 20;
  while (yloc < height) {
    for (let i = 0; i < a_d.length; i++) {
      fill(100);
      let d = a_d[i];
      circle(xloc + d / 2, yloc, d);
      xloc += d;
    }
    if (xloc > width) {
      xloc = 0;
      yloc += 40;
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/NZSWjB70Y
// 4.3 array for-loop 3

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
