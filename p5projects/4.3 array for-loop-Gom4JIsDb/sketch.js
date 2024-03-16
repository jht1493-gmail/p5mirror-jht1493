let a_d = [10, 20, 40, 80, 160, 320];

function setup() {
  createCanvas(400, 200);
  background(200);
  noStroke();
  
  let xloc = 0;
  let yloc = height/2;
  for (let i = 0; i < a_d.length; i++) {
    fill(100);
    let d = a_d[i];
    circle(xloc+d/2, yloc, d);
    xloc += d;
  }
}

// https://editor.p5js.org/codingtrain/sketches/ZnPevren
// 4.3 array for-loop

// Arrays and Loops
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.2-arrays-loops.html
// https://youtu.be/RXWO3mFuW-I
// https://editor.p5js.org/codingtrain/sketches/ZnPevren

