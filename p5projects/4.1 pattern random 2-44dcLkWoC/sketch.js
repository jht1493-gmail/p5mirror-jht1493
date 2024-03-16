function setup() {
  createCanvas(400, 200);
  background(255);
  noFill();

  let x = 0;
  let y = 0;
  let len = 50;

  while (y < height) {
    if (random([0,1])) {
      draw_shape1(x, y, len);   
    }
    if (random([0,1])) {
      draw_shape2(x, y, len);   
    }
    x = x + len;
    if (x > width) {
      x = 0;
      y = y + len;
    }
  }
}

function draw_shape1(x, y, len) {
  console.log('rect x=' + x + ' y=' + y+' len='+len);
  rect(x, y, len, len);
}

function draw_shape2(x, y, len) {
  console.log('circle x=' + x + ' y=' + y+' len='+len);
  circle(x + len/2, y + len/2, len);
}


// https://editor.p5js.org/jht1493/sketches/44dcLkWoC
// 4.1 pattern random 2

// https://editor.p5js.org/jht1493/sketches/JM1F5XmJuJ
// 3.3. pattern while random

// https://editor.p5js.org/jht1493/sketches/cA_XRhYnI
// 3.3. pattern while drawShape1

// https://editor.p5js.org/jht1493/sketches/S9YsVD9gV
// 3.3. pattern while y

// https://editor.p5js.org/jht1493/sketches/QlAHBLxi8e
// 3.3. pattern while

// https://editor.p5js.org/jht1493/sketches/UA_D1rM5A
// 3.3. pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/D34BIqcoE
// 2.5 setup pattern draw_shape1 save

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