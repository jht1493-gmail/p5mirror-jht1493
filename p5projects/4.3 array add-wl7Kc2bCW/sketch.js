// Array of numbers
let a_d = [];

function setup() {
  createCanvas(400, 200);
  background(200);
  noStroke();
  // Fill the array with random numbers 10 or 40
  for (let i = 0; i < 5; i++) {
    a_d.push(random([10, 40]));
  }
  console.log('a_d', a_d)
  // Use the elements of a_d as diameters for circles
  // and fill the canvas with repeated pattern
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
      xloc = -yloc;
      yloc += 40;
    }
  }
}


// https://editor.p5js.org/jht1493/sketches/wl7Kc2bCW
// 4.3 array add

// https://editor.p5js.org/jht1493/sketches/d1C72NC0Q
// 4.3 array for-loop 4

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
