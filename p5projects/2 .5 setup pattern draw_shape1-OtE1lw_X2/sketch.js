function setup() {
  createCanvas(400, 200);
  background(255);
  fill('gray');

  console.log('row 1');
  draw_shape1(0, 0);
  draw_shape1(50, 0);
  draw_shape1(100, 0);

  console.log('row 2');
  draw_shape1(0, 100);
  draw_shape1(50, 100);

  console.log('setup done');
}

// Draw a circle on top of square
function draw_shape1(x, y) {
  console.log('draw_shape1 x=' + x + ' y=' + y)
  circle(x + 0, y + 25, 50)
  rect(x - 25, y + 50, 50, 50);
}

// https://editor.p5js.org/jht1493/sketches/OtE1lw_X2
// 2.5 setup pattern draw_shape1

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC