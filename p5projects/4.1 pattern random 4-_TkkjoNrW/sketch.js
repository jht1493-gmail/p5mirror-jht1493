function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();

  let x = 0;
  let y = 0;
  let len = 50;
  
  while (y < height) {
    let ndeep = random([0,1,2,3,4]);
    let ideep = 0;
    while (ideep <= ndeep) {
      let offset = 4 + ideep*6;
      let nlen = len - 6 - ideep*12;
      // map(value, start1, stop1, start2, stop2)
      let gray = map(ideep,0,4,170,255);
      draw_shape1(x + offset, y + offset, nlen, gray);
      ideep = ideep + 1;
    }
    x = x + len;
    if (x > width) {
      x = 0;
      y = y + len;
    }
  }
}

function draw_shape1(x, y, len, gray) {
  console.log('x=' + x + ' y=' + y+' len='+len+' gray='+gray);
  if (len > 0) {
    fill(gray);
    rect(x, y, len, len);
  }
}

// https://editor.p5js.org/jht1493/sketches/_TkkjoNrW
// 4.1 pattern random 4

// https://editor.p5js.org/jht1493/sketches/vqy_zDixd
// 3.3. pattern while random 3

// https://editor.p5js.org/jht1493/sketches/44dcLkWoC
// 3.3. pattern while random 2

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